import json

file = open('./classes.json', 'r+', encoding="cp866")

classes = json.loads(file.read())

for c in classes:
    for s in c['subclasses']:
        featureLevel = list(s['features'].keys())[0]
        spells = None
        for f in s['features'][featureLevel]:
            if 'granted' in f:
                for g in f['granted']:
                    if g['type'] == 'spell' and len(g['options']) > 5:
                        spells = g['options']
                        s['features'][featureLevel].remove(f)                     

        if spells is not None:
            s['spells'] = spells

file.truncate(0)
file.seek(0)
file.write(json.dumps(classes))

file.close()