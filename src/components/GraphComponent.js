import React from "react";
import {Text, View} from 'react-native';
import {VictoryAxis, VictoryChart, VictoryLine, VictoryTheme} from "victory-native";
import { bgColor } from "../Colors";

const GraphComponent = props => {

    const {label,lineColor, data, value, units,loading} = props;
    let values = [];
    data.map((item,index) => {
        values.push({x:index,y:item});
    })


    return (
        <View>
            <Text style={{paddingLeft:15, paddingTop:20}}>{label}</Text>
            <Text style={{fontSize:16, color: lineColor,paddingLeft:15}}>{value} {units}</Text>
            {values && <VictoryChart domainPadding={20} padding={{left: 50, right: 50, bottom: 20, top: 20}} height={300} theme={VictoryTheme.material}>
                <VictoryAxis dependentAxis orientation="left" style={{
                    axis: {stroke: bgColor},
                    ticks: {stroke: bgColor},
                    grid: {stroke: bgColor},
                }}/>

                <VictoryAxis
                    orientation='bottom'
                    tickValues={values.map(item => item.x)}
                    tickFormat={values.map(item => '')}
                    style={{
                        axis: {stroke: bgColor},
                        ticks: {stroke: bgColor},
                        grid: {stroke: bgColor},
                    }}
                />
                {!loading &&
                <VictoryLine
                    style={{data: {stroke: lineColor}}}
                    data={values}
                    interpolation='natural'
                />}
            </VictoryChart>}
        </View>
    );

};

export default GraphComponent;
