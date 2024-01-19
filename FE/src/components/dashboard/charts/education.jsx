import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { LineChart } from './line-chart';
import { BarChart } from './bar-chart';


export const Education = (props) =>{   
    const [chartConfig, setChartConfig] = useState({
        labels: [],
        datasets: []
    })
    const [barChartConfig, setBarChartConfig] = useState({
        labels: [],
        datasets: []
    }) 
    const data = props?.details ? props.details.educations : [];
    const bardata = props?.details ? props.details.exeperiences : [];
    const labels = data.map((d) => d.year)
    const labelData = data.map(d => d.value)
    const barLabels = bardata.map((d) => d.year)
    const barLabelData = bardata.map((d) => d.value)
    useEffect(()=>{
        const config = {
            labels: labels,
            datasets: [
                {
                    id: 1,
                    label: '',
                    data: labelData
                }
            ]
        };
        setChartConfig(config)
        setBarChartConfig({
            labels: barLabels,
            datasets: [
                {
                    id: 1,
                    label: '',
                    data: barLabelData
                }
            ]
        })
    },[])
    return (
        <Row className='profile-details' align={'middle'}>
            <Col span={12}>
                <LineChart chartData={chartConfig}/>
            </Col>
            <Col span={12}>
                <BarChart chartData={barChartConfig}/>
            </Col>
        </Row>
    );
} 
