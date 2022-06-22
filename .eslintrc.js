module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['plugin:vue/vue3-essential', '@vue/standard', 'eslint:recommended'],

  parserOptions: {
    parser: '@babel/eslint-parser',
  },

  rules: {
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: ['warn', 'single'],
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    semi: ['warn', 'always'],
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-unused-properties': [
      'warn',
      {
        groups: ['props', 'methods', 'data', 'computed', 'setup'],
        deepData: true,
        ignorePublicMembers: false,
      },
    ],
    'vue/no-unused-refs': 'warn',
    'vue/no-undef-properties': 'warn',
    'vue/no-undef-components': [
      'warn',
      { ignorePatterns: ['(base|router)(\\-\\w+)+'] },
    ],
  },
};
