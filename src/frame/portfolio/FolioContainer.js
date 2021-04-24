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
                        ['Work', 11],
                        ['Eat', 2],
                        ['Commute', 2],
                        ['Watch TV', 2],
                        ['Sleep', 7],
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
