module.exports = {
  es: true,
  extraChoreLocations: [
    "src/App.vue",
    "src/boot/**",
    "src/router/**",
    "src/routes.ts",
    "src/typings/**"
  ],
  readonlyIgnoreTypes: ["App", "InjectionKey", "SetupContext"]
};
