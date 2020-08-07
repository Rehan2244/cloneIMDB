import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  Switch,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { render } from "react-dom";
import ImageContainer, { imageToDisplay } from "./imageToDisplay";
import { TouchableOpacity } from "react-native-gesture-handler";

var present = false;
var url = "";

// const [val, onTextChange] = React.useState("");
class HomeScreen extends React.Component {
  state = {
    placeholder: "Enter Movie Name",
    url: "",
    switchValue: false,
    name: "",
    img: "",
    present: false,
    users: {},
    input: "",
    error: "",
  };

  searchMovie = () => {
    if (this.state.switchValue == true) {
      url =
        "https://movie-database-imdb-alternative.p.rapidapi.com/?i=" +
        this.state.input +
        "&r=json";
      console.log(url);
    } else {
      url =
        "https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=" +
        this.state.input;
      console.log(url);
    }

    if (this.state.input != "" || url != "") {
      console.log(this.state.url);
      fetch(url, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
          "x-rapidapi-key":
            "ccce076ea9mshcd8229b0ca8e0ecp169d3cjsn70b76f57f304",
        },
      })
        .then(results => results.json())
        .then(data => {
          const usersData = data;
          console.log(usersData);

          this.setState({ users: usersData });
          console.log(this.state.users);
          console.log(this.state);
          this.setState({ present: true });
          console.log(JSON.parse(sessionStorage.getItem("movies")));
          sessionStorage.setItem("movies", JSON.stringify(usersData));

          console.log(JSON.parse(sessionStorage.getItem("movies")));
        })
        .catch(err => {
          console.log(err);
          this.setState({ error: "Not Found" });
        });
    } else if (this.state.input == "") {
      alert("Please enter movie name to search");
    }
  };
  alertItemName = item => {
    localStorage.setItem("aboutMovie", this.state.users.Search.indexOf(item));
    console.log(localStorage.getItem("aboutMovie"));
    this.props.navigation.navigate("About");
  };
  render() {
    if (this.state.present === true && this.state.error != "Not Found") {
      return (
        <ScrollView style={styles.scrollView}>
          <View style={styles.middleContent}>
            <TextInput
              style={styles.txtBoxStyle}
              placeholder={this.state.placeholder}
              onChangeText={text => {
                this.setState({ input: text });
                console.log(this.state.input);
              }}
            />
            <View>
              <Switch
                value={this.state.switchValue}
                onValueChange={switchValue => {
                  this.setState({ switchValue });
                  if (switchValue == true) {
                    this.setState({ placeholder: "Enter ID" });
                  } else {
                    this.setState({ placeholder: "Enter Movie Name" });
                  }
                }}
              />
              <Text>Search With ID</Text>
            </View>
            <View style={styles.btnStyle}>
              <Button
                color={"#b2b38d"}
                title="Search"
                onPress={this.searchMovie}
              />
            </View>

            <View>
              <View style={styles.poster}>
                {this.state.users.Search.map((item, index) => (
                  <View style={{ width: "100%", borderBottomWidth: 1 }}>
                    <TouchableOpacity
                      key={item.Title}
                      style={styles.container}
                      onPress={() => this.alertItemName(item)}
                    >
                      <Text style={styles.text}>{item.Title}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      );
    } else {
      return (
        <View style={styles.middleContent}>
          <TextInput
            style={styles.txtBoxStyle}
            placeholder={this.state.placeholder}
            onChangeText={text => {
              this.setState({ input: text });
            }}
          />
          <View>
            <Switch
              value={this.state.switchValue}
              onValueChange={switchValue => {
                this.setState({ switchValue });
                if (switchValue == true) {
                  this.setState({ placeholder: "Enter ID" });
                } else {
                  this.setState({ placeholder: "Enter Movie Name" });
                }
              }}
            />
            <Text>Search With ID</Text>
          </View>
          <View style={styles.btnStyle}>
            <Button
              color={"#b2b38d"}
              style={styles.btnStyle}
              title="Search"
              onPress={this.searchMovie}
            />
          </View>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  btnStyle: {
    marginTop: 10,
    alignItems: "center",
    width: "100%",
  },
  poster: {
    marginTop: 20,
    alignItems: "flex-start",
    width: "100%",
    justifyContent: "center",
  },
  container: {
    width: "100%",

    marginTop: 5,
    height: 40,
  },
  middleContent: {
    margin: 10,
    paddingTop: 10,

    justifyContent: "flex-start",
  },
  scrollView: {
    width: "100%",
  },
  txtBoxStyle: {
    borderRadius: 5,
    height: 40,
    borderWidth: 1,
  },
});
export default HomeScreen;
