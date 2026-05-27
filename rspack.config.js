import { resolve as pathResolve } from "path";
import { readFileSync } from "fs";
import rspack from "@rspack/core";
import PreactRefreshPlugin from "@rspack/plugin-preact-refresh"

const resolve = pathResolve.bind(undefined, import.meta.dirname);

const isProduction = process.env.NODE_ENV === "production";

const SwcConfig = JSON.parse(readFileSync(resolve(".swcrc"), 'utf8'))

/** @type {import('@rspack/cli').Configuration} */
const config = {
	entry: "./src/index.tsx",
	plugins: [
		new rspack.HtmlRspackPlugin({
			template: "index.html",
		}),
		new PreactRefreshPlugin({
			include: /\.(tsx?|mdx?)$/i,
			// The default somehow breaks resolution of `jsx-dev-runtime`
			preactPath: 'preact',
		}),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/i,
				use: [
					{
						loader: "builtin:swc-loader",
						options: SwcConfig,
					}
				],
				exclude: [/([/\\])node_modules\1/],
			},
			{
				test: /\.mdx?$/,
				use: [
					{
						loader: "builtin:swc-loader",
						options: SwcConfig,
					},
					{
						loader: "@mdx-js/loader",
						/** @type {import("@mdx-js/loader").Options} */
						options: {
							elementAttributeNameCase: "html",
							jsx: true,
							jsxImportSource: "preact",
							providerImportSource: "@mdx-js/preact",
							stylePropertyNameCase: "dom",
						}
					}
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset"
			},
			{
				test: /\.css$/,
				type: 'css/auto'
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", ".mdx", ".md"],
		alias: {
			"assets": resolve("assets"),
			"components": resolve("src/components"),
		}
	}
};

export default () => {
	if (isProduction) {
		config.mode = "production";
		config.devtool = false
	} else {
		config.mode = "development";
		config.devtool = "source-map"
	}
	return config;
};
