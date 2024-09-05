import React from "react";
import Task from "./components/Task";

import {
  Text,
  SafeAreaView,
  View,
} from "react-native";


function App() {
  return (
    <SafeAreaView style={styles.mainContainer} >
      <View style={styles.taskwrapper}>
        {/* Heading */}
        <Text style={styles.sectionTitle}>Todo App</Text>
      </View>
      <View style={styles.items}>
        {/* item lists */}
        <Task text={'task 1'} />
        <Task text={'task 2'}/>
        <Task text={'task 3'}/>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  mainContainer: {
    flex: 1,
    backgroundColor: "#E2E2B6",
  },
  taskwrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
  items: {
    marginTop: 30,
  },
};

export default App;