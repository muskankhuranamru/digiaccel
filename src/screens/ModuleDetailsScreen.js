import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Colors, Fontsize, Spacing, Typography} from '../theme';
import Header from '../components/Header';
import GoBackHeader from '../components/GoBackHeader';
import VideoPlayer from '../components/VideoPlayer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressStep from '../components/ContentList';
import QueryTab from '../components/QueryTab';
import {steps} from '../utils/constants';

const ModuleDetailsScreen = ({navigation}) => {
  const [showSteps, setShowSteps] = useState(false);

  const toggleStepsVisibility = () => {
    setShowSteps(!showSteps);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Learning Hub" />

      <View style={styles.tabContainer}>
        <GoBackHeader
          navigation={navigation}
          title="Back"
          style={{marginLeft: Spacing.medium, paddingVertical: Spacing.medium}}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.stepsContainer}>
          <VideoPlayer />

          <View style={styles.header}>
            <Icon name="menu" size={25} color={Colors.primary} />

            <Text style={styles.headerText}>Content List</Text>
            <TouchableOpacity onPress={toggleStepsVisibility}>
              <Icon
                name={showSteps ? 'chevron-down' : 'chevron-up'}
                size={25}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>

          {showSteps && (
            <View>
              {steps.map((step, index) => (
                <ProgressStep
                  key={index}
                  title={step.title}
                  isDone={step.isDone}
                  isLocked={step.isLocked}
                />
              ))}
            </View>
          )}

          <QueryTab />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.offWhite,
    flex: 1,
  },
  tabContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  blackText: {
    fontSize: Fontsize.heading,
    fontFamily: Typography.boldSecondary,
    color: Colors.black,
    marginLeft: Spacing.medium,
  },
  savedNotesView: {
    backgroundColor: Colors.white,
    paddingVertical: Spacing.small,
    borderRadius: Spacing.cardBorderRadius,
    marginTop: Spacing.medium,
    marginHorizontal: Spacing.small,
    flex: 1,
    marginBottom: Spacing.medium,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.medium,
    paddingVertical: Spacing.medium,
    backgroundColor: Colors.primaryTone3,
  },
  headerText: {
    fontFamily: Typography.boldSecondary,
    fontsize: Fontsize.subHeading,
    color: Colors.primary,
    flex: 1,
    marginLeft: Spacing.small,
  },
  stepsContainer: {
    backgroundColor: Colors.primaryTone3,
  },
});

export default ModuleDetailsScreen;
