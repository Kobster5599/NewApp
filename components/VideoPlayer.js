import * as React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Video } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';


export default function VideoPlayer() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [dimensions, setDimensions] = React.useState({});

  return (
      <Pressable onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
      <Video
      onLayout={(event) =>{  
        var {x, y, height, width } = event.nativeEvent.layout; 
        setDimensions({
          x: x,
          y: y,
          width: width,
          height: height,
          margin: height*-1
        });
  
    } }
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
        <View style={{...styles.iconContainer, marginTop: dimensions.margin}}>
          {!status.isPlaying ? 
          (
          <View style={styles.iconBackground}>
            <AntDesign style={styles.playIcon} name="play" size={32} color="blue" /> 
            </View>
          )
          : ''}
        
        </View>
      </Pressable>
  );
}



