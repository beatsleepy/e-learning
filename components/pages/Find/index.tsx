import { useState } from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";

import { Navbar } from "../../Navbar";

export function Find() {
  return (
    <>
      <Navbar />
      <View style={styles.container}>
        <View>
          <Text>Find</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor:
      "linear-gradient( -45deg, rgba(229, 243, 255, 1) 0%,  rgba(247, 252, 255, 1) 100% )",
  },
});
