import React, { Component, Fragment } from 'react';
import { getCakes } from "../api/cake";
import { CakeList } from "./CakeList";

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }
    
    componentDidMount(){
        getCakes()
            .then(data => {
                this.setState({data: data});
            });
    }
    
    render(){
        const {
            data,
        } = this.state;
        
        return (
            <Fragment>
            {
                data && data.length > 0 &&
                <CakeList data={data} />
            }
            </Fragment>
        );
    }
    
}
