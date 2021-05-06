module.exports = {
  //   parser: "postcss-less",
  plugins: [
    require("postcss-import")(),
    require("postcss-nested")
    //   require("postcss-url")({ url: "copy", useHash: true })
  ]
};
