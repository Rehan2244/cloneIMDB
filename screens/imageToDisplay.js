import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacityBase,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ImageContainer = props => {
  return (
    <View>
      <Image style={styles.poster} source={{ uri: props.address }} />
      <Text style={{ alignItems: "center" }}>{props.name} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  poster: {
    height: 300,
    width: 200,
  },
  posterView: {
    marginTop: 20,
    alignItems: "center",
  },
});
export default ImageContainer;
