import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import ConveyorDetailsFormRow from './ConveyorDetailsFormRow';
import ConveyorDetailsFormHeader from './ConveyorDetailsFormHeader';

import { elevationShadowStyle } from '../Styles';
import { whiteBorder } from '../Colors';

const styles = StyleSheet.create({
  line: {
    marginHorizontal: 15,
    borderBottomColor: whiteBorder,
    borderBottomWidth: 0.4
  },
  formText: {
    fontFamily: 'HelveticaNeue'
  }
});

const ConveyorDetailsForm = ({ conveyor }) => {
  return (
    <View
      style={{
        zIndex: 2,
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        borderRadius: 6,
        margin: 16,
        backgroundColor: 'white',
        ...elevationShadowStyle(2)
      }}
    >
      <ScrollView
        style={{
          zIndex: 2,
          paddingVertical: 30,
          backgroundColor: 'transparent'
        }}
      >
        <View style={{ paddingBottom: 0 }}>
          <ConveyorDetailsFormHeader item1={'Conveyor Mac Address: ' + conveyor.mac_address} />
          <View style={styles.line} />
          <ConveyorDetailsFormRow title="Material Name" item1={conveyor.material.name} item2="" />
          <View style={styles.line} />
          <ConveyorDetailsFormRow title="Material Density" item1="1.866" item2={'t\u00B3/s'} />
          <View style={styles.line} />
          <ConveyorDetailsFormRow
            title="Bulk Density"
            item1={conveyor.latest_measurement.bulk_density}
            item2={'kg/m\u00B3'}
          />
          <View style={styles.line} />
          <ConveyorDetailsFormRow
            title="Conveyor Speed"
            item1={conveyor.latest_measurement.conveyor_speed}
            item2={'mm/s'}
          />
          <View style={styles.line} />
          <ConveyorDetailsFormRow
            title="Calculated Area"
            item1={conveyor.latest_measurement.calculated_area}
            item2={'cm\u00B2'}
          />
          <View style={styles.line} />
          <ConveyorDetailsFormRow
            title="Volume Sum"
            item1={conveyor.latest_measurement.volume_sum}
            item2={'dm\u00B3'}
          />
          <View style={styles.line} />
          <ConveyorDetailsFormRow
            title="Volume Flow Per Hour"
            item1={conveyor.latest_measurement.avg_volume_flow_per_hour}
            item2={'dm\u00B3/h'}
          />
          <View style={styles.line} />
          <ConveyorDetailsFormRow
            title="Volume Flow"
            item1={conveyor.latest_measurement.avg_volume_flow}
            item2={'dm\u00B3/h'}
          />
          <View style={styles.line} />
          <ConveyorDetailsFormRow title="Mass Sum" item1={conveyor.latest_measurement.mass_sum} item2={'kg'} />
          <View style={styles.line} />
          <ConveyorDetailsFormRow title="Mass Flow" item1={conveyor.latest_measurement.avg_mass_flow} item2={'kg/h'} />
          <View style={styles.line} />
          <ConveyorDetailsFormRow title="Barycenter" item1={conveyor.latest_measurement.barycenter} item2={'mm'} />
          <View style={styles.line} />
          <ConveyorDetailsFormRow title="Valid Points" item1={conveyor.latest_measurement.valid_points} item2={'%'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ConveyorDetailsForm;
