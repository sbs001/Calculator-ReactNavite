import { StyleSheet } from "react-native";

export const COLOR_GREY = '#9B9B9B'
export const COLOR_ORANGE = '#FF9427'
export const COLOR_LIGTH_GREY = '#2D2D2D'

export const buttonStyles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    margin: 10,

  },
  content: {
    textAlign: 'center',
    fontSize: 33,
    fontWeight: '300',
    padding: 10,
    color: 'white'
  }
})