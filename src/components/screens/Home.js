import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import SeachBar from "../components/SeachBar";
import { useDispatch, useSelector } from "react-redux";
import { AddCity, RemoveCity } from "../../reduxstore/Actions";
import { Button } from "react-native";

export default function Home() {
  const [serachResult, setSerachResult] = useState(null);
  const cityList = useSelector((state) => state);

  const dispatch = useDispatch();
  
  let handleAddCity = () => {
    let boolean = cityList.some((city) => city.id === serachResult.id);
    if (boolean) {
      alert("city alerady present in the List");
    } else {
      dispatch(AddCity(serachResult));
    }
  };
  return (
    <ImageBackground
      source={{
        uri: "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701414098.jpg",
      }}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.container}>
          <View
            style={{
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              padding: 5,
              position: "relative",
            }}
          >
            <SeachBar
              serachResult={serachResult}
              setSerachResult={setSerachResult}
            />
          </View>

          <View
            style={{
              // flex: 1.6,
              height: 250,
              backgroundColor: "transparent",
              marginVertical: 5,
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {serachResult && (
              <>
                <View style={styles.dashboard}>
                  <View style={styles.line}>
                    <Text style={{ color: "#fff", fontSize: 15 }}>
                      {serachResult.name}
                    </Text>
                  </View>
                  <View style={styles.miniBox}>
                    <Image
                      style={styles.WeatherImage}
                      source={{
                        uri: "https://raw.githubusercontent.com/sivasankar5456/weatherApp/main/public/images/sun.png",
                      }}
                    />
                    <Text style={{ color: "#fff", fontSize: 15 }}>
                      Temp: {serachResult.main.temp}
                      <View>
                        <Text style={{ color: "#fff", fontSize: 14 }}> 0</Text>
                      </View>
                      <Text style={{ color: "#fff", fontSize: 15 }}> C</Text>
                    </Text>
                  </View>
                  <View style={styles.miniBox}>
                    <Image
                      style={styles.WeatherImage}
                      source={{
                        uri: "https://github.com/sivasankar5456/weatherApp/blob/main/public/images/Humidity.png?raw=true",
                      }}
                    />
                    <Text style={{ color: "#fff", fontSize: 15 }}>
                      Humidity: {serachResult.main.humidity}{" "}
                      <View>
                        <Text style={{ color: "#fff", fontSize: 14 }}>0</Text>
                      </View>
                      <Text style={{ color: "#fff", fontSize: 15 }}> C</Text>
                    </Text>
                  </View>
                  <View style={styles.miniBox}>
                    <Image
                      style={styles.WeatherImage}
                      source={{
                        uri: "https://raw.githubusercontent.com/sivasankar5456/weatherApp/main/public/images/wind.png",
                      }}
                    />
                    <Text style={{ color: "#fff", fontSize: 15 }}>
                      Wind: speed: {serachResult.wind.speed}{" "}
                      <View>
                        <Text style={{ color: "#fff", fontSize: 14 }}>0</Text>
                      </View>
                      <Text style={{ color: "#fff", fontSize: 15 }}> C</Text>
                    </Text>
                  </View>
                  {serachResult && serachResult.name !== "Bengaluru" && (
                    <Button title="Add city to list" onPress={handleAddCity} />
                  )}
                </View>
              </>
            )}
          </View>
          <View
            style={{ height: 100, flex: 2, backgroundColor: "transparent" }}
          >
            <FlatList
              data={cityList}
              keyExtractor={(item, index) => index + item}
              renderItem={({ item, index }) => {
                // console.log('====================================');
                // console.log(item.wind.speed);
                // console.log('====================================');
                return (
                  <View style={styles.dashboard}>
                    <View style={styles.line}>
                      <Text style={{ color: "#fff", fontSize: 15 }}>
                        {item.name}
                      </Text>
                    </View>
                    <View style={styles.miniBox}>
                      <Image
                        style={styles.WeatherImage}
                        source={{
                          uri: "https://raw.githubusercontent.com/sivasankar5456/weatherApp/main/public/images/sun.png",
                        }}
                      />
                      <Text style={{ color: "#fff", fontSize: 15 }}>
                        Temp: {item.main.temp}
                        <View>
                          <Text style={{ color: "#fff", fontSize: 14 }}>
                            {" "}
                            0
                          </Text>
                        </View>
                        <Text style={{ color: "#fff", fontSize: 15 }}> C</Text>
                      </Text>
                    </View>
                    <View style={styles.miniBox}>
                      <Image
                        style={styles.WeatherImage}
                        source={{
                          uri: "https://github.com/sivasankar5456/weatherApp/blob/main/public/images/Humidity.png?raw=true",
                        }}
                      />
                      <Text style={{ color: "#fff", fontSize: 15 }}>
                        Humidity: {item.main.humidity}{" "}
                        <View>
                          <Text style={{ color: "#fff", fontSize: 14 }}>0</Text>
                        </View>
                        <Text style={{ color: "#fff", fontSize: 15 }}> C</Text>
                      </Text>
                    </View>
                    <View style={styles.miniBox}>
                      <Image
                        style={styles.WeatherImage}
                        source={{
                          uri: "https://raw.githubusercontent.com/sivasankar5456/weatherApp/main/public/images/wind.png",
                        }}
                      />
                      <Text style={{ color: "#fff", fontSize: 15 }}>
                        Wind: speed: {item.wind.speed}{" "}
                        <View>
                          <Text style={{ color: "#fff", fontSize: 14 }}>0</Text>
                        </View>
                        <Text style={{ color: "#fff", fontSize: 15 }}> C</Text>
                      </Text>
                    </View>
                    <Button
                      title="Remove city from list"
                      onPress={() => dispatch(RemoveCity(item.id))}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  dashboard: {
    height: 230,
    width: 340,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    margin: 5,
    padding: 10,
    alignItems: "center",
    position: "relative",
  },
  line: {
    width: 320,
    backgroundColor: "transparent",
    margin: 5,
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  miniBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  WeatherImage: {
    height: 40,
    width: 40,
  },
});

//rgba(0, 0, 100, 0.450)
