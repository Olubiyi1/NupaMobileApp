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
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { HomeProducts } from "../../constants/products";
import ProductProps from "../../../components/productProps";
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function Homepage() {
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelecteProduct] = useState(null);

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

      {/* address */}
      <View style={styles.address}>
        <View style={styles.addText}>
          <Text
            style={[
              styles.txts,
              {
                fontSize: 20,
                fontWeight: "500",
                marginBottom: 5,
                color: "#fff",
              },
            ]}
          >
            Delivery to Home
          </Text>
          <Text
            style={[
              styles.txts,
              {
                fontSize: 16,
                fontWeight: "400",
                marginBottom: 5,
                color: "#fff",
              },
            ]}
          >
            18 Davies Street, Toronto
          </Text>
          <Text
            style={[
              styles.txts,
              {
                backgroundColor: "white",
                width: 74,
                padding: 6,
                borderRadius: 5,
                color: "#307A59E8",
                textAlign: "center",
                fontWeight: "700",
              },
            ]}
          >
            2.4 km
          </Text>
        </View>
      </View>

      {/* orders */}
      <View style={styles.order}>
        {/* Text block */}
        <View style={styles.orderText}>
          <Text
            style={[
              styles.txts,
              {
                fontSize: 20,
                fontWeight: "500",
                marginBottom: 5,
                color: "#000",
              },
            ]}
          >
            Chicken Alfredo Pasta
          </Text>
          <Text
            style={[
              styles.txts,
              {
                fontSize: 14,
                fontWeight: "400",
                marginBottom: 5,
                color: "#000",
              },
            ]}
          >
            Discount 25%
          </Text>
          <Text
            style={[
              styles.txts,
              {
                backgroundColor: "#307A59E8",
                width: 100,
                padding: 6,
                borderRadius: 5,
                textAlign: "center",
                fontWeight: "700",
                color: "#fff",
                size: 15,
              },
            ]}
          >
            Order Now
          </Text>
        </View>

        {/* Image */}
        <Image
          source={require("../../../assets/images/hro.png")}
          style={{ width: 100, height: 100, borderRadius: 8 }}
        />
      </View>

      {/* text */}
      <Text style={styles.text}>Top of the Week</Text>

      {/* item display */}
      <FlatList
        horizontal
        data={HomeProducts}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => openModal(item)}>
              <ProductProps
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
                backgroundColor:"rgba(1,1,1,0.6)",
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Image source={selectedProduct.image} 
              style={{width:"100%", borderRadius:6}}/>
              <Text style={{color:"#fff", size:20,fontFamily:"RethinkSans",textAlign:"center"}}>{selectedProduct.name}</Text>
              <Text style={{color:"#fff", size:20,fontFamily:"RethinkSans",textAlign:"center"}}>${selectedProduct.price}</Text>

              <TouchableOpacity
              onPress={()=>{
                Alert.alert("Page not available yet","Feature coming soon",
                  [
                    {
                      text:"Ok"
                    }
                  ]
                  
                )
              }}>
                <Text style={{backgroundColor:"black",padding:10,color:"#fff",textAlign:"center",width:100,borderRadius:5,
                  alignSelf:"center",marginTop:10,fontWeight:600
                }}>Add to Cart</Text>
              </TouchableOpacity>

              <Pressable onPress={() => setModalVisible(false)}>
                <EvilIcons name="close-o" size={40} color="white" style={{alignSelf:"center"}}/>
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
    padding: 15,
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
  address: {
    marginBottom: 15,
    width: "100%",
    height: 111,
    backgroundColor: "#307A59E8",
    borderRadius: 8,
    shadowColor: "#307A59E8",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 5.5,
    elevation: 10,
    justifyContent: "center",
  },
  order: {
    width: "100%",
    height: 111,
    backgroundColor: "#EBF2EF",
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  orderText: {
    flex: 1,
    paddingRight: 10,
    justifyContent: "center",
  },
  addText: {
    width: "90%",
    marginLeft: 20,
  },
  txts: {
    fontFamily: "RethinkSans",
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
