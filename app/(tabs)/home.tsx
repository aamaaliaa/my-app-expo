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
      <View style={styles.menuBox}>
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
    flex: 1,
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
  menuBox: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f9f9f9', // Outer box background
    marginBottom: 30,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between the 3 small boxes
  },
  menuItem: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e6e6e6', // Background for each small box
    borderRadius: 8,
    width: '30%', // Ensure each box is 30% of the parent container
    borderWidth: 1,
    borderColor: '#ccc', // Border for each small box
  },
  menuText: {
    fontSize: 18,
    marginTop: 8,
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
