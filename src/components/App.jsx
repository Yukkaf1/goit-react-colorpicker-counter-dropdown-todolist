import { Component } from 'react';

import { Counter } from './Counter/Counter';
import { Dropdown } from './Dropdown/Dropdown';
import { ColorPicker } from './ColorPicker/ColorPicker';
import { TodoList } from './TodoList';

export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo 1', completed: false },
      { id: 'id-2', text: 'Todo 2', completed: false },
      { id: 'id-3', text: 'Todo 3', cpmpleted: true },
      { id: 'id-4', text: 'Todo 4', completed: false },
      { id: 'id-5', text: 'Todo 5', completed: true },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const totalTodo = todos.length;
    const doneTodo = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    // const colorPickerOptions = [
    //   { label: 'red', color: '#F44336' },
    //   { label: 'green', color: '#4CAF50' },
    //   { label: 'blue', color: '#2196F3' },
    //   { label: 'grey', color: '#607D8B' },
    //   { label: 'pink', color: '#3F5185' },
    // ];

    // return <Counter initialValue={22} />;

    return (
      <>
        {/* <Counter initialValue={22} /> */}
        {/* <Dropdown /> */}

        {/* <ColorPicker title="Color Picker" colors={colorPickerOptions} /> */}
        <div>
          <span>__Total: {totalTodo}</span>
          <span>__Done: {doneTodo}</span>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}
