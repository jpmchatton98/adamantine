import json

file = open('./firearms.json', 'r+')

data = json.loads(file.read())
defaults = data['default']

def manip(d):
    dn = {
        'name': d.name,
        'data': d
    }
    return dn

defaults = map(manip, defaults)

data['default'] = defaults

file.truncate(0)
file.seek(0)

file.write(json.dumps(data))

file.close()