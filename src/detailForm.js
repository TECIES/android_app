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

const DetailForm = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.view}>
      <Headline>Profile</Headline>
      <Paragraph>
        This information will be used for entry authorization and will not be
        shared with anyone. You only have to fill these details once.
      </Paragraph>
      <Avatar.Icon size={256} icon="account" style={styles.profilepic} />
      <TextInput mode="outlined" label="Full Name" />
      <TextInput mode="outlined" label="E-Mail address" />
      <Divider/>
      <TextInput mode="outlined" label="Mobile Number" />
      <Button mode="text" 
      icon="message-text-outline" 
      style={styles.submit}
      onPress={() => navigation.navigate('verify')}>
        Verify Mobile Number
      </Button>
    </View>
  );
};

export default DetailForm;

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
