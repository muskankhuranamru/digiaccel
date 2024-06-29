import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Fontsize, Spacing, Typography} from '../theme';
import CustomButton from '../components/CustomButton';
import CustomCheckBox from '../components/CustomCheckBox';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();

  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = () => {
    if (email === 'admin123@gmail.com' && password === 'admin123') {
      navigation.navigate('Modules');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.upperContainer}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo}
            />
            <Image
              source={require('../assets/images/illustration1.png')}
              style={styles.illustration}
            />
          </View>
          <View style={styles.lowerContainer}>
            <Text style={styles.heading}>Sign-in</Text>
            <TextInput
              placeholder="Enter email or user name"
              style={styles.input}
              placeholderTextColor={Colors.grey}
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <View
              style={[
                styles.input,
                {flexDirection: 'row', alignItems: 'center', padding: 5},
              ]}>
              <TextInput
                placeholder="Password"
                secureTextEntry={showPassword}
                placeholderTextColor={Colors.grey}
                style={{flex: 1}}
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity
                style={{marginRight: 10, padding: 5}}
                onPress={togglePasswordVisibility}>
                <Icon
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={20}
                  color={Colors.grey}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}
              style={{alignSelf: 'flex-end', marginTop: Spacing.small}}>
              <Text style={styles.blueText}>Forgot password?</Text>
            </TouchableOpacity>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <View style={styles.rowView}>
              <CustomCheckBox
                checked={isChecked}
                onChange={handleCheckboxChange}
                style={styles.checkbox}
              />
              <Text style={styles.blackText}>
                By signing up, you agree to our terms of service and privacy
                policy.
              </Text>
            </View>

            <CustomButton
              title="Sign In"
              onPress={handleSignIn}
              disabled={!email || !password}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  upperContainer: {
    padding: Spacing.mid,
  },
  heading: {
    fontFamily: Typography.boldSecondary,
    color: Colors.black,
    fontSize: Fontsize.largeHeading,
  },
  blueText: {
    fontFamily: Typography.boldSecondary,
    color: Colors.primary,
    fontSize: Fontsize.smText,
  },
  logo: {
    width: 78,
    height: 40,
  },
  illustration: {
    width: 232,
    height: 145,
    alignSelf: 'center',
    marginTop: Spacing.xxlarge,
  },
  lowerContainer: {
    backgroundColor: Colors.offWhite,
    flex: 1,
    borderTopRightRadius: Spacing.borderRadius,
    borderTopLeftRadius: Spacing.borderRadius,
    padding: Spacing.mid,
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: Spacing.cardBorderRadius,
    marginTop: Spacing.mid,
    backgroundColor: Colors.white,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '25%',
    marginBottom: Spacing.mid,
  },
  blackText: {
    fontFamily: Typography.semiBoldPrimary,
    color: Colors.black,
    fontSize: Fontsize.description,
    width: '80%',
  },
  errorText: {
    fontFamily: Typography.boldSecondary,
    fontSize: Fontsize.smText,
    color: Colors.errorText,
  },
});
