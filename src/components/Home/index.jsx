import React, { Component } from 'react';
import pureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router-dom';

import './style.scss'
/**
 * 加载页面组件
 */
// import page1 from '../pages/page1';

/**
 * 加载公共组件
 */
// import component from '../components/component'



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
export default class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate;
    }
    componentDidMount = () => {

    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

