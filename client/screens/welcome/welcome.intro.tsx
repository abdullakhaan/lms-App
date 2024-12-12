import { Text, View, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Nunito_400Regular,Nunito_600SemiBold,} from "@expo-google-fonts/nunito";
import AppIntroSlider from "react-native-app-intro-slider";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { LinearGradient } from "expo-linear-gradient";
import { onboardingSwiperData } from "@/constants/constans";
import { commonStyles } from "@/styles/common/common.styles";
import { router } from "expo-router";
import { styless } from "@/styles/onboarding/onboarding";

// import { styles } from "@/styles/onboarding/onboarding";

export default function WelcomeIntroScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_600SemiBold,
    Nunito_400Regular,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  const renderItem = ({ item }: { item: onboardingSwiperDataType }) => (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9", "#E8EEF9"]}
      style={{ flex: 1, paddingHorizontal: 16 }}
    >
      <View style={{marginTop: 80}}>
        <Image
        source={item.image}
        style={{alignSelf: 'center', marginBottom: 30,}}
        />
        <Text style= {[commonStyles.title, {fontFamily: "Raleway_700Bold"}]}>
          {item.title}
        </Text>
        <View style= {{marginTop:15}}>
        <Text style={[commonStyles.description, { fontFamily: "Nunito_400Regular" }]}>
          {item.description}
        </Text>
        <Text style={[commonStyles.description, { fontFamily: "Nunito_400Regular" }]}>
          {item.sortDescrition}
        </Text>
        <Text style={[commonStyles.description, { fontFamily: "Nunito_400Regular" }]}>
          {item.sortDescrition2}
        </Text>
        </View>
      </View>
    </LinearGradient>
  );
  return (
    <AppIntroSlider
      renderItem={renderItem}
     data={onboardingSwiperData}
      onDone={() => {
        router.push("/login");
      }}
      onSkip={() => {
        router.push("/login");
      }}
      renderNextButton={() => (
        <View style={[styless.welcomeButtonStyle ]}>
          <Text style= {[styless.buttonText, {fontFamily:"Nunito_600SemiBold"}]}>
            Next
          </Text>
        </View>
      )}
      renderDoneButton={() => (
        <View style={styless.welcomeButtonStyle }>
          <Text style={[styless.buttonText, { fontFamily: "" }]}>Done</Text>
        </View>
  )}
      showSkipButton={false}
      dotStyle={commonStyles.dotStyle}
      bottomButton={true}
      activeDotStyle={commonStyles.activeDotStyle}
    />
  );
}

