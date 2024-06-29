import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors, Fontsize, Spacing, Typography} from '../theme';
import CustomButton from './CustomButton';

const ResourceCard = ({
  imageSource,
  title,
  description,
  onButtonPress,
  buttonTextStyle,
  buttonStyle,
  buttonTitle
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.icon} />
        </View>

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>{title}</Text>
            <Icon name="check-circle" size={20} color={Colors.green} />
          </View>
          <Text  numberOfLines={1} ellipsizeMode='tail'style={styles.subtitle}>{description}</Text>

          <CustomButton
            title={buttonTitle}
            style={[
              {padding: Spacing.xsmall, width: 100, marginTop: Spacing.medium},
              buttonStyle,
            ]}
            textStyle={[{fontSize: Fontsize.description}, buttonTextStyle]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: Spacing.cardBorderRadius,
    padding: Spacing.mid,
    marginTop: Spacing.medium,
    shadowColor: Colors.grey,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: Colors.offWhite2,
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  icon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  content: {},
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xsmall,
  },
  title: {
    fontFamily: Typography.boldSecondary,
    fontSize: Fontsize.subHeading,
    color: Colors.black,
    marginRight: Spacing.small,

  },
  subtitle: {
    fontFamily: Typography.mediumSecondary,
    fontSize: Fontsize.description,
    color: Colors.grey2,
    paddingRight: Spacing.small,
  },
});

export default ResourceCard;
