module.exports = {
  domain: 'NLP',
  ideas: `
# Text classification and analysis
Sentiment Analysis of Product Reviews | B | 5 | Classifies product reviews as positive, negative or neutral and summarises common complaints. | Python, scikit-learn, NLTK, Streamlit | Review dataset; Text preprocessing; Classification models; Complaint keyword summary
Twitter Sentiment Tracker for a Topic | I | 6 | Tracks public sentiment about a topic over time from social media posts. | Python, Transformers, Plotly | Data collection; Transformer classifier; Time-series chart; Topic keywords
Hate Speech Detection in Hinglish | A | 8 | Detects hateful and offensive content in code-mixed Hindi-English text. | Python, Transformers, IndicBERT | Code-mixed dataset; Transliteration handling; Fine-tuning; Error analysis
Spam SMS Classifier | B | 3 | Classifies SMS messages as spam or not using classic NLP methods. | Python, scikit-learn | TF-IDF features; Naive Bayes and SVM; Evaluation; Simple app
Email Priority Classifier | I | 5 | Sorts incoming emails into urgent, normal and low priority. | Python, scikit-learn, Gmail API | Email export; Labelling; Classification; Inbox view
Customer Support Ticket Router | I | 6 | Automatically routes support tickets to the right team based on content. | Python, Transformers, FastAPI | Ticket dataset; Intent classifier; Routing API; Confidence threshold
Toxic Comment Moderation Tool | I | 6 | Flags toxic comments on a forum with categories like insult and threat. | Python, Detoxify, Flask | Multi-label classifier; Moderation queue; Threshold settings; Appeals
Clickbait Headline Detector | B | 4 | Detects clickbait headlines and suggests a neutral rewrite. | Python, scikit-learn, LLM API | Headline dataset; Classifier; Rewrite suggestion; Browser extension option
Political Bias Detection in News | A | 8 | Estimates the political leaning of news articles with explanations. | Python, Transformers, SHAP | Labelled corpus; Fine-tuned model; Explanations; Media outlet comparison
Sarcasm Detection | I | 6 | Detects sarcasm in short texts like tweets and headlines. | Python, Transformers | Dataset; Baseline models; Fine-tuned BERT; Error analysis
Mental Health Signal Detection in Posts | A | 8 | Identifies posts that may indicate distress so moderators can offer help resources. | Python, Transformers | Ethical data use; Classification; Moderator dashboard; Helpline suggestions
Topic Modelling of Research Papers | I | 6 | Discovers research topics and trends across a collection of papers. | Python, BERTopic, Plotly | Paper abstracts; Topic modelling; Trend over years; Interactive explorer
Customer Feedback Theme Extraction | I | 6 | Clusters open-ended survey responses into themes with representative quotes. | Python, Sentence Transformers, HDBSCAN | Embedding; Clustering; Theme labelling; Report export
Language Identification for Indian Languages | I | 5 | Identifies which Indian language a piece of text is written in, including romanised text. | Python, fastText | Training data; Character n-gram model; Romanised text support; API
Readability Scorer for Textbooks | B | 4 | Measures reading difficulty of text and suggests simpler words. | Python, textstat, Flask | Readability formulas; Hard word detection; Simplification hints; Comparison report

# Information extraction
Named Entity Recognition for Legal Documents | A | 8 | Extracts parties, dates, courts and acts from Indian court judgments. | Python, spaCy, Transformers | Annotation; NER fine-tuning; Evaluation; Search by entity
Resume Parser | I | 6 | Extracts name, education, skills and experience from resumes into structured data. | Python, spaCy, pdfplumber | PDF and DOCX parsing; Section detection; Entity extraction; JSON output
Medical Report Information Extractor | A | 8 | Extracts test names, values and normal ranges from lab reports. | Python, spaCy, OCR | OCR pipeline; Entity and value extraction; Abnormal value flags; Patient summary
Keyword and Keyphrase Extractor | B | 4 | Extracts key phrases from articles for tagging and SEO. | Python, KeyBERT, Streamlit | Text input; Keyphrase extraction; Ranking; Export tags
Contract Clause Classifier | A | 8 | Classifies clauses in contracts such as termination, liability and payment. | Python, Transformers, CUAD dataset | Clause segmentation; Classification; Highlighting UI; Missing clause alerts
Job Description Skill Extractor | I | 5 | Extracts required skills and experience from job postings and compares with a resume. | Python, spaCy | Skill dictionary; Extraction; Gap analysis; Report
Relation Extraction from News | A | 9 | Extracts who-did-what-to-whom relations from news to build a knowledge graph. | Python, spaCy, Neo4j | Entity extraction; Relation model; Graph storage; Graph explorer
Event Extraction from Social Media for Disasters | A | 8 | Finds reports of needs, damage and rescue requests in posts during disasters. | Python, Transformers | Crisis dataset; Classification; Location extraction; Map of requests

# Generation and summarisation
News Article Summariser | I | 6 | Produces short summaries of news articles with extractive and abstractive methods. | Python, Transformers, Streamlit | Extractive baseline; Abstractive model; ROUGE evaluation; Web app
Lecture Video Summariser | A | 8 | Transcribes lecture videos and produces chapter-wise notes. | Python, Whisper, LLM API | Transcription; Chapter segmentation; Notes generation; Timestamp links
Research Paper Summariser and Q&A | A | 8 | Summarises research papers section by section and answers questions about them. | Python, LangChain, Vector database | PDF parsing; Section summaries; Question answering; Citation links
Automatic Question Generation from Text | I | 7 | Generates fill-in-the-blank and MCQ questions from a passage. | Python, Transformers, spaCy | Key sentence selection; Question generation; Distractor generation; Teacher review
Headline Generator for Articles | I | 5 | Generates catchy but accurate headlines for articles. | Python, Transformers | Dataset; Fine-tuned model; Evaluation; Demo
Grammar and Spelling Checker | I | 7 | Detects and corrects grammar and spelling errors in English text. | Python, Transformers, LanguageTool | Error detection; Correction model; Explanation of fixes; Editor UI
Paraphrasing Tool | I | 5 | Rewrites sentences in different words while keeping meaning. | Python, Transformers, Flask | Paraphrase model; Diversity control; Similarity check; Web UI
Poetry Generator in Regional Language | A | 8 | Generates short poems in a regional language by fine-tuning a language model. | Python, Transformers | Corpus collection; Fine-tuning; Rhyme and metre checks; Demo
Commit Message Generator | I | 6 | Generates commit messages from code diffs. | Python, Transformers, Git hooks | Diff dataset; Model fine-tuning or prompting; Git hook integration; Evaluation
Meeting Minutes Generator | I | 6 | Creates structured minutes with decisions and owners from a meeting transcript. | Python, LLM API, Streamlit | Transcript input; Decision extraction; Action items with owners; Export

# Translation and speech
English to Hindi Translator | A | 9 | Trains or fine-tunes a translation model for English to Hindi and evaluates it. | Python, Transformers, IndicTrans | Parallel corpus; Fine-tuning; BLEU evaluation; Translation UI
Transliteration Tool for Indian Languages | I | 5 | Converts romanised text to native scripts and back. | Python, Indic NLP Library, Flask | Script mappings; Model-based transliteration; Web input; API
Speech-to-Text for Indian English | A | 8 | Fine-tunes a speech model for Indian-accented English. | Python, Whisper, Hugging Face | Audio dataset; Fine-tuning; WER evaluation; Live demo
Voice Assistant for Desktop | I | 6 | A voice assistant that opens apps, searches the web and sets reminders. | Python, SpeechRecognition, pyttsx3 | Wake word; Command parsing; Actions; Spoken responses
Text-to-Speech in Regional Language | A | 9 | Builds a text-to-speech system for a regional language. | Python, Coqui TTS | Voice dataset; Model training; Quality evaluation; Web demo
Speaker Identification System | I | 7 | Identifies who is speaking from a short voice sample. | Python, Librosa, PyTorch | MFCC features; Speaker embeddings; Enrollment; Identification
Call Centre Conversation Analytics | A | 8 | Transcribes calls and analyses sentiment, talk time and topics. | Python, Whisper, Transformers, Dash | Transcription; Speaker diarisation; Sentiment and topics; Dashboard
Podcast Transcript Search Engine | I | 7 | Transcribes podcast episodes and lets users search inside them by keyword. | Python, Whisper, Elasticsearch | Transcription; Indexing; Search with timestamps; Audio jump-to
Subtitle Generator for Videos | I | 6 | Automatically generates and syncs subtitles for videos. | Python, Whisper, FFmpeg | Audio extraction; Transcription; SRT generation; Subtitle editor

# Chatbots and assistants
College Enquiry Chatbot | B | 5 | Answers common admission and fee questions for a college website. | Python, Rasa | Intents and FAQs; Dialogue flows; Website widget; Fallback to human
Banking FAQ Chatbot | B | 5 | Answers customer questions about accounts, cards and loans. | Python, Dialogflow | Intent design; Entity extraction; Integration with website; Analytics
Mental Wellness Chatbot | I | 7 | A supportive chatbot that offers coping exercises and points to professional help. | Python, LLM API, Next.js | Safety guidelines; Conversation flows; Exercise library; Crisis escalation
Agriculture Advisory Chatbot | I | 7 | Answers farmers' questions about crops, pests and schemes in their language. | Python, LLM API, WhatsApp Business API | Knowledge base; Retrieval; Multilingual support; Voice messages
Legal Aid Chatbot | A | 8 | Explains basic legal rights and procedures in simple language with sources. | Python, RAG, Next.js | Legal text corpus; Retrieval; Answer with citations; Disclaimer handling
Government Scheme Finder Bot | I | 6 | Asks a few questions and finds government schemes a person may be eligible for. | Python, LLM API, Telegram Bot API | Scheme database; Eligibility questions; Matching; Application links
Programming Doubt Solver Bot | I | 6 | Answers programming questions with code examples, grounded in official documentation. | Python, RAG, Discord API | Docs ingestion; Retrieval; Code answer generation; Discord bot
Customer Service Bot for E-commerce | I | 7 | Tracks orders, handles returns and answers product questions. | Node.js, LLM API tool use, PostgreSQL | Order lookup tool; Return flow; Product Q&A; Human handover
Hospital Reception Chatbot | B | 5 | Books appointments and answers questions about departments and timings. | Python, Rasa, Flask | Intents; Appointment booking; Department info; Web widget

# Search and similarity
Semantic Search Engine for Documents | I | 7 | Searches a document collection by meaning rather than keywords. | Python, Sentence Transformers, FAISS, FastAPI | Embedding pipeline; Vector index; Search API; Result highlighting
Duplicate Question Detection | I | 5 | Detects duplicate questions on a Q&A forum. | Python, Sentence Transformers | Quora dataset; Siamese model; Threshold tuning; Forum integration demo
Plagiarism Checker with Paraphrase Detection | A | 8 | Detects copied and paraphrased text between documents. | Python, Sentence Transformers, Flask | Document chunking; Semantic similarity; Match highlighting; Report
Autocomplete and Next Word Prediction | I | 6 | Predicts the next word while typing using an n-gram and a neural model. | Python, PyTorch | N-gram model; LSTM model; Comparison; Keyboard demo
Spell Checker for Indian Languages | A | 8 | Detects and suggests corrections for misspellings in a regional language. | Python, Indic NLP Library | Word list; Edit distance; Language model ranking; Editor plugin
Bible or Gita Verse Search by Meaning | B | 5 | Finds verses in a scripture that match a question or feeling by meaning. | Python, Sentence Transformers, Streamlit | Verse dataset; Embeddings; Similarity search; Translation display
Code Search with Natural Language | A | 8 | Finds functions in a codebase from plain English descriptions. | Python, CodeBERT, FAISS | Code parsing; Code embeddings; Natural language query; IDE-style results
FAQ Auto-answer for Forums | I | 6 | Suggests existing answers when a user starts typing a question. | Python, Sentence Transformers, React | FAQ index; Similarity search; Suggestions as you type; Feedback
`,
};
