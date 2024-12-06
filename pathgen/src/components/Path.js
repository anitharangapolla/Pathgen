import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HF_API_URL = "https://api-inference.huggingface.co/models/pranayvadla17/learning_path_t5_model";
const HF_API_KEY = "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";

function Path() {
  const { courseName, level } = useParams();
  const location = useLocation();
  const [learningPath, setLearningPath] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const retrievedScore = queryParams.get('score');
    setScore(retrievedScore);

    const fetchLearningPath = async () => {
      setIsLoading(true);
      const prompt = `
        You are an AI that generates personalized learning paths. Create a learning path for a ${level} student in ${courseName}.
        The learning path should contain 5-7 key stages with each stage as a concise heading.
        Use a simple format like:
        1. First topic
        2. Second topic
        3. Third topic
      `;

      try {
        const response = await fetch(HF_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${HF_API_KEY}`,
          },
          body: JSON.stringify({ inputs: prompt }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const generatedText = data[0]?.generated_text.trim();

        const pathArray = generatedText
          .split('\n')
          .filter((line) => line.match(/^\d+/))
          .map((step) => step.replace(/^\d+\.\s*/, '').split(':')[0].trim());

        setLearningPath(pathArray);
      } catch (error) {
        console.error('Error fetching learning path:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (courseName && level) {
      fetchLearningPath();
    }
  }, [courseName, level, location.search]);

  const renderFlowChart = () => {
    return learningPath.map((step, index) => (
      <div key={index} className="flowchart-step mb-3 text-center">
        <div
          className="flowchart-box p-3 rounded shadow"
          style={{
            background: 'white',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          }}
        >
          {step}
        </div>
        {index < learningPath.length - 1 && (
          <div
            className="flowchart-arrow my-2"
            style={{ color: '#ffcc00', fontSize: '2rem' }}
          >
            ↓
          </div>
        )}
      </div>
    ));
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #6a11cb, #2575fc)',
        minHeight: '100vh',
        paddingTop: '50px',
        color: '#fff',
      }}
    >
      <div className="container text-center">
        <h2 className="mb-4" style={{ color: '#ffcc00', fontSize: '2.5rem' }}>
          Learning Path for {courseName}
        </h2>
        <h4 className="mb-4">
          Level: {level.charAt(0).toUpperCase() + level.slice(1)}
        </h4>
        {score && (
          <div
            className="alert alert-info text-dark mx-auto"
            style={{
              maxWidth: '600px',
              background: '#ffffffcc',
              borderRadius: '15px',
              padding: '20px',
              fontSize: '1.2rem',
            }}
          >
            Your Score: {score} / {learningPath.length}
          </div>
        )}

        {isLoading ? (
          <div className="d-flex justify-content-center my-5">
            <div className="spinner-border" role="status"></div>
          </div>
        ) : (
          <div className="flowchart-container d-flex flex-column align-items-center">
            {learningPath.length > 0 ? (
              renderFlowChart()
            ) : (
              <p className="text-white">No learning path available</p>
            )}
          </div>
        )}

        {learningPath.length > 0 && (
          <div className="text-center mt-4">
            <button
              className="btn btn-success"
              style={{
                background: 'linear-gradient(90deg, #34e89e, #0f3443)',
                color: '#fff',
                border: 'none',
                borderRadius: '50px',
                padding: '12px 25px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                cursor: 'pointer',
              }}
            >
              Start Learning
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Path;
