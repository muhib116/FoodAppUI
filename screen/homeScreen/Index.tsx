/* eslint-disable */

import React from 'react'
import { View } from 'react-native'
import HomeScreenHeader from './fragment/Header'
import Master from '../Master'
import SearchAndCart from './fragment/SearchAndCart'
import Explore from './fragment/explore/Index'
import Popular from './fragment/popular/Index'
import BestSelling from './fragment/bestSelling/Index'

export default function HomeScreen() {
  return (
    <Master>
        <View>
            <HomeScreenHeader />
            <SearchAndCart />
            <Explore />
            <Popular />
            <BestSelling />
        </View>
    </Master>
  )
}