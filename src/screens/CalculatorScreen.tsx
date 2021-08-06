import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { appStyles } from '../themes/AppTheme';

export default function CalculatorScreen() {
  return (
    <View style={appStyles.calculatorCtn}>
      <SafeAreaView>
        <StatusBar backgroundColor='black' barStyle='light-content' />
        <Text style={appStyles.prevResult}>calcuator</Text>
        <Text style={appStyles.result}>calcuator</Text>

        <View style={appStyles.row}>

        </View>
      </SafeAreaView>
    </View>
  );
}