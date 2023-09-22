import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export const DefaultButton = ({ title, color, onPress, width, style }) => {
    const buttonStyle = {
        backgroundColor: color || 'green'
    };

    const styles = StyleSheet.create({
        button: {
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            width: width
        },
        buttonText: {
            color: 'white',
            fontSize: 16,
            fontFamily: 'AveriaLibre-Regular'
        },
    });

    return (
        <TouchableOpacity
            style={[styles.button, buttonStyle, style]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};


