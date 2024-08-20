import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome, {user?.name || 'Guest'}!
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Logout"
          onPress={() => setUser(null)}
          color="#FF6347" // Tomato color
        />
        <Button
          title="Set User"
          onPress={() => setUser({ name: 'Mathesh' })}
          color="#4682B4" // SteelBlue color
        />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5', // Light grey background
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Dark grey text color
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
});
