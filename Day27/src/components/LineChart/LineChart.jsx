import { LineChart as LChart, Line } from "recharts";

const LineChart = () => {

    const bioMarksData=[
        { "id": 1, "name": "Alice", "marks": 78 },
        { "id": 2, "name": "Bob", "marks": 85 },
        { "id": 3, "name": "Charlie", "marks": 92 },
        { "id": 4, "name": "Diana", "marks": 68 },
        { "id": 5, "name": "Ethan", "marks": 74 },
        { "id": 6, "name": "Fiona", "marks": 88 },
        { "id": 7, "name": "George", "marks": 81 },
        { "id": 8, "name": "Hannah", "marks": 95 },
        { "id": 9, "name": "Isaac", "marks": 76 },
        { "id": 10, "name": "Julia", "marks": 89 }
      ]
      
    return (
        <div>
            <LChart width={500} height={400} data={bioMarksData}>
                <Line dataKey="marks" stroke='red'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;