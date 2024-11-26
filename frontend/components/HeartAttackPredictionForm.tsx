'use client'
import React, { useState } from "react";
import axios from "axios";

interface FormData {
  age: number | "";
  sex: number | "";
  exang: number | "";
  ca: number | "";
  cp: number | "";
  trtbps: number | "";
  chol: number | "";
  fbs: number | "";
  rest_ecg: number | "";
  thalach: number | "";
}

interface PredictionResponse {
  prediction: string;
}

const HeartDiseaseForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    age: "",
    sex: "",
    exang: "",
    ca: "",
    cp: "",
    trtbps: "",
    chol: "",
    fbs: "",
    rest_ecg: "",
    thalach: "",
  });

  const [result, setResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value === "" ? "" : Number(value),
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post<PredictionResponse>(
        "http://127.0.0.1:8000/predict",
        formData
      );
      setResult(response.data.prediction);
    } catch (error) {
      console.error("Error making prediction:", error);
      setResult("Error occurred while predicting.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-blue-300 bg-opacity-45 shadow-lg rounded-lg p-6 mt-10">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Heart Disease Prediction
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {(Object.keys(formData) as Array<keyof FormData>).map((field) => (
          <div key={field} className="flex flex-col">
            <label
              className="mb-2 text-sm font-medium text-gray-700"
              htmlFor={field}
            >
              {field.toUpperCase()}
            </label>
            <input
              type="number"
              id={field}
              name={field}
              value={formData[field] === "" ? "" : String(formData[field])}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
      {result && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-md text-center font-semibold">
          Prediction: {result}
        </div>
      )}
    </div>
  );
};

export default HeartDiseaseForm;
