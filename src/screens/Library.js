import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Alert,
} from 'react-native';
import {Colors, Fontsize, Spacing, Typography} from '../theme';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import ResourceCard from '../components/ResourceCard';
import {resourceData, shoppingMissionData} from '../utils/constants';
import ShoppingMissionItem from '../components/ShoppingMissionItem';

const Library = ({navigation}) => {
  const renderShoppingMissionItem = ({item}) => (
    <ShoppingMissionItem
      imageSource={item.imageSource}
      title={item.title}
      time={item.time}
      description={item.description}
      date={item.date}
    />
  );

  const renderItem = ({item, index}) => (
    <View style={{paddingHorizontal: Spacing.medium}}>
      <ResourceCard
        imageSource={item.imageSource}
        buttonTitle={item.buttonTitle}
        title={item.title}
        description={item.description}
        buttonStyle={{
          backgroundColor: index === 2 ? Colors.white : Colors.primary,
          borderWidth: index === 2 ? 1 : 0,
          borderColor: index === 2 ? Colors.primary : '',
        }}
        buttonTextStyle={{color: index === 2 ? Colors.primary : Colors.white}}
        onButtonPress={() =>
          Alert.alert('Button Pressed', `You pressed on ${item.title}`)
        }
      />
    </View>
  );

  const tabs = [
    {
      label: 'Key Resources',
      content: (
        <FlatList
          data={resourceData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: Spacing.medium}}
          showsVerticalScrollIndicator={false}
        />
      ),
    },
    {
      label: 'Saved Notes',
      content: (
        <View style={styles.savedNotesView}>
          <Text style={styles.blackText}>Topic Name</Text>
          <FlatList
            data={shoppingMissionData}
            renderItem={renderShoppingMissionItem}
            keyExtractor={item => item.id}
            contentContainerStyle={{paddingBottom: Spacing.medium}}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Library" />
      <View style={styles.tabContainer}>
        <Tabs tabs={tabs} />
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
});

export default Library;
