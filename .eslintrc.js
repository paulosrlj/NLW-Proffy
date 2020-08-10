module.exports = {
    env: {
        es2020: true,
        node: true,
        browser: true,
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'class-methods-use-this': 'off',
        camelcase: 'off',
        'no-param-reassign': 'off',
        'no-unused-vars': ['off', { argsIgnorePattern: 'next' }],
        'no-use-before-define': ['error', { functions: false }],
    },
};
