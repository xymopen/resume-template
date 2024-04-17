import "./index.css"

type ImageIconProps = { src?: string }

export default function ImageIcon({ src }: ImageIconProps) {
	return <span class="icon"><img src={src} /></span>;
}
