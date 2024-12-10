import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts,Raleway_700Bold } from '@expo-google-fonts/raleway'
import {Nunito_400Regular, Nunito_700Bold} from "@expo-google-fonts/nunito"
import {LinearGradient} from "expo-linear-gradient";

export default function onboardingscreen() {
    let [fontsLoaded, fontError] = useFonts({
        Raleway_700Bold,
        Nunito_400Regular,
        Nunito_700Bold
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
  return (
    <linearGradient
    color={"#E5ECF9" }
    style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

        <View style={styles}>

        </View>
    </linearGradient>

  );
}

const styles = StyleSheet.create({})