module.exports = {
	//   parser: "postcss-less",
	plugins: [
		require("cssnano")({
			preset: "default",
		}),
		require("postcss-import")(),
		require("postcss-nested"),
		//   require("postcss-url")({ url: "copy", useHash: true })
	],
};
