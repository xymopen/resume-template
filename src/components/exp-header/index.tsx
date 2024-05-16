import "./index.css"

export function OrgHeader({ logo, title, duration, children }) {
	return <div className="exp-item">
		{logo && <img class="exp-logo" src={logo} />}
		<div className="exp-right">
			<h3>{title}</h3>
			{children}
		</div>
		{duration && <p className="exp-duration">{duration}</p>}
	</div>
}

export function ExpHeader({ duration, children }) {
	return <div className="exp-item">
		<div className="exp-right">
			{children}
		</div>
		{duration && <p className="exp-duration">{duration}</p>}
	</div>
}
