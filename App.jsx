/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [images, setImages] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const API_URL =
    'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s';

  const IMAGE_SIZE = 80;

  const fetchImagesFromApi = async () => {
    const data = await fetch(API_URL);

    const results = await data.json();

    console.log(results.photos.photo);
    setImages(results.photos.photo);
  };

  useEffect(() => {
    fetchImagesFromApi();
  }, []);

  if (!images) {
    return <Text>Loading...</Text>;
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <FlatList
          data={images}
          keyExtractor={item => item.id}
          // horizontal
          numColumns={2}
          // pagingEnabled
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => setIsFullScreen(!isFullScreen)}
                style={{
                  width: 'auto',
                  height: 200,
                  flex: 1,
                  borderWidth: 1,
                  borderColor: isDarkMode ? Colors.black : Colors.white,
                }}>
                <Image
                  source={{uri: item.url_s}}
                  style={[StyleSheet.absoluteFillObject]}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
