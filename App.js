import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { View, Text } from 'react-native';
import HomeScreen from './HomeScreen';

function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <HomeScreen/>
      {/* Your App's Components */}
    </AuthContext.Provider>
  );
}

export default App;
