import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmound');
  }

  render() {
    return (
      <Overlay>
        <ModalWindow>{this.props.children}</ModalWindow>
      </Overlay>
    );
  }
}
