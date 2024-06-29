import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, Fontsize, Spacing, Typography} from '../theme';

const ProgressStep = ({title, isDone, isLocked}) => {
  return (
    <View style={isDone ? styles.stepContainer2 : styles.stepContainer}>
      <View style={styles.iconContainer}>
        <Icon
          name={isDone ? 'check-circle' : isLocked ? 'lock' : 'circle-outline'}
          size={30}
          color={
            isDone
              ? Colors.oliveGreen
              : isLocked
              ? Colors.grey2
              : Colors.primary
          }
        />
        <View
          style={[
            styles.verticalLine,
            isDone && styles.lineDone,
            isLocked && styles.lineLocked,
          ]}
        />
      </View>
      <View style={styles.contentTextContainer}>
        <Text style={!isDone && !isLocked ? styles.title : styles.title2}>
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.medium,
  },
  stepContainer2: {
    flexDirection: 'row',
    backgroundColor: Colors.primaryTone4,
    paddingHorizontal: Spacing.medium,
  },
  iconContainer: {
    alignItems: 'center',
  },
  verticalLine: {
    width: 3,
    height: 30,
    backgroundColor: Colors.oliveGreen,
  },
  lineDone: {
    backgroundColor: Colors.oliveGreen,
  },
  lineLocked: {
    backgroundColor: Colors.grey2,
  },
  contentTextContainer: {
    marginLeft: Spacing.small,
  },
  title: {
    fontFamily: Typography.boldSecondary,
    fontSize: Fontsize.subHeading,
    color: Colors.black,
    marginTop: Spacing.xxsmall,
  },
  title2: {
    fontFamily: Typography.mediumSecondary,
    fontSize: Fontsize.subHeading,
    color: Colors.darkGrey,
    marginTop: Spacing.xxsmall,
  },
});

export default ProgressStep;
