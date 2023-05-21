/*eslint-disable*/

import { View, Text, StyleSheet, Image, Button, Dimensions, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../../../assets/helper/colors'


export default function PopularItem({item, navigation}) {
    const styles = useStyles()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
        <View style={ styles.itemsWrapper }>
            <View style={styles.imageWrapper}>
                <Image source={item.image} style={styles.image} />
            </View>
            <Text style={styles.title}>{ item.title }</Text>
            <Text 
                numberOfLines={1}
                style={styles.description}
            >
                { item.description }
            </Text>

            <View style={styles.itemFooterWrapper}>
                <Text style={styles.price}>{ item.price }</Text>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={{ color: colors.white, fontWeight: 'bold' }}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
  )
}


function useStyles() {
    const {width, height} = useWindowDimensions()
    return StyleSheet.create({
        itemsWrapper: {
            borderRadius: 10,
            padding: 16,
            minHeight: 100,
            backgroundColor: colors.white,
            shadowColor: colors.shadow,
            width: width > 500 ? (width - (37 * 2) - 30)/2 : (width - (37 * 2)),
            shadowOffset: {
                width: 0,
                height: 5
            },
            elevation: 10,
            shadowOpacity: 0.20,
            marginBottom: 30
        },
        imageWrapper: {
            height: width > 500 ? 400 : 200,
            marginBottom: 26
        },
        image: {
            borderRadius: 10,
            width: '100%',
            height: '100%',
            resizeMode: 'cover'
        },

        title: {
            fontWeight: "800",
            color: colors.textDark,
            fontSize: 14
        },
        description: {
            fontSize: 14,
            color: colors.textLight,
            marginTop: 10,
        },
        itemFooterWrapper: {
            marginTop: 18,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        price: {
            color: colors.textDark,
            fontSize: 14,
            fontWeight: '700'
        },
        button: {
            width: 35,
            height: 35,
            borderRadius: 10,
            backgroundColor: colors.primary,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
    })
}