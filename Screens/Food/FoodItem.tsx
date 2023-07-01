import React, {useState} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

const FoodItem = props => {
  return (
    <View style={styles.view}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://vinmec-prod.s3.amazonaws.com/images/20210317_143609_055773_sushi.max-800x800.jpg',
          }}
          style={styles.image}></Image>
      </View>
      <View>
        <Text>123</Text>
        <View style={{
          height:1,
          width:'100%',
          backgroundColor:'black'
        }}></View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </View>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  view:{
    flex:1,
    flexDirection: 'row'
  },

  imageContainer: {
    justifyContent: 'center',
    paddingHorizontal:5
  },
  image: {
    width: 120,
    height: 120,
    borderRadius:15,
  },
  textContainer:{
    
  }
})