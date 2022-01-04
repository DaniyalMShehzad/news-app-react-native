import { Dimensions } from "react-native";

let _dark = '#4361ee';
let _light = '#fffcf2';
let _card = '#3f37c9';
let _border = '#000';
let _text = "#fff"
let _BTN = "#4895ef";
const styling = {
    Container: {
        height: Dimensions.get("window").height
    },
    news: {
        backgroundColor: _dark,
        textAlign: "center",
        justifyContent: "center",
        flexDirection: "row",
        height: "10%",
    },
    SaveData:{
        backgroundColor: _dark,
        textAlign: "center",
        justifyContent: "center",
        flexDirection: "row",
        height: 61,
    },
    news3: {
        fontSize: 20,
        color: _light,
        textAlign: "center",
    },
    news2: {
        marginTop: 15,
        marginBottom: 15,
        flexDirection: "row",
    },
    DropPicker: {
        marginTop: 10,
        width: "30%",
    },
    cardParent: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    card: {
        // flexDirection:"row",
        backgroundColor: _card,
        borderWidth: 1,
        borderColor: "outset",
        borderBottom: "bottom",
        width: "100%",
        // textAlign:"center",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        padding: 10,
        // marginBottom:100,
        // borderRadius:20,
        // height:"50%",
        marginBottom: 10,
    },
    cardImgParent: {
        // alignItems:"center",
        justifyContent: "center",
        width: "100%",
    },
    cardImg: {
        width: "100%",
        // textAlign:"center",
        minHeight: 222,
        maxHeight: 224,
    },
    Text: {
        justifyContent: "center",
        alignItems: "center",
    },
    name: {
        fontSize: 20,
        color: "black",
        fontWeight: "500",
        color: _text,
    },
    author: {
        fontSize: 17,
        color: "black",
        fontWeight: "500",
        color: _text,
    },
    input: {
        height: 50,
        width: 350,
        padding: 15,
        fontSize: 16,
        borderRadius: 15,
        backgroundColor: 'ghostwhite',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        marginTop: 10,
        marginBottom: 10,
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    btn: {
        backgroundColor: _BTN,
        color: 'white',
        height: 50,
        width: 150,
        // padding: 15,
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    btn2:{
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    btn3:{
        backgroundColor: _BTN,
        color: 'white',
        height: 50,
        width: 140,
        // padding: 15,
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    SaveBtnText: {
        color: "white",
        fontSize: 20,
    },
    title: {
        fontSize: 14,
        textAlign: "left",
        alignItems: "center",
        color: _text,
    },
    Login: {
        height: Dimensions.get("window").height
    },
    Login2: {
        height: "80%",
        alignItems: "center",
        justifyContent: "space-between",
    },
    SignUp: {
        backgroundColor: _dark,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 40,
        paddingBottom: 40,
    },
    SignUpText: {
        color: _card,
        fontSize: 23,
    },
}
export default styling