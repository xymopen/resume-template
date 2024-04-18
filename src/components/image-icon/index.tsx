import { JSX } from "preact/jsx-runtime";
import "./index.css"

export default function ImageIcon(props: JSX.HTMLAttributes<HTMLImageElement>) {
	const { id, class: classProp, className: classNameProp, style, ...imgProps } = props;
	return <span id={id} class={`icon ${classProp ?? classNameProp ?? ''}`} style={style}><img {...imgProps} /></span>;
}
