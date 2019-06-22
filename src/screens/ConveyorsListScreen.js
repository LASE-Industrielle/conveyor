import React, {useEffect} from 'react';


import {Body, Container, Content, Header, Icon, Left, List, ListItem, Right, Text, Title} from 'native-base';
import getConveyors from '../services/ConveyorsService';
import {useStateValue} from '../context/StateContext';
import NotificationIcon from "../icons/NotificationIcon";
import {TouchableOpacity} from "react-native";

const ConveyorsListScreen = (props) => {

    const [{conveyors}, dispatch] = useStateValue();

    useEffect(()=> {
        getConveyors(dispatch);
    },[]);

    return (
        <Container>
            <Header transparent>
                <Left/>
                <Body>
                    <Title>CONVEYORS</Title>
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
                <List>
                    {conveyors.data.map(item => (
                        <ListItem key={item.id}
                                  onPress={() => (props.navigation.navigate('ConveyorDetails', {id: item.id}))}>
                            <Left>
                                <Body>
                                    <Text>{item.name}</Text>
                                </Body>
                            </Left>
                        </ListItem>
                    ))}
                </List>
            </Content>
        </Container>
    );
};


export default ConveyorsListScreen;
