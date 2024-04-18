// Generated using webpack-cli https://github.com/webpack/webpack-cli

import { resolve as pathResolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshTransformer from 'react-refresh-typescript'
import PreactRefreshPlugin from "@prefresh/webpack";

const resolve = pathResolve.bind(undefined, import.meta.dirname);

const isProduction = process.env.NODE_ENV == "production";

/** @type {import('webpack').Configuration & { devServer: import('webpack-dev-server').Configuration }} */
const config = {
	entry: "./src/index.tsx",
	output: {
		path: resolve("dist"),
	},
	devServer: {
		open: true,
		host: "localhost",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "index.html",
		}),

		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
		// @ts-ignore
		new PreactRefreshPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/i,
				use: [
					{
						loader: "ts-loader",
						options: {
							transpileOnly: true,
							getCustomTransformers: () => ({
								before: [ReactRefreshTransformer()]
							}),
						},
					},
				],
				exclude: [/([/\\])node_modules\1/],
			},
			{
				test: /\.mdx?$/,
				use: [
					{
						loader: "ts-loader",
						options: {
							transpileOnly: true,
							appendTsxSuffixTo: ['\\.mdx?$'],
						},
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
				type: "asset",
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", ".mdx", ".md"],
		alias: {
			"assets": resolve("assets"),
			"components": resolve("src/components"),
			// ts-loader would produce `preact*//jsx-runtime` instead of `preact/jsx-runtime`
			"preact*/": "preact",
		}
	},
	experiments: {
		css: true,
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
