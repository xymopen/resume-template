import { PropsWithChildren } from "preact/compat";
import "./index.css"

export default function Layout(props: PropsWithChildren) {
	return <main>
		{props.children}
	</main>
}
