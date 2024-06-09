import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const AboutPage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Page</Text>
      <Button title="Go to Home (Push)" onPress={() => router.push('/')} />
      <Button title="Go to Home (Replace)" onPress={() => router.replace('/')} />
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
});

export default AboutPage;