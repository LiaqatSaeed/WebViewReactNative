import React, { Component } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import Login from './CompanyInput';

const { width, height } = Dimensions.get('window')

export default class SplashScreen1 extends Component {
    anim = new Animated.Value(0);
    componentDidMount() {
        Animated.timing(this.anim, {
            toValue: 1,
            duration: 3000
        }).start();
    }

    render() {
        const translateY = this.anim.interpolate({
            inputRange: [0, 1],
            outputRange: [-(height * 2), 0]
        })
        const translateX = this.anim.interpolate({
            inputRange: [0, 1],
            outputRange: [-(height * 2), 0]
        })
        return (
            

            <View style={styles.container}>
                <Animated.View style={[styles.circle ]}>
                    
                </Animated.View>
               
            </View>
        );


    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        width: height * 2,
        height: height * 2,
        borderRadius: height / 2,
        backgroundColor: 'yellow'
    }
}