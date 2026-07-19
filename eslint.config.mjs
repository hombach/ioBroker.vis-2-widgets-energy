import config from '@iobroker/eslint-config';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
    ...config,
    {
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['*.mjs'],
                },
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        // The widget sources are React JSX (not TypeScript). The @iobroker base
        // config only targets .js/.ts/.tsx, so JSX files need their own block.
        files: ['src-widgets/src/**/*.jsx'],
        ...react.configs.flat.recommended,
        plugins: {
            react,
            'react-hooks': reactHooks,
        },
        languageOptions: {
            ...react.configs.flat.recommended.languageOptions,
            globals: {
                ...globals.browser,
            },
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        settings: { react: { version: 'detect' } },
        rules: {
            ...react.configs.flat.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/no-unescaped-entities': 'off',
            'react/display-name': 'off',
            // Prettier formatting is not enforced on the legacy JSX sources (CRLF
            // line endings, hand-formatted). Lint focuses on code quality only.
            'prettier/prettier': 'off',
            // Type-aware rules require real TypeScript types; the widget sources are
            // plain JSX, so these produce only false positives here.
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-floating-promises': 'off',
        },
    },
    {
        ignores: [
            'src-admin/**/*',
            'admin/**/*',
            'node_modules/**/*',
            'src-widgets/node_modules/**/*',
            'src-widgets/build/**/*',
            'widgets/**/*',
            'test/**/*',
            'build/**/*',
            'tasks.js',
            'tmp/**/*',
            '.**/*',
        ],
    },
    {
        // disable temporary the rule 'jsdoc/require-param' and enable 'jsdoc/require-jsdoc'
        rules: {
            'jsdoc/require-jsdoc': 'off',
            'jsdoc/require-param': 'off',

            '@typescript-eslint/no-require-imports': 'off',
        },
    },
];
