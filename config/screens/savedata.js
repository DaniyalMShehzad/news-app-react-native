import { Button, Icon, List, ListItem } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styling from '../../styling'
import { Spinner } from '@ui-kitten/components';
const SaveData = () => {
    const [alldata, setAllData] = useState([])
    const [data, setData] = useState([])

    const [data2, setData2] = useState([])
    console.log("data-------------->", data2);
    useEffect(() => {
        AsyncStorage.getItem('savedata', (err, result) => {
            setTimeout(() => {
                console.log("data Before-------------->", alldata);
                setAllData(JSON.parse(result))
            }, 500)
            console.log(result, "hhjhl;l;l;l;;l;l");
            // setData(alldata);
        })
    }, [])
    const deletAll = () => {
        AsyncStorage.removeItem('savedata').then(() => {
            setAllData()
        })
    }
    // useEffect(() => {
    //     console.log(window.location.href);
    // }, [])
    const deleteData = (item) => {
        console.log(item);
        setData(alldata.splice(item, 1))
        setAllData(alldata)
        AsyncStorage.setItem(
            'savedata',
            JSON.stringify(data)
        )
    }
    const renderItemAccessory = (props) => (
        <Button size='tiny' onPress={() => deleteData(props)}>Delete</Button>
    );
    // const renderItemIcon = (props) => (
    // );
    const renderItem = ({ item, index }) => (
        <ListItem
            title={`${item.author}  ${item.publishedAt.split("T")[0]}`}
            description={`${item.source.name}`}
            // accessoryLeft={renderItemIcon}
            accessoryRight={() => renderItemAccessory(index)}
        />
    );
    return (
        <View>
            <View>
                <View style={styles.SaveData}>
                    <View style={styles.news2}>
                        <Text style={styles.news3}>News App</Text>
                        <Text>
                            {/* <Search1 name="search1" size={25} /> */}
                        </Text>
                    </View>
                </View>
                <View style={styles.btn2}>
                    <TouchableOpacity style={styles.btn3} onPress={() => deletAll()}>
                        <Text style={styles.SaveBtnText}>deleteAll</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {(alldata)?
                        <List
                            style={styles.container}
                            data={alldata}
                            renderItem={renderItem}
                        />
                        :
                        <Spinner/>
                    }
                </View>
            </View>
        </View>
    )
}
export default SaveData
const styles = StyleSheet.create({
    ...styling,
    container: {
        maxHeight: 442,
    },
})
