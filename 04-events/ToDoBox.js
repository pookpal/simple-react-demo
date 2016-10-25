/**
 * Created by User on 2016/10/10.
 */


class ToDoBox extends React.Component{

    constructor(props) {

        super(props);

        this.state = {
            tasks: []
        };

        this.toggleTaskCompletedStatus = this.toggleTaskCompletedStatus.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    // 切换任务完成状态
    toggleTaskCompletedStatus(task_id){

        let tasks = this.state.tasks;

        for(let i in tasks ){
            if(tasks[i]['id'] == task_id){
                tasks[i].complete = tasks[i].complete === true ? false : true;
                break;
            }
        }

        this.setState({tasks:tasks});

    }

    // 删除任务
    deleteTask(task_id){

        let tasks = this.state.tasks;

        let newTasks = tasks.filter(function(item){

            return item.id != task_id;

        });

        this.setState({tasks:newTasks});
    }

    // 增加新的任务
    addTask(task){
        let tasks = this.state.tasks;

        let item = {
            id:new Date(),
            task: task,
            complete:false,
        };
        tasks.push(item);
        this.setState({tasks:tasks});
    }



    render(){
        // 统计部分
        let staticCount = {
            totalCount:this.state.tasks.length,
            completedCount: this.state.tasks.filter(function(item){
                return item.complete == true;
            }).length
        };

        return(
            <div className="well">
                <ToDoTitle title={this.props.title} />

                <ToDoLists
                    tasks={this.state.tasks}
                    footerParam = {staticCount}
                    toggleTaskCompletedStatus = {this.toggleTaskCompletedStatus.bind(this)}
                    deleteTask = {this.deleteTask.bind(this)}
                />
                <ToDoForm
                    addTask = {this.addTask.bind(this)}
                />
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

        let { toggleTaskCompletedStatus,deleteTask } = this.props;


        let taskList = this.props.tasks.map(function(item,i){
           return(
               <ToDoItem
                   key={i}
                   item={item}
                   toggleTaskCompletedStatus={toggleTaskCompletedStatus}
                   deleteTask = {deleteTask}
               />
           )
        });

        let footerParams = this.props.footerParam;

        return(
            <ul className="list-group">
                {taskList}
                <ToDoFooter params = {footerParams}/>
            </ul>
        )
    }
}

class ToDoItem extends React.Component {

    constructor(props) {
        super(props);
        this.toggleComplete = this.toggleComplete.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);

    }

    toggleComplete(task_id){
        this.props.toggleTaskCompletedStatus(task_id);
    }
    handleDeleteItem(task_id){
        this.props.deleteTask(task_id);
    }



    render(){

        var item = this.props.item;

        var classnames='list-group-item';

        var task = item.task;
        if(item.complete){
            classnames +=' list-group-item-success';
            task = <s>{item.task}</s>;
        }

        return(
            <li className={classnames}>
                <input type="checkbox"
                       checked={item.complete}
                       className="pull-left"
                       onChange={this.toggleComplete.bind(this,item.id)}
                />
                {task}
                <div className="pull-right">
                    <button type="button"
                            className="btn btn-xs"
                            ref="deleteBtn"
                            onClick={this.handleDeleteItem.bind(this,item.id)}
                    >删除</button>
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
        var params = this.props.params;
        return(
            <li className="list-group-item">{params.completedCount}已完成 / {params.totalCount}总数</li>
        )
    }
}

class ToDoForm extends React.Component {

    constructor(props) {
        super(props);
        this.submitTask = this.submitTask.bind(this);
    }

    submitTask(e){
        e.preventDefault();

        var task = ReactDOM.findDOMNode(this.refs.task).value.trim();

        if (!task) {
            return;
        }
        this.props.addTask(task);
        ReactDOM.findDOMNode(this.refs.task).value = "";
    }

    render(){
        return(
            <div>
                <hr />
                <form className="form-horizontal" onSubmit={this.submitTask.bind(this)}>
                    <div className="form-group" >
                        <div className="col-md-9">
                            <input type="text" id="task" ref="task" className="form-control" placeholder="你想做点什么"></input>
                        </div>
                        <div className="col-md-2">
                            <input type="submit" value="增加任务" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


ReactDOM.render(
    <ToDoBox
        title="狗蛋的觉悟"
    />,
    document.getElementById('todoBox')
);