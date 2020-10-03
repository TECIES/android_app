import React from "react";
import {
  Button,
  Headline,
  DarkTheme,
} from "react-native-paper";
import { StyleSheet, View, Image } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
// import {a} from './assets/4x/';

const SplashOne = (props) => {
  return (
    <View style={styles.view}>
      <View style={styles.imageView}>
        <Image
          style={styles.splashimage1}
          source={require("../assets/a.png")}
        />
        <Headline style={{ textAlign: "center" }}>
          Complete your Profile
        </Headline>
      </View>
      <View style={styles.buttonsView}>
          <Button mode="outlined" onPress={props.s}>Skip</Button>
          <Button mode="outlined" onPress={() => props.props.navigation.navigate("two")}>Next</Button>
      </View>
    </View>
  );
};

const SplashTwo = (props) => {
  return (
    <View style={styles.view}>
      <View style={styles.imageView}>
        <Image
          style={styles.splashimage2}
          source={require("../assets/b.png")}
        />
        <Headline style={{ textAlign: "center" }}>
          Get The Journey Code
        </Headline>
      </View>
      <View style={styles.buttonsView}>
          <Button mode="outlined" onPress={props.s}>Skip</Button>
          <Button mode="outlined" onPress={() => props.props.navigation.navigate("three")}>Next</Button>
      </View>
    </View>
  );
};

const SplashThree = (props) => {
  return (
    <View style={styles.view}>
      <View style={styles.imageView}>
        <Image
          style={styles.splashimage3}
          source={require("../assets/c.png")}
        />
        <Headline style={{ textAlign: "center" }}>
          Be on your way!
        </Headline>
      </View>
      <View style={styles.buttonsView, {justifyContent: "center"}}>
          <Button mode="outlined" onPress={props.s}>End</Button>
      </View>
    </View>
  );
};

function endSplash(s) {
  s();
  AsyncStorage.setItem('splashShown', 'true');
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 50,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    backgroundColor: DarkTheme.colors.surface,
  },
  imageView: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonsView: {
    flexGrow: 0,
    flexDirection: "column",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  submit: {
    marginTop: 5,
    padding: 10,
    alignSelf: "flex-end",
  },
  splashimage1: {
    margin: 10,
    width: "100%",
    height: undefined,
    aspectRatio: 1.5896,
    alignSelf: "center",
  },
  splashimage2: {
    margin: 10,
    width: "100%",
    height: undefined,
    aspectRatio: 0.7734,
    alignSelf: "center",
  },
  splashimage3: {
    margin: 10,
    width: "100%",
    height: undefined,
    aspectRatio: 1.2231,
    alignSelf: "center",
  },
});

export { SplashOne, SplashTwo, SplashThree };
