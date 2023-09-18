import React from 'react';
import {View, StyleSheet} from 'react-native';
import {KeyB, KeyW} from '../atoms';
import {Svg} from 'react-native-svg';

export const Keyboard = props => (
  <View style={styles.container}>
    <Svg width={735} height={200} style={styles.keyboard}>
      {props.pianoState.map(note => {
        if (note.colour === 'W') {
          return (
            <KeyW
              keyType={note.type}
              key={note.id}
              id={note.id}
              offset={note.offset}
              mirrored={note.mirrored}
              enabled={note.enabled}
              octave={note.octave}
              setNote={props.setNote}
            />
          );
        } else {
          return null;
        }
      })}
      {props.pianoState.map(note => {
        if (note.colour === 'B') {
          return (
            <KeyB
              keyType={note.type}
              key={note.id}
              id={note.id}
              offset={note.offset}
              mirrored={note.mirrored}
              enabled={note.enabled}
              octave={note.octave}
              setNote={props.setNote}
            />
          );
        } else {
          return null;
        }
      })}
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  keyboard: {
    flexDirection: 'row',
  },
});
