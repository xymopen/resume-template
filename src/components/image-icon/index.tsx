import "./index.css"

type ImageIconProps = { src?: string }

export default function ImageIcon({ src }: ImageIconProps) {
	return <span class="icon" style={{ backgroundImage: `url(${src})` }} />;
}
