/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import CreateTables from "./src/assets/CreateTables";

//TODO: Custome class
import { localDB } from "./src/assets/Constants";
var dbOperation = require("./src/assets/DBOperation");

export default class App extends Component {
  //TODO: func click_SaveJSONDATA
  async click_JsonData() {
    const resultUserDetial = await dbOperation.insertUserDetailsData(
      localDB.tableName.tblUser,
      "10-01-2019"
    );
    if (resultUserDetial) {
      console.log("insert data!!!!!!");
    }  
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.click_JsonData()}
          title="Save"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <CreateTables />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
