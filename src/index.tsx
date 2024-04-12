import { render } from 'preact';
import App from "./app"

render(<App />, document.getElementById("app")!);

if (import.meta.webpackHot) import.meta.webpackHot.accept()
