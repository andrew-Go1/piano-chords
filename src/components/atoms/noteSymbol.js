import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const NoteSymbol = props => {
  return <Text style={styles.text}>{props.note}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 150,
    color: '#FFFFFF',
    width: 230,
    textAlign: 'center',
  },
});
