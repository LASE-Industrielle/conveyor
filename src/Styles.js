import {Platform, StatusBar, StyleSheet} from 'react-native';

import {primary} from './Colors';

export const elevationShadowStyle = (elevation) => (
    {
        elevation,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 * elevation },
        shadowOpacity: 0.12,
        shadowRadius: 6 * elevation
    }
);

export default StyleSheet.create({
    default: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    buttonStyle: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        backgroundColor: primary
    },
    inputItem: {
        marginTop: 10,
        marginBottom: 0,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
    },
    placeholder: {
        fontSize: 14,
        marginLeft: 12
    },
    footer: { padding: 10 },
    homeImage: {
        height: 200,
        width: null,
        flex: 1
    },
    notificationImage: {
        width: 50,
        height: 50
    },
    homeHeaderStyle: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
    },
    behind: {
        zIndex: -100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
    },
    icons: {
        color: primary
    },
    arrow: {
      color: '#606060'
    },
    buttonAnalyticsStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height:40,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        backgroundColor: primary,
    },
    container: {
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })
    }
});
