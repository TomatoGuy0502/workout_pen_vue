module.exports = {
  publicPath: "./",
  pwa: {
    name: "Workout Pen",
    themeColor: "#5db075",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    manifestOptions: {
      short_name: "WorkoutPen",
      orientation: "portrait-primary"
    },
    workboxPluginMode: "GenerateSW",
    // workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc: "dev/sw.js"
      // include: ["/src/assets/logo.png"]
      // runtimeCaching: [
      //   {
      //     urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      //     handler: "CacheFirst",
      //     options: {
      //       cacheName: "images",
      //       expiration: {
      //         maxEntries: 10
      //       }
      //     }
      //   }
      // ]
    }
  }
};
