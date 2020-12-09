import Wrap from '../../../hoc/Wrap/Wrap';

import {Link} from 'react-router-dom';
import classes from './PageNotFound.module.css';

const pagenotfound = () => {
	return(
		<Wrap>
			<div className={classes["external"]}>
				<div className={classes["notFound"]}>
					<div className={classes["qMark"]}>?</div>
					<div className={classes["notFoundMsg"]}>
						Looks like you have gone out of way? Use the following links to get back on track or use the Navbar or Footer
						<div className={classes["notFoundLink"]}>
							<Link to="/">Home</Link>
						</div>
					</div>
				</div>
			</div>
		</Wrap>
	)
}

export default pagenotfound;