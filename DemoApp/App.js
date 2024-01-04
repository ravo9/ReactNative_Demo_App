import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const listItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ScrollView style={styles.scrollView}>
        {listItems.map((item, index) => (
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
