import React from 'react';
import { View } from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';
import { appStyle } from './src/themes/AppTheme';

export default function App() {
  return (
    <View style={appStyle.background}>
      <CalculatorScreen />
    </View>
  );
}

