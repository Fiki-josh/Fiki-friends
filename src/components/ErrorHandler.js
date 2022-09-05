import React, { Component} from "react";

class ErrorHandler extends Component {
    constructor(){
        super();
        this.state = {
            error: false
        }
    }
    componentDidCatch(err, info){
        this.setState({error: true})
    }
    render (){
        if(this.state.error){
            return <h1>Something went wrong</h1>
        }
        return <>{this.props.children}</>
    }
}

export default ErrorHandler