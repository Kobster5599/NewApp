import * as React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import VideoPlayer from './components/VideoPlayer';


export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [dimensions, setDimensions] = React.useState({});


  return (
    <SafeAreaView>
    <ScrollView style={styles.scrollView} >
      <View style={styles.container}>
      <VideoPlayer video={'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}/>
      <VideoPlayer video={'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}/>
      <VideoPlayer video={'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}/>
      <VideoPlayer video={'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}/>
      <VideoPlayer video={'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}/>
      <VideoPlayer video={'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}/>
      <VideoPlayer video={'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}/>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollView: {
    width: '100%'
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
