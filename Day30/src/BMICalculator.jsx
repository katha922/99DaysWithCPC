import  { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {

    const heightMeters = height / 100; 
    const calculatedBMI = (weight / (heightMeters * heightMeters)).toFixed(2);

    setBMI(calculatedBMI);
    determineStatus(calculatedBMI);
  };

  const determineStatus = (bmi) => {
    if (bmi < 18.5) {
      setStatus("Underweight");
    } 
    else if (bmi >= 18.5 && bmi < 24.9) {
      setStatus("Normal weight");
    } 
    else if (bmi >= 25 && bmi < 29.9) {
      setStatus("Overweight");
    } 
    else {
      setStatus("Obesity");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">BMI Calculator</h1>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Weight (kg):</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Height (cm):</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"/>
        </div>
        <button onClick={calculateBMI} className="w-full  text-white py-2 rounded hover:bg-blue-600 transition bg-blue-500">Calculate BMI</button>
        {bmi && (
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold">Your BMI: {bmi}</p>
            <p className={`text-lg font-medium ${status === "Normal weight" ? "text-green-600" : "text-red-600"}`}>
              {status}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
