import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Colors, Fontsize, Spacing, Typography} from '../theme';

const Header = ({title}) => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openDrawer}>
        <Icon name="menu-outline" size={30} color={Colors.white} />
      </TouchableOpacity>
      <Text style={styles.heading}>{title}</Text>
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.icon}>
          <Icon name="notifications-outline" size={24} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Icon name="person-circle-outline" size={30} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.mid,
    paddingVertical: Spacing.medium,
    backgroundColor: Colors.darkBlue,
  },

  heading: {
    fontFamily: Typography.boldSecondary,
    fontSize: Fontsize.subHeading,
    color: Colors.white,
    flex: 1,
    marginLeft: Spacing.small,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: Spacing.medium,
  },
});

export default Header;
