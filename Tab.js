// Tab.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Tab = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.tab} onPress={onPress}>
      <Text style={styles.tabText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    padding: 10,
    marginRight: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Tab;
