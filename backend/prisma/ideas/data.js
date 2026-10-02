module.exports = {
  domain: 'Data',
  ideas: `
# Dashboards and analysis
Air Quality Analytics Dashboard | B | 6 | Analyses public air quality data for Indian cities and shows trends, seasons and worst areas. | Python, Pandas, Plotly Dash | Data collection and cleaning; Trend charts; City comparison; Insights report
Student Performance Prediction | I | 7 | Predicts students at risk of failing using attendance and internal marks so faculty can help early. | Python, scikit-learn, Streamlit | Feature engineering; Model training; Risk dashboard; Faculty report export
COVID-19 India Data Dashboard | B | 4 | Visualises historical COVID-19 cases, vaccinations and recoveries across states. | Python, Pandas, Plotly Dash | Data cleaning; State-wise maps; Trend lines; Vaccination progress
IPL Cricket Match Analysis | B | 4 | Analyses IPL data to find player performance, toss impact and venue trends. | Python, Pandas, Matplotlib | Data cleaning; Player stats; Team comparison; Insights report
Indian Railway Delay Analysis | I | 6 | Analyses train running data to find routes and stations with frequent delays. | Python, Pandas, Plotly | Data scraping; Delay metrics; Route maps; Findings report
Crime Data Analysis for Indian States | B | 5 | Explores crime statistics by state and year from NCRB data. | Python, Pandas, Power BI | Data cleaning; State trends; Category breakdown; Dashboard
Unemployment Trend Analysis | B | 4 | Analyses unemployment rates across regions and age groups over time. | Python, Pandas, Tableau Public | Data sourcing; Trend charts; Regional comparison; Report
Startup Funding Analysis in India | B | 4 | Analyses startup funding rounds by sector, city and investor. | Python, Pandas, Plotly | Dataset cleaning; Sector trends; Top investors; City comparison
E-commerce Sales Dashboard | B | 5 | An interactive dashboard of sales, returns and top products for an online store. | Power BI, SQL | Data model; KPIs; Drill-down charts; Monthly report
HR Analytics Dashboard | B | 4 | Visualises headcount, attrition, hiring and diversity metrics. | Tableau Public, Excel | Data preparation; KPI cards; Attrition analysis; Department filters
Hospital Bed and Resource Dashboard | I | 6 | Tracks bed occupancy and resources across hospitals in a district. | Python, Streamlit, PostgreSQL | Data entry API; Occupancy charts; Shortage alerts; District map
Netflix Content Analysis | B | 3 | Explores Netflix titles by genre, country, rating and year added. | Python, Pandas, Seaborn | Data cleaning; Genre trends; Country analysis; Visual report
Spotify Listening Habits Analysis | B | 4 | Analyses your own Spotify streaming history to find listening patterns. | Python, Pandas, Plotly | Data export; Time patterns; Top artists; Personal report
Global Temperature Change Visualisation | B | 4 | Visualises long-term temperature anomalies by country and decade. | Python, Pandas, Plotly | NASA and Berkeley data; Anomaly maps; Animated timeline; Story write-up
Water Quality Analysis of Rivers | I | 5 | Analyses water quality parameters of rivers to find polluted stretches. | Python, Pandas, Folium | Data from pollution boards; Quality index; River maps; Trends
Election Results Analysis | B | 4 | Analyses past election results by constituency, party and turnout. | Python, Pandas, Plotly | Data cleaning; Vote share charts; Turnout maps; Swing analysis
Road Accident Data Analysis | B | 5 | Finds patterns in road accidents by time, road type and weather. | Python, Pandas, Seaborn | Data cleaning; Time patterns; Hotspot maps; Safety recommendations
Agricultural Production Analysis | B | 5 | Analyses crop production and yield across states and seasons. | Python, Pandas, Power BI | Data cleaning; Crop trends; State comparison; Dashboard
Zomato Restaurant Analysis | B | 4 | Analyses restaurant ratings, cuisines and prices across cities. | Python, Pandas, Plotly | Data cleaning; Cuisine popularity; Price vs rating; City maps
YouTube Trending Video Analysis | B | 4 | Studies trending videos to find what drives views, likes and comments. | Python, YouTube Data API, Pandas | Data collection; Category trends; Title analysis; Report
Personal Fitness Data Dashboard | B | 4 | Visualises steps, sleep and heart rate data exported from a fitness band. | Python, Streamlit | Data import; Daily and weekly charts; Goal tracking; Correlations
Public Transport Ridership Analysis | I | 6 | Analyses metro or bus ridership to find peak hours and busiest stations. | Python, Pandas, Plotly | Data sourcing; Hourly patterns; Station ranking; Recommendations
Energy Consumption Analysis of a Campus | I | 6 | Analyses electricity bills and meter data to find savings opportunities. | Python, Pandas, Power BI | Data collection; Building comparison; Peak usage; Savings report

# Data engineering
ETL Pipeline for Open Government Data | I | 7 | Builds a scheduled pipeline that pulls open government datasets, cleans them and loads a warehouse. | Python, Airflow, PostgreSQL | Data extraction; Cleaning steps; Warehouse loading; Scheduling and alerts
Real-time Stock Ticker Pipeline | A | 8 | Streams live price data through Kafka and computes moving averages in real time. | Kafka, Python, Spark Structured Streaming | Producer; Stream processing; Windowed aggregates; Live dashboard
Data Warehouse for a Retail Chain | A | 9 | Designs a star schema warehouse and builds reports for a retail chain. | PostgreSQL, dbt, Metabase | Dimensional modelling; dbt models; Data tests; BI dashboards
Web Scraping Pipeline for Job Listings | I | 6 | Scrapes job sites daily, removes duplicates and stores clean data for analysis. | Python, Scrapy, PostgreSQL | Spiders; Deduplication; Scheduling; Trend dashboard
Clickstream Analytics Pipeline | A | 9 | Collects website click events, processes them and builds funnels and retention charts. | JavaScript, Kafka, ClickHouse, Grafana | Event tracker script; Ingestion; Funnel queries; Dashboards
Data Quality Checker | I | 6 | Profiles datasets and flags missing values, outliers and schema changes. | Python, Great Expectations | Data profiling; Expectation suites; Validation reports; Pipeline integration
Change Data Capture Demo | A | 8 | Streams database changes from PostgreSQL to a search index in real time. | Debezium, Kafka, Elasticsearch | CDC setup; Topic processing; Index updates; Consistency checks
Log Analytics with the ELK Stack | I | 6 | Collects application logs, parses them and builds searchable dashboards. | Elasticsearch, Logstash, Kibana | Log shipping; Parsing; Dashboards; Alerts
Big Data Analysis of Taxi Trips | A | 8 | Processes millions of taxi trip records with Spark to find demand patterns. | Apache Spark, Python, Parquet | Data loading; Spark transformations; Demand heatmaps; Performance tuning
Data Lake on Object Storage | A | 9 | Builds a small data lake with raw, cleaned and curated zones and query access. | MinIO, Apache Spark, Delta Lake, Trino | Storage zones; Ingestion jobs; Table formats; SQL queries
Open Data API Wrapper | B | 5 | Wraps a messy public dataset in a clean, documented REST API. | Python, FastAPI, PostgreSQL | Data import; Endpoints; Filtering and pagination; API docs
CSV Cleaner Web Tool | B | 4 | Upload a CSV and fix common issues like duplicates, blanks and date formats. | Python, Pandas, Streamlit | File upload; Issue detection; Cleaning actions; Download cleaned file

# Statistics and modelling
A/B Test Analysis Tool | I | 5 | Analyses A/B test results with significance tests and confidence intervals. | Python, SciPy, Streamlit | Data upload; Hypothesis tests; Sample size calculator; Results explanation
Customer Segmentation with Clustering | B | 5 | Groups customers by purchase behaviour using RFM and k-means. | Python, scikit-learn, Plotly | RFM features; K-means clustering; Segment profiles; Marketing suggestions
Market Basket Analysis | B | 4 | Finds products that are often bought together using association rules. | Python, mlxtend | Transaction data; Apriori; Rule metrics; Recommendations
Survival Analysis of Customer Subscriptions | I | 6 | Estimates how long customers stay subscribed and what affects it. | Python, lifelines | Kaplan-Meier curves; Cox regression; Segment comparison; Report
Time Series Anomaly Detection for Sensors | I | 6 | Detects abnormal readings in sensor time series. | Python, Pandas, Prophet | Data preparation; Seasonal decomposition; Anomaly detection; Alert view
Hypothesis Testing on Exam Results | B | 3 | Tests whether teaching methods or study hours significantly affect exam results. | Python, SciPy, Pandas | Data collection; t-tests and ANOVA; Effect sizes; Report
Sports Player Performance Rating | I | 6 | Builds a rating system for football or cricket players from match statistics. | Python, Pandas | Feature selection; Weighted rating model; Validation; Leaderboard
Elo Rating System for a College Tournament | B | 4 | Ranks players in a chess or table tennis club using Elo ratings. | Python, Flask, SQLite | Match entry; Elo calculation; Rating history; Leaderboard
Demand Forecasting for a Canteen | I | 5 | Forecasts daily food demand to reduce waste in a college canteen. | Python, Pandas, Prophet | Sales data; Day and event features; Forecast; Waste comparison
Monte Carlo Project Risk Simulator | I | 5 | Simulates project timelines with uncertain task durations to estimate completion dates. | Python, NumPy, Streamlit | Task input; Distribution choice; Simulation; Probability chart

# Visualisation and storytelling
Interactive India Census Map | I | 6 | An interactive choropleth map of census indicators by district. | JavaScript, D3.js, GeoJSON | Data joining; Choropleth map; Indicator switcher; Tooltips
Data Storytelling Website on Climate | I | 6 | A scrolling story explaining climate data with animated charts. | JavaScript, D3.js, Scrollama | Data preparation; Scroll-driven charts; Narrative; Mobile layout
Personal Expense Insights from Bank Statements | B | 5 | Upload bank statement PDFs and get categorised spending insights. | Python, pdfplumber, Streamlit | PDF parsing; Categorisation rules; Charts; Monthly summary
GitHub Activity Analytics | B | 4 | Visualises a user's or organisation's GitHub activity and language use. | Python, GitHub API, Plotly | Data fetching; Commit patterns; Language breakdown; Contribution heatmap
Network Graph of Movie Actors | I | 5 | Builds and visualises a graph of actors who worked together. | Python, NetworkX, Gephi | Data collection; Graph building; Centrality metrics; Interactive graph
Social Network Analysis of a Class Group | I | 5 | Analyses an exported group chat to show who talks to whom and when. | Python, NetworkX, Pandas | Chat export parsing; Interaction graph; Activity timeline; Privacy safeguards
Wikipedia Page View Trends | B | 4 | Explores page view trends to find seasonal interests and sudden spikes. | Python, Wikimedia API, Plotly | Data fetching; Trend charts; Spike detection; Write-up
Real Estate Price Heatmap | I | 6 | Maps property prices across a city to show expensive and affordable areas. | Python, Folium, Pandas | Listing data; Geocoding; Heatmap; Price per square foot analysis
Weather Data Explorer | B | 4 | Lets users explore historical weather for any city with charts. | Python, Open-Meteo API, Streamlit | City search; Historical data; Charts; Comparison
Book Reading Trends from Goodreads Data | B | 4 | Analyses book ratings, genres and authors to find reading trends. | Python, Pandas, Seaborn | Data cleaning; Genre trends; Author stats; Report
Sports League Table Visualiser | B | 3 | Animates how a league table changed over a season. | Python, Plotly | Match data; Points table calculation; Animated bar chart; Highlights
Bus Route Network Analysis | I | 6 | Analyses a city bus network to find poorly connected areas. | Python, GTFS, NetworkX | GTFS parsing; Network graph; Coverage analysis; Recommendations
Literacy and School Data Explorer | B | 5 | Explores school infrastructure and literacy data by district. | Python, Pandas, Plotly Dash | Data cleaning; District maps; Correlations; Dashboard
`,
};
