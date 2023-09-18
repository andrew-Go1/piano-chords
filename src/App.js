import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import NoteChoicer from './components/compounds/noteChoicer.js';
import {Keyboard} from './components/molecule/keyboard.js';

//console.log(styles);

const App = () => {
  const [note, setNote] = useState(0);
  const [chord, setChord] = useState(0);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let currentNote = note;
    let notes = chordsCollection[chord].notes;
    pianoState = JSON.parse(JSON.stringify(initialPianoState));
    notes.forEach(chordNote => {
      currentNote += chordNote;
      //need to work with out of bound error
      if (pianoState[currentNote]) {
        pianoState[currentNote].enabled = true;
      }
    });

    setRerender(() => !rerender);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [note, chord]);

  return (
    <View style={styles.container}>
      <LinearGradient
        angle={7}
        colors={['#141E30', '#243B55']}
        useAngle={true}
        style={styles.gradien}>
        <NoteChoicer
          note={keyCollection[note - 12 * pianoState[note].octave].name}
          setChord={setChord}
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Keyboard setNote={setNote} pianoState={pianoState} />
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default App;

const keyCollection = [
  {name: 'C', colour: 'W', type: 'L', offset: 0, mirrored: false},
  {name: 'C#', colour: 'B', type: 'B', offset: 1, mirrored: false},
  {name: 'D', colour: 'W', type: 'C', offset: 1, mirrored: false},
  {name: 'D#', colour: 'B', type: 'B', offset: 3, mirrored: false},
  {name: 'E', colour: 'W', type: 'L', offset: 2, mirrored: true},
  {name: 'F', colour: 'W', type: 'L', offset: 3, mirrored: false},
  {name: 'F#', colour: 'B', type: 'B', offset: 6, mirrored: false},
  {name: 'G', colour: 'W', type: 'LC', offset: 4, mirrored: false},
  {name: 'G#', colour: 'B', type: 'B', offset: 8, mirrored: false},
  {name: 'A', colour: 'W', type: 'LC', offset: 5, mirrored: true},
  {name: 'A#', colour: 'B', type: 'B', offset: 10, mirrored: false},
  {name: 'H', colour: 'W', type: 'L', offset: 6, mirrored: true},
];
const chordsCollection = [
  {name: 'Major', notes: [0, 4, 3]},
  {name: 'minor', notes: [0, 3, 4]},
  {name: '7th', notes: [0, 4, 3, 3]},
  {name: 'm 7th', notes: [0, 3, 4, 3]},
  {name: 'M 7th', notes: [0, 4, 3, 4]},
  {name: 'sus 4', notes: [0, 5, 2]},
];

const initialPianoState = [];
for (let octave = 0; octave < 3; octave++) {
  keyCollection.forEach((note, id) =>
    initialPianoState.push({
      id: id + octave * 12,
      note: note.name,
      colour: note.colour,
      type: note.type,
      offset: note.offset,
      mirrored: note.mirrored,
      enabled: false,
      octave: octave,
    }),
  );
}

let pianoState = initialPianoState;
