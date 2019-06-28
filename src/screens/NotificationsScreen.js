import React from 'react';


import {Body, Button, Container, Content, Header, Icon, Left, Right, Title, Text} from 'native-base';
import styles from '../Styles';
import NotificationIcon from "../icons/NotificationIcon";
import {TouchableOpacity} from "react-native";

const NotificationsScreen = (props) => {

    return (
        <Container>
            <Content contentContainerStyle={{
                backgroundColor: "#F2F2F2",
                flex: 1,
                justifyContent: "center",
                alignItems: 'center',
            }}>
                <Text style={{color: '#AAA9A9'}}>0 notifications</Text>
            </Content>
        </Container>
    );
};


export default NotificationsScreen;
