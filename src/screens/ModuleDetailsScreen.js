
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, Alert } from 'react-native';
import { Colors, Fontsize, Spacing, Typography } from '../theme';
import Header from '../components/Header';
import GoBackHeader from '../components/GoBackHeader';
import VideoPlayer from '../components/VideoPlayer';


const ModuleDetailsScreen = ({ navigation }) => {



  return (
    <SafeAreaView style={styles.container}>
      <Header title="Learning Hub" />

      <View style={styles.tabContainer}>
          <GoBackHeader navigation={navigation} title='Back' style={{ marginLeft: Spacing.medium, marginTop: Spacing.medium }} />
        <VideoPlayer />
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
    marginBottom:Spacing.medium
  },
});

export default ModuleDetailsScreen;
