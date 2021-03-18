import React, {Component} from 'react'
import classes from './Drawer.module.css'
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
    1,2,3
];

class Drawer extends  Component{

    renderLinks() {
        return links.map((links, key) => {
            return(
                <li
                    key={key}
                >
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>Link {links}</a>
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