import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome';

const Product = props => {
  const {product, index} = props;
  const imgUri = {uri: product.url};

  const [isClick, setClick] = useState(false);
  
  return (
    <View style={styles(index).maincontainer}>
      <View style={{height: '30%', flexDirection: 'row'}}>
        <FastImage
          style={styles(index).image}
          resizeMode="cover"
          source={imgUri}
        />
        <Text
          style={{
            marginTop: 5,
            textAlign: 'right',
            flex: 1,
            fontSize: 20,
            marginRight: 5,
            color:'black'
          }}>
          $ {product.price}
        </Text>
      </View>
      <Text
        numberOfLines={1}
        style={{
          marginTop: 10,
          fontSize: 15,
          textTransform: 'capitalize',
          marginHorizontal: 5,
          color: 'red',
        }}>
        $ {product.productName}
      </Text>
      {product.specifications.map(specification => (
        <Text
          key={specification}
          numberOfLines={2}
          style={{color: 'black', fontSize: 13, paddingHorizontal: 5}}>
          * {specification}
        </Text>
      ))}
      <View style={{flexDirection: 'row',marginVertical:10,marginHorizontal:10}}>
        <View>
          <Icon name="heart" size={25} color='red'/>
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = index =>
  StyleSheet.create({
    maincontainer: {
      flex: 0.5,
      // backgroundColor: index % 2 == 0 ? 'green' : 'blue',
      backgroundColor: 'white',
      marginTop: 5,
      marginBottom: 5,
      marginLeft: index % 2 == 0 ? 5 : 0,
      marginRight: 10,
      borderRadius: 20,
      height: 300,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'transparent',
    },
    image: {
      minWidth: 80,
      minHeight: 80,
      height: 85,
      width: 85,
      borderRadius: 20,
      marginTop: 5,
      marginHorizontal: 5,
    },
  });
