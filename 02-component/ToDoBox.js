/**
 * Created by User on 2016/10/10.
 */
    
class ToDoBox extends React.Component{

    constructor(props){
        super(props);
    }
    render(){

        return(
            <div className="well">

                <h1 className="text-center">React Todo </h1>

                <ul className="list-group">


                  <li className="list-group-item list-group-item-success">
                      <input type="checkbox" checked="true"  className="pull-left" />
                      <s>给女神修电脑</s>
                      <div className="pull-right">
                          <button type="button" className="btn btn-xs"  ref="deleteBtn">删除</button>
                      </div>
                  </li>

                  <li className="list-group-item ">
                        <input  type="checkbox" className="pull-left" />
                        陪女神逛逛逛
                        <div className="pull-right">
                            <button type="button" className="btn btn-xs"  ref="deleteBtn">删除</button>
                        </div>
                  </li>

                  <li className="list-group-item ">
                        <input  type="checkbox" className="pull-left" />
                        陪女神买买买
                        <div className="pull-right">
                            <button type="button" className="btn btn-xs"  ref="deleteBtn">删除</button>
                        </div>
                  </li>

                    <li className="list-group-item ">
                        <input  type="checkbox" className="pull-left" />
                        配女神聊聊聊
                        <div className="pull-right">
                            <button type="button" className="btn btn-xs"  ref="deleteBtn">删除</button>
                        </div>
                    </li>
                    <li className="list-group-item ">
                        <input type="checkbox" className="pull-left" />
                        给女神问晚安
                        <div className="pull-right">
                            <button type="button" className="btn btn-xs"  ref="deleteBtn">删除</button>
                        </div>
                    </li>

                  <li className="list-group-item">1已完成 / 5总数</li>


                </ul>

                <div>
                    <hr />
                    <form className="form-horizontal">
                        <div className="form-group">

                                <div className="col-md-9">
                                    <input type="text" id="task" ref="task" className="form-control" placeholder="你想做点什么"></input>
                                </div>
                                <div className="col-md-2">
                                    <input type="submit" value="Save Task" className="btn btn-primary" />
                                </div>

                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

ReactDOM.render(
    <ToDoBox />,
    document.getElementById('todoBox')
);