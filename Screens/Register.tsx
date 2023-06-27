import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {color, images} from '../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {isValidEmail, isValidPassword} from '../utilities/Validate';
import Icon from 'react-native-vector-icons/FontAwesome';
const {height} = Dimensions.get('window');

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const isValidationOK = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;
  return (
    <ImageBackground
      source={images.background}
      resizeMode="cover"
      style={{flex: 1}}>
      <KeyboardAwareScrollView style={{flex: 1}} enableOnAndroid={true}>
        <View style={{flex: 1, minHeight: height}}>
          {/* //Top content   */}
          <View style={styles.topContent}>
            <View style={styles.textTopContainer}>
              <Text style={styles.textTop}>
                Here's your first step with us{' '}
              </Text>
            </View>
            <View style={styles.imageTopContainer}>
              <Image
                source={images.loginImage}
                resizeMode="cover"
                style={{
                  height: 140,
                  width: 140,
                }}
              />
            </View>
          </View>

          {/* //Register Input content   */}
          <View style={styles.InputContent}>
            <View style={styles.inputContainer}>
              <Text style={styles.textInput}>Username</Text>
              <TextInput
                placeholder="example@.gmail.com"
                placeholderTextColor={color.placehoder}
                style={styles.Input}
                onChangeText={text => {
                  setErrorEmail(
                    isValidEmail(text) == true ? '' : 'Email is not correct',
                  );
                  setEmail(text);
                }}></TextInput>
              <Text style={styles.errorText}>{errorEmail}</Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.textInput}>Password</Text>
              <TextInput
                blurOnSubmit={false}
                onSubmitEditing={() => Keyboard.dismiss()}
                placeholder="your password"
                placeholderTextColor={color.placehoder}
                secureTextEntry={true}
                style={styles.Input}
                onChangeText={text => {
                  setErrorPassword(
                    isValidPassword(text) == true
                      ? ''
                      : 'Password is not correct',
                  );
                  setPassword(text);
                }}></TextInput>
              <Text style={styles.errorText}>{errorPassword}</Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.textInput}>Re-enter password</Text>
              <TextInput
                blurOnSubmit={false}
                onSubmitEditing={() => Keyboard.dismiss()}
                placeholder="your password"
                placeholderTextColor={color.placehoder}
                secureTextEntry={true}
                style={styles.Input}
                onChangeText={text => {
                  setRePassword(
                    text == password ? '' : 'Password is not match',
                  );
                  setPassword(text);
                }}></TextInput>
              <Text style={styles.errorText}>{rePassword}</Text>
            </View>
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                disabled={isValidationOK() != true}
                style={styles.buttonLogin}
                onPress={() => {
                  alert(`email: ${email} ,password: ${password}`);
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* //Bottom Content */}
          <View style={{flex: 20}}>
            <View style={styles.divideContainer}>
              <View
                style={{backgroundColor: 'white', height: 1, width: '30%'}}
              />
              <Text
                style={{marginHorizontal: 10, color: 'white', fontSize: 18}}>
                Use other Methods
              </Text>
              <View
                style={{backgroundColor: 'white', height: 1, width: '30%'}}
              />
            </View>
            <View style={styles.iconContainer}>
              <Icon name="facebook" size={35} color={color.facebook} />
              <View style={{width: 20}}></View>
              <Icon name="google" size={35} color={color.google} />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default Register;
const styles = StyleSheet.create({
  topContent: {
    flex: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textTopContainer: {
    flex: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 10,
  },
  textTop: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f0fff0',
  },
  imageTopContainer: {
    flex: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  InputContent: {
    flex: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    margin: 15,
  },
  inputContainer: {
    flex: 13,
    marginHorizontal: 15,
    justifyContent: 'center',
    minHeight: 85,
    maxHeight: 100,
  },
  Input: {
    borderBottomWidth: 1,
    borderColor: '#3399ff',
    fontSize: 16,
    minHeight: 45,
    color: 'black',
  },
  textInput: {
    fontSize: 18,
    color: '#3399ff',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  ButtonContainer: {
    flex: 20,
    marginEnd: 10,
    marginStart: 10,
    alignItems: 'center',
  },
  buttonLogin: {
    backgroundColor: color.imageLogin,
    width: '50%',
    minHeight: '65%',
    maxHeight: '70%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  divideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
});
