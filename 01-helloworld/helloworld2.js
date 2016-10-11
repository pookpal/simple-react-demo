



/***
 *  在dom节点渲染
 *  在js中用类似xml的方式写html的语法叫做jsx
 *  ReactDOM类库：react-dom，在浏览器端渲染
 *  ReactDOMServer类库：react-dom-server，在服务器端渲染，同构应用SEO友好性能好
 * */
// 获取dom节点
var targetEle = document.getElementById('app');
ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <p>这是我写的react hello world</p>
    </div> ,
    targetEle
);
