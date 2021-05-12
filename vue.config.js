module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/style/global.sass";`,
      },
    },
  },
};
