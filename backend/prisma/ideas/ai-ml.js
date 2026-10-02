module.exports = {
  domain: 'AI/ML',
  ideas: `
# Classification and prediction
Resume Screening with NLP | I | 8 | Ranks resumes against a job description using text similarity and shows matched and missing skills. | Python, scikit-learn, spaCy, Streamlit | Resume upload and parsing; Skill extraction; Similarity ranking; Results dashboard
Fake News Detection | I | 7 | Classifies news articles as reliable or unreliable and explains which words influenced the result. | Python, scikit-learn, Flask | Data cleaning; Model comparison; Explainability view; Web interface
Syllabus Q&A Chatbot (RAG) | A | 9 | A chatbot that answers questions from your university syllabus and notes, with page citations. | Python, LangChain, Vector database, Next.js | PDF ingestion and chunking; Embeddings and vector search; Answer generation with citations; Chat UI
Plant Disease Detection | I | 8 | Upload a leaf photo and a CNN model predicts the disease and suggests treatment. | Python, TensorFlow, Flask | Dataset preparation; CNN training and evaluation; Image upload API; Treatment suggestions
House Price Prediction | B | 5 | Predicts house prices from location, size and amenities and explains the main factors. | Python, scikit-learn, Streamlit | Data cleaning; Feature engineering; Regression models; Prediction form
Loan Default Prediction | I | 6 | Predicts whether a loan applicant is likely to default and handles class imbalance. | Python, XGBoost, SHAP, Streamlit | Imbalanced data handling; Model training; SHAP explanations; Risk scoring app
Credit Card Fraud Detection | I | 7 | Detects fraudulent transactions in a highly imbalanced dataset. | Python, scikit-learn, imbalanced-learn | SMOTE and undersampling; Anomaly and supervised models; Precision-recall evaluation; Alert dashboard
Customer Churn Prediction | B | 5 | Predicts which telecom customers are likely to leave and why. | Python, scikit-learn, Streamlit | Exploratory analysis; Classification models; Feature importance; Retention suggestions
Heart Disease Risk Prediction | B | 5 | Estimates heart disease risk from clinical parameters with an explainable model. | Python, scikit-learn, Flask | Data preprocessing; Model comparison; Risk form; Explanation of factors
Diabetes Prediction with Explainability | B | 5 | Predicts diabetes risk and shows how each health feature contributed. | Python, scikit-learn, SHAP, Streamlit | Data cleaning; Model training; SHAP plots; Web form
Crop Recommendation System | B | 5 | Recommends the best crop for a field based on soil nutrients, rainfall and temperature. | Python, scikit-learn, Flask | Soil and weather dataset; Classification model; Recommendation form; Fertiliser hints
Crop Yield Prediction | I | 6 | Predicts crop yield per district using weather and historical production data. | Python, Pandas, XGBoost | Data merging; Feature engineering; Regression models; District-wise map
Student Dropout Risk Prediction | I | 6 | Identifies students at risk of dropping out using academic and attendance data. | Python, scikit-learn, Streamlit | Data collection; Model training; Risk dashboard; Intervention suggestions
Employee Attrition Prediction | B | 5 | Predicts which employees may leave and highlights key reasons. | Python, scikit-learn, Power BI | Exploratory analysis; Classification; Feature importance; HR dashboard
Flight Delay Prediction | I | 6 | Predicts flight delays from schedule, airline and weather data. | Python, LightGBM, Streamlit | Data cleaning; Feature engineering; Model tuning; Delay estimate app
Used Car Price Estimator | B | 4 | Estimates the resale value of a used car from its details. | Python, scikit-learn, Flask | Scraped or public dataset; Regression model; Price form; Comparison with listings
Insurance Premium Prediction | B | 4 | Predicts medical insurance cost from age, BMI, smoking and region. | Python, scikit-learn, Streamlit | Exploratory analysis; Regression; Prediction form; Insights
Electricity Demand Forecasting | A | 8 | Forecasts hourly electricity demand using time-series and weather features. | Python, Prophet, LSTM, Plotly | Time-series preprocessing; Classical and deep models; Forecast evaluation; Dashboard
Stock Price Trend Forecasting | A | 8 | Forecasts short-term stock price trends with LSTM and compares with simple baselines. | Python, TensorFlow, yfinance | Data collection; Baseline models; LSTM model; Honest evaluation report
Sales Forecasting for Retail Stores | I | 7 | Forecasts weekly store sales including holiday effects. | Python, Prophet, Pandas | Data cleaning; Holiday features; Forecast models; Store dashboard
Traffic Volume Prediction | I | 6 | Predicts traffic volume on a road from time, weather and holidays. | Python, XGBoost, Streamlit | Feature engineering; Model training; Forecast chart; Peak-hour alerts
Air Pollution AQI Forecasting | I | 7 | Forecasts next-day AQI for a city from pollutant and weather history. | Python, LSTM, Pandas | Data collection; Sequence modelling; Forecast evaluation; Alert system
Rainfall Prediction | B | 5 | Predicts whether it will rain tomorrow from historical weather data. | Python, scikit-learn | Data cleaning; Classification models; Evaluation; Simple web app
Earthquake Aftershock Prediction Study | A | 9 | Studies seismic catalogues and builds a model to estimate aftershock likelihood. | Python, Pandas, scikit-learn, Folium | Catalogue processing; Feature extraction; Model evaluation; Map visualisation
Wine Quality Prediction | B | 3 | Predicts wine quality from chemical properties and compares several models. | Python, scikit-learn | Exploratory analysis; Model comparison; Hyperparameter tuning; Report

# Recommendation and ranking
Movie Recommendation System | I | 6 | Recommends movies using collaborative filtering and content-based methods. | Python, Surprise, Flask | User-item matrix; Collaborative filtering; Content-based hybrid; Web interface
Book Recommendation Engine | I | 6 | Recommends books based on ratings and book descriptions. | Python, scikit-learn, Streamlit | Ratings data; Similarity models; Cold-start handling; Search and recommend
Course Recommendation for Students | I | 6 | Suggests electives and online courses based on a student's interests and grades. | Python, scikit-learn, Django | Student profile; Content-based filtering; Recommendation explanations; Feedback loop
Music Playlist Generator by Mood | I | 6 | Builds playlists from audio features matching a chosen mood. | Python, Spotify API, scikit-learn | Audio feature collection; Mood clustering; Playlist creation; Web interface
E-commerce Product Recommender | A | 8 | Session-based product recommendations for an online store. | Python, PyTorch, FastAPI | Click-stream data; Sequence model; Recommendation API; Offline evaluation
Recipe Recommender from Ingredients | B | 5 | Suggests recipes based on ingredients you already have. | Python, Flask, Pandas | Recipe dataset; Ingredient matching; Ranking; Web app
Job Recommendation for Freshers | I | 6 | Matches fresher profiles to job postings using skills and preferences. | Python, spaCy, FastAPI | Job scraping or dataset; Skill extraction; Matching score; Results page
News Personalisation Engine | A | 8 | Personalises a news feed using reading history and article embeddings. | Python, Sentence Transformers, FastAPI | Article embeddings; User profiles; Ranking; Feedback learning
Tourist Destination Recommender | B | 5 | Suggests travel destinations based on budget, season and interests. | Python, Streamlit | Destination dataset; Preference form; Scoring model; Results with map

# Generative AI and LLM apps
AI Study Buddy for Notes | I | 7 | Generates summaries, flashcards and practice questions from uploaded notes using an LLM. | Python, FastAPI, Claude API, React | PDF upload; Summary generation; Flashcard export; Practice quiz
Code Review Assistant | A | 8 | Uses an LLM to review pull request diffs and leave suggestions on style and bugs. | Python, GitHub API, Claude API | Diff fetching; Prompt design; Inline comments; Evaluation on sample PRs
Interview Practice Bot | I | 7 | Asks role-specific interview questions, listens to answers and gives feedback. | Next.js, Claude API, Web Speech API | Role selection; Question generation; Answer feedback; Session report
AI Email Reply Drafter | I | 6 | Drafts polite replies to emails with selectable tone and length. | Python, FastAPI, Claude API, Chrome Extension API | Email extraction; Tone options; Draft generation; Edit before send
Legal Document Simplifier | I | 7 | Explains rental agreements and terms of service in plain language with key risks highlighted. | Python, LLM API, Streamlit | Document upload; Clause extraction; Plain-language summary; Risk highlights
Text-to-SQL Assistant | A | 8 | Converts natural language questions into SQL for a given database schema and runs them safely. | Python, LLM API, PostgreSQL, Streamlit | Schema introspection; Query generation; Read-only execution; Result explanation
Personal Knowledge Base Chat | A | 9 | Chat with your own documents, notes and bookmarks using retrieval-augmented generation. | Python, LlamaIndex, Chroma, Next.js | Document ingestion; Embeddings; Retrieval with citations; Chat UI
AI Quiz Generator for Teachers | B | 5 | Generates MCQs with answers from a chapter or topic for teachers to review and edit. | Next.js, LLM API | Topic input; MCQ generation; Teacher editing; Export to PDF
Meeting Notes Summariser | I | 6 | Transcribes meeting audio and produces summaries with action items. | Python, Whisper, LLM API | Audio upload; Transcription; Summary and action items; Export
AI Agent for Travel Planning | A | 9 | An LLM agent that uses tools to search flights, hotels and attractions and builds an itinerary. | Python, Claude API tool use, FastAPI | Tool definitions; Agent loop; Itinerary output; Cost estimates
Product Description Generator | B | 4 | Generates e-commerce product descriptions from attributes and images. | Python, LLM API, Streamlit | Attribute form; Description generation; Tone presets; Bulk CSV mode
Story Generator for Kids | B | 5 | Creates short illustrated stories for children from a few prompts. | Next.js, LLM API, Image generation API | Prompt form; Story generation; Illustrations; Read-aloud
Prompt Injection Test Bench | A | 8 | Evaluates how well LLM apps resist prompt injection with a suite of test cases. | Python, LLM API, Pytest | Attack dataset; Test harness; Scoring; Report dashboard
LLM Output Evaluation Dashboard | A | 8 | Compares outputs of different prompts or models on a test set with automated and human ratings. | Python, FastAPI, React | Test set management; Batch runs; Automated scoring; Human rating UI
GAN for Handwritten Digit Generation | I | 6 | Trains a GAN to generate handwritten digits and studies training stability. | Python, PyTorch | GAN architecture; Training loop; Sample visualisation; Stability experiments
Image Captioning System | A | 9 | Generates captions for images using a CNN encoder and transformer decoder. | Python, PyTorch, Flickr8k | Feature extraction; Caption model; BLEU evaluation; Demo app
Neural Style Transfer App | I | 5 | Applies the style of a famous painting to a user's photo. | Python, PyTorch, Streamlit | Pretrained VGG; Style and content loss; Image upload; Result download
Music Generation with LSTMs | A | 8 | Generates short melodies by training an LSTM on MIDI files. | Python, TensorFlow, music21 | MIDI parsing; Sequence model; Melody generation; Audio playback

# Reinforcement learning and optimisation
Reinforcement Learning Snake Game Agent | I | 6 | Trains an agent with Q-learning to play Snake and visualises learning progress. | Python, Pygame, PyTorch | Game environment; Q-learning agent; Training curves; Replay viewer
Self-driving Car in Simulation | A | 10 | Trains a car to drive around a track in a simulator using deep reinforcement learning. | Python, Gymnasium, Stable-Baselines3 | Simulator setup; Reward design; PPO training; Evaluation videos
Traffic Signal Control with RL | A | 9 | Uses reinforcement learning to time traffic lights and reduce waiting time in simulation. | Python, SUMO, Stable-Baselines3 | Intersection simulation; State and reward design; Agent training; Comparison with fixed timing
Chess Engine with Minimax and Learning | A | 9 | A chess engine with alpha-beta search and a learned evaluation function. | Python, python-chess, PyTorch | Move generation; Alpha-beta search; Evaluation network; Play against engine
Game AI for Tic-Tac-Toe and Connect Four | B | 4 | Implements minimax with alpha-beta pruning for simple board games. | Python, Pygame | Game logic; Minimax; Alpha-beta pruning; Difficulty levels
Delivery Route Optimiser | I | 7 | Finds efficient delivery routes using genetic algorithms and compares with heuristics. | Python, OR-Tools, Folium | Distance matrix; Genetic algorithm; Heuristic baseline; Route map
Exam Seating Arrangement Optimiser | I | 6 | Arranges exam seating so students of the same subject are not adjacent. | Python, Constraint programming, Flask | Room and student input; Constraint model; Seating chart; Export
Portfolio Optimisation Simulator | I | 6 | Simulates portfolio allocations with mean-variance optimisation for educational purposes. | Python, NumPy, Plotly | Historical returns; Efficient frontier; Monte Carlo simulation; Educational report

# ML engineering and fairness
Bias Detection in Hiring Models | A | 8 | Measures and reduces gender and caste bias in a candidate screening model. | Python, Fairlearn, scikit-learn | Bias metrics; Mitigation techniques; Trade-off analysis; Report
AutoML Mini Platform | A | 10 | Upload a CSV, choose a target and the system trains, tunes and compares models automatically. | Python, FastAPI, scikit-learn, Optuna, React | Dataset upload; Automatic preprocessing; Hyperparameter search; Leaderboard
ML Model Monitoring Dashboard | A | 8 | Tracks prediction drift and data quality for a deployed model. | Python, Evidently, FastAPI, Grafana | Prediction logging; Drift detection; Alerts; Dashboard
Federated Learning Simulation | A | 9 | Simulates training a model across many clients without sharing raw data. | Python, Flower, PyTorch | Client simulation; Federated averaging; Non-IID experiments; Privacy discussion
Explainable AI Dashboard | I | 7 | Visualises SHAP and LIME explanations for any tabular model. | Python, SHAP, LIME, Dash | Model upload; Global importance; Local explanations; What-if analysis
Data Labelling Tool | I | 7 | A web tool for labelling images and text with multiple annotators and agreement scores. | React, FastAPI, PostgreSQL | Task creation; Labelling UI; Annotator agreement; Export formats
Anomaly Detection in Server Logs | I | 7 | Detects unusual patterns in application logs using unsupervised learning. | Python, scikit-learn, Elasticsearch | Log parsing; Feature extraction; Isolation forest; Alert view
Handwritten Digit Recognition Web App | B | 4 | Draw a digit on a canvas and a CNN trained on MNIST predicts it. | Python, TensorFlow, Flask, Canvas API | MNIST training; Canvas drawing; Prediction API; Confidence display
Knowledge Distillation for Small Models | A | 8 | Compresses a large image classifier into a small model for mobile while keeping accuracy. | Python, PyTorch | Teacher model; Student model; Distillation training; Size and speed comparison
Semi-supervised Learning with Few Labels | A | 8 | Compares semi-supervised methods when only a small fraction of data is labelled. | Python, PyTorch | Labelled and unlabelled splits; Pseudo-labelling; Consistency methods; Results analysis
`,
};
