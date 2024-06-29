import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Fontsize, Spacing, Typography} from '../theme';

const GoBackHeader = ({navigation, title, style}) => {
  return (
    <TouchableOpacity
      style={[styles.rowView, style]}
      onPress={() => navigation.goBack()}>
      <Icon name="arrow-back-outline" size={25} color={Colors.black} />
      <Text style={styles.backText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: Colors.black,
    fontSize: Fontsize.medium,
    marginLeft: Spacing.small,
    fontFamily: Typography.semiBoldSecondary,
  },
});

export default GoBackHeader;
