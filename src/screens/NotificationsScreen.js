import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {bgColor, black, greyText, statusColorGreen, statusColorRed, white} from '../Colors';
import GradientHeaderComponent from '../components/GradientHeaderComponent';
import {elevationShadowStyle} from "../Styles";
import fontStyles from "../utils/FontUtils";
import { getNotifications} from "../services/NotificationService";
import {useStore} from "../context/StateContext";
import NotificationIcon from "../icons/NotificationIcon";

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: white
  },
  flatList: {
    zIndex: 2,
    bottom: 32
  },
  listItemView: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    backgroundColor: white,
    marginHorizontal: 16,
    zIndex: 3,
    marginBottom: 5,
    ...elevationShadowStyle(2)
  },
  touchableOpacityPadding: {
    paddingBottom: 16,
    marginTop: 10
  },
  statusCircle: {
    alignSelf: 'flex-end',
    marginRight: 10
  },
  conveyorNameText: {
    // marginTop: -5,
    marginLeft: 18,
    ...fontStyles.fontBold,
    fontSize: 13
  },
  conveyorStatusText: {
    marginLeft: 18,
    // marginTop: 4,
    color: greyText,
    ...fontStyles.fontMedium,
    fontSize: 13
  },
  conveyorStatusGreenText: {
    color: statusColorGreen,
    ...fontStyles.fontMedium,
    fontSize: 14
  },
  conveyorStatusRedText: {
    color: statusColorRed,
    ...fontStyles.fontMedium,
    fontSize: 14
  },
  emptyView: {
    height: 9
  },
  icon: { padding: 10, margin: 7, borderRadius: 5, alignSelf: 'flex-end' },
});

type ListItemProps = {
  item: {
    id: string,
    title: string,
    body: string,
    timestamp: string,
  }
};

const renderListItem = ({item}: ListItemProps) => (
  <View style={styles.listItemView}>
    <TouchableOpacity
      style={styles.touchableOpacityPadding}
    >
      <View style={{flex:1, flexDirection: 'row'}}>
        <View style={{flex:1, flexDirection: 'column'}}>

        <Text style={styles.conveyorNameText}>
          Status:{' '}
          {item.body ? (
            item.body.toUpperCase() === 'OK' ? (
              <Text style={styles.conveyorStatusGreenText}>{item.body.toUpperCase()}</Text>
            ) : (
              <Text style={styles.conveyorStatusRedText}>{item.body.toUpperCase()}</Text>
            )
          ) : (
            'No measurements'
          )}
        </Text>
          <Text style={styles.conveyorStatusText}>{item.title}</Text>
        </View>
        {item.body ? (
          <NotificationIcon fill={item.body.toUpperCase() === 'OK' ? statusColorGreen : statusColorRed} height={14} width={14} style={styles.icon} />
        ) : (
          <View style={styles.emptyView}/>
        )}
      </View>
    </TouchableOpacity>
  </View>
);

const NotificationsScreen = () => {

  const [{ notifications }, dispatch] = useStore();


  useEffect(()=> {
    getNotifications(dispatch)
  },[])

  const reload = () => {
    getNotifications(dispatch);
  };

  return (
    <GradientHeaderComponent>
      <FlatList keyExtractor={item => String(item.id)}
                data={notifications.data}
                style={styles.flatList}
                renderItem={renderListItem}
                refreshing={notifications.loading}
                onRefresh={() => reload()}
                ListEmptyComponent={
                  <View style={styles.view}>
                    <Text style={styles.whiteText}>No notifications</Text>
                  </View>
                }
      />
    </GradientHeaderComponent>
  );
};

export default NotificationsScreen;
