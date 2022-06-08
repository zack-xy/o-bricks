module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    "semi": ["error","never"], // 不使用分号结尾
    "no-trailing-spaces": 1, // 一行结束后不能有空格
    "no-unreachable": 2, // 不能有无法执行的代码
    "space-after-keywords": [0, "always"], // 关键字后面有空格
    "comma-spacing": 0, // 逗号前后空格
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
