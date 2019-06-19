import React, {useEffect, useState,} from 'react';
import {Alert, Image} from 'react-native';
import {Button, Container, Content, Input, Item, Spinner, Text} from 'native-base';
import {useStateValue} from '../context/StateContext';
import authCall from '../services/AuthService';

import styles from '../Styles';
import laseLogo from '../../assets/img/lase.jpeg';
import {NavigationActions, StackActions} from 'react-navigation';

const appAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'App' })],
});

const LoginScreen = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [{auth}, dispatch] = useStateValue();

    useEffect(() => {
        if(__DEV__ === true) {
            setUsername('demo');
            setPassword('codecentriccclabs2');
        }
    }, []);

    useEffect(() => {
        if (auth.token !== '') {
            props.navigation.dispatch(appAction);
        }
    }, [auth.token]);

    useEffect(() => {
        if (auth.errorMessage !== '') {
            Alert.alert(
                'Failed',
                'Failed to login with provided credentials',
                [
                    {
                        text: 'OK',
                        onPress: () => auth.errorMessage = ''
                    },
                ],
                { cancelable: false },
            );
        }
    }, [auth.errorMessage]);

    const login = () => {
        authCall(dispatch, username, password);
    };

    if (auth.loading) {
        return (
            <Container>
                <Content contentContainerStyle={styles.default}>
                    <Spinner/>
                </Content>
            </Container>);
    }

    return (
        <Container>
            <Content contentContainerStyle={styles.default}>
                <Item>
                    <Image style={styles.image} source={laseLogo}/>
                </Item>
                <Item rounded style={styles.inputItem}>
                    <Input autoCapitalize="none" value={username} onChangeText={(text) => {
                        setUsername(text);
                    }} placeholder="Username" style={styles.placeholder}/>
                </Item>
                <Item rounded style={styles.inputItem}>
                    <Input secureTextEntry value={password} onChangeText={(text) => {
                        setPassword(text);
                    }} placeholder="Password" style={styles.placeholder}/>
                </Item>
                <Button
                    block
                    primary
                    onPress={login}
                    style={styles.buttonStyle}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 14
                    }}>Log in</Text>
                </Button>
            </Content>
        </Container>
    );
};


export default LoginScreen;
