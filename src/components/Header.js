import React, { Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={{ color: 'white', fontSize: 24 }}>Unicef directory</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 8 }}>
        {/* <View style={styles.searchSection}> */}
        {/* <Icon style={styles.searchIcon} name="search" size={20} color="#000" /> */}
        <TextInput placeholder=" Search for people, offices and facilities" style={styles.search} />
        {/* </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#1cabe2',
    justifyContent: "center",
    alignItems: 'center'
  },
  search: {
    height: 32,
    width: '80%',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    textAlign: 'center'
  }
});
