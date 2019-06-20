import React, {useEffect} from 'react';


import {Body, Container, Content, Header, Left, List, ListItem, Text, Right, Title, Row} from 'native-base';
import getConveyors from '../services/ConveyorsService';
import {useStateValue} from '../context/StateContext';

const ConveyorsListScreen = (props) => {

    const [{conveyors}, dispatch] = useStateValue();

    useEffect(()=> {
        getConveyors(dispatch);
    },[]);

    return (
        <Container>
            <Header transparent>
                <Title>Conveyors</Title>
            </Header>
            <Content>
                <List>
                    {conveyors.data.map(item => (
                        <ListItem key={item.id}>
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
