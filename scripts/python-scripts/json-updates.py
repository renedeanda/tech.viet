import os
import json
from slugify import slugify
from glob import glob  # for reading folder of json files


def create_investor_json_files():
    file = '../../public/data/vcv_json.json'
    invPath = os.path.abspath("../../public/data/investors")

    with open(file, 'r', encoding='utf-8') as f:
        investors = json.load(f)
        for i in investors:
            slug = slugify(i['name'])
            if (os.path.isfile(f'{invPath}/{slug}.json')):
                # skips if json exists
                print(f'{slug}.json already exists')
                continue
            else:
                try:
                    data = {
                        "name": i['name'],
                        "slug": slug,
                        "type": i['type'],
                        "website": i['website'],
                        "description": i['description'],
                        "location": i['location'],
                        "founded": str(i['founded']),
                        "facebook": i['facebook'],
                        "linkedin": i['linkedin'],
                        "crunchbase": i['crunchbase'],
                        "portfolio": i['portfolio']
                    }
                    print(f'{invPath}/{slug}.json')
                    with open(f'{invPath}/{slug}.json', 'w') as f:
                        json.dump(data, f, ensure_ascii=False)
                except:
                    continue
    return


def update_inv_json():
    investors = read_inv_json_files()
    imgPath = os.path.abspath("../../public/img/investor")
    jsonPath = os.path.abspath("../../public/data/investors")

    for inv in investors:
        slug = inv["slug"]
        if os.path.isfile(f'{imgPath}/{slug}-avatar.png'):
            # skips creating image if file exists
            print(f'Image exists - {slug}')
            try:
                inv["logoUrl"] = f'/img/investor/{slug}-avatar.png'
                with open(f'{jsonPath}/{slug}.json', 'w') as f:
                    json.dump(inv, f, ensure_ascii=False)
            except:
                continue
        else:
            try:
                print(f'No image exists - {slug}')
            except:
                continue
    return


def update_co_json():
    companies = read_json_files()
    imgPath = os.path.abspath("../../public/img/company")
    jsonPath = os.path.abspath("../../public/data/companies")

    for co in companies:
        slug = co["slug"]
        if os.path.isfile(f'{imgPath}/{slug}-avatar.png'):
            # skips creating image if file exists
            print(f'Image exists - {slug}')
            try:
                co["logoUrl"] = f'/img/company/{slug}-avatar.png'
                with open(f'{jsonPath}/{slug}.json', 'w') as f:
                    json.dump(co, f, ensure_ascii=False)
            except:
                continue
        else:
            try:
                print(f'No image exists - {slug}')
            except:
                continue
    return


def read_json_files():
    companies = []
    files = glob('../../public/data/companies/*', recursive=True)

    # Loop through files
    for single_file in files:
        with open(single_file, 'r') as f:
            json_file = json.load(f)
            companies.append(json_file)
    return companies

def read_inv_json_files():
    investors = []
    files = glob('../../public/data/investors/*', recursive=True)

    # Loop through files
    for single_file in files:
        with open(single_file, 'r') as f:
            json_file = json.load(f)
            investors.append(json_file)
    return investors

# create_investor_json_files()
update_co_json()
update_inv_json()
