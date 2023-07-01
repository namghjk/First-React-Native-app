import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import FoodItem from './FoodItem';

const FoodIndex = props => {
  const [foods, setFoods] = useState([
    {
      name: 'sushi',
      status: 'Opening soon',
      price: 120000,
      url: 'https://vinmec-prod.s3.amazonaws.com/images/20210317_143609_055773_sushi.max-800x800.jpg',
      website:
        'https://www.google.com/search?q=sushi&tbm=isch&ved=2ahUKEwju-tHkvur_AhUREYgKHUMaACsQ2-cCegQIABAA&oq=sushi&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgjEOoCECc6BwgAEIoFEEM6CAgAELEDEIMBUIYEWP0PYMoSaAFwAHgAgAFdiAH9A5IBATaYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=0IaeZO7SBJGioATDtIDYAg&bih=706&biw=1440#imgrc=JQgxaJ_HeC7yiM',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/',
          instagram: 'https://www.instagram.com/pnamdavuitrolai/',
        },
      ],
    },
  ]);

  return (
    <View
      style={{
        flex: 10,
      }}>
      <View style={styles.flatItem}></View>
      <View style={styles.scrollItem}>
        <View style={styles.foodItemContainer}>
          <FoodItem />
        </View>
      </View>
    </View>
  );
};

export default FoodIndex;

const styles = StyleSheet.create({
  flatItem: {
    flex: 1.5,
    backgroundColor: 'red',
  },
  scrollItem: {
    flex: 8.5,
    backgroundColor: 'green',
  },
  foodItemContainer:{
    minHeight: '18%',
    height: '20%',
    backgroundColor: 'yellow',
  },
});
