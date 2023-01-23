import * as React from 'react';
import { View, StyleSheet, Button, Pressable } from 'react-native';
import { Video } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import VideoPlayer from './components/VideoPlayer';


export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [dimensions, setDimensions] = React.useState({});


  return (
    <View style={styles.container} >
      <VideoPlayer />
      <VideoPlayer />
      <VideoPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  video: {
    width: '90%',
    aspectRatio: 16/9,
  },

  iconContainer:{
    width: '90%',
    aspectRatio: 16/9,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  iconBackground:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height:38,
    width: 38,
    borderRadius: 19

  },

  playIcon: {
    color: 'blue'
  }
});
