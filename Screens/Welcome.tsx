import {
  View,
  Text,
  Alert,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {icons, images} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import UIButton from '../Components/UIButton';

const Welcome = props => {
  const [getAccountTypes, setAccountTypes] = useState([
    {
      name: 'Influencer',
      isSelected: true,
    },
    {
      name: 'Business',
      isSelected: false,
    },
    {
      name: 'Invidual',
      isSelected: false,
    },
  ]);
  return (
    <View
      style={{
        flex: 100,
      }}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{
          flex: 100,
        }}>
        {/* //head screen */}
        <View
          style={{
            flex: 15,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <Image
            source={icons.iconFire}
            style={{
              height: 35,
              width: 35,
              marginStart: 5,
            }}
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              marginLeft: 10,
              color: 'white',
            }}>
            YourCompany.CO
          </Text>
          <View style={{flex: 1}}></View>
          <Icon
            name={'question-circle'}
            size={30}
            style={{
              color: 'white',
              marginEnd: 5,
            }}
          />
        </View>

        {/* //body screen  */}
        <View style={{flex: 63}}>
          {/* Text content */}
          <View
            style={{
              flex: 40,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                paddingBottom: 10,
              }}>
              Welcome to
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                paddingBottom: 10,
                fontWeight: 'bold',
              }}>
              YOURCOMPANY.CO
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
              }}>
              Please select your account types
            </Text>
          </View>

          {/* Button content */}
          <View style={{flex: 60}}>
            {getAccountTypes.map(accountType => (
              <UIButton
                tittle={accountType.name}
                isSelected={accountType.isSelected}
                onPress={() => {
                  let newAccountType = getAccountTypes.map(eachAccountType => {
                    return {
                      ...eachAccountType,
                      isSelected: accountType == eachAccountType,
                    };
                  });
                  setAccountTypes(newAccountType);
                }}
              />
            ))}
          </View>
        </View>

        {/* //footer screen */}
        <View style={{flex: 22}}>
          {/* Button view */}

          <UIButton tittle="Next" />

          {/* Text view */}
          <View
            style={{
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
              }}>
              Don't know what account type to use?
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#7fffd4',
                  fontSize: 16,
                  marginTop: 5,
                  textDecorationLine:'underline'
                }}>
                Checkout our post.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

// const Welcome  = (props) => {
//   const {x,y} = props
//   const {person} = props
//   const {name, age} = person
//   const {product} = props
//   debugger
//   return (
//     <View style = {{
//     }}>
//       <Text>Value of x= {x}, Value of y = {y}</Text>
//       <Text>His name is {name}, he is {age} years old</Text>
//       {product.map(eachProduct =>
//       <Text>
//         {eachProduct.productName},
//         {eachProduct.year}
//       </Text>)}
//       <Text>{sub2Number(x,y)}</Text>
//       <Text>2 + 3 = {sum2Number(2,3)}</Text>
//       <Text>pi = {PI}</Text>
//     </View>
//   )
// }

export default Welcome;
