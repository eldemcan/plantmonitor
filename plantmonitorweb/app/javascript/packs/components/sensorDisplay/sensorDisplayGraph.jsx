import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default class SensorDataLineChart extends React.Component {

  renderSecondLine() {
    const { lineKey2 } = this.props;
    if (lineKey2 !== undefined) {
      return (<Line dataKey={lineKey2} stroke="#82ca9d" />);
    }
    return (<div />);
  }
  render() {
    const { title, width, height, data, xkey, lineKey } = this.props;
    const titleStyle = {
      textAlign: 'center',
    };

    return (
      <div>
       <h4 style={titleStyle} > {title} </h4>
       <LineChart width={width} height={height} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Line dataKey={lineKey} stroke="#8884d8" />
        {this.renderSecondLine()}
        <XAxis dataKey={xkey} />
        <YAxis/>
        <Tooltip />
      </LineChart>
     </div>
    );
  }
}
