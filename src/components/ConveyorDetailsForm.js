// @flow
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import ConveyorDetailsFormRow from './ConveyorDetailsFormRow';
import ConveyorDetailsFormHeader from './ConveyorDetailsFormHeader';

import { elevationShadowStyle } from '../Styles';
import { white } from '../Colors';
import FormLineComponent from './FormLineComponent';

const styles = StyleSheet.create({
  outerView: {
    zIndex: 2,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    borderRadius: 6,
    margin: 16,
    backgroundColor: white,
    ...elevationShadowStyle(2)
  },
  scrollView: {
    zIndex: 2,
    paddingVertical: 30
  }
});

type Props = {
  conveyor: {
    mac_address: string,
    material: {
      name: string
    },
    latest_measurement: {
      bulk_density: number,
      conveyor_speed: number,
      calculated_area: number,
      volume_sum: number,
      avg_volume_flow_per_hour: number,
      avg_volume_flow: number,
      mass_sum: number,
      avg_mass_flow: number,
      barycenter: number,
      valid_points: number
    }
  }
};

const ConveyorDetailsForm = ({ conveyor }: Props) => {
  return (
    <View style={styles.outerView}>
      <ScrollView style={styles.scrollView}>
        <View>
          <ConveyorDetailsFormHeader formHeader={`Conveyor Mac Address: ${conveyor.mac_address}`} />
          <FormLineComponent />
          <ConveyorDetailsFormRow title="Material Name" item1={conveyor.material.name} item2="" />
          <FormLineComponent />
          <ConveyorDetailsFormRow title="Material Density" item1="1.866" item2={'t\u00B3/s'} />
          <FormLineComponent />
          <ConveyorDetailsFormRow
            title="Bulk Density"
            item1={conveyor.latest_measurement.bulk_density}
            item2={'kg/m\u00B3'}
          />
          <FormLineComponent />
          <ConveyorDetailsFormRow
            title="Conveyor Speed"
            item1={conveyor.latest_measurement.conveyor_speed}
            item2="mm/s"
          />
          <FormLineComponent />
          <ConveyorDetailsFormRow
            title="Calculated Area"
            item1={conveyor.latest_measurement.calculated_area}
            item2={'cm\u00B2'}
          />
          <FormLineComponent />
          <ConveyorDetailsFormRow
            title="Volume Sum"
            item1={conveyor.latest_measurement.volume_sum}
            item2={'dm\u00B3'}
          />
          <FormLineComponent />
          <ConveyorDetailsFormRow
            title="Volume Flow Per Hour"
            item1={conveyor.latest_measurement.avg_volume_flow_per_hour}
            item2={'dm\u00B3/h'}
          />
          <FormLineComponent />
          <ConveyorDetailsFormRow
            title="Volume Flow"
            item1={conveyor.latest_measurement.avg_volume_flow}
            item2={'dm\u00B3/h'}
          />
          <FormLineComponent />
          <ConveyorDetailsFormRow title="Mass Sum" item1={conveyor.latest_measurement.mass_sum} item2="kg" />
          <FormLineComponent />
          <ConveyorDetailsFormRow title="Mass Flow" item1={conveyor.latest_measurement.avg_mass_flow} item2="kg/h" />
          <FormLineComponent />
          <ConveyorDetailsFormRow title="Barycenter" item1={conveyor.latest_measurement.barycenter} item2="mm" />
          <FormLineComponent />
          <ConveyorDetailsFormRow title="Valid Points" item1={conveyor.latest_measurement.valid_points} item2="%" />
        </View>
      </ScrollView>
    </View>
  );
};

export default ConveyorDetailsForm;
