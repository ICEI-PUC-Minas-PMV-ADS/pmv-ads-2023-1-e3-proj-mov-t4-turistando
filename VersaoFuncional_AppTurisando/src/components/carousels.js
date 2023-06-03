import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Animated,
  useWindowDimensions,
} from "react-native";

const images = [
  "https://picsum.photos/1000/400",
  "https://picsum.photos/1000/1200",
  "https://picsum.photos/1000/800",
  
];

const Carousels = () => {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ])}
            scrollEventThrottle={1}
          >
            {images.map((image, imageIndex) => {
              return (
                <View
                  style={{ width: windowWidth, height: 250 }}
                  key={imageIndex}
                >
                  <Image source={{ uri: image }} style={styles.card} />
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {images.map((image, imageIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                ],
                outputRange: [8, 16, 8],
                extrapolate: "clamp",
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, { width }]}
                />
              );
            })}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 6,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  normalDot: {
    height: 5,
    width: 5,
    borderRadius: 4,
    backgroundColor: "#387287",
    marginHorizontal: 4,
  },
  indicatorContainer: {
    position: "absolute",
    top: 225,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Carousels;
