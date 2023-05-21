/*eslint-disable*/

import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import SearchIcon from '../../../assets/svg/SearchIcon'
import colors from '../../../assets/helper/colors'
import CartIcon from '../../../assets/svg/CartIcon'

export default function SearchAndCart() {
  return (
    <View style={ styles.wrapper }>
        <View style={ styles.searchWrapper }>
            <SearchIcon width={ 20 } height={ 20 } style={ styles.searchIcon } />
            <TextInput
                style={ styles.searchInput }
                placeholder='Search'
            />
        </View>
        <View style={ styles.cartWrapper }>
            <TouchableOpacity>
                <CartIcon width={ 30 } height={ 30 } fill={ colors.textDark } />
                <View style={ styles.cartCircle } ></View>
            </TouchableOpacity>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 37,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 44,
        gap: 20
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: colors.white,
        width: '100%',
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        shadowColor: colors.shadow,
        elevation: 5,
        shadowOpacity: 0.05,
        shadowOffset: {
            width: 2,
            height: 5,
            shadowRadius: 25
        }
    },
    searchInput: {
        flex: 1,
        paddingHorizontal: 24,
        paddingLeft: 54,
        height: 45,
        fontStyle: 'italic',
    },
    searchIcon: {
        position: 'absolute',
        zIndex: 1,
        left: 24,
        fill: colors.textDark
    },

    cartWrapper: {
        position: 'relative',
    },
    cartCircle: {
        position: 'absolute',
        right: -5,
        top: 0,
        backgroundColor: colors.primary,
        width: 14,
        height: 14,
        borderRadius: 14
    }
})