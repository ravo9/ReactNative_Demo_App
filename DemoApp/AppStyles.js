import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  listItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    overflow: 'hidden', // This ensures the image corners are also rounded
  },
  cardImage: {
    width: '100%',
    height: 200, // Set a fixed height or make it responsive to your layout
    resizeMode: 'cover', // This ensures the image covers the area nicely
  },
  cardTitle: {
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDate: {
    fontSize: 12,
    color: '#666',
    padding: 10,
    textAlign: 'right',
  },
});
