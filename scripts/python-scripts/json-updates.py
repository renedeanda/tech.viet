import os
import json
from slugify import slugify

def create_investor_json_files():
    file = '../../public/data/vc_test_json.json'
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

create_investor_json_files()
