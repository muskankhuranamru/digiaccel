import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Fontsize, Spacing, Typography } from '../theme';
import CustomProgressBar from './CustomProgressBar';
import Icon from 'react-native-vector-icons/Ionicons';

const ModuleCard = ({
  title,
  progress,
  imageSource,
  onPress,
  progressPercentage,
  progressBarColor,
  progressBarFill,
  containerStyle,
  imageContainerStyle,
  cardTitleStyle,
  progressStyle,
  showProgressBar,
  showProgressPercentage,
  showCompletedIcon,
  progressViewStyle,
  hideProgressTextView,
  showLockedView,
  screenName,
  navigation
}) => {
  return (
    <TouchableOpacity 
      style={[styles.module, containerStyle]} 
      onPress={() => navigation.navigate(screenName)}
    >
      <View style={[styles.imageView, imageContainerStyle]}>
        <Image source={imageSource} style={styles.moduleImage} />
      </View>
      <View style={styles.moduleInfo}>
        <Text numberOfLines={2} style={[styles.moduleTitle, cardTitleStyle]}>
          {title}
        </Text>
        {!hideProgressTextView && (
          <View style={[styles.rowView, progressViewStyle]}>
            <Text style={[styles.moduleProgress, progressStyle]}>
              {progress}
            </Text>
            {showCompletedIcon && (
              <Icon name="checkmark-circle" size={22} color={Colors.green} />
            )}
          </View>
        )}
        {showLockedView && (
          <View style={styles.lockedView}>
            <Icon
              name="lock-closed-outline"
              size={15}
              color={Colors.darkGrey}
            />
            <Text
              style={[
                styles.moduleProgress,
                { color: Colors.darkGrey, marginLeft: 5 },
              ]}
            >
              Locked
            </Text>
          </View>
        )}
        {showProgressBar && (
          <CustomProgressBar
            progress={progressBarFill}
            barColor={progressBarColor}
            style={{ marginTop: Spacing.small }}
          />
        )}
        {showProgressPercentage && (
          <Text style={styles.blackText}>{progressPercentage}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  module: {
    flexDirection: 'row',
    marginRight: Spacing.medium,
    borderRadius: Spacing.cardBorderRadius,
    backgroundColor: Colors.white,
    shadowColor: Colors.grey,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },
  moduleImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageView: {
    height: 135,
    width: 95,
    marginHorizontal: Spacing.medium,
    borderRadius: Spacing.cardBorderRadius,
    overflow: 'hidden',
    marginVertical: Spacing.small,
  },
  moduleTitle: {
    fontFamily: Typography.boldSecondary,
    fontSize: Fontsize.largeHeading,
    color: Colors.darkGrey,
    width: '70%',
  },
  moduleProgress: {
    fontFamily: Typography.semiBoldPrimary,
    fontSize: Fontsize.description,
    color: Colors.primary,
    marginRight: Spacing.small,
  },
  blackText: {
    fontFamily: Typography.boldPrimary,
    fontsize: Typography.description,
    color: Colors.black,
    marginVertical: Spacing.xsmall,
  },
  moduleInfo: {
    paddingVertical: Spacing.medium,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.small,
    marginBottom: Spacing.mid,
    marginRight: Spacing.medium,
  },
  lockedView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    width: 88,
    backgroundColor: Colors.lightGrey,
    justifyContent: 'center',
    paddingVertical: 2,
    marginTop: Spacing.medium,
  },
});

export default ModuleCard;
