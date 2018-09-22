import { Table, Button } from 'react-bootstrap';
import React, { Component } from 'react';

class JobListComponent extends Component {

  renderRow(jobs) {
     const res = jobs.map(job => {
        return (
          <tr>
            <td>{job.job_class}</td>
            <td>{job.description}</td>
            <td>{job.interval}</td>
            <td>{job.params}</td>
            <td><Button bsStyle="danger" bsSize="small" onClick={() => this.handleClick(job.job_id)} >Stop</Button></td>
          </tr>
        );
      });

    return res;
  }

  handleClick(row = 'Hello') {
    console.log(row);
  }

  render() {
    const { jobs } = this.props;
    console.log('ffff', jobs)
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Description</th>
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

export default JobListComponent;
