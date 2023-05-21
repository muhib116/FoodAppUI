/*eslint-disable*/

import { View, Text } from 'react-native'
import React from 'react'
import colors from '../../assets/helper/colors'
import LinearGradient from 'react-native-linear-gradient'

export default function SplashScreen({navigation}) {
    setTimeout(() => {
        navigation.navigate('Home')
    }, 2000)
  return (
    <LinearGradient colors={[colors.black, colors.textDark]} style={{ backgroundColor: colors.primary, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
            <Text style={{ fontSize: 40, fontWeight: '900', color: colors.textLight, textAlign: 'center' }}>
                Welcome To
            </Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: colors.textLight, textAlign: 'center' }}>
                Food Cover
            </Text>
        </View>
    </LinearGradient>
  )
}