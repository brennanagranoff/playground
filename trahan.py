import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

options = Options()
options.add_argument("--verbose")
# options.add_argument("--headless")

while(True):
    driver = webdriver.Chrome(options=options)
    driver.get("https://www.hoopswagg.com")
    driver.find_element(By.XPATH,'//*[@id="shopify-section-header-template"]/header/div[2]/div/div/div[2]/div/div/nav/ul/li[1]/a').click()
    driver.quit
