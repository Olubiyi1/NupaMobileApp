import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  Modal,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { MenuProducts } from "../../constants/products";
import ProductProps from "../../../components/productProps";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function Homepage() {
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelecteProduct] = useState(null);

  const [activeTab, setActiveTab] = useState("All"); // default active
  // tabs for navigating
  const tabs = [
    "All",
    "Featured",
    "Top of Week",
    "Soup",
    "Seafood",
    "Crunchy",
    "Snacks",
  ];

  const handleIconPress = () => {
    console.log("Left icon pressed! Value:", search);
  };

  // set when an item is pressed

  const openModal = (item) => {
    setSelecteProduct(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Text header */}
      <View>
        <Text style={{
          fontFamily:"RethinkSans",
          fontWeight:400,
          fontSize:18,
          color:"#141414BF",
          marginBottom:5
        }}>Our Food</Text>

        <Text style={{
          fontFamily:"RethinkSans",
          fontWeight:700,
          fontSize:23,
          marginBottom:20,

          color:"#3B8363"
        }}>Special For You</Text>
      </View>

      {/* search input */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search on Kupa"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={handleIconPress}
        >
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* tabs */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10, }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 30,
            marginBottom: 20,
          }}
        >
          {tabs.map((tab) => {
            return (
              <TouchableOpacity
                key={tab}
                onPress={() => {
                  setActiveTab(tab);
                }}
                style={{
                  marginRight: 15,
                  marginBottom: 10,
                }}
              >
                <Text style={{fontWeight:activeTab === tab? 800 :500, fontFamily: "RethinkSans",}}> {tab}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* item display */}
      <FlatList
        numColumns={2}
        data={MenuProducts}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => openModal(item)}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: "auto",
              }}
            >
              <ProductProps
                style={{ width: 160 }}
                img={item.image}
                name={item.name}
                price={item.price}
              />
            </TouchableOpacity>
          );
        }}
      />

      {/* modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          {/* only show if a product is selected*/}

          {selectedProduct && (
            <View
              style={{
                width: "80%", // modal box width
                backgroundColor: "rgba(1,1,1,0.6)",
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Image
                source={selectedProduct.image}
                style={{ width: "100%", borderRadius: 6 }}
              />
              <Text
                style={{
                  color: "#fff",
                  size: 20,
                  fontFamily: "RethinkSans",
                  textAlign: "center",
                }}
              >
                {selectedProduct.name}
              </Text>
              <Text
                style={{
                  color: "#fff",
                  size: 20,
                  fontFamily: "RethinkSans",
                  textAlign: "center",
                }}
              >
                ${selectedProduct.price}
              </Text>

              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    "Page under construction",
                    "This feature will be available soon"
                  );
                }}
              >
                <Text
                  style={{
                    backgroundColor: "black",
                    padding: 10,
                    color: "#fff",
                    textAlign: "center",
                    width: 100,
                    borderRadius: 5,
                    alignSelf: "center",
                    marginTop: 10,
                    fontWeight: 600,
                  }}
                >
                  See More
                </Text>
              </TouchableOpacity>

              <Pressable onPress={() => setModalVisible(false)}>
                <EvilIcons
                  name="close-o"
                  size={40}
                  color="white"
                  style={{ alignSelf: "center" }}
                />
              </Pressable>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  searchContainer: {
    position: "relative",
    width: "100%",
    backgroundColor: "#FAFAFA",
    paddingBottom: 15,
  },
  searchInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#00000033",
    borderRadius: 8,
    paddingLeft: 40,
    paddingRight: 15,
    fontSize: 16,
  },
  iconContainer: {
    position: "absolute",
    left: 10,
    top: 13,
  },
  text: {
    fontSize: 20,
    fontFamily: "RethinkSans",
    fontWeight: "600",
    marginBottom: 10,
  },
  modal: {
    flex: 1, // cover full screen
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
});
