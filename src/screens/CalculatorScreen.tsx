import React from 'react';
import { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import ButtonCalc from '../components/ButtonCalc';
import { appStyles } from '../themes/AppTheme';
import { COLOR_GREY, COLOR_ORANGE } from '../themes/ButtonTheme';

export default function CalculatorScreen() {

  const [number,setNumber] = useState('');
  const [prevNumber,setPrevNumber] = useState('');

  const clean = () => {
    setNumber('')
  }
  const makeNumber =  (button:string) => {
    setNumber(number + button)
  }
  
  return (
    <View style={appStyles.calculatorCtn}>
      <SafeAreaView>
        <StatusBar backgroundColor='black' barStyle='light-content' />
        <Text style={appStyles.prevResult}>{prevNumber}</Text>
        <Text style={appStyles.result} adjustsFontSizeToFit numberOfLines={1}>{number}</Text>

        <View style={appStyles.row}>
          <ButtonCalc text={'C'} color={COLOR_GREY} action={clean}/>
          <ButtonCalc text={'+/-'} color={COLOR_GREY} action={clean}/>
          <ButtonCalc text={'DEL'} color={COLOR_GREY} action={clean} />
          <ButtonCalc text={'/'} color={COLOR_ORANGE} action={clean}/>
        </View>

        <View style={appStyles.row}>
          <ButtonCalc text={'7'} action={makeNumber}/>
          <ButtonCalc text={'8'} action={makeNumber}/>
          <ButtonCalc text={'9'} action={makeNumber}/>
          <ButtonCalc text={'x'} color={COLOR_ORANGE} action={clean}/>
        </View>

        <View style={appStyles.row}>
          <ButtonCalc text={'4'} action={makeNumber}/>
          <ButtonCalc text={'5'} action={makeNumber}/>
          <ButtonCalc text={'6'} action={makeNumber} />
          <ButtonCalc text={'-'} color={COLOR_ORANGE} action={clean}/>
        </View>

        <View style={appStyles.row}>
          <ButtonCalc text={'1'} action={makeNumber}/>
          <ButtonCalc text={'2'} action={makeNumber}/>
          <ButtonCalc text={'3'} action={makeNumber}/>
          <ButtonCalc text={'+'} color={COLOR_ORANGE} action={clean}/>
        </View>

        <View style={appStyles.row}>
          <ButtonCalc text={'0'} double action={makeNumber}/>
          <ButtonCalc text={'.'} action={clean}/>
          <ButtonCalc text={'='} color={COLOR_ORANGE} action={clean}/>
        </View>
      </SafeAreaView>
    </View>
  );
}