import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>
      <Link href="/about" style={styles.link}>Go to About Page</Link>
      <Link href="/user/123" style={styles.link}>Go to User Profile Page</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    marginVertical: 10,
  },
});

export default HomePage;