/*eslint-disable*/

import { View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import colors from '../../../../assets/helper/colors'
import { useNavigation } from '@react-navigation/native'


export default function ExploreItem({item}) {
    const navigation = useNavigation()
    const styles = useStyles()
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Details', item)}>
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
    </TouchableWithoutFeedback>
  )
}


function useStyles() {
    const {width, height} = useWindowDimensions()
    return StyleSheet.create({
        itemsWrapper: {
            width: width > 500 ? width / 3 : width / 2,
            borderRadius: 20,
            padding: 16,
            backgroundColor: colors.white,
            shadowColor: colors.shadow,
            shadowOffset: {
                width: 0,
                height: 5
            },
            elevation: 10,
            shadowOpacity: 0.20,
            marginRight: 30
        },
        imageWrapper: {
            height: 200,
            marginBottom: 26
        },
        image: {
            borderRadius: 20,
            width: '100%',
            height: '100%',
            resizeMode: 'center'
        },

        title: {
            fontWeight: "600",
            color: colors.textDark,
            fontSize: 12
        },
        description: {
            fontSize: 12,
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
            fontSize: 12
        },
        button: {
            width: 35,
            height: 35,
            borderRadius: 35,
            backgroundColor: colors.secondary,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
    })
}