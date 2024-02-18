import { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  var [myNumber, setMyNumber] = useState(0);
  useEffect(() => {
    console.log("The number is now", myNumber);
  }, [myNumber]);
  return (
    <View style={styles.container}>
      <Text>A bear is a chunky friend, who eats honey!</Text>
      <Button title="Click me" onPress={() => setMyNumber(myNumber + 1)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
