import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import pureRenderMixin from 'react-addons-pure-render-mixin';



/**
 * 加载页面组件
 */
import Home from '../pages/Home';
import About from '../pages/About';
import Api from '../pages/Api';
import Login from '../pages/Login';
import Register from '../pages/Register';
import New from '../pages/New';



/**
 * 加载公共组件
 */
import Header from '../components/Header'

import { getTopics } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        //  获取状态

    }
}
const mapDispatchToProps = (dispatch) => ({
    //获取 更新状态方法
    ...bindActionCreators({
        getTopics
    }, dispatch),
})
@connect(mapStateToProps, mapDispatchToProps)
export default class RouterMap extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate;
    }

    /**
     * 
     * 
     * @memberof RouterMap
     */
    componentDidMount = () => {
        this.props.getTopics('all');
    }
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/api' component={Api} />
                        <Route path='/new' component={New} />
                        <Route path='/login' component={Login} />
                        <Route path='/register' component={Register} />
                        <Route path='/about' component={About} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

