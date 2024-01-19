import React from 'react';
import { LeftMenu, RightMenu } from './index'
import { Link } from 'react-router-dom'

export function NavBar(props) {
    return (
        <nav className="menuBar">
            <div className="logo">
                <Link to="/">Logo</Link>
            </div>
            <div className="menuCon">
                <div className="leftMenu">
                    <LeftMenu items={props.leftMenus}/>
                </div>
                <div className="rightMenu">
                    <RightMenu items={props.rightMenus} />
                </div>
            </div>
        </nav>
    );
}