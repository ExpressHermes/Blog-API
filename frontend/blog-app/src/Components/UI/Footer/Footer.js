import Wrap from '../../../hoc/Wrap/Wrap';
import classes from './Footer.module.css';
import {Link} from 'react-router-dom';

const footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return(
        <Wrap>
            <div id="footer" className={classes["footer"]}>
                
                <div className={[classes["fpt"] , classes["fpt2"]].join(' ')}>
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/#">Link 1</Link></li>
                        <li><Link to="/#">Link 2</Link></li>
                        <li><Link to="/#">Link 3</Link></li>
                        <li><Link to="/#">Link 4</Link></li>
                    </ul>
                </div>

                <div className={[classes["fpt"] , classes["fpt3"]].join(' ')}>
                    <h2>Get to Know Us</h2>
                    <ul>
                        <li><Link to="/#">About Us</Link></li>
                        <li><Link to="/#">Privacy Policy</Link></li>
                        <li><Link to="/#">Copy Rights</Link></li>
                        <li><Link to="/#">Terms &amp; Conditions</Link></li>
                    </ul>
                </div>

                <div className={[classes["fpt"] , classes["fpt4"]].join(' ')}>
                    <h2>Contact Us</h2>
                    <ul>
                        <li><Link to="/#">Developer forum</Link></li>
                        <li>Liked us ? <a href="https://github.com/ExpressHermes/Blog-API">
                            Contribute
                        </a></li>
                        <li>Follow us on</li>
                    </ul>

                    <div >
                        <div className={classes["logoholdersm"]}>
                            <a href="https://www.facebook.com/">
                                <img className={classes["logo"]} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR60ksM1WEReXYvX91YFNooAqIUnuUYi7XI5g&usqp=CAU" />
                            </a>
                        </div>
                        <div className={classes["logoholdersm"]}>
                            <a href="https://www.instagram.com/">
                                <img className={classes["logo"]} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" />
                            </a>
                        </div>
                        <div className={classes["logoholdersm"]}>
                            <a href="https://www.github.com">
                                <img className={classes["logo"]} src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" />
                            </a>
                        </div>
                        <div className={classes["logoholdersm"]}>
                            <a href="https://twitter.com/">
                                <img className={classes["logo"]} src="https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes["copyRights"]}>
                &copy; ExpressHermes {year}
            </div>
        </Wrap>
    );
}

export default footer;