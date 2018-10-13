import { Table, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import apiClient from './actions/rabbitApiClient';
import jobActions from './actions/jobActions';

class JobListComponent extends Component {

  renderRow(jobs) {
     const res = jobs.map(job => {
        return (
          <tr>
            <td>{job.job_class}</td>
            <td>{job.interval}</td>
            <td>{job.params}</td>
            <td><Button bsStyle="danger" bsSize="small" onClick={() => this.handleClick(job.job_id)} >Stop</Button></td>
          </tr>
        );
      });

    return res;
  }

  handleClick(jobId) {
    const { fetchRunningJobs } = this.props;

    apiClient.killJob(jobId).then(() => {
      apiClient.getRunningJobs().then(jobs => fetchRunningJobs(jobActions.jobsReceived(jobs)))
    });
  }

  render() {
    const { jobs } = this.props;
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Interval</th>
            <th>Params</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { this.renderRow(jobs) }
        </tbody>
      </Table>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRunningJobs: action => dispatch(action),
  };
}

export default connect(null, mapDispatchToProps)(JobListComponent);
