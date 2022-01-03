import { Dimensions } from "react-native";

let _dark = '#1b568d';
let _light = '#fffcf2';
let _card = '#fff';
let _border='#000';
const styling = {
    Container:{
        height:Dimensions.get("window").height
    },
    news: {
        backgroundColor: _dark,
        textAlign: "center",
        justifyContent: "center",
        flexDirection: "row",
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
    DropPicker:{
        marginTop:10,
        width:"50%",
    },
    cardParent:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        marginTop:10,
        marginBottom:100,
        // height:"100%",
    },
    card:{
        // flexDirection:"row",
        backgroundColor:_card,  
        // borderWidth:1,
        // borderColor:_border,
        width :"100%",
        // borderBottom:,
        textAlign:"center",
        justifyContent: "center",
        alignItems:"center",
        elevation:5,
        padding:10,
        margin:10,
        // borderRadius:20,
        // height:"50%",
    },
    cardImgParent:{
        // alignItems:"center",
        justifyContent:"center",
        width:"100%",
        marginBottom:10,
        // marginTop:10,
    },
    cardImg:{
        width:"100%",
        // textAlign:"center",
        minHeight:222,
        maxHeight:224,
    },
    Text:{
        justifyContent:"center",
        alignItems:"center",
    },
    name:{
        fontSize:20,
        color:"black",
        fontWeight:"500",
    },
    author:{
        fontSize:17,
        color:"black",
        fontWeight:"500",
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
        marginTop:10,
        marginBottom:10,
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
    
        elevation: 9,
      },
      btn: {
        backgroundColor: _dark,
        color: 'white',
        height: 50,
        width: 350,
        padding: 15,
        fontSize: 16,
        marginTop:40,
        marginBottom:10,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        alignItems:"center",
        justifyContent:"center",
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
      },
      Login:{
        height:Dimensions.get("window").height
      },
      Login2:{
          height:"80%",
          alignItems:"center",
          justifyContent:"space-between",
      },
      SignUp:{
          backgroundColor:_dark,
          width:"100%",
          alignItems:"center",
          justifyContent:"center",
          paddingTop:40,
          paddingBottom:40,
      },
      SignUpText:{
          color:_card,
          fontSize:23,
      },
}
export default styling