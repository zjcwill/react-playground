import React from 'react';

class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state  = {
            val:0
        }
        this.addVal = this.addVal.bind(this)
    }
    addVal(){
        this.setState({val:this.state.val+1});
    }
    componentDidMount(){
        this.interval = setInterval(this.addVal,1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return(<span>{this.state.val}</span>)
    }
}

export default Timer;