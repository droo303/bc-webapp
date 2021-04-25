import styled from 'styled-components';
import {Component} from "react";
import { Chart } from "react-google-charts";

export default class FolioContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Foo',
            value: 100
        }
    }
    render(){
        return(
            <Div>
                <Chart
                    width={'300px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['Gold', this.state.value],
                        ['Silver', 2],
                        ['ETH', 2],
                    ]}
                    options={{
                        title: 'Portfolio',
                        pieHole: 0.4,
                    }}
                    rootProps={{ 'data-testid': '3' }}
                />
            </Div>
        )
    }

}

const Div = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10em;
`
