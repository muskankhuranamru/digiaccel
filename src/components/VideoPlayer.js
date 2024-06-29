import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import { Colors, Fontsize, Spacing, Typography } from '../theme';
import Icon from 'react-native-vector-icons/Ionicons';

const VideoPlayer = () => {
  const [paused, setPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1.0);
  const [muted, setMuted] = useState(false);

  const videoRef = useRef(null);

  const onProgress = (data) => {
    setCurrentTime(data.currentTime);
  };

  const onLoad = (data) => {
    setDuration(data.duration);
  };

  const togglePause = () => {
    setPaused(!paused);
  };

  const handleSeek = (value) => {
    videoRef.current.seek(value);
    setCurrentTime(value);
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.rowView, { padding: Spacing.medium }]}>
        <Text style={styles.title}>Digital Shopper Journey</Text>
        <View style={styles.controls}>
          <TouchableOpacity style={styles.rowView} onPress={() => { /* handle previous */ }}>
            <Icon name={'chevron-back'} size={18} color={Colors.primary} />
            <Text style={[styles.controlText, { marginRight: Spacing.medium }]}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rowView} onPress={() => { /* handle next */ }}>
            <Text style={styles.controlText}>Next</Text>
            <Icon name={'chevron-forward'} size={18} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      <Video
        ref={videoRef}
        source={require('../assets/videos/stockVideo.mp4')} // replace with your video URL or local asset
        style={styles.video}
        paused={paused}
        onProgress={onProgress}
        onLoad={onLoad}
        volume={volume}
        muted={muted}
      />

      <View style={[styles.rowView, { paddingHorizontal: Spacing.medium, justifyContent: 'space-evenly' }]}>
        <TouchableOpacity onPress={togglePause}>
          <Icon name={paused ? 'play-sharp' : 'pause-sharp'} size={18} color={Colors.darkGrey} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSeek(currentTime - 10)}>
          <Icon name={'play-back-sharp'} size={18} color={Colors.darkGrey} />
        </TouchableOpacity>
        <Text style={styles.smText}>{currentTime.toFixed(2)}</Text>

        <Slider
          style={styles.slider}
          value={currentTime}
          minimumValue={0}
          maximumValue={duration}
          thumbTintColor={Colors.primary}
          minimumTrackTintColor={Colors.primary}
          onValueChange={(value) => setCurrentTime(value)}
          onSlidingComplete={(value) => handleSeek(value)}
        />
        <Text style={styles.smText}>{duration.toFixed(2)}</Text>
        <TouchableOpacity onPress={toggleMute}>
          <Icon name={muted ? 'volume-mute-sharp' : 'volume-medium-sharp'} size={18} color={Colors.darkGrey} />
        </TouchableOpacity>
        <Icon name={'settings-sharp'} size={18} color={Colors.darkGrey} onPress={() => { /* handle settings */ }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: Typography.semiBoldSecondary,
    fontSize: Fontsize.description,
    color: Colors.black,
    flex: 1,
  },
  video: {
    width: '100%',
    height: 220,
  },
  controls: {
    flexDirection: 'row',
  },
  controlText: {
    fontFamily: Typography.semiBoldSecondary,
    fontSize: Fontsize.description,
    color: Colors.primary,
  },
  smText: {
    fontFamily: Typography.semiBoldSecondary,
    fontSize: Fontsize.xsmText,
    color: Colors.darkGrey,
  },
  slider: {
    width: '50%',
    height: 40,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default VideoPlayer;
