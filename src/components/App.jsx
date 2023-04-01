import { Component } from 'react';
import { Formik } from 'formik';
import { Counter } from './Counter/Counter';
import { Dropdown } from './Dropdown/Dropdown';
import { ColorPicker } from './ColorPicker/ColorPicker';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';
import shortid from 'shortid';

export class App extends Component {
  state = {
    todos: [],
  };

  addTodo = text => {
    console.log('text', text);

    const todo = {
      id: shortid.generate(),
      text,
    };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);

    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState);
    // console.log(this.state);

    if (this.state.todos !== prevState.todos) {
      console.log('Оновился стейт');
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

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
        <TodoForm onSubmit={this.addTodo} />
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />

        <div>
          <span>__Total: {totalTodo}</span>
          <span>__Done: {doneTodo}</span>
        </div>
      </>
    );
  }
}
