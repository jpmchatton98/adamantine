import json

file = open('./classes.json', 'r+', encoding="cp866")

classes = json.loads(file.read())

for c in classes:
    for s in c['subclasses']:
        if 'spells' in s and 'spellcastingLevel' in c and 'extraCols' in c:
            featureLevel = list(s['features'].keys())[0]
            spells = s['spells']

            level = featureLevel
            if level == 1:
                level = '1st'
            elif level == 2:
                level = '2nd'
            elif level == 3:
                level = '3rd'
            
            desc = f'Starting at {level} level, and again at '
            if c['spellcastingLevel'] == 1:
                desc += '3rd, 5th, 7th, 9th, and 17th'
            if c['spellcastingLevel'] == 2:
                desc += '5th, 9th, 13th, and 17th'
            
            desc += ' levels, you gain access to the following spells.'

            prepared = True
            for col in c['extraCols']:
                if col['name'] == 'Spells Known':
                    prepared = False
                    break
            
            if prepared:
                desc += "Once you gain access to a given spell, you always have it prepared, and it doesn't count against your maximum number of prepared spells."
            else:
                desc += "Once you gain access to a given spell, you learn it, and it doesn't count against you maximum number of spells known."

            if len(s['spells']) == 10:
                desc += f"<table><tr><th>Spell Level</th><th>Spells</th></tr><tr><td>1st</td><td>{s['spells'][0]}, {s['spells'][1]}</td></tr><tr><td>2nd</td><td>{s['spells'][2]}, {s['spells'][3]}</td></tr><tr><td>3rd</td><td>{s['spells'][4]}, {s['spells'][5]}</td></tr><tr><td>4th</td><td>{s['spells'][6]}, {s['spells'][7]}</td></tr><tr><td>5th</td><td>{s['spells'][8]}, {s['spells'][9]}</td></tr></table>"
            elif len(s['spells']) == 11:
                desc += f"<table><tr><th>Spell Level</th><th>Spells</th></tr><tr><td>1st</td><td>{s['spells'][0]}, {s['spells'][1]}</td></tr><tr><td>2nd</td><td>{s['spells'][2]}, {s['spells'][3]}</td></tr><tr><td>3rd</td><td>{s['spells'][4]}, {s['spells'][5]}</td></tr><tr><td>4th</td><td>{s['spells'][6]}, {s['spells'][7]}</td></tr><tr><td>5th</td><td>{s['spells'][8]}, {s['spells'][9]}</td></tr><tr><td>9th</td><td>{s['spells'][10]}</td></tr></table>"
            elif len(s['spells']) == 12:
                desc += f"<table><tr><th>Spell Level</th><th>Spells</th></tr><tr><td>1st</td><td>{s['spells'][1]}, {s['spells'][2]}</td></tr><tr><td>2nd</td><td>{s['spells'][3]}, {s['spells'][4]}</td></tr><tr><td>3rd</td><td>{s['spells'][5]}, {s['spells'][6]}</td></tr><tr><td>4th</td><td>{s['spells'][7]}, {s['spells'][8]}</td></tr><tr><td>5th</td><td>{s['spells'][9]}, {s['spells'][10]}</td></tr><tr><td>9th</td><td>{s['spells'][11]}</td></tr></table>In addition, you learn the {s['spells'][0]} cantrip, and it doesn't count against your maximum number of cantrips known."

            features = s['features'][featureLevel]
            features = [{
                'name': c['subclassSpellName'],
                'description': desc,
                'granted': [
                    {
                        'type': 'spell',
                        'options': s['spells'],
                        'ability': ''
                    }
                ]
            }, *features]

            for f in s['features'][featureLevel]:
                if 'granted' in f:
                    for g in f['granted']:
                        if g['type'] == 'spell' and len(g['options']) > 5:
                            spells = g['options']
                            s['features'][featureLevel].remove(f)

file.truncate(0)
file.seek(0)
file.write(json.dumps(classes))

file.close()