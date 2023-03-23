import { Component } from 'react';
import { Wrapper, CounterValue, Button } from './Counter.styled';

export class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    // value: 0,
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    // this.setState({value: 10,})

    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <Wrapper>
        <CounterValue> {this.state.value}</CounterValue>
        <Button type="button" name="Increment" onClick={this.handleIncrement}>
          Увеличить на 1
        </Button>
        <Button type="button" name="Decrement " onClick={this.handleDecrement}>
          Уменьшить на 1
        </Button>

        <Wrapper></Wrapper>
      </Wrapper>
    );
  }
}
