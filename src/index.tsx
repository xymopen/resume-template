import { render } from 'preact';
import { MDXProvider } from '@mdx-js/preact'
import App from "./app.mdx"

render(
	<MDXProvider>
		<App />
	</MDXProvider>,
	document.getElementById("app")!
);

if (import.meta.webpackHot) import.meta.webpackHot.accept()
