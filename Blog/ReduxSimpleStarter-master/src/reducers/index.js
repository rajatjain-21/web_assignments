/**
 * Created by PD on 04-06-2017.
 */
import {combineReducers} from 'redux';
import PostReducer from './reducers_posts';
import {reducer as formReducer} from 'redux-form';      //redux-form will give us its own reducer so that we don't have to write the reducer code again
const rootReducer = combineReducers(
    {
        post:PostReducer,
        form: formReducer                   //ab us reducer ko combine to krna pdega na..itna to kr lo yaar
    }
);
export default rootReducer;