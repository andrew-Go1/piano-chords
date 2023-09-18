import React from 'react';
import {StyleSheet, View} from 'react-native';

import {NoteSymbol, ChordsList} from '../atoms';

export default props => (
  <View style={styles.container}>
    <NoteSymbol note={props.note} style={styles.note} />
    <ChordsList setChord={props.setChord} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 140,
  },
  note: {
    width: 0,
  },
});
