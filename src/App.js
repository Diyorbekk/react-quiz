import './App.css';
import Layout from './hoc/layout/layout'
import React, {Component} from "react";
import Quiz from './containers/Quiz/Quiz'

class App extends Component{
    render() {
        return (
            <Layout>
                <Quiz/>
            </Layout>
        );
    }
}

export default App;
