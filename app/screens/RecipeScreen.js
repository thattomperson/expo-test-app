import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';



export default function RecipeScreen({ route }) {
  
  const app_id = 'c7aab08e';
  const app_key = '0e9f38987cf191df2f8d8825d5c0d33c'
  fetch(`https://api.edamam.com/search?app_id=${app_id}&app_key=${app_key}&r=http://www.edamam.com/ontologies/edamam.owl#recipe_${route.params.recipe}`)
    .then(r => r.json())
    .then(r => console.log(r))

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text>Hello</Text>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
