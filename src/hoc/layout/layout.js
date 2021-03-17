import React, {Component} from "react";
import classes from './layout.module.css'


class layout extends Component{
    render() {
        return (
            <div className={classes.Layout}>
                <main>
                    { this.props.children }
                </main>
            </div>
        );
    }
}

export default layout;