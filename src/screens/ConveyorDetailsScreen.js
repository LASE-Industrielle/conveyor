import React, {useEffect} from 'react';


import {Body, Button, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Text, Title} from 'native-base';
import getConveyors from '../services/ConveyorsService';
import {useStateValue} from '../context/StateContext';
import styles from '../Styles';
import NotificationIcon from "../icons/NotificationIcon";
import {TouchableOpacity} from "react-native";

const ConveyorDetailsScreen = (props) => {

    const conveyorId = props.navigation.getParam('id');

    const [{conveyors}, dispatch] = useStateValue();

    useEffect(()=> {
        getConveyors(dispatch);
    },[]);

    return (
        <Container>
            <Header transparent>
                <Left>
                    <Button transparent onPress={() => props.navigation.goBack()}>
                        <Icon name='arrow-back' style={styles.arrow}/>
                    </Button>
                </Left>
                <Body>
                <Title style={{color:'black'}}>CONVEYOR #{conveyorId}</Title>
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
            <Footer style={{
                borderTopWidth: 0,
                marginBottom:12,
                shadowOffset: {height: 0, width: 0},
                shadowOpacity: 0,
                elevation: 0
            }}>
                <FooterTab style={{ backgroundColor: 'white'}}>
                    <Button
                        block
                        primary
                        onPress={() => props.navigation.navigate('ScannersAnalytic', { id: conveyorId })}
                        style={styles.buttonAnalyticsStyle}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 14,
                            marginLeft: -15,
                        }}>SCANNERS ANALYTIC</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};


export default ConveyorDetailsScreen;
