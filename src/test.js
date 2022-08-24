
// import React from "react";
// const A = React.createClass({
//     render() {
//         return(
//             <div>hi</div>
//         )
//     },
// })
// //由于ES5不支持class,才会有这种方式


import React from "react";
class B extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user:{
                name:'jam',
                age:18
            }
        }
    }
    render(){
        return(
            <div>hi</div>
        )
    }
}
export default B;
// // extends、constructor、super 强行记忆，别问为什么


// class B extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){}
// }
// 要么不初始化，即不写constructor
// 要么初始化，且必须写全套(不写super直接报错)
// 这么做了之后，this.props就是外部数据对象的地址了