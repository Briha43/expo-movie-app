import {View,Text,Button,TextInput,TouchableOpacity,StyleSheet,Image,FlatList,} from "react-native";
import { useState } from "react";
const API_KEY = process.env.EXPO_PUBLIC_OMDB_API_KEY;

let res = await fetch(
  `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}`,
);

const Movie = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [movieList, setMovieList] = useState();
  const handleInputChange = (inputText) => {
    setSearchText(inputText);
  };
  const handleSeachButton = async () => {
    console.log(searchText);
    if (!API_KEY) {
      console.error("API key not found");
      return;
    }

    let res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}`,
    );
    let moviesData = await res.json();
    console.log(moviesData.Search);
    setMovieList(moviesData.Search);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="find a movie here"
        style={styles.searchInput}
        value={searchText}
        onChangeText={handleInputChange}
      ></TextInput>
      <TouchableOpacity style={styles.searchBtn} onPress={handleSeachButton}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          search Movie
        </Text>
      </TouchableOpacity>
      <View style={{ marginBottom: 120 }}>
        {movieList && (
          <Text
            style={{ marginVertical: 10, textAlign: "center", fontWeight: 800 }}
          >
            {movieList.length} Movies Found
          </Text>
        )}
        <FlatList
          data={movieList}
          renderItem={({ item }) => {
            return (
              <View style={styles.movieConatiner}>
                <Image
                  style={styles.movieImage}
                  source={{ uri: item.Poster }}
                ></Image>
                <Text style={styles.movieTitle}>{item.Title}</Text>
                <Text>Released year: {item.Year}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
    // borderColor:'#000',
    // borderWidth:1,
    padding: 10,
  },
  searchInput: {
    width: "75%",
    height: "6%",
    borderWidth: 2,
    padding: 10,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  searchBtn: {
    width: "50%",
    height: 40,
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  movieImage: {
    height: "100%",
    width: "100%",
    marginBottom: 2,
  },
  movieConatiner: {
    alignItems: "center",
    marginBottom: 40,
    borderWidth: 1,
    borderColor: "orange",
    flex: 1,
    height: 200,
    width: "96%",
  },
});

export default Movie;
