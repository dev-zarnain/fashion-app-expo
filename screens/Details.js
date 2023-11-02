import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

const Details = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 22,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: "white", padding: 14, borderRadius: 30 }}
          >
            <AntDesign name="arrowleft" size={25} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 22, fontWeight: 600 }}>Short Cardigan</Text>
          <TouchableOpacity
            style={{ backgroundColor: "white", padding: 14, borderRadius: 30 }}
          >
            <AntDesign name="heart" size={25} color="#FDAB72" />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", paddingLeft: 22 }}>
          <View
            style={{
              marginVertical: 22,
              backgroundColor: "white",
              width: 74,
              height: 278,
              justifyContent: "space-evenly",
              alignItems: "center",
              borderRadius: 38,
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: "grey", fontSize: 22, fontWeight: 600 }}>
                S
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: "grey", fontSize: 22, fontWeight: 600 }}>
                M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: "grey", fontSize: 22, fontWeight: 600 }}>
                L
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: "grey", fontSize: 22, fontWeight: 600 }}>
                XL
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            style={{ marginHorizontal: 28, width: 265, height: 345 }}
            source={require("../assets/detail.png")}
          />
        </View>
        <View style={{ padding: 28 }}>
          <Image
            style={{ width: 320, height: 66, alignSelf: "center" }}
            source={require("../assets/detailBar.png")}
          />
          <Text style={{ marginVertical: 12, fontSize: 22, fontWeight: 500 }}>
            Description
          </Text>
          <Text style={{ color: "grey", fontSize: 16, fontWeight: 400 }}>
            Collar cardigan for summer with Luxurious texture of
            Milanses.Organization and Emphasize cool feeling with mother of perl
            button
          </Text>
          <Text style={{ marginVertical: 12, fontSize: 22, fontWeight: 500 }}>
            Price: $88.66
          </Text>
          <TouchableOpacity
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
              Add to Cart
            </Text>
            <FontAwesome name="shopping-cart" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({});
