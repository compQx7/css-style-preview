module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    // 'standard-with-typescript',
    'plugin:react/recommended',
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  // 'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    // 'project': './tsconfig.json',
  },
  'plugins': [
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  'rules': {
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    // 使われていない変換を警告
    'no-unused-vars': 'warn',
    // console.logを警告
    'no-console': 'warn',
    // 1行の文字数は100文字まで
    'max-len': ['error', { 'code': 100 }],

    // JSX内のpropsのクオートはダブルクオートにする
    'jsx-quotes': ['error', 'prefer-double'],
    // 状態を持たないコンポーネントを推奨
    'react/prefer-stateless-function': 'warn',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    // JSX内で直接bindを使わない（bindを使うとパフォーマンスが悪い）
    'react/jsx-no-bind': 'error',

    'no-implicit-coercion': 'error',
    'prefer-template': 'error',

    // '@typescript-eslint/restrict-plus-operands': [
    //   'error',
    //   {
    //     'checkCompoundAssignments': true,
    //     'allowBoolean': false,
    //     'allowNullish': false,
    //     'allowNumberAndString': false,
    //     'allowRegExp': false,
    //     'allowAny': false,
    //   },
    // ],
    // '@typescript-eslint/strict-boolean-expressions': [
    //   'warn',
    //   { 'allowString': false, 'allowNumber': false, 'allowNullableObject': false }
    // ],
  }
};
