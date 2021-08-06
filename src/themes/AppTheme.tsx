import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({

  background: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal:15,
  },

  calculatorCtn:{
    flex:1,
    justifyContent:'flex-end',
  },

  row:{
    flexDirection:'row',
    justifyContent:'center'
  },

  result: {
    color: 'white',
    fontSize: 60,
    textAlign:'right',
  },
  prevResult:{
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign:'right',
  }
})