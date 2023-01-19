import { StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import { Box, Button } from "native-base";
import Firebase from "../../Service/Firebase";
import ButtonN from "../../Components/MyButton";
import MyButton from "../../Components/MyButton";

const SettingScreen = ({ navigation }) => {
  const createThreeButtonAlert = () =>
    Alert.alert("Yakin Anda mau Keluar", "Coba Pikirkan Lagi !!!", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK", onPress: () => Firebase.Signout() },
    ]);

  return (
    <Box>
      <MyButton
        text="Pengaturan Akun"
        onPress={() => navigation.navigate("AkunScreen")}
      />
      <MyButton text="Kebijakan Privasi" />
      <MyButton text="Pusat Bantuan" />
      <MyButton text="Pelabuhan Jawa Timur" />
      <MyButton text="Keluar" onPress={createThreeButtonAlert} />
    </Box>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
