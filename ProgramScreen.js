import React from 'react';
import { View, TextInput } from 'react-native';

function ProgramScreen() {
    return (
        <View>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
        </View>
    );
}

const styles = {
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    },
};

export default ProgramScreen;