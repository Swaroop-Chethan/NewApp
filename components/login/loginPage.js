import React, { Component } from 'react'
import { Container, Content, Icon } from 'native-base';
import { View, TouchableOpacity, Text, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { saveProfile } from '../../storage/actions';
import { connect } from 'react-redux';
import axios from 'axios';

class LoginPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
    }

    onChangeEmail = (email) => {
        this.setState({ email })
    }

    handleLogin = () => {
        let data = {
            "username": this.state.email,
            "platform": Platform.OS
        }
        const method = "POST"
        const apiURL = "https://api.hubapi.com/crm/v3/login"
        axios({ method: method, url: apiURL, data: data })
            .then(res => {
                this.props.saveProfile(res.data);
                this.props.navigation.navigate("HomePage")
            })
            .catch(err => {
                console.log("error", err)
            })
    }

    render() {
        return (
            <Container>
                <Content style={{ backgroundColor: "#231F20", flex: 1, flexDirection: "column-reverse"}}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex:1}}>
                            <Text style={{ color: "green", fontSize: 20, margin:20}}>MYAPP</Text>
                    </View>
                    <View style={{
                        elevation: 10, bottom: 0, flex: 1.1, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#282b2c', justifyContent: 'space-between', flexDirection: 'column'
                    }}>
                        <View style={{ padding: 16, backgroundColor: '#202224', borderRadius: 15, margin: 16, elevation: 10 }}>
                            <View width={"100%"}>
                                <Text style={{ textAlign: 'left', color: "#fff", fontSize: 16, fontFamily: 'WorkSans-Regular' }}>
                                    Username
                                </Text>
                                <TouchableOpacity style={{ marginTop: 10 }}>
                                    <KeyboardAvoidingView
                                        width={"100%"}
                                        behavior="padding"
                                        enabled
                                        style={{ justifyContent: 'center', alignItems: 'center' }}
                                    >
                                        <TextInput
                                            selectionColor={"#4d5054"}
                                            defaultValue={this.state.email}
                                            maxLength={256}
                                            placeholder="Username"
                                            autoCapitalize="none"
                                            placeholderTextColor="grey"
                                            editable={true}
                                            onChangeText={email =>
                                                this.onChangeEmail(email.toLowerCase())
                                            }
                                            style={
                                                {
                                                    paddingLeft: 15, backgroundColor: '#2e3033', color: '#fff', fontSize: 14, borderRadius: 8, borderWidth: 1, width: '100%', height: 48
                                                    , borderColor: "#4d5054"
                                                }
                                            }>

                                        </TextInput>
                                    </KeyboardAvoidingView>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginBottom: 30 }}>
                            <TouchableOpacity
                                disabled={this.state.disableCTA}
                                onPress={() => this.handleLogin()}
                                style={
                                    {
                                        width: '90%', height: 48, marginTop: 0, borderRadius: 5, alignItems: 'center', justifyContent: 'center',
                                        backgroundColor: this.state.email
                                            ? "#80dc00"
                                            : "#babcbf"
                                    }
                                }
                            >
                                <Text style={{ color: this.state.email ? 'black' : 'white', fontSize: 16 }}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        saveProfile: profile => dispatch(saveProfile(profile)),
    };
};

export default connect(null, mapDispatchToProps)(LoginPage)