
import { BarChart as BChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const BarChart = () => {
    const studentsData = [
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
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <BChart width={500} height={300} data={studentsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="marks" fill="blue" />
                </BChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChart;
