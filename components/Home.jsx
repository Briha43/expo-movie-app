import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Home = ({navigation}) => {
   
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.heading}>Welcome to movie app</Text>
      <TouchableOpacity style={styles.movieBtn} onPress={()=>{navigation.navigate("Movie")}}>
        <Text style={{ color: "white", textAlign: "center",fontSize:16 }}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 600,
  },
  movieBtn: {
    padding: 10,
    backgroundColor: "orange",
    borderRadius: 10,
    marginTop:20,
    width:120,
    height:40,
  },
});

export default Home;
