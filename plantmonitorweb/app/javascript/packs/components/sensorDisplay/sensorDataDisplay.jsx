import React from 'react'
import PropTypes from 'prop-types'
import { Label, Segment } from 'semantic-ui-react'
import styles from './style.scss';

export default class SensorDataDisplay extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { headingLabel, sensorData } = this.props;

    return (
      <div>
        <Segment compact>
        <Label as='a' >{ headingLabel }</Label>
          <br/>
          <p className={styles.sensorContent}>{ sensorData }</p>
        </Segment>
      </div>
    );
  }
}

SensorDataDisplay.propTypes  = {
  headingLabel : PropTypes.string,
  sensorData : PropTypes.string
};

