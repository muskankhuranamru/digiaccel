import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { Colors, Fontsize, Spacing, Typography } from '../theme';
import Header from '../components/Header';
import ModuleCard from '../components/ModuleCard';
import { moduleData, moduleData2, moduleData3 } from '../utils/constants';
import GoBackHeader from '../components/GoBackHeader';


const ModuleScreen = ({ navigation }) => {

 const renderItem = ({ item }) => (
    <ModuleCard 
      title={item.title} 
      progress={item.progress} 
      imageSource={item.imageSource} 
      onPress={item.onPress}
      progressBarColor={item.progressBarColor}
      progressPercentage={item.progressPercentage}
      progressBarFill={item.progressBarFill}
      showProgressBar={true}
      showProgressPercentage={true}
    />
  );

   const renderItem2 = ({ item }) => (
    <ModuleCard 
      title={item.title} 
      progress={item.progress} 
      imageSource={item.imageSource} 
      onPress={item.onPress}
      progressBarColor={item.progressBarColor}
      progressPercentage={item.progressPercentage}
      progressBarFill={item.progressBarFill}
      cardTitleStyle={{fontSize:Fontsize.subHeading, width:'100%', marginRight:Spacing.small, fontFamily:Typography.semiBoldSecondary}}
      progressStyle={{color:Colors.green}}
      showCompletedIcon={true}
      progressViewStyle={{marginTop: Spacing.xsmall, marginBottom:0}}
imageContainerStyle={{height:60, width:60}}
containerStyle={{backgroundColor:Colors.greenTone1}}
    />
  );
     const renderItem3 = ({ item, index }) => (
    <ModuleCard 
      title={item.title} 
      progress={item.progress} 
      imageSource={item.imageSource} 
      onPress={item.onPress}
      progressBarColor={item.progressBarColor}
      progressPercentage={item.progressPercentage}
      progressBarFill={item.progressBarFill}
      cardTitleStyle={{fontSize:Fontsize.subHeading, width:'100%', marginRight:Spacing.small, fontFamily:Typography.semiBoldSecondary}}
      progressViewStyle={{marginTop: Spacing.xsmall,marginBottom:Spacing.small}}
imageContainerStyle={{height:60, width:60}}
containerStyle={{marginBottom:Spacing.medium, opacity: index === 0 ? 1 : 0.7}}
showProgressBar={index > 0 ? false : true}
hideProgressTextView={ index > 0 ? true : false}
showLockedView={index> 0 ? true : false}




    />
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <Header title="Learning Hub" />
      <ScrollView >
    <View style={styles.container}>    
        <GoBackHeader navigation={navigation}  title='Back to Dashboard' style={{marginLeft: Spacing.medium, marginTop:Spacing.medium, }} />
        <View style={styles.inProgressView}>
          <Text style={styles.blueText}>InProgress</Text>
        </View>
        <View >

 <FlatList
          data={moduleData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginTop:Spacing.medium, paddingLeft:Spacing.medium, paddingBottom:Spacing.medium}}

        />
        <Text style={styles.heading}>Recently Completed</Text>

         <FlatList
          data={moduleData2}
          renderItem={renderItem2}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginTop:Spacing.medium, paddingLeft:Spacing.medium, paddingBottom:Spacing.medium}}

        />
 <Text style={styles.heading}>Upcoming Modules</Text>

   <FlatList
          data={moduleData3}
          renderItem={renderItem3}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{marginTop:Spacing.medium, paddingLeft:Spacing.medium, paddingBottom:Spacing.medium}}

        />
        </View>

         

       
      </View>
      </ScrollView>
  
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.offWhite,
    flex:1, 

  },
  text: {
    fontSize: Fontsize.subHeading,
    marginBottom: Spacing.mid,
  },
  inProgressView:{
 borderRadius:Spacing.cardBorderRadius, backgroundColor:Colors.primaryTone2, alignItems:'center', justifyContent:'center', marginLeft:Spacing.medium, marginTop:Spacing.medium, width:100, padding:Spacing.xsmall
  }, 
   blueText: {
    fontSize: Fontsize.smText,
  fontFamily:Typography.boldSecondary, color:Colors.primary
  },
  rowView:{
    flexDirection:'row', alignItems:'center', marginLeft:Spacing.medium, marginTop:Spacing.medium
  }, 
  heading:{

     fontSize: Fontsize.heading,
  fontFamily:Typography.boldSecondary,color:Colors.darkGrey, marginLeft:Spacing.medium
  }


  
});

export default ModuleScreen;
