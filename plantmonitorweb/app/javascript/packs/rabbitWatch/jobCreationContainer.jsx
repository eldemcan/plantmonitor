import React, { Component } from 'react';
import { FormControl, FieldGroup, ControlLabel, Grid, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import apiClient from './actions/rabbitApiClient';

const DropDownLabel = styled.p`
    padding-top: 23px;
`;
const StyledRow = styled(Row)`
   padding-top: 23px;
`;

// JobCreationContainer.propTypes = { jobTypes : PropTypes.array,
// }

// TODO: add prop types
class JobCreationContainer extends Component {
  constructor(props) {
    super(props);

    const rangeForMinutes = this.range(1, 59);
    const rangeForHour = this.range(1, 23);
    const rangeForDaysOfMonth = this.range(1, 31);
    const rangeForDaysOfWeek = [
      { value: 0, displayValue: 'Sun' },
      { value: 1, displayValue: 'Mon' },
      { value: 2, displayValue: 'Tue' },
      { value: 3, displayValue: 'Wed' },
      { value: 4, displayValue: 'Thur' },
      { value: 5, displayValue: 'Fri' },
      { value: 6, displayValue: 'Sat' },
    ];
    const rangeForMonth = [
      { value: 1, displayValue: 'Jan' },
      { value: 2, displayValue: 'Feb' },
      { value: 3, displayValue: 'Mar' },
      { value: 4, displayValue: 'Apr' },
      { value: 5, displayValue: 'May' },
      { value: 6, displayValue: 'Jun' },
      { value: 7, displayValue: 'Jul' },
      { value: 8, displayValue: 'Aug' },
      { value: 9, displayValue: 'Sep' },
      { value: 10, displayValue: 'Oct' },
      { value: 11, displayValue: 'Nov' },
      { value: 12, displayValue: 'Dec' },
    ];

    this.state = this.defaultValues();

    this.everyData =
      [{ value:  'min', displayValue: 'minute' },
        { value: 'hour', displayValue: 'hour' },
        { value: 'days', displayValue: 'days' },
        { value: 'month', displayValue: 'month' },
        { value: 'daysw', displayValue: 'daysw' },
      ];

    this.ranges = {
      min: rangeForMinutes,
      hour: rangeForHour,
      days: rangeForDaysOfMonth,
      month: rangeForMonth,
      daysw: rangeForDaysOfWeek,
    };

    this.rangesForAt = {
      hours: this.range(0, 59),
      minutes: this.range(0, 23),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeForValues = this.handleChangeForValues.bind(this);
  }

  defaultValues() {
    return {
      frequencyType: 'min',
      frequency: 1,
      minutes: '0',
      hours: '0',
      jobParams: '',
    };
  }

  range(start, end) {
    return Array.from({ length: end }, (v, i) => { return { value: i + start, displayValue: i + start + '' } });
  }

  handleChangeForValues(e) {
    const id = e.target.id;
    const value = e.target.value;
    let obj = {}
    obj[id] = value

    this.setState(Object.assign({}, this.state, obj ));
  }

  handleChange(e) {
    const { id, value } = e.target;
    let defaultFrequencyValues = { min: 1, hour: 1, days: 1, month: 1, daysw: 0 };
    let obj = {};
    obj[id] = value;
    obj['frequency'] = defaultFrequencyValues[value];

    this.setState(Object.assign({}, this.state, obj ));
  }

  renderAtDropdown(title = '') {
    return (
      <div>
        <ControlLabel>{title}</ControlLabel>
        <FormControl  componentClass="select" >
           { data.map(item => <option value= {item.value} > {item.displayValue} </option>  )}
        </FormControl>
      </div>
    );
  }

  renderDropdown(title = '', data = [], id, handlerFun) {

    if (data.length === 0) {
      return (<div></div>);
    }

    console.log(
      'fecking data', data
    );
    return (
      <div>
        <ControlLabel>{title}</ControlLabel>
        <FormControl id={id} componentClass="select"  onChange = { (e) => handlerFun(e) }>
           { <option value= {data[0].value} selected > {data[0].displayValue} </option> }
           { data.slice(1, data.length).map(item => <option value= {item.value} > {item.displayValue} </option>  )}
        </FormControl>
      </div>
    );
  }

  renderScheduleSection(title, firstDataSource, secondDataSource, firstId, secondId) {
    return (
      <Row>
        <Col md={2}> <DropDownLabel>  {title} </DropDownLabel> </Col>
        <Col md={5}> {this.renderDropdown('', firstDataSource, firstId, this.handleChange)} </Col>
        <Col md={5}> {this.renderDropdown('', secondDataSource, secondId, this.handleChangeForValues)} </Col>
      </Row>
    );
  }

  // TODO: try to do it without re-rendering
  handleJobParams(e) {
    this.setState({ jobParams: e.target.value });
  }
  // TODO get data when it is written
  renderInputFieldForParameters() {
    return (
      <div>
        <ControlLabel> Params </ControlLabel>
        <FormControl type="text"  onChange={this.handleJobParams}/>
      </div>
    );
  }

  convertDataFormatForRender(data = []) {
    return data.map(item => {
      return {
        value: item,
        displayValue: item,
      }
    });
  }

  handleSubmit() {
    const { frequencyType, frequency, minutes, hours, jobParams } = this.state;
    const jobTypes = this.state.jobTypes || this.props.jobTypes[0]; // default jobType from props or new one from state
    const payload = { frequencyType, frequency, minutes, hours, jobParams, jobTypes }
    console.log('payload', payload)
    apiClient.postJobParams(payload);
  }

  render() {
    const { jobTypes } = this.props;
    // TODO: add other cron keywords
    const { frequencyType } = this.state;
    const rangeData = this.ranges[frequencyType];
    const { hours, minutes } = this.rangesForAt;
    console.log('state aq', this.state);

    return (
      <Grid>
        <Row>
          <Col md={12}>
            {this.renderDropdown('Job Types', this.convertDataFormatForRender(jobTypes), "jobType", this.handleChange)}
            {this.renderInputFieldForParameters()}
          </Col>
        </Row>

        {this.renderScheduleSection('Every:', this.everyData, rangeData, 'frequencyType', 'frequency')}
        {this.renderScheduleSection('At:', hours, minutes, 'hours', 'minutes')}

        <StyledRow>
          <Col md={2} mdOffset={10} >
            <Button bsStyle="success" onClick={() => this.handleSubmit()}>Success</Button>
          </Col>
        </StyledRow>
      </Grid>
    );
  }
}

JobCreationContainer.defaultProps = {
  jobTypes: [],
};

export default JobCreationContainer;

