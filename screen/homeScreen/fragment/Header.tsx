/*eslint-disable*/

import { View, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MenuIcon from '../../../assets/svg/MenuIcon'
import UserIcon from '../../../assets/svg/UserIcon'
import colors from '../../../assets/helper/colors'

export default function HomeScreenHeader() {
  return (
    <View style={ styles.headerWrapper }>
        <View>
            <TouchableOpacity>
                <MenuIcon width={28} height={28} />
            </TouchableOpacity>
        </View>
        <View style={ styles.userIconWrapper }>
            <TouchableOpacity>
                <UserIcon width={20} height={20} fill={colors.white} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 37,
        paddingTop: 80
    },

    userIconWrapper: {
        backgroundColor: colors.secondary,
        borderRadius: 10,
        width: 43,
        height: 43,
        justifyContent: 'center',
        alignItems: 'center',
    }
})