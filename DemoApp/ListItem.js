import React from 'react';
import { Text, Image, TouchableOpacity, Linking } from 'react-native';
import { styles } from './AppStyles';

const ListItem = ({ item }) => {
  const handlePress = () => {
    Linking.openURL(item.url).catch(err => console.error("Couldn't load page", err));
  };

  const updatedDate = new Date(item.updated_at);
  const dateString = `${updatedDate.toLocaleDateString()} ${updatedDate.toLocaleTimeString()}`;

  return (
    <TouchableOpacity onPress={handlePress} style={styles.listItem}>
      <Image source={{ uri: item.image_url }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDate}>{dateString}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;
