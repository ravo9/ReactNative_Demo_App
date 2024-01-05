import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import { styles } from './AppStyles';
import ListItem from './ListItem';
import fetchDataFromApi from './fetchDataFromApi';
import { API_URLS } from './config';

export default function App() {
  const { data: listItems, loading, error } = fetchDataFromApi(API_URLS.articles);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {listItems.map((item, index) => (
          <ListItem key={item.id || index} item={item} />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
