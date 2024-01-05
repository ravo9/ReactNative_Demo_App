import React from 'react';
import { Text, Image, TouchableOpacity, Linking } from 'react-native';
import { styles } from './AppStyles';

const ListItem = ({ item }) => {
  const handlePress = () => {
    Linking.openURL(item.url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.listItem}>
      <Image source={{ uri: item.image_url }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;
