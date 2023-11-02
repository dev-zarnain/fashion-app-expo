import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  SimpleLineIcons,
  Feather,
  Ionicons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";

const Home = ({ navigation }) => {
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
        <View
          style={{
            margin: 30,
            padding: 12,
            alignSelf: "center",
            width: 260,
            justifyContent: "center",
            alignItems: "center",
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
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <FontAwesome name="circle" size={15} color="#fff" />
          <FontAwesome
            style={{ marginHorizontal: 8 }}
            name="circle"
            size={14}
            color="#FDAB72"
          />
          <FontAwesome name="circle" size={15} color="#fff" />
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
