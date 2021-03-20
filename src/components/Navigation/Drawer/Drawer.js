import React, {Component} from 'react'
import classes from './Drawer.module.css'
import {NavLink} from "react-router-dom"
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
    {to: '/', label: 'Ro`yxat', exact: true},
    {to: '/auth', label: 'Ro`yxatdan o`tish', exact: false},
    {to: '/quiz-creator', label: 'Test yaratish', exact: false},
];

class Drawer extends  Component{

    clickHandler = () => {
        this.props.onClose()
    };

    renderLinks() {
        return links.map((links, key) => {
            return(
                <li
                    key={key}
                >
                    <NavLink
                    to={links.to}
                    exact={links.exact}
                    activeClassName={classes.active}
                    onClick={this.clickHandler}
                    >{links.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [classes.Drawer];

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }

        return (
            <React.Fragment>
            <nav className={cls.join(' ')}>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
                { this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
            </React.Fragment>
        )
    }
}

export default Drawer