/*eslint-disable*/

import { View, Text, StyleSheet, FlatList, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../../assets/helper/colors'
import PopularItem from './PopularItem'
import exploreData from '../../../../assets/data/explore'


export default function Explore() {
  const styles = useStyle()
  const { width } = useWindowDimensions()

  return (
    <View style={ styles.wrapper }>
      <Text style={ styles.title }>Popular</Text>
      {
        width > 500 ?
        <FlatList
          style={styles.itemsWrapper}
          horizontal={false}
          key={ 2 }
          numColumns={ 2 }
          columnWrapperStyle={{ 
            justifyContent: 'space-between'
          }}
          initialNumToRender={1}
          showsHorizontalScrollIndicator={false}
          data={exploreData}
          renderItem={({item, index}) => {
            return <PopularItem item={item} />
          }}
        /> :

        <FlatList
          style={styles.itemsWrapper}
          horizontal={false}
          initialNumToRender={1}
          showsHorizontalScrollIndicator={false}
          data={exploreData}
          renderItem={({item, index}) => {
            return <PopularItem item={item} />
          }}
        />
      }
    </View>
  )
}

const useStyle = () => {
  const { width, height } = useWindowDimensions()
  return StyleSheet.create({
    wrapper: {
        paddingHorizontal: 37,
        marginTop: 40
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.textDark
    },
    itemsWrapper: {
      marginTop: 24
    }
  })
}