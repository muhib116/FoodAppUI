/*eslint-disable*/

import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import colors from '../../../../assets/helper/colors'
import ExploreItem from './ExploreItem'
import exploreData from '../../../../assets/data/explore'

export default function Explore({navigation}) {
  return (
    <View style={ styles.wrapper }>
      <Text style={ styles.title }>Explore</Text>
      <FlatList
        style={styles.itemsWrapper}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={exploreData}
        renderItem={({item}) => (
          <ExploreItem item={item} key={item.id} navigation={navigation} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
      paddingLeft: 37,
      paddingTop: 40,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.textDark
    },
    itemsWrapper: {
      marginTop: 24,
      gap: 30,
    }
})