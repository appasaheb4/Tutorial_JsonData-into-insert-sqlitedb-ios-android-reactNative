import React, { Component } from "react";
import SQLite from "react-native-sqlite-storage";
import { localDB } from "../assets/Constants";

export default class CreateTables extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var db = SQLite.openDatabase(
      { name: localDB.dbName, readOnly: true },
      this.openCB,
      this.errorCB  
    );

    db.transaction(function(txn) {
      txn.executeSql(
        "CREATE TABLE IF NOT EXISTS " +
          localDB.tableName.tblUser +
          " (id  INTEGER PRIMARY KEY AUTOINCREMENT,dateCreated TEXT,name TEXT)",
        []
      );
      console.log("create database.");
    });
  }
    
  errorCB(err) {
    console.log("SQL Error: " + err);
  }

  successCB() {
    console.log("SQL executed fine");
  }

  openCB() {
    console.log("Database OPENED");
  }  

  render() {
    return null;
  }
}