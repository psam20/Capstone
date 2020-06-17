import React, { Component } from 'react';
import './Piechart.css'
import { Pie } from 'react-chartjs-2';

class PieChart extends Component {
    constructor(props) {
        super(props);
        this.state = { Data: {} };
    }
    componentDidMount() {
        this.setState({
            Data: {
                labels: ['jsh','sann','sjagj','sajj'],
                datasets: [
                    {
                        label: 'IPL 2018/2019 Top Run Scorer',
                        data: [20,50,36,46],
                        backgroundColor: [
                            "green",
                            "yellow",
                            "Blue",
                            "Red"
                        ],
                        hoverBackgroundColor: [
                            "green",
                            "yellow",
                            "Blue",
                            "Red"
                        ],
                    }
                ]
            }
        });
    };
render() {
    return (
        <div>
            <Pie width="400px" height="500px"
                data={this.state.Data}
                options={
                    { maintainAspectRatio: false }} />
        </div>
        )
    }  
}
export default PieChart;