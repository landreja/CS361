# Auther: James Landreth
# Date 7/25/2021
# Description: This program pulls wiki content based on a search
#               word

from bs4 import BeautifulSoup
import requests

key_word = "dj khaled"

pull_page = requests.get("https://en.wikipedia.org/wiki/" + key_word)

scraper = BeautifulSoup(pull_page.content, "html.parser")

objects = scraper.find(id="mw-content-text")
texts = objects.find_all('p', limit=5)
for i in range(5):

    print(texts[i].get_text())
