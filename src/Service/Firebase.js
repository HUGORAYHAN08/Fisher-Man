// import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Alert } from "react-native";
import { Auth } from "./Auth";
// const navigation = useNavigation();

export const keyWeather = {
  apikey: `56709fad06fcd50734c856830771bfa3`,
};

const Signin = (email, password) => {
  if (!email || !password) {
    return Alert.alert("Mohon Masukan Data dengan Lengkap");
  }
  return signInWithEmailAndPassword(Auth, email, password)
    .then(() => {})
    .catch((err) => Alert.alert(err.code, err.message));
};

const Signup = (email, password) => {
  if (!email || !password) {
    return Alert.alert("Mohon Masukan Data dengan Lengkap");
  }
  return createUserWithEmailAndPassword(Auth, email, password)
    .then(() => {})
    .catch((err) => Alert.alert(err.code, err.message));
};

const Signout = () => {
  return Auth.signOut()
    .then(() => {})
    .catch((error) => alert(error.message));
};

const Firebase = {
  Signup,
  Signin,
  Signout,
};
export default Firebase;