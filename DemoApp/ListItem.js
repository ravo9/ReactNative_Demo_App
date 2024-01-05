import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './AppStyles';

const ListItem = ({ item }) => (
  <View style={styles.listItem}>
    <Image source={{ uri: item.image_url }} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{item.title}</Text>
  </View>
);

export default ListItem;
