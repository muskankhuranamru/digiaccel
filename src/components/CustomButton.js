

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors, Fontsize, Spacing, Typography } from '../theme';

const CustomButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor:Colors.primary,
    padding: Spacing.cardBorderRadius,
    borderRadius: Spacing.cardBorderRadius,
    alignItems: 'center',
    
  },
  text: {
    color: Colors.white,
    fontSize: Fontsize.heading,
  fontFamily:Typography.boldSecondary
  },
});

export default CustomButton;
