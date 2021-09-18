import React, { Component } from 'react'
import { Container, Content, Icon } from 'native-base';
import { View, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
    }

    render() {
        return(
            <Container>
                <Content style={{ backgroundColor: "#231F20" }}>
                    <Text style={{ color:'#fff'}}>Home Page Component</Text>
                </Content>
            </Container>
        )
    }

}

export default HomePage
