import React from 'react';
import Navigation from './Navigation/Navigation';
import Wrap from '../../../hoc/Wrap/Wrap';
import HamBurger from './HamBurger/HamBurger';
import Backdrop from '../Backdrop/Backdrop';
import SideDrawer from '../SideDrawer/SideDrawer';

import classes from './Toolbar.module.css';

class ToolBar extends React.Component{
    state = {
        isOpened: false
    };
    render(){

        return(
            <Wrap>
                <div className={classes["toolBar"]}>
                    <div className={classes["logo"]}>
                        <img src="/android-chrome-192x192.png" alt="logo"/>
                    </div>
                    <Navigation/>
                    <HamBurger 
                        status={this.state.isOpened}
                        clicked={() => {
                            this.setState((prevState) => {
                                return {
                                    isOpened: !prevState.isOpened,
                                };
                            });
                        }}
                    />
                    <Backdrop 
                        show={this.state.isOpened}
                        clicked={() => {
                           this.setState((prevState) => {
                              return {
                                 isOpened: false,
                              };
                           });
                        }}    
                    />
                    <SideDrawer
                        isOpened={this.state.isOpened}
                        hide={() => {
                            this.setState((prevState) => {
                                return {
                                    isOpened: false,
                                };
                            });
                        }}
                    />
                </div>
            </Wrap>
        )
    }
}

export default ToolBar;