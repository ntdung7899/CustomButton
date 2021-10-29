import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button, TouchableOpacity } from 'react-native';


function CustomStyleButton() {

    const [count, setCount] = useState(0);
    
    const onPress = () => setCount(prevCount => prevCount + 1);
    const dataButton = [
        {
            id: '0',
            title: 'Default',
            style: {
                color: '#707070'
            }
        },
        {
            id: '1',
            title: 'Outline',
            style: {
                variant: 'outline-primary'
            }
        },
        {
            id: '2',
            title: 'Text',
        },
        {
            id: '3',
            title: 'Disable shadow',
        },
        {
            id: '4',
            title: 'Disable',
        },
        {
            id: '5',
            title: 'Icon store in start',
        },
        {
            id: '6',
            title: 'Icon store in end',
        },
        {
            id: '7',
            title: 'Size sm',
        },
        {
            id: '8',
            title: 'Size md',
        },
        {
            id: '9',
            title: 'Size lg',
        },
        {
            id: '10',
            title: 'Color default',
        },
        {
            id: '11',
            title: 'Color primary',
        },
        {
            id: '12',
            title: 'Color secondary',
        },
        {
            id: '13',
            title: 'Color danger',
        },

    ];
    const CustomButton = ({ styleCustom }) => (
        <View style={[{ width: "30%", margin: 10, marginBottom: 30 }]}>
            <Button
                onPress={() => console.log('Press')}
                title="Button"
                variant="outline-primary"

            />
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <CustomButton />
            <FlatList
                data={dataButton}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={styles.item} 
                        onPress={onPress}>
                        <View>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}

                numColumns={3}
                keyExtractor={(item, index) => index}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        flexDirection: 'column',
    },
    item: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 12,
        textAlign: 'center'
    },
});

export default CustomStyleButton;