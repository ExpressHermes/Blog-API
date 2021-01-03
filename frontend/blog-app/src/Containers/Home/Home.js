import React from 'react';
import { Link } from 'react-router-dom';
import Wrap from '../../hoc/Wrap/Wrap';
import classes from './Home.module.css';

class Home extends React.Component{
    render = () => (
        <Wrap>
            <div className={classes["helperText"]}>

                The following text is a sample text and also informative for the further development of this app.<br/><br/>

                This is the Home Page. <br/><br/>

                The nav bar is made responsive and for that many components are added.<br/><br/>

                Coming to the structure of the components:<br/><br/><br/>
                Till now Module.css files are used and are locally scoped, hence changin any styles in any files will not interfere with the things that are right now present.<br/><br/>
                Also each component has its folder with the component name as the folder name, inside it, there will be two files module.css file and the js file.<br/><br/>
                There are two big folders, Components and Containers. Components are such which does depend on the nearby components, such as the things that matter the UI local state and the functional components.<br/><br/>

                Components are such, they will manage the state of the whole app.<br/><br/>

                hoc are helper Higher Order Components. <br/>
                Wrap is one such component made for ease of returning multiple things in a component. It just wraps the chunks without help of a div.<br/><br/>


                New page added "Profile page" check here to go <Link to="/profile">Here</Link><br/><br/>

                --- Ravi Sri Ram Chowdary (@ravisrc)
                

            </div>
        </Wrap>
    )
}

export default Home;