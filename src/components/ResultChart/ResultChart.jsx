import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = {
    "students": [
      {
        "id": 1,
        "name": "Emma Johnson",
        "biology": 76,
        "physics": 57,
        "math": 82
      },
      {
        "id": 2,
        "name": "Liam Chen",
        "biology": 67,
        "physics": 45,
        "math": 78
      },
      {
        "id": 3,
        "name": "Sophia Martinez",
        "biology": 40,
        "physics": 60,
        "math": 80
      },
      {
        "id": 4,
        "name": "Noah Patel",
        "biology": 60,
        "physics": 87,
        "math": 54
      },
      {
        "id": 5,
        "name": "Olivia Brown",
        "biology": 45,
        "physics": 85,
        "math": 56
      },
      {
        "id": 6,
        "name": "Ethan Wilson",
        "biology": 93,
        "physics": 68,
        "math": 74
      },
      {
        "id": 7,
        "name": "Ava Thompson",
        "biology": 22,
        "physics": 47,
        "math": 75
      },
      {
        "id": 8,
        "name": "Mason Lee",
        "biology": 34,
        "physics": 79,
        "math": 56
      },
      {
        "id": 9,
        "name": "Isabella Garcia",
        "biology": 89,
        "physics": 60,
        "math": 48
      },
      {
        "id": 10,
        "name": "Lucas Anderson",
        "biology": 54,
        "physics": 72,
        "math": 80
      }
    ]
  }
const ResultChart = () => {
    return (
        <div>
            <LineChart width={400} height={550} data={resultData.students}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
            <Line dataKey={'biology'} stroke='green'></Line>
            <Line dataKey={'math'} stroke='orange'></Line>
            <Line dataKey={'physics'} stroke='brown'></Line>
            </LineChart>
           
        </div>
    );
};

export default ResultChart;