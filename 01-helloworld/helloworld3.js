

class HelloWolrd extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>hello world</h1>
                <p>这是用ES6写的</p>
            </div>
        )
    }
}
// 获取dom节点
const targetEle = document.getElementById('app');
ReactDOM.render(
    <HelloWolrd />,
    targetEle
);
