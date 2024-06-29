import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { Colors, Fontsize, Spacing, Typography } from '../theme';
import CustomButton from './CustomButton';


const QueryTab = () => {
  const [queryText, setQueryText] = useState('');
  const [askedQueries, setAskedQueries] = useState([]);

  const handleQuerySubmit = () => {
    if (queryText.trim() !== '') {
      setAskedQueries([...askedQueries, queryText]);
      setQueryText('');
    }
  };

  return (
    <View style={styles.tabContainer}>

      <View style={styles.tabBar}>
        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>
            <Image source={require('../assets/images/queries.png')}  style={styles.icon}/>
          <Text style={styles.tabText}>Queries</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabItem]}>
            <Image source={require('../assets/images/notes.png')}  style={styles.icon}/>
          <Text style={[styles.tabText, , {color:Colors.grey2}]}>Notes</Text>
        </TouchableOpacity>
      </View>


      <ScrollView contentContainerStyle={styles.content}>

        <View style={{paddingHorizontal:Spacing.medium}} >

          <TextInput
            style={styles.input}
            multiline
            value={queryText}
            onChangeText={text => setQueryText(text)}
            placeholder="Ask your queries here..
A mentor will respond to it in 24 Hrs."
            placeholderTextColor={Colors.grey2}
          />
           <CustomButton title="Submit Query" onPress={handleQuerySubmit} style={{padding:7, width:130,alignSelf:'flex-end'
           }} textStyle={{fontSize:Fontsize.smText}} />
        </View>


        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Asked Queries</Text>
           <Text style={styles.queryItem}>Wanted to initiate discussion on the book which was an optional reading in this module.</Text>
          {askedQueries.map((query, index) => (
            <Text key={index} style={styles.queryItem}>{query}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    backgroundColor: Colors.offWhite,

  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

     width:'60%', 
        paddingTop:Spacing.medium
  },
  tabItem: {
    paddingHorizontal: Spacing.medium,
    paddingVertical: Spacing.small,
        flexDirection:'row', alignItems:'center'
     
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
    flexDirection:'row', alignItems:'center'
  },
  tabText: {
    fontSize: Typography.body,
    fontWeight: 'bold',
    color: Colors.black,
  },
  content: {
    flexGrow: 1,
    paddingTop: Spacing.medium,
  },
  section: {
    marginVertical: Spacing.medium,
    padding:Spacing.medium,
    backgroundColor:Colors.white, flex:1
  },
  sectionTitle: {
    fontSize: Fontsize.subHeading,
    marginBottom: Spacing.small,
    fontFamily:Typography.mediumSecondary, color:Colors.black
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.grey2,
    borderRadius: Spacing.cardBorderRadius,
    padding: Spacing.medium,
    marginBottom: Spacing.medium,
    minHeight: 100,
    textAlignVertical: 'top',
    backgroundColor:Colors.white
  },
  
  queryItem: {

    borderRadius: Spacing.cardBorderRadius,
    padding: Spacing.medium,
    marginBottom: Spacing.small,
    backgroundColor:Colors.offWhite, 

  },
  icon :{
    height:25, width:25, marginRight:Spacing.xsmall
  }
});

export default QueryTab;
