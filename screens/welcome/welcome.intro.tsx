import { Text, View } from 'react-native'
import React from 'react'
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito"
import { useFonts, Raleway_700Bold} from "@expo-google-fonts/raleway"

export default function WelcomeIntroScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_600SemiBold,
    Nunito_400Regular,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    
    <View>
      <Text>WelcomeIntroScreen</Text>
    </View>
  )
}
