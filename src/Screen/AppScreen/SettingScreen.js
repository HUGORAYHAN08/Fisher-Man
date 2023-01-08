import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "native-base";
import Firebase from "../../Service/Firebase";

const SettingScreen = () => {
  return (
    <View>
      <Text>SettingScreen</Text>
      <Button onPress={() => Firebase.Signout()}>Sign Out</Button>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
