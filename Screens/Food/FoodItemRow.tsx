import React from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FastImage from 'react-native-fast-image';

const FoodItemRow = props => {
  let {name, url} = props.category;
  const imageUrl = url;
  return (
   
      <TouchableOpacity onPress={()=>{
        Alert.alert(name)
      }}
      style={styles.container}>
        <View style={styles.containerImage}>
          <FastImage
            source={{
              uri: imageUrl,
            }}
            resizeMode={'contain'}
            style={{
              height: 30,
              width: 30,
              marginBottom: 6,
            }}
          />
        </View>

        <Text
          numberOfLines={1}
          style={{
            color: 'black',
            fontSize: 13,
          }}>
          {name}
        </Text>
      </TouchableOpacity>
  );
};

export default FoodItemRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginHorizontal: 5,
    width: 60,
    height: 60,
    marginTop: 10,
  },
  containerImage: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
