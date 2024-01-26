import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import OctIcons from 'react-native-vector-icons/Octicons';

function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Swiper
        containerStyle={{
          backgroundColor: 'transparent',
        }}
        cards={['#7BD3EA', '#A1EEBD', '#FFCF81', '#EE7214', '#AF2655']}
        onSwipedLeft={() => {
          console.log('PASS');
        }}
        onSwipedRight={() => {
          console.log('LIKE');
        }}
        renderCard={card => {
          return (
            <View
              style={{
                backgroundColor: card,
                height: '80%',
                borderRadius: 10,
                marginTop: 20,
              }}></View>
          );
        }}
        onSwiped={cardIndex => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log('onSwipedAll');
        }}
        cardIndex={0}
        stackSize={3}
        verticalSwipe={false}
        stackSeparation={32}
        stackScale={6}
        infinite={true}
        animateOverlayLabelsOpacity={true}
        overlayLabels={{
          left: {
            element: (
              <EntypoIcons name="circle-with-cross" color="red" size={100} />
            ),
            title: 'NOPE',
            style: {
              label: {
                color: 'white',
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: -10,
              },
            },
          },

          right: {
            element: (
              <OctIcons name="check-circle-fill" color="green" size={100} />
            ),
            title: 'LIKE',
            style: {
              label: {
                color: 'white',
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: 10,
              },
            },
          },
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },

  card: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default App;
