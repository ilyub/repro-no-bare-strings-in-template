module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  overrides: [
    {
      files: ["./src/App.vue", "./src/router/index.ts"],
      rules: {
        "import/no-extraneous-dependencies": [
          "warn",
          {
            bundledDependencies: false,
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: true
          }
        ],
        "vue/no-bare-strings-in-template": "off"
      }
    }
  ],
  rules: {
    "vue/no-bare-strings-in-template": [
      "warn",
      {
        allowlist: [
          "(",
          ")",
          "*",
          "+",
          ",",
          "-",
          ".",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          ":",
          "&ndash;"
        ],
        attributes: {
          "/.+/": [
            "aria-label",
            "aria-placeholder",
            "aria-roledescription",
            "aria-valuetext",
            "label",
            "title"
          ],
          "img": ["alt"],
          "input": ["placeholder"]
        },
        directives: ["v-text"]
      }
    ]
  }
};
