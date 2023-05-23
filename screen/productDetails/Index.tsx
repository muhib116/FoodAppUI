/* eslint-disable */

import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import Header from '../../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeartIcon from '../../assets/svg/HeartIcon'
import colors from '../../assets/helper/colors'
import RadioGroup from './RadioGroup'

export default function ProfileScreen({ navigation, route }) {
  const { params } = route
  const styles     = useStyle()
  const [ColorOptions, setColorOptions] = React.useState([
    {
      selected: false,
      value: colors.primary,
      label: 'Red'
    },
    {
      selected: false,
      value: colors.secondary,
      label: 'Green'
    },
    {
      selected: false,
      value: colors.textLight,
      label: 'Blue'
    },
  ])
  const handleOptions = (option) => {
    setColorOptions(ColorOptions.map(item => {
      item.selected = item.value == option.value
      return item
    }))
  }

  return (
    <SafeAreaView>
      <ScrollView>
          <ImageBackground source={ params.image } style={ styles.imageWrapper }>
            <Header />
          </ImageBackground>
          <TouchableOpacity style={ styles.favIconWrapper }>
            <HeartIcon width={20} height={20} color={colors.primary} />
          </TouchableOpacity>
          <View style={styles.priceAndNameWrapper}>
            <View>
              <Text style={styles.price}>{ params.price }</Text>
              <Text style={styles.title}>{ params.title }</Text>
            </View>
            <View>
              <Text>Rating</Text>
            </View>
          </View>

          <View style={styles.colorWrapper}>
            <Text style={styles.optionText}>Color option</Text>
            <View>
              <RadioGroup
                handleOptions={handleOptions}
                options={ColorOptions}
              />
            </View>
          </View>

          <View style={styles.descriptionWrapper}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.description}>{params.description}</Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const useStyle = () => {
  const { width, height } = useWindowDimensions()
  return StyleSheet.create({
    imageWrapper: {
      width: width,
      height: height * 0.55,
      borderBottomStartRadius: 37,
      position: 'relative'
    },
    
    favIconWrapper: {
      width: 40,
      height: 40,
      borderRadius: 40,
      shadowColor: colors.shadow,
      shadowOffset: {
        width: 0,
        height: 5
      },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 10,
      backgroundColor: colors.white,
      zIndex: 1,
      alignSelf: 'flex-end',
      marginTop: -20,
      marginRight: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    priceAndNameWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      paddingHorizontal: 37,
      marginTop: 30
    },
    price: {
      fontSize: 20,
      fontWeight: '900',
      color: colors.primary,
      marginBottom: 5
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.textDark
    },
    colorWrapper: {
      paddingHorizontal: 37,
      marginTop: 15
    },
    optionText: {
      marginBottom: 10,
      color: colors.textDark
    },
    descriptionWrapper: {
      paddingHorizontal: 37,
      marginTop: 20,
      marginBottom: 20
    },
    descriptionTitle: {
      fontSize: 16,
      fontWeight: '700',
      marginBottom: 10,
      color: colors.textDark
    },
    description: {
      fontSize: 16,
      fontWeight: '400',
      color: colors.textLight
    },
  })
}
