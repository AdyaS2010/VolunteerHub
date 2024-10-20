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
