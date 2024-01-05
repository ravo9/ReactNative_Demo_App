import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './AppStyles';
import ListItem from './ListItem';

export default function App() {
  const fixedListItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const [listItems, setListItems] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles');
        const data = await response.json();
        setListItems(data.results);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []); // The empty array ensures this effect runs only once

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ScrollView style={styles.scrollView}>
        {listItems.map((item, index) => (
          <ListItem key={item.id || index} item={item} />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
