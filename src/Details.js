import * as React from "react";
import { Button, View, Text } from "react-native";

function Details({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>I am the detailed Tweet</Text>
      <Button
        onPress={() => navigation.navigate("Feed")}
        title="Go to Feed"
      />
    </View>
  );
}

export default Details;
