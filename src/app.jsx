import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import RouterMap from './routers/index';
import { getTopics,SaveTopic } from './actions';
import RouterMap from './router/index.jsx';
import store from './store';



render(
    <Provider store={store}>
        <RouterMap />
    </Provider>, document.getElementById('root')
)


