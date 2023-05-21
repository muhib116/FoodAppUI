/*eslint-disable*/

import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import colors from '../../../../assets/helper/colors'
import BestSellingItem from './BestSellingItem'
import exploreData from '../../../../assets/data/explore'

export default function BestSelling({navigation}) {
  return (
    <View style={ styles.wrapper }>
      <Text style={ styles.title }>Best Selling</Text>
      <FlatList
        data={ exploreData }
        renderItem={({item}) => <BestSellingItem item={ item } navigation={navigation} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 23,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textDark,
    marginBottom: 15,
    paddingHorizontal: 37
  }
})