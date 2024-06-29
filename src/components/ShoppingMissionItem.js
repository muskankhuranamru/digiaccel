import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors, Fontsize, Spacing, Typography} from '../theme';

const ShoppingMissionItem = ({imageSource, title, time, description, date}) => {
  return (
    <View style={{paddingHorizontal: Spacing.medium}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.rowView}>
            <Text style={styles.title}>
              {title} <Text style={styles.time}>({time})</Text>
            </Text>
            <Image
              source={require('../assets/images/pencil.png')}
              style={styles.icon}
            />
          </View>
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Spacing.medium,
    paddingBottom: Spacing.xsmall,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.small,
    backgroundColor: Colors.offWhite2,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  image: {
    width: 25,
    height: 25,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontFamily: Typography.boldPrimary,
    fontSize: Fontsize.subHeading,
    color: Colors.black,
    flex: 1,
  },
  time: {
    fontFamily: Typography.boldPrimary,
    fontSize: Fontsize.subHeading,
    color: Colors.black,
  },
  description: {
    fontFamily: Typography.semiBoldPrimary,
    fontSize: Fontsize.description,
    color: Colors.grey2,
    marginBottom: Spacing.small,
  },
  date: {
    fontFamily: Typography.boldPrimary,
    fontSize: Fontsize.description,
    color: Colors.grey2,
    alignSelf: 'flex-end',
  },

  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
  },
});

export default ShoppingMissionItem;
