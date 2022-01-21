import { h } from 'preact';
import Styles from './styles.module.scss';

function PortfolioPreview({ project }) {
	return (
		<div className={Styles.card} style={`background-image:url(${project.img}); background-size: cover;`}>
			<div className="pa3">
				<a className={Styles.link} href={project.url}>
					<span className={Styles.linkInner}>{project.title}</span>
				</a>
			</div>
		</div>
	);
}

export default PortfolioPreview;
