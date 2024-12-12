import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import { styless } from "@/styles/onboarding/onboarding";
import { router } from "expo-router";

export default function onboardingscreen() {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View style={styless.firstContainer}>
        <View>
          <Image
            source={require("@/assets/images/logo.png")}
            style={styless.logo}
          />

          <Image source={require("@/assets/onboarding/shape_9.png")} />
        </View>

        <View style={styless.titleWrapper}>
          <Image
            style={styless.titleTextShape1}
            source={require("@/assets/onboarding/shape_3.png")}
          />
          <Text style={[styless.titleText, { fontFamily: "Raleway_700Bold" }]}>
            Start Learning With
          </Text>
          <Image
            style={styless.titleTextShape2}
            source={require("@/assets/onboarding/shape_2.png")}
          />
        </View>

        <View>
          <Image
            style={styless.titleShape3}
            source={require("@/assets/onboarding/shape_6.png")}
          />
          <Text style={[styless.titleText, { fontFamily: "raleway_700Bold" }]}>
            DeepSence
          </Text>
        </View>

        <View style={styless.dscpWrapper}>
          <Text style={[styless.dscpText, {fontFamily: "Nunito_400Regular"}]}>
            Explore a variety of interactive lesson, 
          </Text>
          <Text style={[styless.dscpText, {fontFamily: "Nunito_400Regular"}]}>
           video, quizzes & assignments.
          </Text>
        </View>

        <TouchableOpacity style={styless.buttonWrapper}
        onPress={()=> router.push("/(routes)/welcome-intro")}
        >
          <Text style={[styless.buttonText,  {fontFamily: "Nunito_700Bold"}]}>
          Getting Started
          </Text>

        </TouchableOpacity>


      </View>
    </LinearGradient>
  );
}

// const styles = StyleSheet.create({})
