module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        // 코드 검사를 할 기본적인 규칙
        // vue
        //'plugin:vue/vue3-essential', // Lv1
        'plugin:vue/vue3-strongly-recommended', //Lv2
        //'plugin:vue:vue/vue3-recommended', // Lv3
        // js
        'eslint:recommended'

    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
          }],
          "vue/html-self-closing": ["error", {
            "html": {
              "void": "always",
              "normal": "never",
              "component": "always"
            },
            "svg": "always",
            "math": "always"
          }]
          
    }
}