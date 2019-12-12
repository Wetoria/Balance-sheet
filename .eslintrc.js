module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    "import/no-extraneous-dependencies": [2, { "devDependencies": true }],
    // 'import/no-extraneous-dependencies': 0,
    'import/no-dynamic-require': 0, // todo 只在特定文件内可以用

    'array-callback-return': 0,
    'consistent-return': 0,
    'comma-dangle': [2, 'always-multiline'],
    'eol-last': 2, //文件以单一的换行符结束
    'eqeqeq': 0,
    'global-require': 0,
    'max-len': 0,
    'no-alert': 2, //禁止使用alert confirm prompt
    'no-class-assign': 2, //禁止给类赋值
    'no-cond-assign': 2, //禁止在条件表达式中使用赋值语句
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-consistent-return': 0,
    'no-continue': 0,
    'no-delete-var': 2, //不能对var声明的变量使用delete操作符
    'no-dupe-keys': 2, //在创建对象字面量时不允许键重复
    'no-duplicate-case': 2, //switch中的case标签不能重复
    'no-dupe-args': 2, //函数参数不能重复
    'no-empty': 2, //块语句中的内容不能为空
    'no-extra-boolean-cast': 2, //禁止不必要的bool转换
    'no-func-assign': 2, //禁止重复的函数声明
    'no-irregular-whitespace': 2, //不规则的空白不允许
    'no-lone-blocks': 2, //禁止不必要的嵌套块
    'no-nested-ternary': 0,
    'no-lonely-if': 0,
    'no-mixed-spaces-and-tabs': 2, //禁止混用tab和空格
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-redeclare': 2, //禁止重复声明变量
    'no-restricted-globals': 0,
    'no-restricted-syntax': 0,
    'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格
    'no-trailing-spaces': 2, //一行结束后面有空格就发出警告
    'no-undef': 2, //不能有未定义的变量
    'no-underscore-dangle': 2, //标识符不能以_开头或结尾
    'no-unreachable': 2, //不能有无法执行的代码
    'no-unused-vars': [2, { 'vars': 'all', 'args': 'after-used' }], //不能有声明后未被使用的变量或参数
    'no-use-before-define': 2, //未定义前不能使用
    'no-var': 2, //对var警告
    'quotes': [2, 'single'], //单引号
    'guard-for-in': 0,
    'prefer-destructuring': 0,
    'vue/valid-v-model': 0,
    'linebreak-style': [0, 'error', 'windows'], //允许windows开发环境
    'import/no-cycle': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
