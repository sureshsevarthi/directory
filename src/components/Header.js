import React, { Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={{ color: 'white', fontSize: 24 }}>unicef directory</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 8 }}>
        <View style={styles.searchSection}>
          <TextInput placeholder=" Search for people, offices and facilities" style={styles.search} />
          <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000" />
        </View>
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
  searchIcon: {
    position: "absolute",
    right: 16,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  search: {
    flex: 1,
    height: 32,
    paddingLeft: 8,
    paddingRight: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
  }
});


/* <TextInput
  style={styles.input}
  placeholder="User Nickname"
  onChangeText={(searchString) => { this.setState({ searchString }) }}
  underlineColorAndroid="transparent"
/>
    </View >
  and use flex - direction for styling


input: {

              backgroundColor: '#fff',
                color: '#424242',
}, */