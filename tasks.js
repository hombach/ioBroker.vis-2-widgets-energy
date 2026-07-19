/*!
 * ioBroker tasks
 * Date: 2025-01-23
 */
'use strict';

const adapterName = require('./package.json').name.replace('iobroker.', '');
const { deleteFoldersRecursive, npmInstall, buildReact, copyFiles } = require('@iobroker/build-tools');

const SRC = 'src-widgets/';
const src = `${__dirname}/${SRC}`;

function copyAllFiles() {
    // Copy the whole Vite build output, except the dev entry html and the federation manifest
    copyFiles(
        [
            `${SRC}build/**/*`,
            `!${SRC}build/index.html`,
            `!${SRC}build/mf-manifest.json`,
            `!${SRC}build/mf-stats.json`,
            `!${SRC}build/customWidgets.ssr.js`,
        ],
        `widgets/${adapterName}/`,
        {
            process: (fileData, fileName) => {
                if (fileName.includes('installSVGRenderer')) {
                    // zrender (echarts renderer) has a minification bug: it uses isFunction
                    // before it is defined. Patch the minified code to define it inline.
                    fileData = fileData.toString();
                    const match = fileData.match(/\w+\s*=\s*\w+\s*&&\s*(\w)\(\w+.bind\)/);
                    if (match) {
                        fileData = fileData.replace(
                            match[0],
                            `${match[1]}=value=>typeof value === "function";${match[0]}`,
                        );
                    }
                    return fileData;
                }
            },
        },
    );

    // Keep the standalone i18n files alongside the widgets
    copyFiles([`${SRC}src/i18n/*.json`], `widgets/${adapterName}/i18n`);
}

if (process.argv.includes('--widget-0-clean')) {
    deleteFoldersRecursive(`${src}build`);
    deleteFoldersRecursive(`${__dirname}/widgets`);
} else if (process.argv.includes('--widget-1-npm')) {
    npmInstall(src).catch(e => {
        console.error(`Cannot install npm modules: ${e}`);
        process.exit(2);
    });
} else if (process.argv.includes('--widget-2-compile')) {
    buildReact(src, { rootDir: __dirname, vite: true }).catch(e => {
        console.error(`Cannot build: ${e}`);
        process.exit(2);
    });
} else if (process.argv.includes('--widget-3-copy')) {
    copyAllFiles();
} else {
    deleteFoldersRecursive(`${src}build`);
    deleteFoldersRecursive(`${__dirname}/widgets`);
    npmInstall(src)
        .then(() => buildReact(src, { rootDir: __dirname, vite: true }))
        .then(() => copyAllFiles())
        .catch(e => {
            console.error(`Cannot install npm modules: ${e}`);
            process.exit(2);
        });
}
