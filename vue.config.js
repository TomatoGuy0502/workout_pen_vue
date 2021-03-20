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
      orientation: "portrait-primary",
      icons: [
        {
          src: "./img/icons/icon-72x72.png",
          type: "image/png",
          sizes: "72x72"
        },
        {
          src: "./img/icons/icon-96x96.png",
          type: "image/png",
          sizes: "96x96"
        },
        {
          src: "./img/icons/icon-128x128.png",
          type: "image/png",
          sizes: "128x128"
        },
        {
          src: "./img/icons/icon-144x144.png",
          type: "image/png",
          sizes: "144x144"
        },
        {
          src: "./img/icons/icon-152x152.png",
          type: "image/png",
          sizes: "152x152"
        },
        {
          src: "./img/icons/icon-192x192.png",
          type: "image/png",
          sizes: "192x192",
          purpose: "maskable any"
        },
        {
          src: "./img/icons/icon-384x384.png",
          type: "image/png",
          sizes: "384x384"
        },
        {
          src: "./img/icons/icon-512x512.png",
          type: "image/png",
          sizes: "512x512"
        }
      ]
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
