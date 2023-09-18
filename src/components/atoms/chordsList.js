import React from 'react';
import {Text, FlatList, View, StyleSheet, Pressable} from 'react-native';

const DATA = [
  {id: 0, title: 'major'},
  {id: 1, title: 'minor'},
  {id: 2, title: 'm7'},
];

const Item = props => (
  <Pressable onPress={() => props.setChord(props.id)}>
    <Text style={styles.text}>{props.title}</Text>
  </Pressable>
);

export default props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Item
            title={item.title}
            key={item.id}
            id={item.id}
            setChord={props.setChord}
          />
        )}
        snapToAlignment="start"
        decelerationRate={'fast'}
        snapToInterval={styles.container.height}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
  },
  text: {
    fontSize: 50,
    color: '#FFFFFF',
  },
});

/*
################################################################
Need to rebuild it with "visable"
################################################################

in FlatList:
  onViewableItemsChanged={_onViewableItemsChanged}

  viewabilityConfig={_viewabilityConfig}

outside FlatList:
const _viewabilityConfig = {itemVisiblePercentThreshold: 90};
const _onViewableItemsChanged = viewableItems => {
  console.log('ViewableItems:', viewableItems);
  //props.setChord(1);
};*/
