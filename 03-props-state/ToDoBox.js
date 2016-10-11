/**
 * Created by User on 2016/10/10.
 */


class ToDoBox extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {id: 1, task: '给女神修电脑', complete: true},
                {id: 2, task: '陪女神逛逛逛', complete: false},
                {id: 3, task: '陪女神买买买', complete: false},
                {id: 4, task: '陪女神聊聊聊', complete: false},
                {id: 5, task: '给女神问晚安', complete: false}
            ]

        }
    }
    render(){
        return(
            <div className="well">
                <ToDoTitle title={this.props.title} />
                <ToDoLists tasks={this.state.tasks} />
                <ToDoForm />
            </div>
        );
    }
}


class ToDoTitle extends React.Component {

    constructor(props) {
        super(props);
    }
    render(){

        let title = this.props.title || 'todo';
        return(
            <h1 className="text-center">{title}</h1>
        )
    }
}

class ToDoLists extends React.Component {

    constructor(props) {
        super(props);
    }
    render(){

        let taskList = this.props.tasks.map(function(item,i){
           return(
               <ToDoItem key={i} task={item.task} completed={item.complete} />
           )
        });
        return(
            <ul className="list-group">
                {taskList}
                <ToDoFooter />
            </ul>
        )
    }
}

class ToDoItem extends React.Component {

    constructor(props) {
        super(props);
    }
    render(){

        var isCompleted = this.props.completed ;    // 是否完成

        var classnames = isCompleted ? 'list-group-item list-group-item-success' : 'list-group-item';

        return(
            <li className={classnames}>
                <input type="checkbox" checked={isCompleted}  className="pull-left" />
                {this.props.task}
                <div className="pull-right">
                    <button type="button" className="btn btn-xs"  ref="deleteBtn">删除</button>
                </div>
            </li>
        )
    }
}

class ToDoFooter extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <li className="list-group-item">1已完成 / 5总数</li>
        )
    }
}

class ToDoForm extends React.Component {

    constructor(props) {
        super(props);
    }
    render(){
        return(
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
        )
    }
}


ReactDOM.render(
    <ToDoBox title="狗蛋的觉悟" />,
    document.getElementById('todoBox')
);