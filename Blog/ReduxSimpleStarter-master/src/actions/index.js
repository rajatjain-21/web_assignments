/**
 * Created by PD on 04-06-2017.
 */
import axios from 'axios';

const root_url = "http://reduxblog.herokuapp.com/api/";
const API_KEY = "?key=rajat_jain21";
export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const FETCH_POST = "FETCH_POST";
export const DELETE_POST = "DELETE_POST"
export function fetchPosts(){
    const response = axios.get(`${root_url}/posts${API_KEY}`);
    console.log(response);
    return({
        type:FETCH_POSTS,
        payload:response
    });

}

export function createPost(values,callback){
   const response =  axios.post(`${root_url}/posts${API_KEY}`,values).then(() =>callback());
   //here response will be passed as a promise only..lekin jb wo resolved ho jaega to callback pe jaega
   return (
       {
           type: CREATE_POST,
           payload: response
       }
   )
}
export function fetchPost(id){
    const response = axios.get(`${root_url}/posts/${id}${API_KEY}`);
    return(
        {
            type: FETCH_POST,
            payload: response
        }
    )
}
export function deletePost(id,callback){
    const response = axios.delete(`${root_url}/posts/${id}${API_KEY}`).then(() => callback());
    return(
        {
            type: DELETE_POST,
            payload: response
        }
    )
}
