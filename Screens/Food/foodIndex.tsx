import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import FoodItem from './FoodItem';
import FoodItemRow from './FoodItemRow';

const FoodIndex = props => {
  const [foods, setFoods] = useState([
    {
      name: 'sushi',
      status: 'Opening soon',
      price: 120000,
      url: 'https://vinmec-prod.s3.amazonaws.com/images/20210317_143609_055773_sushi.max-800x800.jpg',
      website:
        'https://www.google.com/search?q=sushi&tbm=isch&ved=2ahUKEwju-tHkvur_AhUREYgKHUMaACsQ2-cCegQIABAA&oq=sushi&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgjEOoCECc6BwgAEIoFEEM6CAgAELEDEIMBUIYEWP0PYMoSaAFwAHgAgAFdiAH9A5IBATaYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=0IaeZO7SBJGioATDtIDYAg&bih=706&biw=1440#imgrc=JQgxaJ_HeC7yiM',
      socialNetworks: {
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/pnamdavuitrolai/',
        twitter:
          'https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dvi',
      },
    },
    {
      name: 'beer',
      status: 'Coming soon',
      price: 120000,
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/NCI_Visuals_Food_Beer.jpg/1200px-NCI_Visuals_Food_Beer.jpg',
      website:
        'https://www.google.com/search?q=sushi&tbm=isch&ved=2ahUKEwju-tHkvur_AhUREYgKHUMaACsQ2-cCegQIABAA&oq=sushi&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgjEOoCECc6BwgAEIoFEEM6CAgAELEDEIMBUIYEWP0PYMoSaAFwAHgAgAFdiAH9A5IBATaYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=0IaeZO7SBJGioATDtIDYAg&bih=706&biw=1440#imgrc=JQgxaJ_HeC7yiM',
      socialNetworks: {
        facebook: 'https://www.facebook.com/',
      },
    },
    {
      name: 'pizza',
      status: 'Closing soon',
      price: 120000,
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
      website:
        'https://www.google.com/search?q=sushi&tbm=isch&ved=2ahUKEwju-tHkvur_AhUREYgKHUMaACsQ2-cCegQIABAA&oq=sushi&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgjEOoCECc6BwgAEIoFEEM6CAgAELEDEIMBUIYEWP0PYMoSaAFwAHgAgAFdiAH9A5IBATaYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=0IaeZO7SBJGioATDtIDYAg&bih=706&biw=1440#imgrc=JQgxaJ_HeC7yiM',
      socialNetworks: {
        twitter:
          'https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dvi',
      },
    },
    {
      name: 'com tam',
      status: 'Coming soon',
      price: 120000,
      url: 'https://comtamtuonghan.vn/wp-content/uploads/2022/02/com-tam-suon-bi-ba-chi.png',
      website:
        'https://www.google.com/search?q=sushi&tbm=isch&ved=2ahUKEwju-tHkvur_AhUREYgKHUMaACsQ2-cCegQIABAA&oq=sushi&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgjEOoCECc6BwgAEIoFEEM6CAgAELEDEIMBUIYEWP0PYMoSaAFwAHgAgAFdiAH9A5IBATaYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=0IaeZO7SBJGioATDtIDYAg&bih=706&biw=1440#imgrc=JQgxaJ_HeC7yiM',
      socialNetworks: {
        twitter:
          'https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dvi',
        instagram: 'https://www.instagram.com/pnamdavuitrolai/',
      },
    },
    {
      name: 'banh cuon',
      status: 'Closing soon',
      price: 120000,
      url: 'https://cdn.tgdd.vn/Files/2020/05/21/1257167/cach-lam-banh-cuon-bang-chao-chong-dinh-chi-10-phut-co-ngay-bua-sang-202208151607177009.jpg',
      website:
        'https://www.google.com/search?q=sushi&tbm=isch&ved=2ahUKEwju-tHkvur_AhUREYgKHUMaACsQ2-cCegQIABAA&oq=sushi&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgjEOoCECc6BwgAEIoFEEM6CAgAELEDEIMBUIYEWP0PYMoSaAFwAHgAgAFdiAH9A5IBATaYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=0IaeZO7SBJGioATDtIDYAg&bih=706&biw=1440#imgrc=JQgxaJ_HeC7yiM',
      socialNetworks: {
        facebook: 'https://www.facebook.com/',
      },
    },
    {
      name: 'hot dog',
      status: 'Opening soon',
      price: 120000,
      url: 'https://static.onecms.io/wp-content/uploads/sites/43/2022/09/09/268494_Basic-Air-Fryer-Hot-Dogs_Buckwheat-Queen_SERP_5844319_original-4x3-1.jpg',
      website:
        'https://www.google.com/search?q=sushi&tbm=isch&ved=2ahUKEwju-tHkvur_AhUREYgKHUMaACsQ2-cCegQIABAA&oq=sushi&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgjEOoCECc6BwgAEIoFEEM6CAgAELEDEIMBUIYEWP0PYMoSaAFwAHgAgAFdiAH9A5IBATaYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=0IaeZO7SBJGioATDtIDYAg&bih=706&biw=1440#imgrc=JQgxaJ_HeC7yiM',
      socialNetworks: {
        twitter:
          'https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dvi',
      },
    },
    {
      name: 'BBQ',
      status: 'Coming soon',
      price: 120000,
      url: 'https://chefjob.vn/wp-content/uploads/2020/02/dinh-nghia-bbq-la-gi.jpg',
      website:
        'https://www.google.com/search?q=sushi&tbm=isch&ved=2ahUKEwju-tHkvur_AhUREYgKHUMaACsQ2-cCegQIABAA&oq=sushi&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgjEOoCECc6BwgAEIoFEEM6CAgAELEDEIMBUIYEWP0PYMoSaAFwAHgAgAFdiAH9A5IBATaYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=0IaeZO7SBJGioATDtIDYAg&bih=706&biw=1440#imgrc=JQgxaJ_HeC7yiM',
      socialNetworks: {
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/pnamdavuitrolai/',
        twitter:
          'https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dvi',
      },
    },
    {
      name: 'taco',
      status: 'Closing soon',
      price: 120000,
      url: 'https://img.taste.com.au/R_dRdL7V/taste/2022/09/healthy-tacos-recipe-181113-1.jpg',
      website:
        'https://www.google.com/search?q=sushi&tbm=isch&ved=2ahUKEwju-tHkvur_AhUREYgKHUMaACsQ2-cCegQIABAA&oq=sushi&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgjEOoCECc6BwgAEIoFEEM6CAgAELEDEIMBUIYEWP0PYMoSaAFwAHgAgAFdiAH9A5IBATaYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=0IaeZO7SBJGioATDtIDYAg&bih=706&biw=1440#imgrc=JQgxaJ_HeC7yiM',
      socialNetworks: {
        facebook: 'https://www.facebook.com/',
      },
    },
    {
      name: 'soft drink',
      status: 'Opening soon',
      price: 120000,
      url: 'https://cdn.tgdd.vn/2021/05/content/1-800x450-54.jpg',
      website:
        'https://www.google.com/search?q=sushi&tbm=isch&ved=2ahUKEwju-tHkvur_AhUREYgKHUMaACsQ2-cCegQIABAA&oq=sushi&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgjEOoCECc6BwgAEIoFEEM6CAgAELEDEIMBUIYEWP0PYMoSaAFwAHgAgAFdiAH9A5IBATaYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=0IaeZO7SBJGioATDtIDYAg&bih=706&biw=1440#imgrc=JQgxaJ_HeC7yiM',
      socialNetworks: {
        instagram: 'https://www.instagram.com/pnamdavuitrolai/',
      },
    },
    {
      name: 'beef wellington',
      status: 'Closing soon',
      price: 120000,
      url: 'https://static01.nyt.com/images/2019/12/13/dining/mc-beef-wellington/mc-beef-wellington-mediumSquareAt3X-v2.jpg',
      website:
        'https://www.google.com/search?q=sushi&tbm=isch&ved=2ahUKEwju-tHkvur_AhUREYgKHUMaACsQ2-cCegQIABAA&oq=sushi&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgjEOoCECc6BwgAEIoFEEM6CAgAELEDEIMBUIYEWP0PYMoSaAFwAHgAgAFdiAH9A5IBATaYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=0IaeZO7SBJGioATDtIDYAg&bih=706&biw=1440#imgrc=JQgxaJ_HeC7yiM',
      socialNetworks: {
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/pnamdavuitrolai/',
        twitter:
          'https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dvi',
      },
    },
  ]);

  const [category, setCategory] = useState([
    {
      name: 'BBQ',
      url: 'https://cdn-icons-png.flaticon.com/512/3100/3100609.png',
    },
    {
      name: 'Drink',
      url: 'https://cdn-icons-png.flaticon.com/512/4097/4097652.png',
    },
    {
      name: 'Salad',
      url: 'https://cdn-icons-png.flaticon.com/512/1625/1625042.png',
    },
    {
      name: 'Ice Cream',
      url: 'https://cdn-icons-png.flaticon.com/512/3858/3858273.png',
    },
    {
      name: 'Beer',
      url: 'https://cdn-icons-png.flaticon.com/512/878/878100.png',
    },
    {
      name: 'Fish',
      url: 'https://cdn-icons-png.flaticon.com/512/3075/3075494.png',
    },
    {
      name: 'Beef',
      url: 'https://cdn-icons-png.flaticon.com/512/1046/1046769.png',
    },
    {
      name: 'Egg',
      url: 'https://cdn-icons-png.flaticon.com/512/2437/2437740.png',
    },
    {
      name: 'Fried',
      url: 'https://cdn-icons-png.flaticon.com/512/1689/1689198.png',
    },
    {
      name: 'Fruit',
      url: 'https://cdn-icons-png.flaticon.com/512/3082/3082025.png',
    },
  ]);

  return (
    <SafeAreaView
      style={{
        flex: 10,
      }}>
      <View style={{flex: 1}}></View>
      <View style={styles.straightHorizentalLine} />
      <View style={styles.flatItem}>
        <FlatList
          data={category}
          horizontal={true}
          renderItem={({item}) => (
              <View style={{justifyContent: 'center'}}>
                <FoodItemRow category={item} key={item.name} />
              </View>
          )}></FlatList>
      </View>
      <View style={styles.straightHorizentalLine} />

      <View style={styles.scrollItem}>
        {/* <ScrollView style={{flex: 1}}>
          {foods.map(eachFood => {
            return (
              <View style={styles.foodItemContainer}>
                <FoodItem food={eachFood} key={eachFood.name} />
              </View>
            );
          })}
        </ScrollView> */}

        <FlatList
          data={foods}
          renderItem={({item}) => (
            <View style={styles.foodItemContainer}>
              <FoodItem food={item} key={item.name} />
            </View>
          )}
          keyExtractor={item => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

export default FoodIndex;

const styles = StyleSheet.create({
  flatItem: {
    flex: 1.2,
  },
  scrollItem: {
    flex: 7.8,
  },
  foodItemContainer: {
    height: 120,
    minHeight: 120,
  },
  straightHorizentalLine: {
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
