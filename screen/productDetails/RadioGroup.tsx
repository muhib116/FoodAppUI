/*eslint-disable*/

import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import colors from '../../assets/helper/colors'

export default function Radio({options, handleOptions}) 
{
  const styles = StyleSheet.create({
    mainWrapper: {
      flexDirection: 'row',
      gap: 10
    },
    wrapper: {
      width: 26,
      height: 26,
      borderRadius: 26,
      backgroundColor: '#333',
      position:`relative`
    },
    innerCircle:{
      width: 22,
      height: 22,
      borderRadius: 30,
      borderColor: colors.white,
      borderWidth: 3,
      position: 'absolute',
      top: 2,
      left: 2,
    }
  })
  return (
    <View style={ styles.mainWrapper }>
      {
        options.map((option: Object, index: Number) => (
          <TouchableWithoutFeedback onPress={ () => handleOptions(option) }>
            <View style={{ ...styles.wrapper, backgroundColor: option.value }}>
              {
                option.selected &&
                <View style={styles.innerCircle}></View>
              }
            </View>
          </TouchableWithoutFeedback>
        ))
      }
    </View>
  )
}