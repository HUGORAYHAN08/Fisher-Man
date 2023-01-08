import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Divider,
  FlatList,
  Heading,
  HStack,
  Image,
  NativeBaseProvider,
  Drawer,
  ScrollView,
  Text,
} from "native-base";
import Firebase from "../../Service/Firebase";
import Weather from "../WeatherScreen/Weather";
import {
  ImageHeaderScrollView,
  TriggeringView,
} from "react-native-image-header-scroll-view";

const HomeScreen = ({ navigation }) => {
  const [berita, setBerita] = useState([
    {
      judul: "Waspada Gelompbang Tinggi Hingga 2,5M",
      deskripsi:
        "BMKG Maritim Tanjung Perak Surabaya memprakirakan terjadinya gelombang tinggi di laut Jawa bagian Timur.",
      image: require("../../../assets/Berita1.png"),
      link: "https://news.detik.com/berita-jawa-timur/d-5340626/bmkg-sebut-ada-potensi-gelombang-tinggi-di-jatim-ini-rinciannya ",
      resume:
        'Surabaya - BMKG Maritim Tanjung Perak Surabaya memprakirakan terjadinya gelombang tinggi di laut Jawa bagian Timur. BMKG juga menyampaikan warning gelombang laut hingga 2,5 meter."Ketinggian gelombang laut di Selat Madura antara 0,3-1,0 m. Laut Jawa bagian Timur antara 0,5-1,8 m dan Samudera Hindia Selatan Jatim antara 2.0-4.8 m,". kata Kordinator Bidang Observasi dan Informasi BMKG Maritim Tanjung Perak Surabaya Sutarno saat dihubungi detikJatim, Selasa (23/5/2022).',
    },
    {
      judul: ' Dinas Kelautan Jatim Buka "Gerai Jebol Pepes Ikan" ',
      deskripsi:
        "Dinas kelautan dan perikanan provinsi Jawa Timur (DKP Jatim) membuka gerai",
      image: require("../../../assets/Berita2.png"),
      link: "https://maritim.bmkg.go.id/prakiraan/satu_minggu_kedepan/?hari=2",
      resume:
        'Gresik (ANTARA) - Dinas Kelautan dan Perikanan Provinsi Jawa Timur (DKP Jatim) membuka gerai pendaftaran dokumen perizinan kapal perikanan yang terdiri dari Nomor Induk Berusaha (NIB), Surat Izin Usaha Perikanan (SIUP) dan Tanda Daftar Kapal Perikanan (TDPK) saat Festival Nelayan Gresik 2022 di Kecamatan Ujungpangkah, Desa Pangkahwetan, Kabupaten Gresik, Kamis. "Sesuai dengan programnya Dinas Kelautan dan Perikanan Provinsi Jatim, yaitu Gerai Jebol Pepes Ikan, yang artinya gerai jemput bola, pelayanan perizinan usaha perikanan dan kelautan," kata Ketua Tim Perizinan Perikanan Tangkap DKP Jatim Wahyuni Lestari Ningsih. ',
    },
    {
      judul: "BMKG Sebut Ada Potensi Gelombang Tinggi di Jatim",
      deskripsi:
        "BMKG Maritim mengeluarkan peringatan dini gelombang tinggi di perairan jawa",
      image: require("../../../assets/Berita3.png"),
      link: "https://jatim.antaranews.com/berita/657577/hari-ini-jawa-timur-bagian-selatan-berpotensi-gelombang-laut-tinggi ",
      resume:
        'Surabaya - BMKG Maritim mengeluarkan peringatan dini gelombang tinggi di perairan Jawa Timur. Tinggi gelombang bisa mencapai 2,5-4 meter. Adanya gelombang tinggi ini tidak menutup kemungkinan potensi kejadian di Manado terjadi di Jatim. "Gelombang tinggi Manado, potensi ada di Jatim. Sepanjang cuaca buruk masuk di wilayah perairan Jatim, itu potensi tentu ada," ujar Kepala BMKG Maritim Kelas II Tanjung Perak, Taufiq Hermawan kepada detikcom, Selasa (19/1/2021).',
    },
  ]);

  const renderBerita = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("BeritaDetail", { data: item })}
      >
        <Box mt={5} pl={2} pr={2} alignItems={"center"}>
          <HStack>
            <Box w={220} alignItems={"stretch"}>
              <Heading size={"sm"}>{item.judul}</Heading>
              <Text>{item.deskripsi}</Text>
            </Box>
            <Image
              w={"150px"}
              h={"120px"}
              source={item.image}
              alt={item.judul}
              borderRadius={5}
            />
          </HStack>
          <Divider mt={2} />
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <ImageHeaderScrollView
      maxHeight={450}
      minHeight={0}
      backgroundColor="#2D3192"
      renderForeground={() => (
        <NativeBaseProvider style={styles.weather}>
          <Weather />
        </NativeBaseProvider>
      )}
    >
      <NativeBaseProvider>
        <View style={{ height: 1000 }}>
          <ScrollView horizontal={true} style={{ width: "100%" }}>
            <FlatList data={berita} renderItem={renderBerita} width="100%" />
          </ScrollView>
        </View>
      </NativeBaseProvider>
    </ImageHeaderScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
