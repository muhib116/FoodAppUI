/*eslint-disable*/

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../assets/helper/colors'
import ArrowLeftIcon from '../assets/svg/ArrowLeftIcon'
import CartIcon from '../assets/svg/CartIcon'
import { useNavigation } from '@react-navigation/native'

export default function Header() {
    const navigation = useNavigation()
  return (
    <View style={ styles.headerWrapper }>
      <TouchableOpacity onPress={ navigation.goBack }>
        <ArrowLeftIcon width={25} height={25} fill={colors.textDark} />
      </TouchableOpacity>
      <Text style={styles.text}>Product</Text>

      
        <View style={ styles.cartWrapper }>
            <TouchableOpacity>
                <CartIcon width={ 25 } height={ 25 } fill={ colors.textDark } />
                <View style={ styles.cartCircle } ></View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff6',
        paddingHorizontal: 37,
        paddingVertical: 10
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.textDark
    },
    
    cartWrapper: {
        position: 'relative',
    },
    cartCircle: {
        position: 'absolute',
        right: -5,
        top: 0,
        backgroundColor: colors.primary,
        width: 10,
        height: 10,
        borderRadius: 10
    }
})