import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { createCake } from "../api/cake";

export default class New extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: [],
            name: '',
            comment: '',
            imageUrl: '',
            yumFactor: '',
            submit: false,
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit(event){
        event.preventDefault();
        createCake(this.state)
            .then(data => {
                this.setState({submit: true});
            })
            .catch(error => {
                this.setState({error: error});
            });
    }
    
    onChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    render(){
        const {
            name,
            comment,
            imageUrl,
            yumFactor,
            submit,
            error
        } = this.state;
        
        return (
            <Fragment>
                <h2>New Cake</h2>
                {
                    !submit &&
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input 
                            name="name" 
                            id="name" 
                            value={name} 
                            onChange={this.onChange}
                        />
                        <p>{error.name}</p>
                        <label htmlFor="comment">
                            Comment
                        </label>
                        <input 
                            name="comment" 
                            id="comment" 
                            value={comment}
                            onChange={this.onChange}
                        />
                        <p>{error.comment}</p>
                        <label htmlFor="imageUrl">
                            Image URL
                        </label>
                        <input 
                            name="imageUrl" 
                            id="imageUrl" 
                            value={imageUrl}
                            onChange={this.onChange}
                        />
                        <p>{error.imageUrl}</p>
                        <label htmlFor="yumFactor">
                            Yum factor
                        </label>
                        <input 
                            name="yumFactor" 
                            id="yumFactor" 
                            value={yumFactor}
                            onChange={this.onChange}
                        />
                        <p>{error.yumFactor}</p>
                        <input 
                            type="submit"
                            value="Create cake"
                        />
                    </form>
                }
                {
                    submit &&
                    <Redirect to="/"/>                
                }
            </Fragment>
        );
    }
    
}
