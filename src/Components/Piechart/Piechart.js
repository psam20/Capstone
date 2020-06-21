import React from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import './Piechart.css';

class PieChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    compareValues = (key, order = 'asc') => {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }

            const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    }
    componentDidMount() {
        const TopFiveProducts = this.props.products.sort(this.compareValues("count", 'desc')).slice(0, 5);
        console.log(TopFiveProducts);
        const name=TopFiveProducts.map((p)=>p.name.toUpperCase());
        const count=TopFiveProducts.map(p=>p.count);

        this.setState({
                         data: {
                             labels: name,
                             datasets: [
                                 {
                                     label: 'Top viewed products',
                                     data: count,
                                     backgroundColor: [
                                         "green",
                                         "yellow",
                                         "Blue",
                                         "Red",
                                         "pink"
                                     ],
                                     hoverBackgroundColor: [
                                         "green",
                                         "yellow",
                                         "Blue",
                                         "Red",
                                         "pink"
                                   ],
                               }
                           ]
                         }
                       });

    }


    render() {
        return (
            <div>
                <Pie width={400} height={500}
                    data={this.state.data}
                    options={
                        { maintainAspectRatio: false }} />
            </div>
        )
    }
}   

    const MapStateToProps = (state) => ({
        products: state.products.products
    })

    export default connect(MapStateToProps)(PieChart);




