import { PropsWithChildren } from "preact/compat";

export default function Layout(props: PropsWithChildren) {
	return <div>
		{props.children}
	</div>
}
