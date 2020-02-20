import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { Header } from "./Header";
import { TouchableOpacity } from "react-native";
import { Appbar, Avatar, useTheme } from "react-native-paper";
import LoginScreen from "./LoginScreen";

import Feed from "./Feed";
import Details from "./Details";

const Stack = createStackNavigator();

const Header = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;
  const theme = useTheme();
  return (
    <Appbar.Header theme={{ colors: { primary: theme.colors.background } }}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.goBack}
          color={theme.colors.text}
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Avatar.Image size={40} source={require("../assets/asaba.jpg")} />
        </TouchableOpacity>
      )}
      {/* <Appbar.Content
        title={
          previous ? title : <MaterialCommunityIcons name="twitter" size={40} />
        }
      /> */}
    </Appbar.Header>
  );
};

export const FeedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        )
      }}
    >
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{ headerTitle: "Twitter" }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: "Tweet" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerTitle: "Login" }}
      />
    </Stack.Navigator>
  );
};
