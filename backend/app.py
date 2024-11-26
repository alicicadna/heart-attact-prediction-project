from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class PatientData(BaseModel):
    age: int
    sex: int
    exang: int
    ca: int
    cp: int
    trtbps: float
    chol: float
    fbs: int
    rest_ecg: int
    thalach: float

@app.post("/predict")
async def predict(data: PatientData):
    # Placeholder response
    return {"prediction": "High risk" if data.age > 50 else "Low risk"}
