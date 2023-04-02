import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#root2');

export class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handeleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmound');

    window.removeEventListener('keydown', this.handeleKeyDown);
  }

  handeleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали Esc');
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay>
        <ModalWindow>{this.props.children}</ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
