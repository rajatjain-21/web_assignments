/**
 * Created by PD on 04-06-2017.
 */
import {FETCH_POSTS,FETCH_POST,DELETE_POST} from '../actions/index';
import _ from 'lodash';
export default function(state = {},action){

    switch(action.type){
        case FETCH_POSTS :
            return _.mapKeys(action.payload.data,'id');
        case FETCH_POST:
            /*const post = action.payload.data;
            const newState = {...state};
            newState[post.id] = post;
            return newState;*/ //Sexy ES6 way
            return {...state,[action.payload.data.id]:action.payload.data};
        case DELETE_POST :
            return (_.omit(state,action.payload));
        default :
            return state;
    }
}

//_.mapKeys(posts,'id')