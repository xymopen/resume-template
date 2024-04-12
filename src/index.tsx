import { render } from 'preact';
import { MDXProvider } from '@mdx-js/preact'
import App from "./app.mdx"
import Layout from "./components/layout"

const components = {
	wrapper: Layout
}

render(
	<MDXProvider components={components}>
		<App />
	</MDXProvider>,
	document.getElementById("app")!
);

if (import.meta.webpackHot) import.meta.webpackHot.accept()
