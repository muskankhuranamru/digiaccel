
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme'; 

const CustomCheckBox = ({ checked, onChange, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onChange}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Icon name="checkmark" size={16} color="#FFFFFF" />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 28,
    height: 28,
    borderWidth: 1,
  borderColor:Colors.primaryTone1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: Colors.white, 
  },
  checked: {
    backgroundColor: Colors.primary, 
    borderWidth:0
  
  },
});

export default CustomCheckBox;
