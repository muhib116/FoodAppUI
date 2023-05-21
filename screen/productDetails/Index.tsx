/* eslint-disable */

import React from 'react'
import { Button, Text, View } from 'react-native'

export default function ProfileScreen({ navigation, route }) {
    console.log(navigation, route)
  return (
    <View>
        <Button
            onPress={() => {
              navigation.navigate('Home')
            }}
            title='Go to home page'
        />
        <Text>ProfileScreen of { route.params.title }</Text>
    </View>
  )
}
