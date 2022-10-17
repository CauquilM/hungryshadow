module.exports = {
  pwa: {
    manifestOptions: {
      name: "Hungry Shadow",
      short_name: "Hungry Shadow",
      start_url: "./",
      display: "standalone",
      theme_color: "#000000",
    },

    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    iconPaths: {
      maskicon: null,
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      appleTouchIcon: "img/icons/apple-touch-icon-152x152.png",
      maskIcon: "img/icons/safari-pinned-tab.svg",
      msTileImage: "img/icons/msapplication-icon-144x144.png",
    },
    // configure the workbox plugin
    workboxPluginMode: "GenerateSW",
  },
  transpileDependencies: ["vuetify"],
};
