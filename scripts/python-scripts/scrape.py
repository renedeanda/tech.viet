import os
import requests
from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
from re import search
from selenium import webdriver  # for screenshot web crawler
import time
import json  # for reading json file
from glob import glob  # for reading folder of json files


def scrape_page_metadata():
    companies = read_json_files()
    path = os.path.abspath("../../public/img/updated")

    for co in companies:
        slug = co[0]
        url = co[1]
        print(co)
        if not search('http', url):
            url = f'http://{url}'

        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600',
            'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0'
        }
        if not os.path.isfile(f'{path}/{slug}-share.png') or not os.path.isfile(f'{path}/{slug}-favicon.png'):
            try:
                r = requests.get(url, headers=headers)
                html = BeautifulSoup(r.content, 'html.parser')

                if not os.path.isfile(f'{path}/{slug}-share.png'):
                    if get_image(html, url) != None:
                        create_share_image(
                            get_image(html, url), headers, path, slug)

                if not os.path.isfile(f'{path}/{slug}-favicon.png'):
                    if get_favicon(html, url) != None:
                        create_favicon(get_favicon(html, url),
                                       headers, path, slug)
            except:
                continue


def create_share_image(shareImg, headers, path, slug):
    # The assembled request
    request_ = Request(shareImg, None, headers=headers)
    response = urlopen(request_)  # store the response

    print(f'{path}/{slug}-share.png')
    # create a new file and write the image
    f = open(f'{path}/{slug}-share.png', 'wb')
    f.write(response.read())
    f.close()


def create_favicon(favicon, headers, path, slug):
    # The assembled request
    request_ = Request(favicon, None, headers=headers)
    response = urlopen(request_)  # store the response

    print(f'{path}/{slug}-favicon.png')
    # create a new file and write the image
    f = open(f'{path}/{slug}-favicon.png', 'wb')
    f.write(response.read())
    f.close()


def get_image(html, url):
    """Scrape share image."""
    image = None
    if html.find("meta", property="image"):
        image = html.find("meta", property="image").get('content')
    elif html.find("meta", property="og:image"):
        image = html.find("meta", property="og:image").get('content')
    elif html.find("meta", property="twitter:image"):
        image = html.find("meta", property="twitter:image").get('content')
    else:
        image = None
    # check string for http/https & append site url if doesn't exist
    if image == None:
        return image
    if search('http', image):
        return image
    else:
        if image.startswith('//'):
            return f'http:{image}'
        elif image.startswith('/'):
            return f'{url.rstrip("/")}{image}'
        elif image.startswith('-'):
            return None
        else:
            return f'{url.rstrip("/")}/{image}'
    print(image)


def get_favicon(html, url):
    """Scrape favicon."""
    favicon = None
    if html.find("link", attrs={"sizes": "32x32"}):
        favicon = html.find("link", attrs={"sizes": "32x32"}).get('href')
    elif html.find("link", attrs={"rel": "icon"}):
        favicon = html.find("link", attrs={"rel": "icon"}).get('href')
    elif html.find("link", attrs={"rel": "shortcut icon"}):
        favicon = html.find("link", attrs={"rel": "shortcut icon"}).get('href')
    # check string for http/https & append site url if doesn't exist
    if favicon == None:
        return favicon
    if search('http', favicon):
        return favicon
    else:
        if favicon.startswith('//'):
            return f'http:{favicon}'
        elif favicon.startswith('/'):
            return f'{url.rstrip("/")}{favicon}'
        else:
            return f'{url.rstrip("/")}/{favicon}'
    print(favicon)


def get_create_one_image(url, slug, desc):
    path = os.path.abspath("../../public/img/company")
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '3600',
        'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0'
    }
    # The assembled request
    request_ = Request(url, None, headers=headers)
    response = urlopen(request_)  # store the response
    print(f'{path}/{slug}-{desc}.png')
    # create a new file and write the image
    f = open(f'{path}/{slug}-{desc}.png', 'wb')
    f.write(response.read())
    f.close()


def get_screenshots():
    path = '/usr/local/bin/chromedriver'
    companies = read_json_files()

    options = webdriver.ChromeOptions()
    # switch to "headful" for sites that block web crawlers or have captchas
    options.add_argument("headless")
    options.add_argument("disable-infobars")  # disabling infobars
    options.add_argument("--disable-extensions")  # disabling extensions
    options.add_argument("--disable-gpu")  # applicable to windows os only
    # overcome limited resource problems
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--no-sandbox")  # Bypass OS security model
    options.add_argument("--hide-scrollbars")  # hide scrollbars in screenshot

    with webdriver.Chrome(path, options=options) as driver:
        # these values represent the sizes of the entire browser window and not the viewport.
        path = os.path.abspath("../../public/img/updated")
        for co in companies:
            # use company slug to name file
            desktop = {'output': f'{path}/{co[0]}-screenshot.png',
                       'width': 1280,
                       'height': 800}
            linkWithProtocol = f'https://{co[1]}'
            linkWithHttp = f'http://{co[1]}'

            # set the window size for desktop
            driver.set_window_size(desktop['width'], desktop['height'])
            print(desktop['output'])
            if os.path.isfile(desktop['output']):
                # skips saving screenshot if file exists, comment out to produce new screenshots
                continue
            else:
                try:
                    driver.get(linkWithProtocol)
                    time.sleep(3)
                    driver.save_screenshot(desktop['output'])
                except:
                    driver.get(linkWithHttp)
                    time.sleep(3)
                    driver.save_screenshot(desktop['output'])
                    print("THIS IS HTTP")



def get_fb_avatars():
    companies = read_json_files()
    path = os.path.abspath("../../public/img/updated")

    for co in companies:
        slug = co[0]
        fbUrl = co[2]

        if fbUrl:
            fbUsername = fbUrl.split("/")[-2:][1]
            fbAvatarUrl = f'https://graph.facebook.com/{fbUsername}/picture?type=large'
        else:
            fbAvatarUrl = None

        print(fbAvatarUrl)

        if not os.path.isfile(f'{path}/{slug}-avatar.png'):
            try:
                get_create_one_image(fbAvatarUrl, slug, "avatar")
            except:
                continue


def read_json_files():

    companies = []

    files = glob('../../public/data/companies/*', recursive=True)

    # Loop through files
    for single_file in files:
        with open(single_file, 'r') as f:
            json_file = json.load(f)
            companies.append([
                json_file['slug'],
                json_file['website'],
                json_file['facebook']
            ])

    return companies


# uncomment to produce screenshots for all Viet.io companies
get_screenshots()

# get_create_one_image("URL", "SLUG", "favicon")
# get_create_one_image("URL", "SLUG", "share")
# get_create_one_image("URL", "SLUG", "avatar")


# uncomment to scrape available favicon & share images for all Viet.io companies
# scrape_page_metadata()

# uncomment to scrape available FB avatars for all Viet.io Companies
get_fb_avatars()
