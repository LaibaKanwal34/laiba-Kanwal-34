import React, { PureComponent } from "react";

import {
  StyleSheet,
  Button,
  TouchableHighlight,
  Image,
  View,
  Text,
} from "react-native";

export default function logo() {
  return (
    <View style={styles.parentcont}>
      <View style={styles.container}>
        <Image
          style={styles.pic}
          source={require("../assets/Saly-1intro-image.png")}
        ></Image>
      </View>
      <View>
        <Text style={styles.text}>Discover Your</Text>
        <Text style={styles.text}>Own Dream House</Text>
        <Text style={styles.text1}>
          {" "}
          Mean taking Information from whole gaming mean Mean taking Information
          from whole gaming me Mean taking Information from whole gaming me{" "}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  parentcont: {
    height: 700,
    width: 320,
    borderRadius: 50,
    backgroundColor: "black",
  },
  text: {
    alignContent: "center",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  text1: {
    marginTop: 20,
    alignContent: "center",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  container: {
    height: 370,
    width: 320,
    borderRadius: 50,
    backgroundColor: "pink",
    alignItems: "center",
  },
  pic: {
    height: 300,
    width: 300,
  },
});
