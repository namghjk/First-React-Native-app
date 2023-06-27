import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {icons, images, color} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {isValidEmail, isValidPassword} from '../utilities/Validate';
const {height} = Dimensions.get('window');

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
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
              <Text style={styles.textTop}>Already have account ? </Text>
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

          {/* //Login Input content   */}
          <View style={styles.InputContent}>
            <View
              style={{
                flex: 50,
                marginTop: 10,
                marginStart: 10,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#f0fff0',
                }}>
                Username
              </Text>
              <TextInput
                placeholder="example@.gmail.com"
                placeholderTextColor={color.placehoder}
                style={styles.emailInput}
                onChangeText={text => {
                  setErrorEmail(
                    isValidEmail(text) == true ? '' : 'Email is not correct',
                  );
                  setEmail(text);
                }}></TextInput>
              <Text
                style={{
                  color: 'red',
                  fontSize: 12,
                  marginBottom: 15,
                  marginTop: 5,
                }}>
                {errorEmail}
              </Text>
            </View>
            <View style={{flex: 50, marginStart: 10, marginEnd: 10}}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#f0fff0',
                }}>
                Password
              </Text>
              <TextInput
                placeholder="your password"
                placeholderTextColor={color.placehoder}
                secureTextEntry={true}
                style={styles.passwordInput}
                onChangeText={text => {
                  setErrorPassword(
                    isValidPassword(text) == true
                      ? ''
                      : 'Password is not correct',
                  );
                  setPassword(text);
                }}></TextInput>
              <Text
                style={{
                  color: 'red',
                  fontSize: 12,
                  marginBottom: 15,
                  marginTop: 5,
                }}>
                {errorPassword}
              </Text>
            </View>
          </View>

          {/* //Button Login */}
          <View style={styles.ButtonContent}>
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
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 50,
                marginTop: 15,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: color.imageLogin,
                }}>
                New user? Register now
              </Text>
            </TouchableOpacity>
          </View>

          {/* //Bottom Content */}
          <View style={{flex: 25}}>
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

export default Login;

const styles = StyleSheet.create({
  topContent: {
    flex: 28,
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
    flex: 27,
  },
  emailInput: {
    borderBottomWidth: 1,
    borderColor: '#f0fff0',
    marginEnd: 20,
    fontSize: 16,
    minHeight: 45,
  },
  passwordInput: {
    borderBottomWidth: 1,
    borderColor: '#f0fff0',
    fontSize: 16,
    minHeight: 45,
  },
  ButtonContent: {
    flex: 20,
    alignItems: 'center',
  },
  buttonLogin: {
    backgroundColor: color.imageLogin,
    width: '35%',
    minheight: '28%',
    height:'30%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10
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
