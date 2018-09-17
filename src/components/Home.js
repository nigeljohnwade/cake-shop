import React, { Component, Fragment } from 'react';
import { getCakes } from "../api/cake";
import { CakeList } from "./CakeList";
import { Message } from './Message';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            message: props.location && props.location.state && props.location.state.message ? props.location.state.message : null,
        }
        this.clearMessageHandler = this.clearMessageHandler.bind(this);
    }
    
    componentDidMount(){
        getCakes()
            .then(data => {
                this.setState({data: data});
            });
    }
    
    clearMessageHandler(){
        this.setState({message: null})
    }
    
    render(){
        const {
            data,
            message,
        } = this.state;
        
        return (
            <Fragment>
                {
                    message &&
                    <Message 
                        displayText={message}
                        clearMessageHandler={this.clearMessageHandler}
                    />
                        
                }
                {
                    data && data.length > 0 &&
                    <CakeList data={data} />
                }
            </Fragment>
        );
    }
    
}
