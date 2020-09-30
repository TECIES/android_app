import React from "react";
import {
  Text,
  TextInput,
  Button,
  Headline,
  Paragraph,
  Divider,
  Avatar,
  DarkTheme,
} from "react-native-paper";
import { StyleSheet, View } from "react-native";

const DriverDetails = (props) => (
  <View style={styles.view}>
    <TextInput mode="outlined" label="Drivers License No." />
    <TextInput mode="outlined" label="Vehicle Type" />
    <TextInput mode="outlined" label="Vehicle License Plate No." />
    <TextInput mode="outlined" label="Emergency Contact" />
    <TextInput mode="outlined" label="Car License Plate No." />
    <Button mode="contained" icon="content-save" style={styles.submit} onPress={props.setLogin(true)}>
      Save Details
    </Button>
  </View>
);


const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 10,
    justifyContent:'center',
    alignContent: 'center',
    backgroundColor: DarkTheme.colors.surface,
  },
  submit: {
    marginTop: 5,
    padding: 10,
  },
  profilepic: {
    margin: 10,
  },
});

export default DriverDetails;