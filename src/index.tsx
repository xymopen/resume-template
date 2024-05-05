import { render } from 'preact';
import { MDXProvider } from '@mdx-js/preact'
import App from "./app"
import "@csstools/normalize.css"
import "./styles/markdown.css"
import "./styles/paged.css"
import "./index.css"

render(
	<MDXProvider>
		<App />
	</MDXProvider>,
	document.getElementById("app")!
);

if (import.meta.webpackHot) import.meta.webpackHot.accept()
