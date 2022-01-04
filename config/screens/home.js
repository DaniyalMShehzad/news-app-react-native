import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacityBase, TouchableOpacity } from 'react-native'
import styling from '../../styling'
import DropDownPicker from 'react-native-dropdown-picker';
import { Input } from '@ui-kitten/components';
// import Search1 from "react-native-vector-icons/AntDesign"
import AsyncStorage from '@react-native-async-storage/async-storage'
const Home = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [data, setData] = useState();
    const [alldata, setAllData] = useState([]);
    const [datatype, setDataType] = useState("");
    const [items, setItems] = useState([
        { label: 'popularity', value: 'popularity' },
        { label: 'A to Z', value: 'AtoZ' },
        { label: 'Published', value: 'publishedAt' },
        { label: 'Recent', value: 'recent' },
    ]);
    useEffect((navigation) => {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: `https://newsapi.org/v2/everything?q=${datatype ? datatype : "all"}&from=2021-12-31&to=2021-12-31&sortBy=${value ? value : "all"}&apiKey=45fd588915d0441c84055cf60ffc752a`,
            headers: {}
        };
        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data.articles), "articlesarticlesarticlesarticlesarticlesarticles");
                setData(response?.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(value, "--------");
    }, [datatype, value])
    const saveData = (e) => {
        // console.log(e);
        AsyncStorage.getItem('savedata', (err, result) => {
            setAllData(JSON.parse(result))
        })
        if (alldata) {
            AsyncStorage.setItem(
                'savedata',
                JSON.stringify([...alldata, e])
            )
        }
        else {
            AsyncStorage.setItem(
                'savedata',
                JSON.stringify(e)
            )
        }
        // navigation.navigate({state:"savedata",})
    }
    return (
        <>
            <View style={styles.Container}>
                <View>
                    <View style={styles.news}>
                        <View style={styles.news2}>
                            <Text style={styles.news3}>News App</Text>
                            <Text>
                                {/* <Search1 name="search1" size={25} /> */}
                            </Text>
                        </View>
                    </View>
                    <View style={{height:"10%",width:"100%" ,flexDirection:"row",justifyContent: "space-between",alignItems:"center",}}>
                        <Input
                            placeholder='Place your Text'
                            value={datatype}
                            style={styles.input}
                            onChangeText={(e) => setDataType(e)}
                        />
                        <View style={styles.DropPicker}>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                zIndexInverse={9999}
                                autoScroll={true}
                            />
                        </View>
                    </View>
                    <View style={{ height: "73%", justifyContent: "center", marginBottom: 0,}}>
                        <ScrollView>
                            <>
                                <View style={styles.cardParent}>
                                    {
                                        (data) ?
                                            // data?.map((e, i) => {
                                            //     console.log(e);
                                            data?.articles?.map((e, i) => {
                                                // console.log(e);
                                                return (
                                                    <>
                                                        <View style={styles.card} key={i}>
                                                            <View style={styles.cardImgParent} >
                                                                <Image source={{ uri: e.urlToImage }} style={styles.cardImg} />
                                                            </View>
                                                            <View style={styles.Text}>
                                                                <Text style={styles.name}>{e.source.name}</Text>
                                                                <Text style={styles.author}>{e.author}</Text>
                                                                <Text style={styles.title}>{e.title}</Text>
                                                                <Text style={styles.title}>{e.content}</Text>
                                                                <Text style={styles.title}>{e.description}</Text>
                                                            </View>
                                                            <View>
                                                                <TouchableOpacity style={styles.btn} onPress={() => saveData(e)}>
                                                                    <Text style={styles.SaveBtnText}>Save</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    </>)
                                            })
                                            // })
                                            :
                                            <Text>No Data Avalible</Text>
                                    }
                                </View>
                            </>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </>
    )
}
export default Home
const styles = StyleSheet.create({ ...styling,
    input: {
        flex: 1,
        margin: 5,
      }, })