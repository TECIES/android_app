import React from "react";
import {DarkTheme, Provider as PaperProvider, Text, Button } from "react-native-paper";
import App from "./src/app";
import DetailForm from "./src/detailForm";
import VerifyMobile from "./src/verifyMobile";
import DriverDetails from "./src/driverDetails";
import {TokenScreen, MapScreen } from "./src/tokenScreen"
import { SplashOne, SplashTwo, SplashThree } from "./src/splash";

import { StatusBar, View } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer"

const ProfileStack = createStackNavigator();
const SplashStack = createStackNavigator();
const DrawerNav = createDrawerNavigator();

function checkSplashShown() {
  try {
  AsyncStorage.getItem("splashShown").then((item) => {
      // console.log(item);
      if (item==='true') {
          return true;
      } else {
        return false;
      }
    }
  ); 
  }catch (error) {
    return false;
  }
  return false;
}

const theme = {
  ...DarkTheme,
  roundness: 2,
  colors: {
    ...DarkTheme.colors,
    primary: '#b4e3a1',
    accent: '#62991a',
  },
};


const Main = () => {
  const [splashShown, setSplash] = React.useState(false);
  const [isLogin, setLogin] = React.useState(false);
  
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <StatusBar backgroundColor="#62991a" />

        {isLogin ? 
        <DrawerNav.Navigator>
          <DrawerNav.Screen name="token" component={TokenScreen}/>
          <DrawerNav.Screen name="map" component={MapScreen}/>
        </DrawerNav.Navigator>
        : splashShown ?
          <ProfileStack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <ProfileStack.Screen name="detail" component={DetailForm} />
            <ProfileStack.Screen name="verify" component={VerifyMobile} />
            <ProfileStack.Screen name="driver">
              {(props) => 
              <DriverDetails props={props} setLogin={setLogin} />}
            </ProfileStack.Screen>

          </ProfileStack.Navigator>
         : 
          <SplashStack.Navigator
            screenOptions={{
              headerShown: false,
              gestureDirection: "horizontal",
              gestureEnabled: true,
            }}
          >
            <SplashStack.Screen options={{ gestureEnabled: true }} name="one">
              {(props) => <SplashOne props={props} s={setSplash} />}
            </SplashStack.Screen>
            <SplashStack.Screen options={{ gestureEnabled: true }} name="two">
              {(props) => <SplashTwo props={props} s={setSplash} />}
            </SplashStack.Screen>
            <SplashStack.Screen options={{ gestureEnabled: true }} name="three">
              {(props) => <SplashThree props={props} s={setSplash} />}
            </SplashStack.Screen>
          </SplashStack.Navigator>
        }
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Main;
