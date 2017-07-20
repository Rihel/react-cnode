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
// import page1 from '../pages/page1';

/**
 * 加载公共组件
 */
// import component from '../components/component'

import { getTopics } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        //  获取状态
        indexData: state.indexData
    }
}
const mapDispatchToProps = (dispatch) => ({
    //获取 更新状态方法
    ...bindActionCreators({
        /**
         * 写所有的方法，包括异步
         */

    }, dispatch),
})
@connect(mapStateToProps, mapDispatchToProps)
export default class RouterMap extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate;
    }

    componentDidMount = () => {

    }
    render() {
        return (
            <Router>
                <div>
                    <Switch>

                    </Switch>
                </div>
            </Router>
        );
    }
}

