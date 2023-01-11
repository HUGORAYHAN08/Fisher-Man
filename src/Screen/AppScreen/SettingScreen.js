import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, Button } from "native-base";
import Firebase from "../../Service/Firebase";
import ButtonN from "../../Components/MyButton";
import MyButton from "../../Components/MyButton";

const SettingScreen = () => {
  return (
    <Box>
      <MyButton text="Pengaturan Akun" />
      <MyButton text="Kebijakan Privasi" />
      <MyButton text="Pusat Bantuan" />
      <MyButton text="Pelabuhan Jawa Timur" />
      <MyButton text="Keluar" onPress={() => Firebase.Signout()} />

      {/* <Button }>Sign Out</Button> */}
    </Box>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
