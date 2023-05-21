
/*eslint-disable*/

import { Keyboard, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../assets/helper/colors'

export default function Master({ children }) {
  return (
    <SafeAreaView>
        <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <LinearGradient 
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={[colors.background, colors.background]} 
                    style={ styles.linearGradient }
                >
                    { children }
                </LinearGradient>
            </TouchableWithoutFeedback>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    linearGradient: {
        height: '100%',
    }
})