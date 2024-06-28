import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Fontsize, Spacing } from '../theme';
import CustomButton from '../components/CustomButton';

const ForgotPasswordScreen = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>I am Forgot Password Screen</Text>
      <CustomButton title="Back to Sign In" onPress={goBack}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: Fontsize.subHeading,
    marginBottom: Spacing.mid,
  },
  
});

export default ForgotPasswordScreen;
