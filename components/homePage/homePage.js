import React, { Component } from 'react'
import { Container, Content, Icon, Header, Body } from 'native-base';
import { connect } from 'react-redux';
import Styles from '../style'
import { View, TouchableOpacity, Text, KeyboardAvoidingView, Platform, FlatList } from 'react-native';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            profile: props.profile
        }
    }

    _renderdata = (rowItem) => {
        const { item, index } = rowItem;
        return (
            <TouchableOpacity style={Styles.employee_list} >
                <View style={Styles.insideList}>
                    <Text style={Styles.itemName}>{item.name}</Text>
                    <Text style={Styles.itemNo}>{item.phoneNo}</Text>
                </View>
                <Text style={Styles.textsec}>{item.age}</Text>
                <Text style={Styles.textsec}>{item.gender}</Text>
                <Text style={Styles.textsec}>{item.email}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        console.log(this.state.profile)
        return (
            <Container>
                <Content style={{ backgroundColor: "#231F20" }}>
                    <Header
                        style={Styles.header_bg}
                        iosBarStyle={"dark-content"}
                        androidStatusBarColor={"white"}
                    >
                        <Body style={{ alignItems: 'center' }}>
                            <Text style={Styles.headerText}>EMPLOYEE LIST</Text>
                        </Body>
                    </Header>
                    <View style={{ flex: 1, marginTop: 20 }}>
                        <FlatList data={this.state.profile}
                            horizontal={false}
                            extraData={this.state}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={this._renderdata}>
                        </FlatList>
                    </View>
                </Content>
            </Container>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.authReducer.profile,
    };
};


export default connect(mapStateToProps, null)(HomePage)
