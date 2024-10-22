from flask import Flask, request, jsonify
from flask_cors import CORS
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

app = Flask(__name__)
CORS(app)  # Enable CORS

# Mock database or data source for fallback or preloaded data
volunteer_opportunities = [
    {"location": "New York", "experience": "Young children", "categories": ["Helping children", "Healthcare"]},
    {"location": "Los Angeles", "experience": "Teens", "categories": ["Climate Change"]},
    {"location": "Chicago", "experience": "Adults with certain qualifications", "categories": ["Healthcare"]},
]

@app.route('/search', methods=['GET'])
def search_opportunities():
    location = request.args.get('location', '')
    experience = request.args.get('experience', '')
    categories = request.args.getlist('categories')

    # Log incoming request parameters
    print(f"Received request with location: {location}, experience: {experience}, categories: {categories}")

    # Use Chrome API (Selenium) to fetch data from a website
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    driver.get('https://example-volunteer-opportunities-site.com/search')

    # Enter search parameters
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, 'location'))).send_keys(location)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, 'experience'))).send_keys(experience)
    for category in categories:
        driver.find_element(By.XPATH, f"//input[@value='{category}']").click()

    # Submit the search form
    driver.find_element(By.ID, 'searchButton').click()

    # Wait for and fetch results
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, 'result')))
    results = driver.find_elements(By.CLASS_NAME, 'result')

    fetched_opportunities = []
    for result in results:
        fetched_opportunities.append({
            'location': result.find_element(By.CLASS_NAME, 'location').text,
            'experience': result.find_element(By.CLASS_NAME, 'experience').text,
            'categories': result.find_element(By.CLASS_NAME, 'categories').text.split(', ')
        })

    driver.quit()

    # Log fetched opportunities for debugging
    print(f"Fetched opportunities from web: {fetched_opportunities}")

    # Combine with mock data if needed
    filtered_opportunities = [
        opp for opp in volunteer_opportunities
        if (location.lower() in opp['location'].lower() or not location) and
           (experience == opp['experience'] or not experience) and
           (set(categories).intersection(opp['categories']) or not categories)
    ] + fetched_opportunities

    # Log the response
    print(f"Filtered opportunities: {filtered_opportunities}")

    return jsonify(filtered_opportunities)

if __name__ == '__main__':
    app.run(debug=True)

"""
# Alternate method

import requests
from bs4 import BeautifulSoup
import pandas as pd

def scrape_opportunities(url):
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to retrieve data from {url}")
        return pd.DataFrame()
    
    soup = BeautifulSoup(response.content, 'html.parser')
    
    opportunities = []
    for item in soup.find_all('div', class_='opportunity'):
        title = item.find('h2').text.strip()
        description = item.find('p').text.strip()
        required_skills = item.find('span', class_='skills').text.strip()
        opportunities.append({
            'title': title,
            'description': description,
            'required_skills': required_skills
        })
    
    return pd.DataFrame(opportunities)

url = 'https://example.com/volunteer-opportunities'
df = scrape_opportunities(url)
df.to_csv('opportunities.csv', index=False)
print("Scraping completed and data saved to opportunities.csv")

// Includes error handling, data cleaning, and feedback (properties in code) 
"""


