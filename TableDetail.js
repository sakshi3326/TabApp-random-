// TableDetail.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TableDetail = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {Object.entries(row).map(([key, value], colIndex) => (
            <View key={colIndex} style={styles.cell}>
              <Text style={styles.cellText}>{value}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  cellText: {},
});

export default TableDetail;
