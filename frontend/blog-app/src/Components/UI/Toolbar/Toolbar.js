import Navigation from './Navigation/Navigation';
import Wrap from '../../../hoc/Wrap/Wrap';

import classes from './Toolbar.module.css';

const toolbar = () => {
    return(
        <Wrap>
            <div className={classes["toolBar"]}>
                <div className={classes["logo"]}>Place Logo. Keep <br/>height of it 100%.</div>
                <Navigation/>
            </div>
        </Wrap>
    )
}

export default toolbar;