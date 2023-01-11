import { Alert, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Input,
  NativeBaseProvider,
  VStack,
  Text,
  Button,
} from "native-base";

const BBMScreen = () => {
  const [litter, setLitter] = useState();
  const [jarak, setJarak] = useState();

  cobaPertama = () => {
    console.log(litter);
    if (litter == undefined || litter == 0) {
      return Alert.alert("Mohon Masukan Data");
    } else {
      const total = 5 * litter;
      setJarak(total);
    }
  };

  return (
    <NativeBaseProvider>
      <Box>
        <VStack>
          <Center>
            <Image
              source={require("../../../assets/LogoApp.png")}
              alt={"Logo App"}
              size="lg"
              w={"300px"}
              h={"150px"}
            />
            <Heading>Masukan Jumlah BBM</Heading>
            <Input
              variant="underlined"
              placeholder="Maukan BBm"
              mt={18}
              w={300}
              fontSize={20}
              value={litter}
              onChangeText={(e) => setLitter(e)}
            />
            <Box>
              <Heading textAlign={"center"}>Rincian</Heading>
              <HStack space={5}>
                <Text fontSize="2xl">Jarak</Text>
                <Text fontSize="2xl">:</Text>
                <Text fontSize="2xl">{jarak}</Text>
                <Text fontSize="2xl">KM</Text>
              </HStack>
            </Box>
            <Button onPress={cobaPertama} w={300} mt={"80%"}>
              <Text>Submit</Text>
            </Button>
          </Center>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default BBMScreen;

const styles = StyleSheet.create({});
