import * as classes from './Profile.module.css'
import React from 'react';
import Wrap from '../../hoc/Wrap/Wrap';

class Profile extends React.Component{
    render(){
        return(
            <Wrap>
                <div className={classes.profCard}>
                    <div className={classes.avatarHolder}>
                        <img className={classes.avatar} src="https://edtech.hct.ac.ae/files/2019/05/userimg.png" alt="avatar" title="avatar"/>
                    </div>
                    <div className={classes.username}>
                        @username
                    </div>
                    <div className={classes.fullname}>
                        Full Name Here
                    </div>
                    <div className={classes.email}>
                        email@email.email
                    </div>
                    <div className={classes.blogs}>
                        {14} Blogs
                    </div>
                    <div className={classes.followers}>
                        {26} Followers
                    </div>
                </div>

                <div className={classes.info}>
                    <div className={classes.secCover}>
                        <div className={classes.activities}>
                            <div className={classes.secHead}>
                                Recent Activity
                            </div>
                            <div className={classes.activity}>
                                <span className={classes.time}>18:25, 01 Jan 2021</span>
                                <span className={classes.acName}>You</span> commented on <span className={classes.acName}>ExpressHermes</span>'s blog <span className={classes.blogName}>A step towards Open source</span>
                                <div className={classes.comment}>
                                    After reading your blog, I too got interest towards Open Source and would like to contribute to this project in first.
                                </div>
                            </div>
                            <div className={classes.activity}>
                                <span className={classes.time}>15:49, 28 Dec 2020</span>
                                <span className={classes.acName}>ExpressHermes</span> commented on <span className={classes.acName}>your</span> blog <span className={classes.blogName}>My Tour</span>
                                <div className={classes.comment}>
                                    How much time did it took to go to there from your location?
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.secCover}>
                        <div className={classes.myBlogs}>
                            <div className={classes.secHead}>
                                My Blogs
                            </div>
                            <div className={classes.blog}>
                                <span className={classes.time}>25 Dec 2020</span>
                                <span className={classes.blogTitle}>My Tour</span>
                                <span className={classes.commentInfo}>58 Comments</span>
                                <span className={classes.likeInfo}>12569 Likes</span>
                            </div>
                            <div className={classes.blog}>
                                <span className={classes.time}>23 Nov 2020</span>
                                <span className={classes.blogTitle}>Pandemic Life</span>
                                <span className={classes.commentInfo}>159 Comments</span>
                                <span className={classes.likeInfo}>24875 Likes</span>
                            </div>
                            <div className={classes.blog}>
                                <span className={classes.time}>14 Oct 2020</span>
                                <span className={classes.blogTitle}>Open source contribution</span>
                                <span className={classes.commentInfo}>7856 Comments</span>
                                <span className={classes.likeInfo}>145896 Likes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrap>
        )
    }
}

export default Profile;
