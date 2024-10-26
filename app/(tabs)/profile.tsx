import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Bagian Header */}
      <Text style={styles.greeting}>Halo,</Text>
      <Text style={styles.name}>Amalia Priliantini</Text>
      <Text style={styles.nim}>( 23.51.0009 )</Text>

      {/* Menu Pilihan */}
      <View style={styles.menuContainer}>
        <View style={styles.menuItem}>
          <Ionicons name="book-outline" size={24} color="#2c3e50" /> 
          <Text style={styles.menuText}>KRS</Text>
        </View>
        <View style={styles.menuItem}>
        <Ionicons name="document-text-outline" size={24} color="#2c3e50" />
          <Text style={styles.menuText}>Nilai</Text>
        </View>
        <View style={styles.menuItem}>
        <Ionicons name="time-outline" size={24} color="#2c3e50" />
          <Text style={styles.menuText}>Presensi</Text>
        </View>
      </View>

      {/* Bagian Jadwal Kuliah */}
      <View style={styles.scheduleContainer}>
        <Text style={styles.scheduleHeader}>Jadwal Kuliah</Text>
        <Text style={styles.scheduleText}>Jadwal kuliah tidak tersedia</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 50,
  
  },
  greeting: {
    fontSize: 24,
    color: '#000',
  },
  name: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 2,
  },
  nim: {
    fontSize: 18,
    color: '#2980b9',
    marginBottom: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    marginTop: 20,
  },
  menuItem: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    width: '30%',
  },
  menuText: {
    fontSize: 18,
  },
  scheduleContainer: {
    marginTop: 16,
  },
  scheduleHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scheduleText: {
    fontSize: 16,
    color: '#888',
  },
});

export default App;
