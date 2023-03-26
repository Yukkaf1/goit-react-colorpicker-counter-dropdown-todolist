import PropTypes from 'prop-types';
import {
  ColorPickerTitle,
  ColorSection,
  Wrapper,
  ColorList,
  ColorItem,
  ColorLabel,
} from './ColorPicker.stzled';
import { Component } from 'react';

export class ColorPicker extends Component {
  static defaultProps = {};

  state = {};

  render() {
    return (
      <Wrapper>
        <ColorPickerTitle>{this.props.title}</ColorPickerTitle>
        <ColorSection>
          <ColorList>
            {this.props.colors.map(({ color, label }) => {
              <ColorItem key={color}>
                <ColorLabel>{label}</ColorLabel>;
              </ColorItem>;
            })}
          </ColorList>
        </ColorSection>
      </Wrapper>
    );
  }
}

ColorPicker.propTypes = {
  title: PropTypes.string,
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};
