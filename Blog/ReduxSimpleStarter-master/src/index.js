/**
 * Created by PD on 04-06-2017.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {applyMiddleware,createStore} from 'redux';
import promise from 'redux-promise';
import {Provider} from 'react-redux';
import reducers from './reducers';
import PostIndex from './components/post_index';
import PostNew from './components/post_new';
import PostsShow from './components/posts_show';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDOM.render(
            <Provider store = {createStoreWithMiddleware(reducers)}>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/post/new" component={PostNew}/>
                            <Route path="/post/:id" component={PostsShow}/>
                            <Route path="/" component = {PostIndex}/>

                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
    ,document.querySelector('.container'));
