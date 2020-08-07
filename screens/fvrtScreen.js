import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const deleteRecord = movieTitle => {
  // var favList = JSON.parse(sessionStorage.getItem("favourite"));
  // for (var i = 0; i < favList.length; i++) {
  //   if (favList[i].Title == movieTitle.Title) {
  //     var indexToDelete = favList.indexOf(favList[i]);
  //     favList.splice(indexToDelete, 1);
  //     sessionStorage.setItem("favourite", JSON.stringify(favList));
  //   }
  // }
  console.log(movieTitle.Title);
};
const FavouriteList = () => {
  // if (favList != null) {
  //   var record = favList;
  // } else {
  var record = JSON.parse(sessionStorage.getItem("favourite"));

  console.log(record);

  const goToMovies = navigation => {
    // navigation.navigate("about");
    console.log(navigation);
  };
  return (
    <ScrollView>
      <View>
        {record.map((item, index) => (
          <TouchableOpacity
            key={item.Title}
            style={styles.container}
            onPress={() => {
              goToMovies(item);
            }}
          >
            <Image source={{ uri: item.Poster }} style={styles.logo} />
            <Text style={styles.text}>{item.Title}</Text>
            <View
              style={{
                flexDirection: "column-reverse",
                alignItems: "flex-end",
                marginRight: 0,
              }}
            >
              <Button
                title="delete"
                onPress={() => {
                  deleteRecord(item);
                }}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <FavouriteList />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    height: 70,
    margin: 10,
    marginTop: 5,
    borderWidth: 2,
    backgroundColor: "#eff0d8",
  },
  logo: {
    height: 70,
    width: 50,
  },
});
export default ProfileScreen;
