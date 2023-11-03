import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

const Home = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <SafeAreaView style={{ backgroundColor: "#1E1E1E", flex: 1 }}>
      <View style={{ padding: 22 }}>
        <Image
          style={{
            alignSelf: "center",
            marginBottom: 12,
            width: 40,
            height: 40,
          }}
          source={require("../assets/star1.png")}
        />

        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            paddingHorizontal: 22,
            marginBottom: 24,
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: 600, color: "white" }}>
            Ideate
          </Text>
          <Text style={{ fontSize: 22, fontWeight: 600, color: "#FDAB72" }}>
            Store
          </Text>
        </View>
        <Text style={{ fontSize: 30, fontWeight: 500, color: "#fff" }}>
          Be Unique
        </Text>
        <Text style={{ fontSize: 28, fontWeight: 400, color: "#fff" }}>
          With your own style
        </Text>
        <FlatList
          data={[0, 0, 0]}
          horizontal
          style={{ width, marginLeft: -22 }}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: width,
                }}
              >
                <View
                  style={{
                    marginVertical: 22,
                    padding: 12,
                    width: 260,
                    borderWidth: 2,
                    borderRadius: 125,
                    borderColor: "#FDAB72",
                  }}
                >
                  <Image
                    style={{
                      borderRadius: 200,
                      width: 230,
                      height: 360,
                    }}
                    source={require("../assets/home-img.png")}
                  />
                </View>
              </View>
            );
          }}
        />

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {[0, 0, 0].map((_, index) => {
            return (
              <FontAwesome
                style={{ marginHorizontal: 8 }}
                name="circle"
                size={15}
                color={currentIndex == index ? "#FDAB72" : "#fff"}
              />
            );
          })}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Dashboard")}
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: "#FDAB72",
            borderRadius: 24,
            paddingVertical: 14,
            margin: 18,
          }}
        >
          <Text
            style={{
              marginRight: 6,
              color: "#fff",
              fontSize: 22,
              fontWeight: "400",
            }}
          >
            Get Started
          </Text>
          <FontAwesome5 name="arrow-right" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
