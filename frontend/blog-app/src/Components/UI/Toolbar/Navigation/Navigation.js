import NavigationItems from './NavigationItems/NavigationItems';
import Wrap from '../../../../hoc/Wrap/Wrap';

import classes from './Navigation.module.css';

const Navigation = () => {
	return(
		<Wrap>
			<div className={classes["navBar"]}>
				<NavigationItems 
            		hide={() => {}}
				/>
			</div>
		</Wrap>
	)
}

export default Navigation;