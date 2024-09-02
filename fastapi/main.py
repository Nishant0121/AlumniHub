from fastapi import FastAPI
import pickle
from pydantic import BaseModel

# Load the pre-trained models and vectors
with open('w2v_model.pkl', 'rb') as f:
    w2v_model = pickle.load(f)

with open('specialization_vectors.pkl', 'rb') as f:
    specialization_vectors = pickle.load(f)

with open('kmeans_model.pkl', 'rb') as f:
    kmeans = pickle.load(f)

# FastAPI instance
app = FastAPI()

# Request model for specialization input
class SpecializationRequest(BaseModel):
    specialization: str

# Function to predict interests based on specialization
def predict_interests(specialization):
    if specialization in specialization_vectors:
        vector = specialization_vectors[specialization]
        cluster = kmeans.predict([vector])[0]
        similar_words = w2v_model.wv.most_similar(positive=[vector], topn=3)
        return [word for word, _ in similar_words]
    else:
        return ["Specialization not found."]

# Define the API endpoint
@app.post("/predict-interests/")
async def get_interests(request: SpecializationRequest):
    interests = predict_interests(request.specialization)
    return {"interests": interests}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)