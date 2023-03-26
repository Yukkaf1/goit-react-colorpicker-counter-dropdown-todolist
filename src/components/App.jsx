import { Counter } from './Counter/Counter';
import { Dropdown } from './Dropdown/Dropdown';
import { ColorPicker } from './ColorPicker/ColorPicker';

export const App = () => {
  const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#3F5185' },
  ];

  // return <Counter initialValue={22} />;

  return (
    <>
      {/* <Counter initialValue={22} /> */}
      {/* <Dropdown /> */}

      <ColorPicker title="Color Picker" colors={colorPickerOptions} />
    </>
  );
};
