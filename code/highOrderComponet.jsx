/**
 * 高阶组件
 * 
 * 获取localstorage
 */
import React,{Component} from 'react';

function withPersistentData(WrappedComponet){
    return class extends Comment {
        componentWillMount(){
            let data = localStorage.getItem("data");
            this.setState({data});
        }
        render(){
            return <WrappedComponet data={this.state.data} {...props}></WrappedComponet>
        }
    }
}