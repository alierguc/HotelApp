import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Button,
    StatusBar,
    Animated,
    TouchableHighlight,
    TextInput,
    ImageBackground,
    Dimensions
} from 'react-native';
import VideoPlayer from 'react-native-video-player';
const VIMEO_ID = '76979871';
export default class VideoModalPage extends Component {
    constructor() {
        super();

        this.state = {
            video: { width: Dimensions.get('window').width,  height: Dimensions.get('window').height, duration: undefined },
            thumbnailUrl: undefined,
            videoUrl: undefined,
        };
    }
    componentDidMount() {
        global.fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
            .then(res => res.json())
            .then(res => this.setState({
                thumbnailUrl: res.video.thumbs['640'],
                videoUrl: res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
                video: res.video,
            }));
    }
    render() {
        return (
           
                <VideoPlayer
                style={{height:Dimensions.get('window').height-100,width:Dimensions.get('window').width -600}}
                fullScreenOnLongPress
                resizeMode='stretch'
                    endWithThumbnail
                    thumbnail={{ uri: this.state.thumbnailUrl }}
                    video={{ uri: this.state.videoUrl }}
                    videoWidth={this.state.video.width}
                    videoHeight={this.state.video.height}
                    duration={this.state.video.duration/* I'm using a hls stream here, react-native-video
            can't figure out the length, so I pass it here from the vimeo config */}
                    ref={r => this.player = r}
                />
           
        );
    }
}