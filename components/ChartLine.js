import { useEffect } from 'react';
import Chart from 'chart.js';
import { Card, CardHeader, CardBody  } from '@material-tailwind/react';

export default function ChartLine() {

    return (
        <Card className='relative'>
            <CardHeader color="orange" className='px-4 py-2' contentPosition="left">
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Overview
                </h6>
                <h2 className="text-white text-2xl">Total customer</h2>
            </CardHeader>
            <CardBody>
                <div className="relative h-96">
                    {/* <canvas id="line-chart"></canvas> */}
                </div>
            </CardBody>
        </Card>
    );
}
