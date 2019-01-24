import React from 'react';

//父组件通过属性的形式向子组件传递参数
//子组件通过props接受父组件传递过来的参数

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    //子组件如果想和父组件通信，要调用父组件传递过来的方法

    handleDelete() {
        const { handleItemDelete, index } = this.props;
        handleItemDelete(index);
    }

    render() {
        const { content } = this.props;
        return (
            <div onClick={this.handleDelete}>
                {content}
            </div>
        )
    }
}

export default TodoItem;