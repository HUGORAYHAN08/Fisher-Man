import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../Service/Auth";
import { collection, getDocs } from "firebase/firestore";
import {
  Box,
  Center,
  FlatList,
  Flex,
  HStack,
  NativeBaseProvider,
  Image,
} from "native-base";

const FishScreen = ({ navigation }) => {
  const [dataikan, setDataIkan] = useState();

  useEffect(() => {
    getDataFish();
  }, []);

  getDataFish = async () => {
    const hasil = await getDocs(collection(db, "dataFish"));
    console.log(hasil.docs.map((doc) => doc.data()));
    setDataIkan(hasil.docs.map((doc) => doc.data()));
  };

  const renderFish = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("FishDetail", { data: item })}
      >
        <Box
          width={170}
          height={120}
          mt={5}
          m={2}
          backgroundColor="#2D3192"
          borderRadius={15}
        >
          <Flex flex={1} alignItems="center" justifyContent={"center"}>
            <Image source={{ uri: item.link }} alt="image" size="sm" w="100%" />
            <Text style={{ color: "#FFFFFF" }}>{item.nama}</Text>
          </Flex>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <NativeBaseProvider>
      <Center>
        <FlatList
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          data={dataikan}
          renderItem={renderFish}
          width={400}
        />
      </Center>
    </NativeBaseProvider>
  );
};

export default FishScreen;

const styles = StyleSheet.create({});
