import React, {useState} from 'react';
import {Switch, TouchableOpacity, View} from 'react-native';
import ccLogo from '../../assets/img/cc.jpg';


import {
    Body,
    Button,
    Container,
    Content,
    Header,
    Icon,
    Left,
    ListItem,
    Right,
    Text,
    Thumbnail,
    Title
} from 'native-base';

import {useStateValue} from '../context/StateContext';
import resetAction from '../utils/NavigationUtils';

import {primary} from '../Colors';
import {LOGOUT_USER} from "../Actions";
import styles from "../Styles";
import NotificationIcon from "../icons/NotificationIcon";

const ProfileScreen = (props) => {

    const [{profile}, dispatch] = useStateValue();

    const [sync1, setSync1] = useState(true);
    const [sync2, setSync2] = useState(false);

    const logout = () => {
        dispatch({type: LOGOUT_USER});
        props.navigation.dispatch(resetAction);
    };

    return (
        <Container>
            <Header transparent>
                <Left>
                    <Button transparent onPress={() => props.navigation.goBack()}>
                        <Icon name='arrow-back' style={styles.arrow}/>
                    </Button>
                </Left>
                <Body>
                <Title style={{color:'black'}}>PROFILE</Title>
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
            <Content style={{ marginTop: 15 }}>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 15,
                    flexDirection: 'row'
                }}>
                    <Thumbnail circle large source={ccLogo}/>
                </View>
                <Title style={{ paddingBottom: 15 }}>{profile.username}</Title>
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: primary }}>
                            <Icon active name="sync"/>
                        </Button>
                    </Left>
                    <Body>
                    <Text>Syncronization</Text>
                    </Body>
                    <Right>
                        <Switch value={sync1} onValueChange={() => setSync1(!sync1)}/>
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: primary }}>
                            <Icon active name="ios-notifications"/>
                        </Button>
                    </Left>
                    <Body>
                    <Text>Notifications</Text>
                    </Body>
                    <Right>
                        <Switch value={sync2} onValueChange={() => setSync2(!sync2)}/>
                    </Right>
                </ListItem>
                <ListItem icon onPress={logout}>
                    <Left>
                        <Button style={{ backgroundColor: primary }}>
                            <Icon active name="ios-log-out"/>
                        </Button>
                    </Left>
                    <Body>
                    <Text>Logout</Text>
                    </Body>
                    <Right>
                    </Right>
                </ListItem>
            </Content>
        </Container>
    );
};


export default ProfileScreen;
