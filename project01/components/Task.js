import React from "react";

import {
   Text,
   View,
   StyleSheet,
   TouchableOpacity,
} from "react-native";


const Task = (props) => {
   return (
      <View style={styles.taskwrapper}>
         <View style={styles.itemsLeft}>
            <TouchableOpacity>
               <Text style={styles.sectionTitle}>{props.text}</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.circular}>
            <Text style={styles.sectionTitle}>❌</Text>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   taskwrapper: {
      paddingHorizontal: 30,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 20,
      padding: 15,
   },
   itemsLeft: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#C68FE6",
   },
   sectionTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#000",
   },
});

export default Task;