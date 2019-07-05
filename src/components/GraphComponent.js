import React from "react";
import {Text, View} from 'react-native';
import {VictoryAxis, VictoryChart, VictoryLine, VictoryTheme} from "victory-native";

const GraphComponent = props => {

    const {label,lineColor, data, value, units,loading} = props;
    let values = [];
    data.map((item,index) => {
        values.push({x:index,y:item});
    })

    let maxValue = Math.max(...data)
    let minValue = Math.min(...data)
    let midValue = (maxValue + minValue)/2;
    const generateConstantTicks = value => [value-2,value-1,value,value+1,value+2];
    const generateAvgTicks = (minValue,midValue,maxValue) => [minValue,(minValue+midValue)/2,midValue,(midValue+maxValue)/2,maxValue];
    const ticks = (maxValue-minValue===0)?generateConstantTicks(minValue):generateAvgTicks(minValue,midValue,maxValue);






    return (
        <View>
            <Text style={{paddingLeft:15, paddingTop:20}}>{label}</Text>
            <Text style={{fontSize:16, color: lineColor,paddingLeft:15}}>{value} {units}</Text>
            {values && <VictoryChart domainPadding={20} padding={{left: 55, right: 50, bottom: 20, top: 20}} height={300} theme={VictoryTheme.material}>
                {!loading && <VictoryAxis
                    dependentAxis
                    orientation="left"
                    tickValues={ticks}
                     tickFormat={(t) => ~~(t)}
                    style={{
                        axis: {stroke: "#F2F2F2"},
                        ticks: {stroke: "#F2F2F2"},
                        grid: {stroke: "#F2F2F2"},
                    }}/>
                }
                <VictoryAxis
                    orientation='bottom'
                    tickValues={values.map(item => item.x)}
                    tickFormat={values.map(item => '')}
                    style={{
                        axis: {stroke: "#F2F2F2"},
                        ticks: {stroke: "none"},
                        grid: {stroke: "none"},
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
