import React from 'react';
import {Polygon} from 'react-native-svg';

const lineProps = {
  strokeOpacity: 1,
  strokeWidth: 1,
  strokeLineCap: 'round',
  strokeLineJoin: 'round',
};

const whiteKeyWidth = 35;

export const KeyW = props => {
  let colour = props.enabled ? '#EFD30B' : '#FFFFFF';

  const transform = !props.mirrored
    ? 'scale(1,2)'
    : `scale(-1,2) translate(-${whiteKeyWidth},0)`;

  let polygonPath = '0,0 0,100 35,100 35,0';
  if (props.keyType === 'L') {
    polygonPath = '0,0 0,100 35,100 35,60 21,60 21,0';
  } else if (props.keyType === 'C') {
    polygonPath = '7,0 7,60 0,60 0,100 35,100 35,60 28,60 28,0';
  } else if (props.keyType === 'LC') {
    polygonPath = '6,0 6,60 0,60 0,100 35,100 35,60 25,60 25,0';
  }

  return (
    <Polygon
      points={polygonPath}
      translateX={
        whiteKeyWidth * props.offset + whiteKeyWidth * 7 * props.octave
      }
      fill={colour}
      stroke={'black'}
      strokeWidth={1}
      transform={transform}
      onPress={() => props.setNote(props.id)}
    />
  );
};

/*<Pressable onPress={() => props.setNote(props.id)}>
  <Svg width={50} height={100} viewBox="0 0 122.88 122.88" {...lineProps}>
    <Path
      d="M61.44,0c16.966,0,32.326,6.877,43.445,17.995s17.996,26.479,17.996,43.444c0,16.967-6.877,32.327-17.996,43.445 S78.406,122.88,61.44,122.88c-16.966,0-32.326-6.877-43.444-17.995S0,78.406,0,61.439c0-16.965,6.877-32.326,17.996-43.444 S44.474,0,61.44,0L61.44,0z M34.556,67.179c-1.313-1.188-1.415-3.216-0.226-4.529c1.188-1.313,3.216-1.415,4.529-0.227L52.3,74.611 l31.543-33.036c1.223-1.286,3.258-1.336,4.543-0.114c1.285,1.223,1.336,3.257,0.113,4.542L54.793,81.305l-0.004-0.004 c-1.195,1.257-3.182,1.338-4.475,0.168L34.556,67.179L34.556,67.179z M100.33,22.55C90.377,12.598,76.627,6.441,61.44,6.441 c-15.188,0-28.938,6.156-38.89,16.108c-9.953,9.953-16.108,23.702-16.108,38.89c0,15.188,6.156,28.938,16.108,38.891 c9.952,9.952,23.702,16.108,38.89,16.108c15.187,0,28.937-6.156,38.89-16.108c9.953-9.953,16.107-23.702,16.107-38.891 C116.438,46.252,110.283,32.502,100.33,22.55L100.33,22.55z"
      fill={colour}
    />
  </Svg>
</Pressable> */
