import React from 'react';
import { Text, View } from 'react-native';
import { buttonStyles } from '../themes/ButtonTheme';

interface Props {
  text:string,
}
export default function ButtonCalc({text}:Props) {
  return (
    <View style={buttonStyles.container}>
      <Text style={buttonStyles.content}>{text}</Text>
    </View>
  );
}

