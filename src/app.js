import React from "react";
import { Appbar, Text, TextInput,
  DarkTheme } from "react-native-paper";
import { StyleSheet, View } from "react-native";

import DetailForm from './detailForm'

const App = () => (
  <View style={{ flex:1}}>
    <DetailForm/>
    {/* <Appbar style={styles.bottom}>
      <Appbar.Action
        icon="archive"
        onPress={() => console.log("Pressed archive")}
      />
      <Appbar.Action icon="mail" onPress={() => console.log("Pressed mail")} />
      <Appbar.Action
        icon="label"
        onPress={() => console.log("Pressed label")}
      />
      <Appbar.Action
        icon="delete"
        onPress={() => console.log("Pressed delete")}
      />
    </Appbar> */}
  </View>
);

export default App;

const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
