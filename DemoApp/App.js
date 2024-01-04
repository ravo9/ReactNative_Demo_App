import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  const fixedListItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        // Replace with your API URL
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles');
        const data = await response.json();

        setListItems(data); // Update the state with the fetched data
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
        {fixedListItems.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    width: '100%',
  },
  listItem: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
