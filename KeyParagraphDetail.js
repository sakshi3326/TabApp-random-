// KeyParagraphDetail.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const KeyParagraphDetail = ({ data }) => {
  return (
    <View style={styles.container}>
      {Object.entries(data).map(([heading, paragraph], index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.paragraph}>{paragraph}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  paragraph: {},
});

export default KeyParagraphDetail;
