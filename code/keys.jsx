import React,{ Component } from "React";

class Keys extends Component {
    constructor(){
        super();
        this.state = {
            data:[{id:1,name: '张三'}, {id:2, name: '李四'}, {id: 2, name: "王五"}]
        }
    }
    componentWillMount(){

    }
    render(){
        return (
            <div>
                <ul>
                    {this.state.data.map((item)=>{
                        return ( <li key={item.id}>{item.name}</li>)
                    })}
                </ul>
                <ul>
                    {[<div>123</div>,<div>321</div>]}
                </ul>
            </div>
        )
    }
    componentDidMount(){

    }
    componentWillReceiveProps(){

    }
    shouldComponentUpdate(){

    }
    componentWillUpdate(){

    }
    componentDidUpdate(){

    }
}

export default Keys;