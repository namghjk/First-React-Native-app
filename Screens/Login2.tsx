import {
  View,
  Text,
  Dimensions,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const {height} = Dimensions.get('window');

const Login2 = () => {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      style={{
        flex: 1,
      }}>
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Text style={styles.logoText}>LOGO</Text>
        </View>

        <TextInput style={styles.inp} placeholder="Nhập tài khoản" />
        <TextInput
          style={styles.inp}
          placeholder="Nhập mật khẩu"
          secureTextEntry
        />

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Đăng nhập</Text>
        </TouchableOpacity>

        <Text style={{textAlign: 'center'}}>
          Chưa có tài khoản? Đăng ký ngay
        </Text>

        <View style={styles.rowContainer}>
          <View style={styles.rect} />
          <View style={styles.rect} />
          <View style={styles.rect} />
          <View style={styles.rect} />
          <View style={styles.rect} />
          <View style={styles.rect} />
          <View style={styles.rect} />
          <View style={styles.rect} />
          <View style={styles.rect} />
          <View style={styles.rect} />
          <View style={styles.rect} />
          <View style={styles.rect} />
          <View style={styles.rect} />
          <View style={styles.rect} />
          <View style={styles.rect} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    minHeight: height,
    paddingHorizontal: 16,
  },
  logoWrapper: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    marginVertical: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  logoText: {
    color: 'white',
    fontSize: 28,
  },
  inp: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    marginVertical: 10,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: 'blue',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
  },
  rowContainer: {
    marginTop: 20,
    marginBottom: 60,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  rect: {
    width: 60,
    height: 60,
    backgroundColor: 'green',
    borderRadius: 10,
  },
});
