import {View, Text} from 'react-native';
import React from 'react';

interface Props {
  text: string;
  color?: string;
  size?: number;
  title?: boolean;
}
const TextComponent = (props: Props) => {
  const {text, color, size, title} = props;
  return (
    <Text style={{color: color, fontSize: size ? size : title ? 24 : 14}}>
      {text}
    </Text>
  );
};

export default TextComponent;
