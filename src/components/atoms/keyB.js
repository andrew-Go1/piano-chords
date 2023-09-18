import React from 'react';
import {Polygon} from 'react-native-svg';

export const KeyB = props => {
  const colour = props.enabled ? '#EFD30B' : '#000000';

  const blackKeyOffset =
    props.offset < 6 ? props.offset * 21 : 5 * 21 + (props.offset - 5) * 20;

  const polygonPath = '0,0 0,120 21,120 21,0';

  return (
    <Polygon
      points={polygonPath}
      translateX={blackKeyOffset + props.octave * 7 * 35}
      fill={colour}
      stroke={'black'}
      strokeWidth={2}
      onPress={() => props.setNote(props.id)}
    />
  );
};
