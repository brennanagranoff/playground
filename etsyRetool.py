import time
from datetime import datetime
from selenium import webdriver


while(True):
    driver = webdriver.Chrome('C:\webdrivers\chromedriver')
    driver.get('https://brennan.tryretool.com/embedded/public/880eff17-6f02-4b19-a1d9-a7c13af3fddd');
    now = datetime.now()
    print("refreshed at: ", now)
    time.sleep(180)
    driver.close()