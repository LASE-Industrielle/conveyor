import React, {useEffect} from 'react';


import {Body, Button, Container, Header, Icon, Left, Right, Tab, Tabs, Text, Title} from 'native-base';
import getConveyors from '../services/ConveyorsService';
import {useStateValue} from '../context/StateContext';
import styles from '../Styles';
import NotificationIcon from '../icons/NotificationIcon';
import {TouchableOpacity} from "react-native";

const ScannersAnalyticScreen = (props) => {

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
                    <Title style={{color:'black'}}>SCANNERS ANALYTIC</Title>
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

                <Tabs>
                    <Tab heading="Tab1">
                        <Text>Tab 1</Text>
                    </Tab>
                    <Tab heading="Tab2">
                        <Text>Tab 2</Text>
                    </Tab>
                    <Tab heading="Tab3">
                        <Text>Tab 3</Text>
                    </Tab>
                </Tabs>

        </Container>
    );
};


export default ScannersAnalyticScreen;
