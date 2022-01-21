import { h } from 'preact';
import Styles from './styles.module.scss';

function Nav() {
	return (
		<nav className={Styles.nav}>
			<a className={Styles.logolink} href="/">
				<div className={Styles.monogram}>Vera Zhong</div>
			</a>
			<a className={Styles.link} href="/">
				Home
			</a>
			<a className={Styles.link} href="/#projects">
				Projects
			</a>
			<a className={Styles.link} href="/about">
				About
			</a>
		</nav>
	);
}
export default Nav;
