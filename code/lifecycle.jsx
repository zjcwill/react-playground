/**
 * lifecycle
 */
import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            bgColor: 'red'
        }
        console.log("constructor")
        this.handleCick = this.handleCick.bind(this);
    }
    componentWillMount(){
        console.log("componentWillMount")
    }
    handleCick(){
        console.log("handleCick")

    }
    /** 属性初始化  */
    // handleChange = ()=>{
    //     this.setState({
    //         bgColor:'green'
    //     })
    // }

    render(){
        return (
            <div style={{backgroundColor:this.state.bgColor}}>
                123
              <input type="button" onClick={this.handleCick} value="button"/>
            </div>
        )
    }

    componentDidMount(){
        this.setState({bgColor:'blue'})
    }

    
   
}

export default App;