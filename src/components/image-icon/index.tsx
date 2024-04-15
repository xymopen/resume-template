import "./index.css"

type ImageIconProps = { class?: string; src?: string }

export default function ImageIcon({ class: className, src }: ImageIconProps) {
	const style = src == null ? {} : { backgroundImage: `url(${src})` };
	return <span class={`icon ${className ?? ''}`} style={style} />;
}
