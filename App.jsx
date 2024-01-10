import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import OctionsIcon from 'react-native-vector-icons/Octicons';

function App() {
  const [storeData, setStoreData] = useState();

  const apiUrl =
    'https://storeapi.wekreta.in/api/v4/product/customer?id=0&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&productName=&categoryName=serveware,kitchenware&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=1&itemsPerPage=27&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100';

  const getStoreData = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setStoreData(data.object);
    console.log(data);
  };

  useEffect(() => {
    getStoreData();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.main}>
        <View style={styles.header}>
          <View style={styles.leftContainer}>
            <TouchableOpacity>
              <AntDesignIcon name="arrowleft" size={20} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerTxt}>Household</Text>
          </View>
          <View style={styles.rightContainer}>
            <TouchableOpacity>
              <AntDesignIcon name="search1" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesignIcon name="hearto" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesignIcon name="shoppingcart" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.subHeader}>
          <Text>{storeData && storeData.length}/100 Products</Text>
          <View style={styles.subHeaderRightContainer}>
            <TouchableOpacity style={styles.sort}>
              <OctionsIcon name="sort-asc" size={14} color="#000" />
              <Text style={{color: '#000'}}>Sort</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sort}>
              <FontAwesome6Icon name="sliders" size={12} color="#000" />
              <Text style={{color: '#000'}}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainContainer}>
          {storeData &&
            storeData.map(item => (
              <View key={item.id} style={styles.productContainer}>
                <TouchableOpacity style={styles.favouriteIcon}>
                  <AntDesignIcon name="hearto" size={18} color="#000" />
                </TouchableOpacity>
                <Image src={item.mediaUrl} style={styles.productImage} />
                <Text style={styles.productNameTxt}>{item.name}</Text>
                <Text style={styles.productDescTxt}>{item.description}</Text>
                <Text style={styles.productPriceTxt}>₹2,999</Text>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    width: '100%',
    borderBottomWidth: 0.75,
    borderColor: '#D3D3D3',
    paddingVertical: 16,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTxt: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  rightContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 8,
  },

  subHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  subHeaderRightContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 16,
  },
  sort: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  mainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },

  productContainer: {
    width: 190,
    marginBottom: 4,
    position: 'relative',
  },

  favouriteIcon: {
    position: 'absolute',
    top: 10,
    zIndex: 1,
    right: 10,
  },

  productImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 200,
    borderRadius: 4,
  },
  productNameTxt: {
    fontWeight: '600',
    color: '#000',
  },
  productDescTxt: {
    color: '#000',
  },
  productPriceTxt: {
    color: '#000',
    fontSize: 16,
  },
});

export default App;
