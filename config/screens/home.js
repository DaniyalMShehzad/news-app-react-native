import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacityBase, TouchableOpacity } from 'react-native'
import styling from '../../styling'
import DropDownPicker from 'react-native-dropdown-picker';
import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';
// import Search1 from "react-native-vector-icons/AntDesign"
const Home = () => {
    // const [open, setOpen] = useState(false);
    // const [value, setValue] = useState("");
    // const [data, setData] = useState();
    // const [datatype, setDataType] = useState();
    // const [itenm2, setItems2] = useState();
    // const [loading, setLoading] = useState();
    // const [items, setItems] = useState([
    //     { label: 'popularity', value: 'popularity' },
    //     { label: 'A to Z', value: 'AtoZ' },
    // ]);
    // useEffect(() => {
    //     const axios = require('axios');
    //     const config = {
    //         method: 'get',
    //         url: `https://newsapi.org/v2/everything?q=${datatype ? datatype : "all"}&from=2021-12-31&to=2021-12-31&sortBy=${value ? value : "all"}&apiKey=45fd588915d0441c84055cf60ffc752a`,
    //         headers: {}
    //     };
    //     axios(config)
    //         .then(function (response) {
    //             // console.log(JSON.stringify(response.data.articles), "articlesarticlesarticlesarticlesarticlesarticles");
    //             setData(response?.data)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //     // console.log(data, "--------");
    // }, [])
    // console.log(data?.articles, "-------->");
    // console.log(value);
    return (
        <View>
            <Text>
                Home
            </Text>
        </View>
        //     <View style={styles.Container}>
        //         <View>
        //             <View style={styles.news}>
        //                 <View style={styles.news2}>
        //                     <Text style={styles.news3}>News App</Text>
        //                     <Text>
        //                         {/* <Search1 name="search1" size={25} /> */}
        //                     </Text>
        //                 </View>
        //             </View>
        //             {/* 
        //                 <DropDownPicker
        //                 open={open}
        //                 value={value}
        //                 items2={items2}
        //                 setOpen={setOpen}
        //                 setValue={setValue}
        //                 setItems2={setItems2}
        //                 />
        //             */}
        //             <ScrollView>
        //                 <>
        //                     <View style={styles.DropPicker}>
        //                         <DropDownPicker
        //                             open={open}
        //                             value={value}
        //                             items={items}
        //                             setOpen={setOpen}
        //                             setValue={setValue}
        //                             setItems={setItems}
        //                             zIndexInverse={9999}
        //                             autoScroll={true}
        //                         />
        //                     </View>
        //                     {/* <View style={styles.DropPicker}>
        //                         <DropDownPicker
        //                             zIndexInverse={1000}
        //                             autoScroll={true}
        //                             loading={loading}
        //                             disableLocalSearch={true} 
        //                             onChangeSearchText={(text) => {
        //                                 setLoading(true);

        //                                 API.get("/items/search", {
        //                                     text
        //                                 })
        //                                     .then((items) => {
        //                                         setItems2(items);
        //                                     })
        //                                     .catch((err) => {
        //                                         //
        //                                     })
        //                                     .finally(() => {
        //                                         setLoading(false);
        //                                     });
        //                             }}
        //                         />
        //                     </View> */}
        //                     <View style={styles.cardParent}>
        //                         {
        //                             (data) ?
        //                                 // data?.map((e, i) => {
        //                                 //     console.log(e);
        //                                 data?.articles?.map((e, i) => {
        //                                     // console.log(e);
        //                                     return (
        //                                         <>
        //                                             <View style={styles.card} key={i} >
        //                                                 <View style={styles.cardImgParent} >
        //                                                     <Image source={{ uri: e.urlToImage }} style={styles.cardImg} />
        //                                                 </View>
        //                                                 <View style={styles.Text}>
        //                                                     <Text style={styles.name}>{e.source.name}</Text>
        //                                                     <Text style={styles.author}>{e.author}</Text>
        //                                                     <Text style={styles.title}>{e.title}</Text>
        //                                                     <Text style={styles.content}>{e.content}</Text>
        //                                                     <Text style={styles.description}>{e.description}</Text>
        //                                                 </View>
        //                                                 <View>
        //                                                     <TouchableOpacity>
        //                                                         <Text>Save</Text>
        //                                                     </TouchableOpacity>
        //                                                 </View>
        //                                             </View>
        //                                         </>)
        //                                 })
        //                                 // })
        //                                 :
        //                                 <Text>jkj</Text>
        //                         }
        //                     </View>
        //                 </>
        //             </ScrollView>
        //         </View>
        //     </View>
    )
}
export default Home
const styles = StyleSheet.create({ ...styling })