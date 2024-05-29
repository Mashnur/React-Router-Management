import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {
    const studentsMathMarks = [
        {
            id: 1,
            name: "Alice Johnson",
            marks: 85
        },
        {
            id: 2,
            name: "Bob Smith",
            marks: 92
        },
        {
            id: 3,
            name: "Charlie Davis",
            marks: 78
        },
        {
            id: 4,
            name: "Diana Moore",
            marks: 88
        },
        {
            id: 5,
            name: "Ethan Brown",
            marks: 95
        }
    ];
    
    return (
        <div>
            <LChart width={600} height={400} data={studentsMathMarks}>
                <Line dataKey="marks" type="monotone" stroke='green'></Line>
                <Line dataKey={'id'} type="monotone" stroke='red'></Line>
              <XAxis dataKey='name'></XAxis>
              <YAxis></YAxis>
                
            </LChart>
            
        </div>
    );
};

export default LineChart; 