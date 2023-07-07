import React, {useState} from 'react';
import {Image, StyleSheet, View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {color} from '../../constants';
import FastImage from 'react-native-fast-image';
const {width, height} = Dimensions.get('window');

function _getColorFromStatus  (status) {
  // if(status.toLowerCase().trim() == "opening now"){
  //   return color.openingNow
  // }
  // else if (status.toLowerCase().trim() == "closing soon"){
  //   return color.closingSoon
  // }
  // else if (status.toLowerCase().trim() == "coming soon"){
  //   return color.comingSoon
  // }
  // return color.openingNow
  return status.toLowerCase().trim() == "opening now" ? color.openingNow:
        (status.toLowerCase().trim() == "closing soon") ? color.closingSoon:
        (status.toLowerCase().trim() == "coming soon") ? color.comingSoon:
        color.openingNow
}

const FoodItem = props => {
  let {name, 
      price, 
      status, 
      url, 
      website, 
      socialNetworks} = props.food;
  const imgUri = {uri:url}
  return (
    <View style={styles.view}>
      <View style={styles.imageContainer}>
        <FastImage
          source={imgUri}
          style={styles.image}></FastImage>
      </View>
      <View style={styles.textContainer}>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            textTransform: 'capitalize',
          }}>
          {name}
        </Text>
        <View
          style={{
            height: 2,
            width: '100%',
            backgroundColor: 'black',
          }}></View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize:13}}>Status: </Text>
          <Text style={{color:_getColorFromStatus(status),fontSize:13}} >{status.toUpperCase()}</Text>
        </View>
        <Text style={{fontSize:13}}>Price: {price} </Text>
        <Text numberOfLines={1} style={{fontSize:13}}>Food Type: Sushi</Text>
        <Text numberOfLines={1}style={{fontSize:13}}>Website: {website}</Text>
        <View style={styles.iconContainer}>
          {socialNetworks['facebook'] != undefined && <Icon
            name="facebook"
            size={18}
            color={color.facebook}
            style={{paddingEnd: 5}}
          />}
          {socialNetworks["instagram"] != undefined && <Icon
            name="instagram"
            size={18}
            color={color.google}
            style={{paddingEnd: 5}}
          />}
         { socialNetworks["twitter"] != undefined && <Icon
            name="twitter"
            size={18}
            color={color.facebook}
            style={{paddingEnd: 5}}
          />}
        </View>
      </View>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
  },

  imageContainer: {
    marginTop:10,
    paddingHorizontal: 5,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 3,
  },
});
