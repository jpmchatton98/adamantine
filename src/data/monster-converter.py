import json

file = open('temp.json', 'r+')
data = json.loads(file.read())

toRemove = ['page', 'source', 'traitTags', 'languageTags', 'damageTags', 'miscTags',
            'conditionInflict', 'senseTags', 'spellcastingTags', 'damageTagsSpell', 'conditionInflictSpell']
sizeConvert = {
    'T': 'Tiny',
    'S': 'Small',
    'M': 'Medium',
    'L': 'Large'
}

for monster in data:
    if 'alignment' in monster:
        monster['alignment'] = [''.join(monster['alignment'])]

file.truncate(0)
file.seek(0)
file.write(json.dumps(data))

file.close()
