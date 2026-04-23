import { View, Text, FlatList, Dimensions, Image } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

const Carousel = () => {
  const screenWidth = Dimensions.get('window').width;

  const carouselData = [
    { id: '01', image: require('../../assets/images/car1.jpg') },
    { id: '02', image: require('../../assets/images/car2.jpg') },
    { id: '03', image: require('../../assets/images/car1.jpg') },
    { id: '04', image: require('../../assets/images/car2.jpg') },
    { id: '05', image: require('../../assets/images/car1.jpg') },
    { id: '06', image: require('../../assets/images/car2.jpg') },
    { id: '07', image: require('../../assets/images/car1.jpg') },
    { id: '08', image: require('../../assets/images/car2.jpg') },
    { id: '09', image: require('../../assets/images/car1.jpg') },
    { id: '10', image: require('../../assets/images/car2.jpg') },
  ];

  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    if (carouselData.length === 0) return; // ✅ guard empty data

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = prev === carouselData.length - 1 ? 0 : prev + 1;

        if (
          flatListRef.current &&
          Number.isFinite(nextIndex) &&
          nextIndex >= 0 &&
          nextIndex < carouselData.length
        ) {
          flatListRef.current.scrollToIndex({
            index: nextIndex,
            animated: true,
          });
        }

        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getItemLayout = (_, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });

  const renderItem = ({ item }) => (
    <View>
      <Image source={item.image} style={{ width: screenWidth, height: 300 }} />
    </View>
  );

  const handleScroll = event => {
    const offsetX = event?.nativeEvent?.contentOffset?.x;

    if (offsetX == null || isNaN(offsetX) || screenWidth === 0) return;

    const index = Math.round(offsetX / screenWidth);
    const safeIndex = Math.max(0, Math.min(index, carouselData.length - 1));

    setCurrentIndex(safeIndex);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ref={flatListRef}
        data={carouselData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        getItemLayout={getItemLayout} //  added
        onScroll={handleScroll}
        scrollEventThrottle={10} // smoother scroll tracking
        onScrollToIndexFailed={info => {
          //  safety fallback
          setTimeout(() => {
            flatListRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          }, 200);
        }}
        initialNumToRender={4}
        windowSize={4}
      />
    </View>
  );
};

export default Carousel;
