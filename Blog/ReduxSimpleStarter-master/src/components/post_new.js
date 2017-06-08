/**
 * Created by PD on 04-06-2017.
 */
import React,{Component} from 'react';
import {reduxForm,Field} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions/index';
class PostNew extends Component{

    renderField(field){
        const className = `form-group ${field.meta.touched && field.meta.error?'has-danger':''}`
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type='text'
                    {...field.input}

                />
                <div className="text-help">
                    {field.meta.touched?field.meta.error:''}
                </div>
            </div>
        )
    }
    onSubmit(values){
        this.props.createPost(values,() => {
            this.props.history.push('/')
        });
    }
    render(){
        return(      //Once you are done with your onSubmit call me, says the callback of handleSubmit
           <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
               <Field
                    name='title'
                    label='Title'
                    component={this.renderField}
               />
               <Field
                   name='categories'
                   label='Categories'
                   component={this.renderField}
               />
               <Field
                   name='content'
                   label='Content'
                   component={this.renderField}
               />
               <button type='submit' className="btn btn-primary">Save</button>
               <Link to="/" className="btn btn-danger">Cancel</Link>
           </form>
);
}
}

function validate(values){
    const errors = {};
    if(!(values.title) || values.title.length< 3){
        errors.title="Please enter a valid title";

    }
    if(!values.categories){
        errors.categories="Please enter a valid category";

    }
    if(!values.content){
        errors.content="Please enter a valid content";

    }
    return errors;
}

export default reduxForm({     //reduxform connected to our component
    validate:validate,
    form: 'PostNewForm'
})(connect(null,{createPost})(PostNew));




