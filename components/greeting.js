import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const Greeting = () => {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        place="Enter your name.."
        onChangeText={(name) => setName(name)}
      />
      <Text>Welcome to this CI/CD for React Native course, {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: { height: 30, borderColor: "gray", borderWidth: 1, width: 200 },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Greeting;
