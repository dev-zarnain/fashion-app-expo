import { StyleSheet, Image, Text, View, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { TextInput } from "react-native";

import arrival1 from "../assets/arrival1.png";
import arrival2 from "../assets/arrival2.png";

import categoryImg1 from "../assets/category-img1.png";
import categoryImg2 from "../assets/category-img2.png";
import categoryImg3 from "../assets/category-img3.png";
import categoryImg4 from "../assets/category-img4.png";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

const newArrivals = [
  {
    img: arrival1,
  },
  {
    img: arrival2,
  },
];
const Categories = [
  {
    img: categoryImg1,
    title: "Girls",
  },
  {
    img: categoryImg2,
    title: "Boys",
  },
  {
    img: categoryImg3,
    title: "Kids",
  },
  {
    img: categoryImg4,
    title: "Couples",
  },
];

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 28,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              padding: 8,
              borderRadius: 28,
            }}
          >
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../assets/star1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              padding: 12,
              borderRadius: 28,
            }}
          >
            <Ionicons name="grid" size={32} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ paddingLeft: 22 }}>
          <View style={{ marginVertical: 14 }}>
            <Text style={{ fontSize: 30, fontWeight: 500, color: "black" }}>
              Be Unique
            </Text>
            <Text style={{ fontSize: 28, fontWeight: 400, color: "black" }}>
              With your own style
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                padding: 2,
                height: 50,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
                width: 250,
                borderRadius: 18,
              }}
            >
              <Feather
                style={{ marginHorizontal: 8 }}
                name="search"
                size={24}
                color="black"
              />
              <TextInput
                style={{ height: 70, width: "90%", fontSize: 16 }}
                placeholder="Search your style"
              />
            </View>
            <TouchableOpacity
              style={{
                marginRight: 24,
                backgroundColor: "#FDAB72",
                borderRadius: 18,
                paddingHorizontal: 16,
                paddingVertical: 14,
              }}
            >
              <FontAwesome5 name="sliders-h" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingRight: 22,
              paddingVertical: 14,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>New Arrival</Text>
            <Text style={{ color: "grey" }}>See all</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={newArrivals}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("Details")}>
                <Image
                  style={{
                    borderRadius: 22,
                    marginRight: 22,
                    width: 220,
                    height: 300,
                  }}
                  source={item.img}
                />
              </TouchableOpacity>
            )}
          />
          <View
            style={{
              paddingRight: 22,
              paddingVertical: 14,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>Categories</Text>
            <Text style={{ color: "grey" }}>See all</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={Categories}
            renderItem={({ item }) => (
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Category")}
                >
                  <Image
                    style={{
                      borderRadius: 50,
                      marginRight: 22,
                      width: 100,
                      height: 150,
                    }}
                    source={item.img}
                  />
                </TouchableOpacity>
                <Text style={{ marginRight: 22, marginTop: 8 }}>
                  {item.title}
                </Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
