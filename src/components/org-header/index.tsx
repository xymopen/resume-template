import "./index.css"

function OrgHeader({ logo, title, duration, children }) {
	return <div className="exp-item">
		{logo && <img src={logo} />}
		<div className="exp-right">
			<h3>{title}</h3>
			{children}
		</div>
		{duration && <p className="exp-duration">{duration}</p>}
	</div>
}

export default OrgHeader
