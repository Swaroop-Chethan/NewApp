import { StyleSheet, Platform, Dimensions } from 'react-native'
// const { width, height } = Dimensions.get("window");
import { heightPercentageToDP, widthPercentageToDP } from './consts';
// import wrap from 'lodash.wrap';
// const deviceHeight = Dimensions.get('window').height;

//#############SUSHANTACSSFORUTIC############

export default StyleSheet.create({

    loginContent: { backgroundColor:  "#231F20", flex: 1, flexDirection: "column-reverse"},
    loginInner: { alignItems: 'center', justifyContent: 'center', flex:1},
    loginText: { color: "green", fontSize: 20, margin:20},
    loginInn: {elevation: 10, bottom: 0, flex: 1.1, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#282b2c', justifyContent: 'space-between', flexDirection: 'column'},
    loginUsrPwd: { padding: 16, backgroundColor: '#202224', borderRadius: 15, margin: 16, elevation: 10 },
    loginUserText: { textAlign: 'left', color: "#fff", fontSize: 16, fontFamily: 'WorkSans-Regular' },
    loginKeyAvoid: { justifyContent: 'center', alignItems: 'center' },
    loginUserInp: {
        paddingLeft: 15, backgroundColor: '#2e3033', color: '#fff', fontSize: 14, borderRadius: 8, borderWidth: 1, width: '100%', height: 48
        , borderColor: "#4d5054"
    },
    invalid_email: {
        fontSize: 11, color: '#FF4500', marginTop: 2, fontFamily: "WorkSans-Medium"
    },
    invalid_padding: {
        paddingTop: heightPercentageToDP(2)
    },
    password_text: {
        textAlign: 'left', color: "#fff", fontSize: 16, fontFamily: 'WorkSans-Regular'
    },
    password_input: {
        justifyContent: 'center', alignItems: 'center', marginTop: heightPercentageToDP(1)
    },
    password_inText: {
        backgroundColor: '#2e3033', color: '#fff', padding:12, fontSize: 16, borderRadius: 15, borderWidth: 1, width: '100%', marginBottom:5
    },
    password_inTextLogin: {
        backgroundColor: '#2e3033', color: '#fff', paddingLeft: 15, fontSize: 14, borderRadius: 8, borderWidth: 1, width: '100%', height: 48, marginBottom:5
    },
    show_pwd: {
        position: 'absolute', flexWrap: 'wrap-reverse', right: widthPercentageToDP(8),justifyContent:'center',alignItems:'center'
    },
    position_abs: {
        position: 'absolute'
    },
    error_pwd: {
        flexDirection: 'row', justifyContent: 'flex-start', marginTop: 8
    },
    error_password: {
        fontFamily: "WorkSans-Medium", fontSize: 11, color: '#FF4500', fontFamily: 'WorkSans-Regular'
    },

    header_bg: {
        backgroundColor: "#3a3a3a",
    },
    employee_list:{ backgroundColor: '#222326', elevation: 20, padding: 20, borderRadius: 10, margin: heightPercentageToDP(3), marginTop: 0, borderWidth: 1, borderColor: "#282b2c" },
    button : {width: '90%', height: 48, marginTop: 0, borderRadius: 5, alignItems: 'center', justifyContent: 'center',},
    textsec: { color: 'grey', textTransform: 'uppercase' },
    itemName: { color: "#73c513", textTransform: 'uppercase' },
    itemNo: { color: "#33ADDF", textTransform: 'uppercase' },
    insideList: { flexDirection: 'row', justifyContent: 'space-between' },
    headerText: { color: '#73c513', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }
})