import React from "react";

export const Header = (props) =>
{
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="navbar navbar-nav">
                        <li><a href="#">{props.homelink}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};