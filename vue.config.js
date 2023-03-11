const { defineConfig } = require("@vue/cli-service");

const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  chainWebpack: (config) => {
    // svg图标加载
    config.module
      .rule("svg")
      .exclude.add(path.join(__dirname, "./src/assets/icons/svg"))
      .end();

    config.module
      .rule("icons") // 定义一个名叫 icons 的规则
      .test(/\.svg$/) // 设置 icons 的匹配正则
      .include.add(path.join(__dirname, "./src/assets/icons/svg")) // 设置当前规则的作用目录，只在当前目录下才执行当前规则
      .end()
      .use("svg-sprite") // 指定一个名叫 svg-sprite 的 loader 配置
      .loader("svg-sprite-loader") // 该配置使用 svg-sprite-loader 作为处理 loader
      .options({
        // 该 svg-sprite-loader 的配置
        symbolId: "icon-[name]",
      })
      .end();
    config.module
      .rule("scss")
      .test(/\.scss$/)
      .oneOf("vue")
      .resourceQuery(/\?vue/)
      .use("px2rem-loader")
      .loader("px2rem-loader")
      .before("postcss-loader") // this makes it work.
      .options({ remUnit: 192, remPrecision: 8 })
      .end();

    // config.module
    //   .rule("css")
    //   .test(/\.css$/)
    //   .oneOf("vue")
    //   .resourceQuery(/\?vue/)
    //   .use("px2rem")
    //   .loader("px2rem-loader")
    //   .options({
    //     remUnit: 192, // 设计稿大小比例 / 10
    //     // remUnit: 192
    //   });
  },
});
