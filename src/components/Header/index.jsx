import React, { Component } from 'react';
import pureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router-dom';

import './style.scss'

export default class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate;
    }
    componentDidMount = () => {

    }
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="logo">
                        <img src={require('./logo.svg')} alt="" />
                        <input type="text" />
                    </div>
                    <ul className="nav">
                        <li>
                            <Link to="/">首页
                            </Link>
                        </li>
                        <li>
                            <Link to="/new">新手入门
                            </Link>
                        </li>
                        <li>
                            <Link to="/api">API
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">关于
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">注册
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">登录
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

