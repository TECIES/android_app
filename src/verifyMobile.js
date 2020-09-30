import React from "react";
import {
  Text,
  TextInput,
  Button,
  Headline,
  Paragraph,
  Divider,
  Avatar,
  DarkTheme
} from "react-native-paper";
import { StyleSheet, View } from "react-native";

const VerifyMobile = (props) => {
    const { navigation } = props;
    return (
  <View style={styles.view}>
    <Headline>Verify your mobile number</Headline>
    <Text>Enter the SMS Code sent to your mobile number</Text>
    <TextInput mode='outlined' textContentType='oneTimeCode'/>
    <Button mode='outlined' style={styles.submit}
    onPress={() => navigation.navigate('driver')}>Check</Button>
  </View>
)};

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
    alignSelf: "center",
  },
});

export default VerifyMobile;