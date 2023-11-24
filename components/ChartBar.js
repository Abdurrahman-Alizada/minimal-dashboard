import { useEffect } from 'react';
import Chart from 'chart.js';
import { Card, CardHeader, CardBody } from '@material-tailwind/react';

export default function ChartBar() {
    return (
        <Card className='relative'>
            <CardHeader color="pink" contentPosition="left" className='px-4 py-2'>
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Overview
                </h6>
                <h2 className="text-white text-2xl">Sales value</h2>
            </CardHeader>
            <CardBody>
                <div className="relative h-96">
                    {/* <canvas id="bar-chart"></canvas> */}
                </div>
            </CardBody>
        </Card>
    );
}
