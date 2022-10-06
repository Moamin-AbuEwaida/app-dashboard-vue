const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/app-dashboard-vue/",
  transpileDependencies: ["quasar"],

  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },
});
