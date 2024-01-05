import React, { useState } from 'react';
import { Text, Image, TouchableOpacity, Linking, Animated } from 'react-native';
import { styles } from './AppStyles';

const ListItem = ({ item }) => {

  const [scaleValue] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    Linking.openURL(item.url).catch(err => console.error("Couldn't load page", err));
  };

  const animatedStyle = {
    transform: [{ scale: scaleValue }],
  };

  const updatedDate = new Date(item.updated_at);
  const dateString = `${updatedDate.toLocaleDateString()} ${updatedDate.toLocaleTimeString()}`;

  return (
    <Animated.View style={[styles.listItem, animatedStyle]}>
      <TouchableOpacity
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.7}
        style={{ flex: 1 }}
      >
        <Image source={{ uri: item.image_url }} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDate}>{dateString}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ListItem;
