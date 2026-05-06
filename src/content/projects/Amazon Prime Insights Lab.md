---
title: Amazon Prime Insights Lab
description: >
  As a team primarily composed of data analysts, we wanted to bring our data analytics expertise to a real cloud environment using AWS services.
image: '@assets/projects/Amazon Prime Insights Lab/image.png'
startDate: 2026-04-29
endDate: 2026-05-06
skills:
  - Data Lake Management - Amazon S3
  - ETL Pipeline Orchestration - AWS Glue
  - Serverless Computing - AWS Lambda
  - Data Cataloging - Crawler de AWS Glue
  - KPI Design

demoLink: https://dai.ly/xa8agkq
featured: true
---

## Project Overview

Objective: To design and implement a scalable **Cloud Data Pipeline** to automate the ingestion, transformation, and analysis of large datasets.

Solution: Leveraging the **AWS Ecosystem**, I built a serverless architecture where raw data is stored in **S3**, processed and cleaned through **AWS Glue** and **Python Lambda functions**, and finally modeled for strategic visualization.

---

## Repository Stats

![AWS S3](https://img.shields.io/badge/AWS%20S3-Storage-FF9900?logo=amazons3&logoColor=white)
![AWS Glue](https://img.shields.io/badge/AWS%20Glue-ETL%20Orchestration-FF9900?logo=amazon-aws&logoColor=white)
![AWS Lambda](https://img.shields.io/badge/AWS%20Lambda-Serverless-FF9900?logo=aws-lambda&logoColor=white)
![Python](https://img.shields.io/badge/Python-Automation-blue?logo=python&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-Data%20Querying-00758F?logo=mysql&logoColor=white)
![ETL Design](https://img.shields.io/badge/ETL-Design%20%26%20Architecture-red)
![Cloud Analytics](https://img.shields.io/badge/Cloud-Analytics-blueviolet)

---

## Objectives

- Cloud Data Architecture: Build a serverless **ETL pipeline** using **AWS S3** as a data lake to store and manage the Amazon Prime Video Kaggle dataset.

- Automated Data Processing: Deploy **AWS Lambda** functions and **AWS Glue jobs** to clean, format, and normalize movie and TV show metadata (handling missing genres, release dates, and ratings).

- Content Insights: Perform advanced **SQL queries** to analyze content distribution, identifying trends in production growth and genre popularity over the years.

- Business Intelligence: Provide **data-driven** recommendations for content acquisition based on audience ratings and production trends within the Prime Video ecosystem.

---

## Dataset

The dataset contains anonymized employee information including:

- show_id: Identificador único para cada título (película o serie).
- type: Clasificación del contenido (Movie o TV Show).
- title: Nombre de la producción.
- director: Director(es) de la obra (ideal para limpieza de nulos con Glue).
- cast: Reparto principal / actores involucrados.
- country: País o países de origen de la producción.
- date_added: Fecha en la que el título se incorporó al catálogo de Amazon Prime.
- release_year: Año original de estreno.
- rating: Clasificación por edades (ej. 13+, TV-MA, etc.).
- duration: Duración total (en minutos para películas o temporadas para series).
- listed_in: Géneros y categorías (ej. Drama, Comedy, Suspense).
- description: Breve sinopsis del contenido.

---

## Tools & Technologies

The analysis was conducted using:

- Cloud Infrastructure & ETL
**AWS S3**: Scalable storage for the raw and processed Amazon Prime datasets.
**AWS Glue**: Data cataloging and ETL job orchestration for seamless processing.
**AWS Lambda**: Serverless Python functions for automated data cleaning and event-driven triggers.

- Data Analysis & Processing
**SQL**: Advanced querying for trend analysis and content distribution.
**Python** (Pandas & NumPy): Extensive data wrangling and feature engineering.
**Jupyter Notebooks**: Environment used for the initial Exploratory Data Analysis (EDA).


---

## Project Workflow

1. Data Ingestion & Cloud Storage)
2. Automated ETL & Data Cleaning
3. Exploratory Data Analysis (EDA)
4. Business Strategy & Recommendations

---

## Impact

This project demonstrates how Cloud Data Engineering and Business Intelligence can transform raw streaming data into strategic assets. By migrating the analysis to an AWS serverless architecture, the project achieves:

- Operational Efficiency: Automated ETL processes that reduce manual data preparation time, allowing for faster decision-making.

- Scalable Insights: A robust pipeline capable of handling large-scale datasets, ensuring consistent performance as the content library grows.

- Strategic Growth: Data-driven evidence to optimize content acquisition and genre diversification, directly supporting Amazon Prime Video's competitive positioning in the streaming market.