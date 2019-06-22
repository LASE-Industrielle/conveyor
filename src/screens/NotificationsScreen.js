import React from 'react';


import {Body, Button, Container, Content, Header, Icon, Left, Right, Title} from 'native-base';
import styles from '../Styles';
import NotificationIcon from "../icons/NotificationIcon";
import {TouchableOpacity} from "react-native";

const NotificationsScreen = (props) => {

    return (
        <Container>
            <Header transparent>
                <Left>
                    <Button transparent onPress={() => props.navigation.goBack()}>
                        <Icon name='arrow-back' style={styles.arrow}/>
                    </Button>
                </Left>
                <Body>
                <Title style={{color:'black'}}>NOTIFICATIONS</Title>
                </Body>
                <Right>
                    <TouchableOpacity onPress={() => (props.navigation.navigate('Notifications'))}>
                        <NotificationIcon style={{marginRight: 8}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => (props.navigation.navigate('Profile'))}>
                        <Icon name="person" style={{marginLeft: 8, height: 27, width: 27}}></Icon>
                    </TouchableOpacity>
                </Right>
            </Header>
            <Content>
            </Content>
        </Container>
    );
};


export default NotificationsScreen;
