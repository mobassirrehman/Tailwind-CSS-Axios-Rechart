import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise);
    // console.log(marksData)
    const marksData = marksDataRes.data;

    //data processing for the chart
    const marksChartData = marksData.map(studentData => {
        const students = {
            id: studentData.id,
            name: studentData.name,
            biology: studentData.marks.biology,
            physics: studentData.marks.physics,
            math: studentData.marks.math
        }
        const avg = (students.physics + students.biology + students.math) / 3;
        students.avg =  avg;
        return students;
    })
    console.log(marksChartData)
    return (
        <div>
            <BarChart width={500} height={300} data={marksChartData}>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Bar dataKey="avg" fill="#324223"></Bar>
            <Bar dataKey="biology" fill="gray"></Bar>
            </BarChart>
           
            
        </div>
    );
};

export default MarksChart;