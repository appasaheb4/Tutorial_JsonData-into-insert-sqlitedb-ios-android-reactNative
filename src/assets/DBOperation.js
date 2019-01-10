import { localDB } from "../assets/Constants";
import SQLite from "react-native-sqlite-storage";
var db = SQLite.openDatabase(localDB.dbName, "1.0", "Demo Database", 200000);

//TODO: Json Files
import userDetailsData from "../assets/userDetails.json";

//Insert tblAccountType
const insertUserDetailsData = (tblName, txtDate) => {
  return new Promise((resolve, reject) => {
    db.transaction(function(txn) {
      if (userDetailsData) {
        var len = userDetailsData.userList.length;
        if (len > 0) {
          for (let i = 0; i < len; i++) {
            var data = userDetailsData.userList[i];
            txn.executeSql(
              "INSERT INTO " +
                tblName +
                " (dateCreated,name) VALUES (:dateCreated,:name)",
              [txtDate, data.name]
            );
          }
        }
      }
      resolve(true);
    });
  });
};

module.exports = {
  insertUserDetailsData
};  

  
// export {
//     localDB
//   };