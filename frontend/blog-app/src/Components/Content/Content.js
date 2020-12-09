import Wrap from '../../hoc/Wrap/Wrap';
import Toolbar from '../UI/Toolbar/Toolbar';
import Footer from '../UI/Footer/Footer';

import classes from './Content.module.css';

const content = (props) => {
    return(
        <Wrap>
            <Toolbar/>
            <div className={classes["content"]}>
                {props.children}
            </div>
            <Footer/>
        </Wrap>
    )
}

export default content;