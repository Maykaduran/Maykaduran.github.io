---
title: Musicstream - Music Data Analytics Platform
description: >-
  A data analytics platform that consolidates music streaming and engagement
  data from multiple platforms such as Spotify and LastFM into a unified
  database to generate cross-platform insights and trends.

image: '@assets/projects/musicstream/image.png'

startDate: 2025-10-20
endDate: 2025-11-14

skills:
  - Python
  - Pandas
  - SQL
  - MySQL
  - Data Cleaning
  - API Integration
  - Data Analysis
  - Jupyter Notebook

demoLink: https://github.com/Maykaduran/MusicStream-API-SQL
sourceLink: https://github.com/Maykaduran/MusicStream-API-SQL

featured: true
---

## Project Overview

Musicstream is a data analytics platform designed to solve one of the main
challenges in the music industry: **data fragmentation**.

Streaming platforms, social networks and music metadata services store valuable
information about artists and songs, but these datasets are usually isolated
from each other. Musicstream consolidates this information into a **centralized
database**, allowing analysts to generate **cross-platform insights** and better
understand music trends.

---

## Repository Stats

![Python](https://img.shields.io/badge/Python-Data%20Analysis-yellow?style=flat&logo=python)
![API](https://img.shields.io/badge/API-Data%20Source-green)
![Pandas](https://img.shields.io/badge/Pandas-Data%20Wrangling-purple?style=flat&logo=pandas)
![NumPy](https://img.shields.io/badge/NumPy-Numerical%20Computing-blue?style=flat&logo=numpy)
![EDA](https://img.shields.io/badge/EDA-Exploratory%20Analysis-green?style=flat)
![SQL](https://img.shields.io/badge/SQL-Data%20Queries-blue?logo=postgresql)
![Git](https://img.shields.io/badge/Git-Version%20Control-orange?logo=git)
![GitHub](https://img.shields.io/badge/GitHub-Repository-black?logo=github)

---

## Objectives

Design a music database that stores songs from different genres and integrates the Spotify and Last.fm APIs to retrieve artist information and ratings.

---

## Features

- 🎧 **Multi-Platform Data Extraction** – Collects data from Spotify and LastFM APIs  
- 🧹 **Data Cleaning & Normalization** – Standardizes datasets for consistent analysis  
- 🗄 **Centralized Database** – Stores unified music data using MySQL  
- 🔗 **Data Integration** – Combines multiple datasets into a single analytical model  
- 📊 **Trend Analysis** – Identifies most listened artists, genres and engagement patterns  
- ⚡ **Automated Data Pipeline** – Python scripts automate extraction, transformation and storage  

---

## Tech Stack

- Python  
- Pandas  
- SQL / MySQL  
- Spotipy  
- Requests  
- Jupyter Notebook  

---

## How to Run the Project

1. Clone the repository
2. 
git clone https://github.com/ariana-caldeira/proyecto-DA-promo-60-modulo-2-team-2.git

1. Run the extraction notebooks

- `MusicStream_Spotify_Extraccion.ipynb`
- `MusicStream_LastFM_Extraccion.ipynb`

3. Create the database

- `CREATE_bbdd_musicstream.sql`

4. Insert the cleaned data into MySQL

- `Insert_to_SQL.ipynb`

---

## Contributors

- Ariana Caldeira  
- Mayka Durán  
- Claudia Cervantes  
- Miriam Marcos  
- Gisela Barroso