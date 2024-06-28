

import React from 'react';
import { View, StyleSheet } from 'react-native';

const CustomProgressBar = ({ progress, barColor, style }) => {
  return (
    <View style={[styles.container, {style}]}>
      <View style={[styles.progressBar, { width: `${progress * 100}%`, backgroundColor: barColor }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 5,
  },
});

export default CustomProgressBar;
