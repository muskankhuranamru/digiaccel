import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import {Colors, Fontsize, Spacing, Typography} from '../theme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tabs = ({tabs, searchPlaceholder = 'Search'}) => {
  const [activeTab, setActiveTab] = React.useState(tabs?.[0].label);

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        {tabs?.map(tab => (
          <TouchableOpacity
            key={tab.label}
            style={[styles.tab, activeTab === tab.label && styles.activeTab]}
            onPress={() => setActiveTab(tab.label)}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab.label && styles.activeTabText,
              ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{paddingHorizontal: Spacing.medium, marginTop: Spacing.mid}}>
        <View style={styles.searchBar}>
          <Icon
            name={'search'}
            size={20}
            color={Colors.grey}
            style={{marginLeft: Spacing.medium}}
          />
          <TextInput
            style={{paddingHorizontal: Spacing.medium}}
            placeholder={searchPlaceholder}
            placeholderTextColor={Colors.grey}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: Spacing.mid,
          backgroundColor: Colors.offWhite,
        }}>
        {tabs.map(tab =>
          activeTab === tab.label ? (
            <View key={tab.label} style={{flex: 1}}>
              {tab.content}
            </View>
          ) : null,
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingTop: Spacing.large,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    paddingBottom: Spacing.small,
  },
  tabText: {
    fontFamily: Typography.semiBoldSecondary,
    fontSize: Fontsize.description,
    color: Colors.grey2,
  },
  activeTab: {
    borderBottomColor: Colors.primary,
  },
  activeTabText: {
    color: Colors.primary,
    fontFamily: Typography.boldSecondary,
    fontSize: Fontsize.description,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    borderRadius: Spacing.cardBorderRadius,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Tabs;
