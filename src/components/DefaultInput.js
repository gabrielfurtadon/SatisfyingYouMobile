import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const DefaultInput = ({ title, placeholder, size, secure, error }) => {
    const styles = StyleSheet.create({
        title: {
            color: 'white',
            fontFamily: 'AveriaLibre-Regular'
        },
        input: {
            height: 40,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            marginTop: 5,
            color: 'black',
            borderRadius: 8,
            width: size,
            backgroundColor: 'white',
            fontFamily: 'AveriaLibre-Regular'
        },
        error:{
            color: '#fd7979',
            fontFamily: 'AveriaLibre-Regular',
        }
    });


    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <TextInput secureTextEntry={secure} style={styles.input} placeholder={placeholder} />
            <Text style={styles.error}>{error}</Text>
        </View>
    );
};


export default DefaultInput;