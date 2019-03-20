import { Table, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import apiClient from './actions/rabbitApiClient';
import JobActions from './actions/jobActions';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';

class JobListComponent extends Component {

  // renderRow(jobs) {
  //    const res = jobs.map(job => {
  //       return (
  //         <tr>
  //           <td>{job.job_class}</td>
  //           <td>{job.interval}</td>
  //           <td>{job.params}</td>
  //           <td><Button bsStyle="danger" bsSize="small" onClick={() => this.handleClick(job.job_id)} >Stop</Button></td>
  //         </tr>
  //       );
  //     });

  //   return res;
  // }

  addButtons(jobs) {
    return (jobs.map(job => {
      job.action = this.createButton(job.job_id);
      return job;
    }));
  }

  createButton(jobId) {
    return (<Button bsStyle="danger" bsSize="small" onClick={() => this.handleClick(jobId)} >Stop</Button>);
  }

  handleClick(jobId) {
    const { fetchRunningJobs } = this.props;

    apiClient.killJob(jobId).then(() => {
      apiClient.getRunningJobs().then(jobs => fetchRunningJobs(JobActions.jobsReceived(jobs)))
    });
  }

  defineColumns() {
    return  [{
      dataField: 'job_class',
      text: 'Task name'
    }, {
      dataField: 'interval',
      text: 'Inverval'
    }, {
      dataField: 'params',
      text: 'Params'
    },{
      dataField:'action' ,
      text: 'Actions',
    }];
  }

  render() {
    // const CanTable = DataTable.DataTable;
    // console.log(CanTable);
    const { jobs } = this.props;
    const { SearchBar } = Search;
    const jobsButtonsAdded = this.addButtons(jobs);
    const am = (props) => {
        return(
          <div>
          <h3>Input something at below input field:</h3>
          <SearchBar {...props.searchProps} />
          <hr />
          <BootstrapTable
            {...props.baseProps}
          />
        </div>
        );
    }
    return (
      <div>
        <ToolkitProvider
          keyField="id"
          data={jobsButtonsAdded}
          columns={this.defineColumns()}
          search
        >
          {
            am
          }
        </ToolkitProvider>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRunningJobs: action => dispatch(action),
  };
}

export default connect(null, mapDispatchToProps)(JobListComponent);
