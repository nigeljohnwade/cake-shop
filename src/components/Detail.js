import React, { Component } from "react";
import { getCake } from "../api/cake";

export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {data : null};
    }
    
    componentDidMount(){
        getCake(this.props.match.params.id)
            .then(data => {
                this.setState({data: data});
            });
    }
    
    render(){
        return (
            this.state.data &&
            <div>
                <p>{this.state.data.name}</p>
                <p>{this.state.data.comment}</p>
                <p>Yum factor: {this.state.data.yumFactor}</p>
                <img alt="" src={this.state.data.imageUrl}/>
            </div>
        );
    }
}
