/**
 * Created by apple on 2016. 12. 5..
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

class Forecast extends Component {
    render() {
        return (
            <View>
                <Text style={styles.bigText}>
                    {this.props.main}
                </Text>
                <Text style={styles.mainText}>
                    Current condisions {this.props.description}
                </Text>
                <Text style={styles.bigText}>
                    {this.props.temp} F
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigText: {
        flex: 2,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF'
    },
    mainText: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF'
    }
});

export default Forecast;