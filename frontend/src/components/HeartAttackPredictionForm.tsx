'use client'
import React, { useState } from 'react';

interface FormData {
  age: number;
  sex: number;
  exang: number;
  ca: number;
  cp: number;
  trtbps: number;
  chol: number;
  fbs: number;
  rest_ecg: number;
  thalach: number;
}

const HeartDiseaseForm = () => {
  const [formData, setFormData] = useState<FormData>({
    age: 0,
    sex: 0,
    exang: 0,
    ca: 0,
    cp: 0,
    trtbps: 0,
    chol: 0,
    fbs: 0,
    rest_ecg: 0,
    thalach: 0,
  });

  const [prediction, setPrediction] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setPrediction(data.prediction);
  };

  return (
    <div className="max-w-4xl bg-blue-400 rounded-b-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Heart Disease Prediction Form</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
            Age
          </label>
          <input
            id="age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border text-blue-950 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
          />
        </div>

        <div>
          <label htmlFor="sex" className="block text-sm font-semibold text-gray-700 mb-2">
            Sex (0 = Female, 1 = Male)
          </label>
          <input
            id="sex"
            name="sex"
            type="number"
            value={formData.sex}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border text-blue-950 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
          />
        </div>

        <div>
          <label htmlFor="exang" className="block text-sm font-semibold text-gray-700 mb-2">
            Exercise Induced Angina (1 = Yes, 0 = No)
          </label>
          <input
            id="exang"
            name="exang"
            type="number"
            value={formData.exang}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border text-blue-950 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
          />
        </div>

        <div>
          <label htmlFor="ca" className="block text-sm font-semibold text-gray-700 mb-2">
            Number of Major Vessels (0-3)
          </label>
          <input
            id="ca"
            name="ca"
            type="number"
            value={formData.ca}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border text-blue-950 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
          />
        </div>

        <div>
          <label htmlFor="cp" className="block text-sm font-semibold text-gray-700 mb-2">
            Chest Pain Type
          </label>
          <input
            id="cp"
            name="cp"
            type="number"
            value={formData.cp}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border text-blue-950 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
          />
        </div>

        <div>
          <label htmlFor="trtbps" className="block text-sm font-semibold text-gray-700 mb-2">
            Resting Blood Pressure (mm Hg)
          </label>
          <input
            id="trtbps"
            name="trtbps"
            type="number"
            value={formData.trtbps}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border text-blue-950 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
          />
        </div>

        <div>
          <label htmlFor="chol" className="block text-sm font-semibold text-gray-700 mb-2">
            Cholesterol (mg/dl)
          </label>
          <input
            id="chol"
            name="chol"
            type="number"
            value={formData.chol}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border text-blue-950 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
          />
        </div>

        <div>
          <label htmlFor="fbs" className="block text-sm font-semibold text-gray-700 mb-2">
            {'Fasting Blood Sugar > 120 mg/dl (1 = True, 0 = False)'}
          </label>
          <input
            id="fbs"
            name="fbs"
            type="number"
            value={formData.fbs}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border text-blue-950 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
          />
        </div>

        <div>
          <label htmlFor="rest_ecg" className="block text-sm font-semibold text-gray-700 mb-2">
            Resting ECG
          </label>
          <input
            id="rest_ecg"
            name="rest_ecg"
            type="number"
            value={formData.rest_ecg}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border text-blue-950 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
          />
        </div>

        <div>
          <label htmlFor="thalach" className="block text-sm font-semibold text-gray-700 mb-2">
            Max Heart Rate Achieved
          </label>
          <input
            id="thalach"
            name="thalach"
            type="number"
            value={formData.thalach}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border text-blue-950 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
          />
        </div>

        <div className="col-span-2 mt-4">
          <button
            type="submit"
            className="w-full bg-white text-blue-900 py-2 px-4 rounded-md shadow-md hover:bg-blue-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-950"
          >
            Submit
          </button>
        </div>
      </form>

      {prediction && (
        <div className="mt-6 text-lg font-semibold">
          <h2>Prediction Result:</h2>
          <p className={`text-${prediction === '1' ? 'red' : 'green'}-600`}>
            {prediction === '1' ? 'High chance of heart disease' : 'Low chance of heart disease'}
          </p>
        </div>
      )}
    </div>
  );
};

export default HeartDiseaseForm;
