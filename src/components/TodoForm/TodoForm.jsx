import { Component } from 'react';
import { Formik } from 'formik';
import { Form, FormField } from './TodoForm.styled';
import * as Yup from 'yup';

export class TodoForm extends Component {
  static defaultProps = {};

  state = {
    todos: [
      { id: 'id-1', text: 'Todo 1', completed: false },
      { id: 'id-2', text: 'Todo 2', completed: false },
      { id: 'id-3', text: 'Todo 3', cpmpleted: true },
      { id: 'id-4', text: 'Todo 4', completed: false },
      { id: 'id-5', text: 'Todo 5', completed: true },
    ],
    inputValue: 'Deine Aufgabe',
    name: '',
  };

  handleNameChange = event => {
    console.log(event.target.value);
    this.setState({ name: event.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefaul();
    console.log(this.state);
  };

  render() {
    const { todos } = this.state;

    return (
      <Formik onSubmit={this.handelSubmit}>
        <Form>
          <FormField>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </FormField>
        </Form>
      </Formik>
    );
  }
}
