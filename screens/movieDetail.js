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

const movieDetail = props => {
  const moviesData = JSON.parse(sessionStorage.getItem("movies"));
  var fvrt = [];
  console.log(moviesData);
  var found = true;
  const addToFvrt = () => {
    var favList = JSON.parse(sessionStorage.getItem("favourite"));
    // if (
    //   favList.includes(moviesData.Search[localStorage.getItem("aboutMovie")])
    // ) {
    //   found = true;
    // }
    if (found) {
      fvrt.push(moviesData.Search[localStorage.getItem("aboutMovie")]);
      console.log("Added");
      console.log(fvrt);
      found = false;
      favList.push(moviesData.Search[localStorage.getItem("aboutMovie")]);
      sessionStorage.setItem("favourite", JSON.stringify(favList));
    } else {
      alert("Already Added to favourite");
      console.log(fvrt);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Image
          style={styles.logo}
          source={{
            uri: moviesData.Search[localStorage.getItem("aboutMovie")].Poster,
          }}
        />
      </View>
      <View style={styles.about}>
        <Text>
          Title:{moviesData.Search[localStorage.getItem("aboutMovie")].Title}
        </Text>
        <Text>
          Year of Release:
          {moviesData.Search[localStorage.getItem("aboutMovie")].Year}
        </Text>
        <Text>
          Type:
          {moviesData.Search[localStorage.getItem("aboutMovie")].Type}
        </Text>
        <Text>
          IMDB id:
          {moviesData.Search[localStorage.getItem("aboutMovie")].imdbID}
        </Text>
      </View>
      <View style={styles.favTab}>
        <Button onPress={addToFvrt} title="Add to Favourite" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  about: {
    backgroundColor: "cyan",
    flexWrap: "wrap",
    width: "70%",
    height: "75%",
  },
  container: {
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  favTab: {
    paddingTop: 30,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 5,
    width: "100%",
  },
  logo: {
    height: 140,
    width: 100,
  },
  upper: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default movieDetail;
