/*!
 * ioBroker tasks
 * Date: 2025-01-23
 */
'use strict';

const adapterName = require('./package.json').name.replace('iobroker.', '');
const { deleteFoldersRecursive, npmInstall, buildReact, copyFiles } = require('@iobroker/build-tools');

const SRC = 'src-widgets/';
const src = `${__dirname}/${SRC}`;

// zrender (the echarts renderer) had a minification bug: it used isFunction before that
// function was defined. The workaround injects an inline definition in front of the first use.
//
// Detection is by file *content*, not by chunk file name: Vite/Rollup chunk names are not
// stable, and a name-based check ("installSVGRenderer") silently stopped matching anything
// after the Vite migration - the workaround was applied to no file at all.
const ZRENDER_IS_FUNCTION_BUG = /\w+\s*=\s*\w+\s*&&\s*(\w)\(\w+.bind\)/;

function copyAllFiles() {
    let zrenderPatched = 0;

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
                if (!fileName.endsWith('.js')) {
                    // returning undefined copies the file through unchanged
                    return undefined;
                }
                const code = fileData.toString();
                const match = code.match(ZRENDER_IS_FUNCTION_BUG);
                if (!match) {
                    return undefined;
                }
                zrenderPatched++;
                console.log(`Patched the zrender isFunction bug in "${fileName}"`);
                return code.replace(match[0], `${match[1]}=value=>typeof value === "function";${match[0]}`);
            },
        },
    );

    if (!zrenderPatched) {
        // Not an error: current echarts/zrender releases do not appear to emit the broken
        // pattern any more. Logged so that it stays visible instead of failing silently.
        console.log('zrender isFunction workaround matched no file - echarts seems not to need it any more.');
    }

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
