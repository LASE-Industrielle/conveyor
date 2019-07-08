import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from 'victory-native';

const GraphComponent = props => {
  const { label, lineColor, data, ticks, value, units } = props;
  const [loader, setLoader] = useState(false);

  // hack chart drawing to be done in background
  useEffect(() => {
    (async () => {
      setLoader(true);
    })();
  }, []);

  return (
    <View>
      <Text style={{ paddingLeft: 15, paddingTop: 20 }}>{label}</Text>
      <Text style={{ fontSize: 16, color: lineColor, paddingLeft: 15 }}>
        {value} {units}
      </Text>
      {data && loader ? (
        <VictoryChart
          domainPadding={30}
          padding={{ left: 55, right: 50, bottom: 20, top: 20 }}
          height={250}
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            dependentAxis
            orientation="left"
            tickValues={ticks}
            tickFormat={t => ~~t}
            style={{
              axis: { stroke: '#F2F2F2' },
              ticks: { stroke: '#F2F2F2' },
              grid: { stroke: '#F2F2F2' }
            }}
          />

          <VictoryAxis
            orientation="bottom"
            tickValues={data.map(item => item.x)}
            tickFormat={data.map(item => '')}
            style={{
              axis: { stroke: '#F2F2F2' },
              ticks: { stroke: 'none' },
              grid: { stroke: 'none' }
            }}
          />

          <VictoryLine style={{ data: { stroke: lineColor } }} data={data} interpolation="catmullRom" />
        </VictoryChart>
      ) : (
        <View style={{ height: 250, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator animating={true} />
        </View>
      )}
    </View>
  );
};

export default GraphComponent;
