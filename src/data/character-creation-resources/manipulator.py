import json

file = open('./races.json', 'r+', encoding="cp866")

classes = json.loads(file.read())

languages = []
for c in classes:
    for l in c['languages']:
        if isinstance(l, str):
            languages.append(l)

languages = [*set(languages)]
languages.sort()
print(languages)