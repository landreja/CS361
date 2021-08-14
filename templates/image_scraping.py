import requests
import json
from PIL import Image

url = 'https://scraping-image-app.herokuapp.com/airplane'
response = requests.get(url=url)
copy = response.json()
dict(copy)
print(copy)
with open("images.json", "w") as outfile:
    json.dump(copy, outfile)

