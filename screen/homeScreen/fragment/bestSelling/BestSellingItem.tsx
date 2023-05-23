/*eslint-disable*/

import { View, Text, StyleSheet, Image, useWindowDimensions, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import colors from '../../../../assets/helper/colors'
import ArrowRightIcon from '../../../../assets/svg/ArrowRightIcon'
import { useNavigation } from '@react-navigation/native'

export default function BestSellingItem({item}) {
    const styles = useStyle()
    const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Details', item)}>
        <View style={ styles.wrapper } accessibilityRole='button' >
            <View style={styles.imageWrapper}>
                <Image source={ item.image } style={ styles.image } />
            </View>
            <View style={ styles.textWrapper }>
                <Text style={ styles.name }>{item.title}</Text>
                <Text style={ styles.description } numberOfLines={1}>
                    {item.description}
                </Text>
                <Text style={ styles.price } numberOfLines={1}>
                    {item.price}
                </Text>
            </View>
            <View style={ styles.buttonWrapper }>
                <ArrowRightIcon width={15} height={15} />
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

const useStyle = () => {
    const {width} = useWindowDimensions()

    return StyleSheet.create({
        wrapper: {
            width: (width - (37*2)),
            backgroundColor: colors.white,
            padding: 20,
            flexDirection: 'row',
            gap: 20,
            alignItems: 'center',
            borderRadius: 20,
            marginBottom: 20,
            shadowColor: colors.shadow,
            shadowOffset: {
                width: 1,
                height: 5
            },
            shadowOpacity: 0.15,
            shadowRadius: 5,
            elevation: 8,
            alignSelf: 'center'
        },
        imageWrapper: {
            width: 60,
            height: 60,
            borderRadius: 10,
            backgroundColor: colors.white,
            shadowColor: colors.shadow,
            shadowOffset: {
                width: 0,
                height: 5
            },
            shadowOpacity: 0.2,
            elevation: 15
        },
        image: {
            width: '100%',
            height: '100%',
            resizeMode: 'center',
            borderRadius: 10
        },
        textWrapper: {
            flex: 1
        },
        name: {
            fontSize: 14,
            color: colors.textDark,
            fontWeight: '600',
            marginBottom: 8
        },
        description: {
            color: colors.textLight,
            fontSize: 12,
            marginBottom: 8
        },
        price: {
            fontWeight: '900',
            color: colors.textDark
        },
        buttonWrapper:{
            width: 30,
            height: 30,
            backgroundColor: colors.secondary,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'flex-end'
        }
    })
}