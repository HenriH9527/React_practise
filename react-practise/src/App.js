import React, { Component } from 'react';
import TodoItem from './todoitem';
import './style.css';

class App extends Component {
  //初始化构造函数
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: '',
    };

    //优化 改变this的指向
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    });
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleItemClick(index) {
    //当改变state数据时，悠闲考虑拷贝数据，方便调试。
    const CopyList = [...this.state.list];
    CopyList.splice(index, 1);
    this.setState({
      list: CopyList
    })
  }

  handleDelete(index) {
    this.handleItemClick(index);
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem 
            handleItemDelete={this.handleDelete} 
            key={index}
            content={item}
            index={index} 
          />
        )
      })
    )
  }

  render() {
    //jsx 语法 只能写表达式，不能写语句
    return (
      <React.Fragment>
        <div>
          <input type="text" value={this.state.inputValue} onChange= {this.handleInputChange} />
          <button className="default-btn" onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </React.Fragment>
    );
  }
}

export default App;
