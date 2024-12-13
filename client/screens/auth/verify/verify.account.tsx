import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef, useState } from "react";
import { styless } from "@/styles/onboarding/onboarding";
import index from "@/app";

export default function VerifyAccount() {
  const [code, setCode] = useState(new Array(4).fill(""));

  const inputs = useRef<any>([...Array(4)].map(() => React.createRef()));

  const handleInput = (text: any, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1].current.focus();
    }

    if (text === "" && index > 0) {
      inputs.current[index - 1].current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Verification Code</Text>
      <Text style={styles.subText}>
        We have sent the verification code to your email address
      </Text>
      <View style= {styles.inputContainer}>
        {code.map((_,index)=>(
            <TextInput key= {index} style={styles.inputBox}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text)=> handleInput(text,index)}
            value={code[index]}
            ref={inputs.current[index]}
            returnKeyType="done"
            autoFocus={index === 0}
            />
        ))}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  inputBox: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    textAlign: "center",
    marginRight: 10,
    borderRadius: 10,
    fontSize: 20,
  },
});
