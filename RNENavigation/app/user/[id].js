import { View, Text, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

const UserProfilePage = () => {
  const pathname = usePathname();
  const userId = pathname.split('/').pop();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Profile Page</Text>
      <Text style={styles.text}>User ID: {userId}</Text>
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

export default UserProfilePage;