import ImageIcon from "components/image-icon"
import "./index.css"

export default function Header() {
	return <div class="basic">
		<img class="basic-photo" {...{/* src={new URL("path/to/your/photo", import.meta.url).toString()} */}} width="120" height="120" />
		<div class="basic-info">
			<p class="basic-name">Your name</p>
			<p>
				<span class="basic-job">Your job title</span>
			</p>
			<p class="basic-self">
				Brief of you
			</p>
			<p class="basic-comm">
				<span class="basic-email">
					<ImageIcon class="basic-comm_icon" src={(new URL('weui-icon/src/assets/outlined/email.svg', import.meta.url)).toString()} />
					<a href="mailto:you@contoso.com"><span>you@contoso.com</span></a>
				</span>
			</p>
		</div>
	</div>
}
