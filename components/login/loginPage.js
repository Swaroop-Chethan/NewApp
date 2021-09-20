import React, { Component } from 'react'
import { Container, Content, Icon } from 'native-base';
import { View, TouchableOpacity, Text, KeyboardAvoidingView, Platform, TextInput, ToastAndroid } from 'react-native';
import { saveProfile } from '../../storage/actions';
import { connect } from 'react-redux';
import axios from 'axios';
import Styles from '../style'
import { userData, loginData } from './userData'

const RegEx = {
    email: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

};

class LoginPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorTextinput: false,
            errorPassword: false,
            toggleShowPass: true,
            disableCTA: true,
            errorTextinput: false,
            errorPassword: false
        }
    }

    validateEmail = enteredValue => {
        if (enteredValue && RegEx.email.test(enteredValue)) {
            this.setState({
                email: enteredValue,
                disableCTA: true,
                errorTextinput: false
            });
        } else {
            this.setState({
                email: enteredValue,
                disableCTA: true,
                errorTextinput: true
            });
        }
    };

    validatePassword = (pass) => {
        if (pass.length > 0 && RegEx.password.test(pass)) {
            this.setState({
                password: pass,
                showPass: true,
                disableCTA: false,
                errorPassword: false
            })
        }
        else {
            this.setState({
                password: pass.substring(0, pass.length - 1),
                showPass: true,
                disableCTA: true,
                errorPassword: true
            })
        }
    }

    handleLogin = () => {
        if (this.state.email == loginData.username && this.state.password == loginData.password) {
            this.props.saveProfile(userData);
            this.props.navigation.navigate("HomePage")
        } else {
            if (Platform.OS === 'android') {
                ToastAndroid.showWithGravity(
                    "Invalid login details",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                );
            }
        }
}

togglePass = () => {
    this.setState({
        toggleShowPass: !this.state.toggleShowPass,
        errorPassword: false

    })
}

render() {
    return (
        <Container>
            <Content style={Styles.loginContent}>
                <View style={Styles.loginInner}>
                    <Text style={Styles.loginText}>MYAPP</Text>
                </View>
                <View style={Styles.loginInn}>
                    <View style={Styles.loginUsrPwd}>
                        <View width={"100%"}>
                            <Text style={Styles.loginUserText}>
                                Username
                                </Text>
                            <TouchableOpacity style={{ marginTop: 10 }}>
                                <KeyboardAvoidingView
                                    width={"100%"}
                                    behavior="padding"
                                    enabled
                                    style={Styles.loginKeyAvoid}
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
                                            this.validateEmail(email.toLowerCase())
                                        }
                                        style={Styles.loginUserInp}>

                                    </TextInput>
                                </KeyboardAvoidingView>
                            </TouchableOpacity>
                            {this.state.errorTextinput === true &&
                                <View>
                                    <Text style={Styles.invalid_email}>
                                        Invalid Email Address
                                                </Text>
                                </View>
                            }
                        </View>
                        <View style={{}}>
                            <View style={Styles.invalid_padding}>
                                <View>
                                    <Text style={Styles.password_text}>Password</Text>
                                    <View style={Styles.password_input}>
                                        <TextInput
                                            style={[Styles.password_inTextLogin, { borderColor: this.state.isFocusOnPass ? '#80dc00' : '#4d5054' }]}
                                            secureTextEntry={this.state.toggleShowPass} placeholder="Password"
                                            placeholderTextColor="grey"
                                            autoCapitalize="none"
                                            selectionColor={"#4d5054"}
                                            maxLength={32}
                                            onChangeText={(text) => this.validatePassword(text)}
                                        />
                                        {this.state.showPass &&
                                            <View style={Styles.show_pwd}>
                                                {this.state.toggleShowPass ?
                                                    <Icon onPress={() => { this.togglePass() }} name={'eye'} style={Styles.position_abs} />
                                                    :
                                                    <Icon onPress={() => { this.togglePass() }} name={'eye-off'} style={Styles.position_abs} />
                                                }
                                            </View>
                                        }
                                    </View>
                                </View>

                            </View>

                            {this.state.errorPassword &&
                                <View style={Styles.error_pwd}>
                                    <Text style={Styles.error_password}>
                                        Minimum 8 characters required
                                           </Text>
                                </View>
                            }
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginBottom: 30 }}>
                        <TouchableOpacity
                            disabled={this.state.disableCTA}
                            onPress={() => this.handleLogin()}
                            style={[Styles.button,
                                {
                                    backgroundColor: !this.state.disableCTA
                                        ? "#80dc00"
                                        : "#babcbf"
                                }]
                            }
                        >
                            <Text style={{ color: !this.state.disableCTA ? 'black' : 'white', fontSize: 16, fontWeight: "bold" }}>Continue</Text>
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