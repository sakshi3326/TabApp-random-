import React from 'react';
import { View } from 'react-native';
import MainScreen from './MainScreen';

const App = () => {
  const data = {
    // Sample data
    tab1: [
      {
        type: 'KEY_VALUE',
        data: {
          key1: 'value1',
          key2: 'value2',
        },
      },
      {
        type: 'PARAGRAPH',
        data: ['Paragraph 1', 'Paragraph 2'],
      },
      {
        type: 'KEY_PARAGRAPH',
        data: {
          heading1: 'Paragraph under Heading 1',
          heading2: 'Paragraph under Heading 2',
        },
      },
      {
        type: 'TABLE',
        data: [
          { col1: 'row1col1', col2: 'row1col2' },
          { col1: 'row2col1', col2: 'row2col2' },
        ],
      },
    ],
    tab2: {
      nestedTab1: [
        {
          type: 'KEY_VALUE',
          data: {
            key1: 'value1',
            key2: 'value2',
          },
        },
      ],
      nestedTab2: [
        {
          type: 'PARAGRAPH',
          data: 'Single paragraph content',
        },
      ],
    },
  };

  return (
    <View style={{ flex: 1 }}>
      <MainScreen data={data} />
    </View>
  );
};

export default App;
