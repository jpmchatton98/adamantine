const melee_weapon_data = [
{
    'weapon-index': 0,
    'name': 'Bastard Sword',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=0>Bastard Sword</a>',
    'description': 'A large sword that is a cross between a longsword and a greatsword.',
    'damage': '2d5',
    'damage-types': 'Slashing',
    'cost': 20,
    'weight': 7.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Special',
        'description': 'A bastard sword can be used in two hands as a martial weapon, but requires exotic proficiency to use in one hand.'
    }],
    'type': 2
},
{
    'weapon-index': 1,
    'name': 'Baton',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=1>Baton</a>',
    'description': 'A short, thin club that can easily be used in one hand.',
    'damage': '1d6',
    'damage-types': 'Bludgeoning',
    'cost': 0.5,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    }],
    'type': 1
},
{
    'weapon-index': 2,
    'name': 'Battleaxe',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=2>Battleaxe</a>',
    'description': "A large axe used as a weapon. A woodcutter&apos;s axe can be used as a battleaxe.",
    'damage': '1d8',
    'damage-types': 'Slashing',
    'cost': 10,
    'weight': 4.0,
    'properties': [
    {
        'name': 'Versatile (1d10)',
        'description': 'You can use one or two hands to attack with this weapon. A damage value in parentheses appears with the property - the damage when the weapon is used with two hands to make a melee attack.'
    }],
    'type': 1
},
{
    'weapon-index': 89,
    'name': 'Bearded Axe',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=89>Bearded Axe</a>',
    'description': 'A large, heavy axe with a tall head',
    'damage': '1d10',
    'damage-types': 'Slashing',
    'cost': 20,
    'weight': 7,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Special',
        'description': 'A bearded axe can be used in two hands as a martial weapon, but requires exotic proficiency to use in one hand.'
    }],
    'type': 2
},
{
    'weapon-index': 3,
    'name': 'Bec de Corbin',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=3>Bec de Corbin</a>',
    'description': "A large and ornate elvish warhammer used as a polearm. Its name literally translates to &quot;crow&apos;s beak&quot;.",
    'damage': '1d10',
    'damage-types': 'Bludgeoning',
    'cost': 10,
    'weight': 10.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Reach',
        'description': 'This weapon adds 5 feet to your reach when used to make a melee attack.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 1
},
{
    'weapon-index': 4,
    'name': 'Bladed Scarf',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=4>Bladed Scarf</a>',
    'description': 'A long cloth scarf interlaced with hundreds of tiny metal blades.',
    'damage': '1d8',
    'damage-types': 'Slashing',
    'cost': 10,
    'weight': 1.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Special',
        'description': 'Wielding a bladed scarf grants a +1 bonus to your Armor Class. You must be wearing light or no armor in order to gain this benefit.'
    }],
    'type': 2
},
{
    'weapon-index': 5,
    'name': 'Bo Staff',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=5>Bo Staff</a>',
    'description': 'A long and well-balanced quarterstaff favored by monks.',
    'damage': '2d4',
    'damage-types': 'Bludgeoning',
    'cost': 50,
    'weight': 4.0,
    'properties': [
    {
        'name': 'Double (1d4)',
        'description': 'If you attack with this weapon as part of the Attack action on your turn, you can use a bonus action immediately after to make a melee attack with it. A damage value in parentheses appears with the property - the damage when the weapon is attacked with as a bonus action.'
    },
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 2
},
{
    'weapon-index': 6,
    'name': 'Boomerang',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=6>Boomerang</a>',
    'description': "A curved club that returns to one&apos;s hand when thrown.",
    'damage': '1d6',
    'damage-types': 'Bludgeoning',
    'cost': 5,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    },
    {
        'name': 'Returning',
        'description': 'After making a ranged attack roll with this weapon, it returns to your hand.'
    },
    {
        'name': 'Thrown (30/80)',
        'description': 'You can make a ranged attack with this weapon by throwing it. You use the same ability modifier for the attack and damage roll that you would use for a melee attack. Two numbers in parentheses appear with the property - the range and long range, respectively, that are used for the weapon when thrown.'
    }],
    'type': 2
},
{
    'weapon-index': 7,
    'name': 'Buster Sword',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=7>Buster Sword</a>',
    'description': 'A massive weapon that is almost more club that sword.',
    'damage': '4d4',
    'damage-types': 'Slashing',
    'cost': 50,
    'weight': 25.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Massive (20)',
        'description': 'Your Strength score must be a certain value in order to use this weapon. A number in parentheses appears with the property - the number that your Strength score must be equal to.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 2
},
{
    'weapon-index': 8,
    'name': 'Cane Sword',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=8>Cane Sword</a>',
    'description': 'A thin sword similar to a rapier, with a sheath and hilt that make it appear as a normal cane when sheathed.',
    'damage': '1d8',
    'damage-types': 'Piercing or Slashing',
    'cost': 20,
    'weight': 5.0,
    'properties': [
    {
        'name': 'Covert',
        'description': 'You have advantage on ability checks made to hide this weapon on your person, and other creatures have disadvantage on checks made to find it.'
    },
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    }],
    'type': 2
},
{
    'weapon-index': 9,
    'name': 'Cavalry Sabre',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=9>Cavalry Sabre</a>',
    'description': 'A long, slender sword used from the back of a horse, but difficult to use while on foot.',
    'damage': '1d12',
    'damage-types': 'Slashing',
    'cost': 40,
    'weight': 5.0,
    'properties': [
    {
        'name': 'Cavalry',
        'description': 'This weapon requires two hands when you attack with it while not mounted. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    },
    {
        'name': 'Reach',
        'description': 'This weapon adds 5 feet to your reach when used to make a melee attack.'
    }],
    'type': 1
},
{
    'weapon-index': 10,
    'name': 'Chain Dagger',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=10>Chain Dagger</a>',
    'description': "A dagger on the end of a chain or a rope, which allows it to be quickly pulled back into one&apos;s hand when thrown.",
    'damage': '1d6',
    'damage-types': 'Piercing',
    'cost': 10,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    },
    {
        'name': 'Returning',
        'description': 'After making a ranged attack roll with this weapon, it returns to your hand.'
    },
    {
        'name': 'Thrown (30/80)',
        'description': 'You can make a ranged attack with this weapon by throwing it. You use the same ability modifier for the attack and damage roll that you would use for a melee attack. Two numbers in parentheses appear with the property - the range and long range, respectively, that are used for the weapon when thrown.'
    }],
    'type': 2
},
{
    'weapon-index': 11,
    'name': 'Chakram',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=11>Chakram</a>',
    'description': "A circular, bladed weapon that returns to one&apos;s hand when thrown.",
    'damage': '1d6',
    'damage-types': 'Slashing',
    'cost': 15,
    'weight': 1.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    },
    {
        'name': 'Returning',
        'description': 'After making a ranged attack roll with this weapon, it returns to your hand.'
    },
    {
        'name': 'Thrown (30/80)',
        'description': 'You can make a ranged attack with this weapon by throwing it. You use the same ability modifier for the attack and damage roll that you would use for a melee attack. Two numbers in parentheses appear with the property - the range and long range, respectively, that are used for the weapon when thrown.'
    }],
    'type': 2
},
{
    'weapon-index': 12,
    'name': 'Claw',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=12>Claw</a>',
    'description': 'A gauntlet-like weapon with two to four blades extending past the hand.',
    'damage': '1d6',
    'damage-types': 'Slashing',
    'cost': 5,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Disarm Immune',
        'description': 'You cannot be unwillingly disarmed of this weapon.'
    },
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Unarmed',
        'description': 'You can use this weapon to make an unarmed strike.'
    }],
    'type': 2
},
{
    'weapon-index': 13,
    'name': 'Cleaver',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=13>Cleaver</a>',
    'description': 'A cleaver is an oversized, front-heavy shortsword. It acts as a mixture between a sword and an axe.',
    'damage': '2d4',
    'damage-types': 'Slashing',
    'cost': 0.5,
    'weight': 5.0,
    'properties': [
    {
        'name': 'Brutal',
        'description': 'Add an additional damage die when determining the damage dealt by a critical hit.'
    },
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 0
},
{
    'weapon-index': 14,
    'name': 'Club',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=14>Club</a>',
    'description': 'A simple club made of wood, stone, or iron. Not necessarily an effective weapon, but a cheap one.',
    'damage': '1d4',
    'damage-types': 'Bludgeoning',
    'cost': 0.1,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Brutal',
        'description': 'Add an additional damage die when determining the damage dealt by a critical hit.'
    },
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    }],
    'type': 0
},
{
    'weapon-index': 15,
    'name': 'Dagger',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=15>Dagger</a>',
    'description': 'A light, simple knife. It can be thrown or used as a tool, in addition to being used as a weapon.',
    'damage': '1d4',
    'damage-types': 'Piercing or Slashing',
    'cost': 2,
    'weight': 1.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    },
    {
        'name': 'Thrown (20/60)',
        'description': 'You can make a ranged attack with this weapon by throwing it. You use the same ability modifier for the attack and damage roll that you would use for a melee attack. Two numbers in parentheses appear with the property - the range and long range, respectively, that are used for the weapon when thrown.'
    }],
    'type': 0
},
{
    'weapon-index': 16,
    'name': 'Dagger, boot-toe',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=16>Dagger, boot-toe</a>',
    'description': "A short dagger hidden in the toe of one&apos;s shoe. These weapons are often poisoned.",
    'damage': '1d4',
    'damage-types': 'Piercing',
    'cost': 10,
    'weight': 1.0,
    'properties': [
    {
        'name': 'Covert',
        'description': 'You have advantage on ability checks made to hide this weapon on your person, and other creatures have disadvantage on checks made to find it.'
    },
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    },
    {
        'name': 'Special',
        'description': 'When you use an action, bonus action, or reaction to attack with this weapon, you can only make one attack, regardless of how many you would normally be able to make.'
    }],
    'type': 2
},
{
    'weapon-index': 17,
    'name': 'Dagger, wrist',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=17>Dagger, wrist</a>',
    'description': "A short dagger hidden in the wrist cuff of one&apos;s shirt.",
    'damage': '1d4',
    'damage-types': 'Piercing',
    'cost': 25,
    'weight': 1.0,
    'properties': [
    {
        'name': 'Covert',
        'description': 'You have advantage on ability checks made to hide this weapon on your person, and other creatures have disadvantage on checks made to find it.'
    },
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    }],
    'type': 2
},
{
    'weapon-index': 18,
    'name': 'Dart',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=18>Dart</a>',
    'description': 'A weapon-grade dart is a large dart, about a foot long, that can be thrown.',
    'damage': '1d4',
    'damage-types': 'Piercing',
    'cost': 0.05,
    'weight': 0.25,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    },
    {
        'name': 'Thrown (20/60)',
        'description': 'You can make a ranged attack with this weapon by throwing it. You use the same ability modifier for the attack and damage roll that you would use for a melee attack. Two numbers in parentheses appear with the property - the range and long range, respectively, that are used for the weapon when thrown.'
    }],
    'type': 0
},
{
    'weapon-index': 19,
    'name': 'Dire Flail',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=19>Dire Flail</a>',
    'description': 'A giant, three-headed flail based on the weapon of the demon lord Yeenoghu.',
    'damage': '2d8',
    'damage-types': 'Bludgeoning',
    'cost': 50,
    'weight': 35.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Massive (20)',
        'description': 'Your Strength score must be a certain value in order to use this weapon. A number in parentheses appears with the property - the number that your Strength score must be equal to.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 2
},
{
    'weapon-index': 20,
    'name': 'Double Scimitar',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=20>Double Scimitar</a>',
    'description': 'A handle or long haft of wood with the blade of a scimitar at either end.',
    'damage': '2d4',
    'damage-types': 'Slashing',
    'cost': 50,
    'weight': 4.0,
    'properties': [
    {
        'name': 'Double (1d4)',
        'description': 'If you attack with this weapon as part of the Attack action on your turn, you can use a bonus action immediately after to make a melee attack with it. A damage value in parentheses appears with the property - the damage when the weapon is attacked with as a bonus action.'
    },
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 2
},
{
    'weapon-index': 21,
    'name': 'Double Spear',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=21>Double Spear</a>',
    'description': 'A haft of wood with a spearhead at either end.',
    'damage': '2d4',
    'damage-types': 'Piercing',
    'cost': 50,
    'weight': 4.0,
    'properties': [
    {
        'name': 'Double (1d4)',
        'description': 'If you attack with this weapon as part of the Attack action on your turn, you can use a bonus action immediately after to make a melee attack with it. A damage value in parentheses appears with the property - the damage when the weapon is attacked with as a bonus action.'
    },
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 2
},
{
    'weapon-index': 22,
    'name': 'Flail',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=22>Flail</a>',
    'description': 'A difficult weapon to master, a flail consists of a flanged or spiked head attached to a handle by a length of chain or rope.',
    'damage': '1d8',
    'damage-types': 'Bludgeoning',
    'cost': 10,
    'weight': 4.0,
    'properties': [
    {
        'name': 'Brutal',
        'description': 'Add an additional damage die when determining the damage dealt by a critical hit.'
    }],
    'type': 1
},
{
    'weapon-index': 23,
    'name': 'Flying Sword',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=23>Flying Sword</a>',
    'description': 'A rope or chain ending in the blade of a shortsword.',
    'damage': '1d8',
    'damage-types': 'Slashing',
    'cost': 5,
    'weight': 3.0,
    'properties': [
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Reach',
        'description': 'This weapon adds 5 feet to your reach when used to make a melee attack.'
    }],
    'type': 2
},
{
    'weapon-index': 24,
    'name': 'Foil',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=24>Foil</a>',
    'description': 'A small, thin sword that lacks a cutting edge.',
    'damage': '1d6',
    'damage-types': 'Piercing',
    'cost': 10,
    'weight': 1.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    }],
    'type': 1
},
{
    'weapon-index': 25,
    'name': 'Gauntlet',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=25>Gauntlet</a>',
    'description': 'A heavier gauntlet allows its wearer to pack more weight behind their punches.',
    'damage': '1d6',
    'damage-types': 'Bludgeoning',
    'cost': 3,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Unarmed',
        'description': 'You can use this weapon to make an unarmed strike.'
    }],
    'type': 0
},
{
    'weapon-index': 26,
    'name': 'Gauntlet, spiked',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=26>Gauntlet, spiked</a>',
    'description': 'A customized heavy gauntlet, the knuckles of which are studded with spikes.',
    'damage': '1d6',
    'damage-types': 'Piercing',
    'cost': 4,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Unarmed',
        'description': 'You can use this weapon to make an unarmed strike.'
    }],
    'type': 0
},
{
    'weapon-index': 27,
    'name': 'Glaive',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=27>Glaive</a>',
    'description': 'A polearm ending in a short, curved blade.',
    'damage': '1d10',
    'damage-types': 'Slashing',
    'cost': 20,
    'weight': 6.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Reach',
        'description': 'This weapon adds 5 feet to your reach when used to make a melee attack.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 1
},
{
    'weapon-index': 28,
    'name': 'Greataxe',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=28>Greataxe</a>',
    'description': 'A large, two-handed axe.',
    'damage': '1d12',
    'damage-types': 'Slashing',
    'cost': 30,
    'weight': 7.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 1
},
{
    'weapon-index': 29,
    'name': 'Greatclub',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=29>Greatclub</a>',
    'description': 'A heavy club made of wood, metal, or stone. A strong but simple weapon.',
    'damage': '2d4',
    'damage-types': 'Bludgeoning',
    'cost': 0.2,
    'weight': 10.0,
    'properties': [
    {
        'name': 'Brutal',
        'description': 'Add an additional damage die when determining the damage dealt by a critical hit.'
    },
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 0
},
{
    'weapon-index': 30,
    'name': 'Greatpick',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=30>Greatpick</a>',
    'description': 'An enormous pickaxe with a massive head.',
    'damage': '4d4',
    'damage-types': 'Piercing',
    'cost': 50,
    'weight': 30.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Massive (20)',
        'description': 'Your Strength score must be a certain value in order to use this weapon. A number in parentheses appears with the property - the number that your Strength score must be equal to.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 2
},
{
    'weapon-index': 31,
    'name': 'Greatspear',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=31>Greatspear</a>',
    'description': 'A spear with a longer haft. Too large to throw, and requiring two hands, but with a lot more leverage and force behind it.',
    'damage': '1d12',
    'damage-types': 'Piercing',
    'cost': 30,
    'weight': 12.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 1
},
{
    'weapon-index': 32,
    'name': 'Greatsword',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=32>Greatsword</a>',
    'description': 'A large, two-handed sword, also called a flamberge, claymore, or zweihänder.',
    'damage': '2d6',
    'damage-types': 'Slashing',
    'cost': 50,
    'weight': 6.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 1
},
{
    'weapon-index': 33,
    'name': 'Guandao',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=33>Guandao</a>',
    'description': 'A polearm similar to a glaive, but more ornate and lighter, allowing for more finesse.',
    'damage': '1d10',
    'damage-types': 'Slashing',
    'cost': 40,
    'weight': 5.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Reach',
        'description': 'This weapon adds 5 feet to your reach when used to make a melee attack.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 2
},
{
    'weapon-index': 34,
    'name': 'Halberd',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=34>Halberd</a>',
    'description': 'A polearm ending in a head that is a fusion of an axe head and a spear head.',
    'damage': '1d10',
    'damage-types': 'Piercing or Slashing',
    'cost': 25,
    'weight': 6.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Reach',
        'description': 'This weapon adds 5 feet to your reach when used to make a melee attack.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 1
},
{
    'weapon-index': 35,
    'name': 'Handaxe',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=35>Handaxe</a>',
    'description': 'A small, light axe that can be thrown. A hatchet can be used as a handaxe.',
    'damage': '1d6',
    'damage-types': 'Slashing',
    'cost': 5,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    },
    {
        'name': 'Thrown (20/60)',
        'description': 'You can make a ranged attack with this weapon by throwing it. You use the same ability modifier for the attack and damage roll that you would use for a melee attack. Two numbers in parentheses appear with the property - the range and long range, respectively, that are used for the weapon when thrown.'
    }],
    'type': 0
},
{
    'weapon-index': 36,
    'name': 'Heavy Flail',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=36>Heavy Flail</a>',
    'description': 'A large, heavy flail with two heads.',
    'damage': '1d12',
    'damage-types': 'Bludgeoning',
    'cost': 25,
    'weight': 10.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 1
},
{
    'weapon-index': 37,
    'name': 'Heavy Pick',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=37>Heavy Pick</a>',
    'description': 'A large, two-handed pickaxe.',
    'damage': '2d6',
    'damage-types': 'Piercing',
    'cost': 30,
    'weight': 8.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 1
},
{
    'weapon-index': 38,
    'name': 'Javelin',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=38>Javelin</a>',
    'description': 'A small, slender spear optimized for throwing at long distance. They can also be thrown from a device known as an atltal.',
    'damage': '1d6',
    'damage-types': 'Piercing',
    'cost': 0.5,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Thrown (40/120)',
        'description': 'You can make a ranged attack with this weapon by throwing it. You use the same ability modifier for the attack and damage roll that you would use for a melee attack. Two numbers in parentheses appear with the property - the range and long range, respectively, that are used for the weapon when thrown.'
    }],
    'type': 0
},
{
    'weapon-index': 39,
    'name': 'Katana',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=39>Katana</a>',
    'description': 'A well-balanced, slightly curved sword favored by monks.',
    'damage': '2d4',
    'damage-types': 'Slashing',
    'cost': 20,
    'weight': 1.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Versatile (2d5)',
        'description': 'You can use one or two hands to attack with this weapon. A damage value in parentheses appears with the property - the damage when the weapon is used with two hands to make a melee attack.'
    }],
    'type': 2
},
{
    'weapon-index': 40,
    'name': 'Katar',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=40>Katar</a>',
    'description': "A gauntlet-like weapon, also known as a punch-dagger, which consists of a pointed blade extending in front of one&apos;s fist.",
    'damage': '1d6',
    'damage-types': 'Piercing',
    'cost': 25,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Disarm Immune',
        'description': 'You cannot be unwillingly disarmed of this weapon.'
    },
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Unarmed',
        'description': 'You can use this weapon to make an unarmed strike.'
    }],
    'type': 2
},
{
    'weapon-index': 41,
    'name': 'Khopesh',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=41>Khopesh</a>',
    'description': "A sword with a hook-shaped blade designed to pull away an enemy&apos;s shield.",
    'damage': '2d4',
    'damage-types': 'Slashing',
    'cost': 15,
    'weight': 3.0,
    'properties': [
    {
        'name': 'Brutal',
        'description': 'Add an additional damage die when determining the damage dealt by a critical hit.'
    },
    {
        'name': 'Special',
        'description': 'While wielding a khopesh, if you hit a target that is wielding a shield, you pull their shield aside and they lose the bonus it grants to their Armor Class until the end of their next turn.'
    }],
    'type': 2
},
{
    'weapon-index': 42,
    'name': 'Knobkerrie',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=42>Knobkerrie</a>',
    'description': 'A smooth wooden club consisting of a sphere on the end of a handle, similar to the shape of a bass clef.',
    'damage': '1d8',
    'damage-types': 'Bludgeoning',
    'cost': 10,
    'weight': 3.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    }],
    'type': 1
},
{
    'weapon-index': 43,
    'name': 'Kukri',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=43>Kukri</a>',
    'description': 'A heavy, recurved dagger. Most kukri have serrations along the spine that can be used as a saw.',
    'damage': '1d6',
    'damage-types': 'Slashing',
    'cost': 5,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    }],
    'type': 0
},
{
    'weapon-index': 44,
    'name': 'Kunai',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=44>Kunai</a>',
    'description': 'A triangular dagger more well-balanced for throwing.',
    'damage': '1d4',
    'damage-types': 'Piercing or Slashing',
    'cost': 10,
    'weight': 1.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    },
    {
        'name': 'Thrown (40/120)',
        'description': 'You can make a ranged attack with this weapon by throwing it. You use the same ability modifier for the attack and damage roll that you would use for a melee attack. Two numbers in parentheses appear with the property - the range and long range, respectively, that are used for the weapon when thrown.'
    }],
    'type': 2
},
{
    'weapon-index': 45,
    'name': 'Kusarigama',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=45>Kusarigama</a>',
    'description': 'A weapon consisting of a chain or rope with a sickle at one end and a weight at the other.',
    'damage': '1d8',
    'damage-types': 'Piercing',
    'cost': 15,
    'weight': 4.0,
    'properties': [
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Reach',
        'description': 'This weapon adds 5 feet to your reach when used to make a melee attack.'
    }],
    'type': 2
},
{
    'weapon-index': 46,
    'name': 'Lance',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=46>Lance</a>',
    'description': 'A long spear used on horseback. A sport known as jousting is made of using lances recreationally.',
    'damage': '1d12',
    'damage-types': 'Piercing',
    'cost': 10,
    'weight': 6.0,
    'properties': [
    {
        'name': 'Cavalry',
        'description': 'This weapon requires two hands when you attack with it while not mounted. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    },
    {
        'name': 'Reach',
        'description': 'This weapon adds 5 feet to your reach when used to make a melee attack.'
    }],
    'type': 1
},
{
    'weapon-index': 47,
    'name': 'Light Hammer',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=47>Light Hammer</a>',
    'description': "A small, light hammer that can be thrown. A one-handed hammer or a blacksmith&apos;s hammer can be used as a light hammer.",
    'damage': '1d6',
    'damage-types': 'Bludgeoning',
    'cost': 5,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    },
    {
        'name': 'Thrown (20/60)',
        'description': 'You can make a ranged attack with this weapon by throwing it. You use the same ability modifier for the attack and damage roll that you would use for a melee attack. Two numbers in parentheses appear with the property - the range and long range, respectively, that are used for the weapon when thrown.'
    }],
    'type': 0
},
{
    'weapon-index': 48,
    'name': 'Light Pick',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=48>Light Pick</a>',
    'description': 'A small, light pickaxe that can be thrown.',
    'damage': '1d6',
    'damage-types': 'Piercing',
    'cost': 5,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    },
    {
        'name': 'Thrown (20/60)',
        'description': 'You can make a ranged attack with this weapon by throwing it. You use the same ability modifier for the attack and damage roll that you would use for a melee attack. Two numbers in parentheses appear with the property - the range and long range, respectively, that are used for the weapon when thrown.'
    }],
    'type': 0
},
{
    'weapon-index': 49,
    'name': 'Longhammer',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=49>Longhammer</a>',
    'description': 'A long haft ending in a hammer head, used while on horseback.',
    'damage': '1d12',
    'damage-types': 'Bludgeoning',
    'cost': 45,
    'weight': 10.0,
    'properties': [
    {
        'name': 'Cavalry',
        'description': 'This weapon requires two hands when you attack with it while not mounted. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    },
    {
        'name': 'Reach',
        'description': 'This weapon adds 5 feet to your reach when used to make a melee attack.'
    }],
    'type': 1
},
{
    'weapon-index': 91,
    'name': 'Longpick',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=91>Longpick</a>',
    'description': 'A topheavy pickaxe with an overly long head',
    'damage': '2d5',
    'damage-types': 'Piercing',
    'cost': 20,
    'weight': 7,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Special',
        'description': 'A longpick can be used in two hands as a martial weapon, but requires exotic proficiency to use in one hand.'
    }],
    'type': 2
},
{
    'weapon-index': 50,
    'name': 'Longspear',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=50>Longspear</a>',
    'description': 'A spear with a longer haft, providing more power at the cost of not being balanced enough to throw.',
    'damage': '2d4',
    'damage-types': 'Piercing',
    'cost': 0.5,
    'weight': 4.0,
    'properties': [
    {
        'name': 'Brutal',
        'description': 'Add an additional damage die when determining the damage dealt by a critical hit.'
    },
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 0
},
{
    'weapon-index': 51,
    'name': 'Longsword',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=51>Longsword</a>',
    'description': 'A plain, straight, double-edged sword. Cheap and effective.',
    'damage': '2d4',
    'damage-types': 'Piercing or Slashing',
    'cost': 15,
    'weight': 3.0,
    'properties': [],
    'type': 1
},
{
    'weapon-index': 52,
    'name': 'Longtrident',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=52>Longtrident</a>',
    'description': 'An oversized, barbed trident, too heavy to be thrown.',
    'damage': '2d8',
    'damage-types': 'Piercing',
    'cost': 50,
    'weight': 35.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Massive (20)',
        'description': 'Your Strength score must be a certain value in order to use this weapon. A number in parentheses appears with the property - the number that your Strength score must be equal to.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 2
},
{
    'weapon-index': 53,
    'name': 'Mace',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=53>Mace</a>',
    'description': 'A mace is a simple weapon consisting of a flanged head on the end of a shaft. It is favored by clerics.',
    'damage': '1d6',
    'damage-types': 'Bludgeoning',
    'cost': 5,
    'weight': 4.0,
    'properties': [
    {
        'name': 'Brutal',
        'description': 'Add an additional damage die when determining the damage dealt by a critical hit.'
    }],
    'type': 0
},
{
    'weapon-index': 54,
    'name': 'Machete',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=54>Machete</a>',
    'description': 'A short, serrated sword that is commonly used for hacking through plant matter.',
    'damage': '1d6',
    'damage-types': 'Slashing',
    'cost': 1,
    'weight': 3.0,
    'properties': [
    {
        'name': 'Brutal',
        'description': 'Add an additional damage die when determining the damage dealt by a critical hit.'
    }],
    'type': 0
},
{
    'weapon-index': 55,
    'name': 'Maul',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=55>Maul</a>',
    'description': 'A large, two-handed hammer.',
    'damage': '2d6',
    'damage-types': 'Bludgeoning',
    'cost': 10,
    'weight': 10.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 1
},
{
    'weapon-index': 56,
    'name': 'Maulaxe',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=56>Maulaxe</a>',
    'description': 'A dwarven weapon with a head combining a hammer and an axe.',
    'damage': '1d8',
    'damage-types': 'Bludgeoning or Slashing',
    'cost': 15,
    'weight': 5.0,
    'properties': [
    {
        'name': 'Versatile (1d10)',
        'description': 'You can use one or two hands to attack with this weapon. A damage value in parentheses appears with the property - the damage when the weapon is used with two hands to make a melee attack.'
    }],
    'type': 1
},
{
    'weapon-index': 57,
    'name': 'Megaton Hammer',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=57>Megaton Hammer</a>',
    'description': 'A gigantic hammer that weighs an enormous amount.',
    'damage': '4d4',
    'damage-types': 'Bludgeoning',
    'cost': 50,
    'weight': 50.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Massive (20)',
        'description': 'Your Strength score must be a certain value in order to use this weapon. A number in parentheses appears with the property - the number that your Strength score must be equal to.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 2
},
{
    'weapon-index': 58,
    'name': 'Meteor Hammer',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=58>Meteor Hammer</a>',
    'description': 'A weapon consisting of a chain or rope with an iron sphere at either end.',
    'damage': '1d8',
    'damage-types': 'Bludgeoning',
    'cost': 10,
    'weight': 6.0,
    'properties': [
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Reach',
        'description': 'This weapon adds 5 feet to your reach when used to make a melee attack.'
    }],
    'type': 2
},
{
    'weapon-index': 59,
    'name': 'Morningstar',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=59>Morningstar</a>',
    'description': 'A weapon similar to a mace, consisting of a shaft ending in a spiked sphere.',
    'damage': '2d4',
    'damage-types': 'Bludgeoning',
    'cost': 15,
    'weight': 4.0,
    'properties': [],
    'type': 1
},
{
    'weapon-index': 60,
    'name': 'Net',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=60>Net</a>',
    'description': 'A weighted rope net favored by gladiators.',
    'damage': '1d4',
    'damage-types': 'Bludgeoning',
    'cost': 1,
    'weight': 3.0,
    'properties': [
    {
        'name': 'Special',
        'description': 'A Large or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net.'
    },
    {
        'name': 'Thrown (5/15)',
        'description': 'You can make a ranged attack with this weapon by throwing it. You use the same ability modifier for the attack and damage roll that you would use for a melee attack. Two numbers in parentheses appear with the property - the range and long range, respectively, that are used for the weapon when thrown.'
    }],
    'type': 0
},
{
    'weapon-index': 61,
    'name': 'Nunchaku',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=61>Nunchaku</a>',
    'description': 'A pair of short clubs connected by a short length of rope or chain.',
    'damage': '2d4',
    'damage-types': 'Bludgeoning',
    'cost': 5,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Versatile (2d5)',
        'description': 'You can use one or two hands to attack with this weapon. A damage value in parentheses appears with the property - the damage when the weapon is used with two hands to make a melee attack.'
    }],
    'type': 2
},
{
    'weapon-index': 62,
    'name': 'Odachi',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=62>Odachi</a>',
    'description': 'A well-balanced, slightly curved greatsword favored by monks.',
    'damage': '2d6',
    'damage-types': 'Slashing',
    'cost': 50,
    'weight': 6.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 2
},
{
    'weapon-index': 63,
    'name': 'Onslaught Axe',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=63>Onslaught Axe</a>',
    'description': 'A huge, serrated axe.',
    'damage': '2d8',
    'damage-types': 'Slashing',
    'cost': 50,
    'weight': 30.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Massive (20)',
        'description': 'Your Strength score must be a certain value in order to use this weapon. A number in parentheses appears with the property - the number that your Strength score must be equal to.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 2
},
{
    'weapon-index': 64,
    'name': 'Phalanx Pike',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=64>Phalanx Pike</a>',
    'description': 'A gigantic pike that has an enormous reach.',
    'damage': '2d8',
    'damage-types': 'Piercing',
    'cost': 50,
    'weight': 30.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Massive (20)',
        'description': 'Your Strength score must be a certain value in order to use this weapon. A number in parentheses appears with the property - the number that your Strength score must be equal to.'
    },
    {
        'name': 'Special',
        'description': 'The Phalanx Pike increases your reach by 10 feet. However, you have disadvantage attacking with one against a creature within 5 feet of you.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 2
},
{
    'weapon-index': 65,
    'name': 'Pike',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=65>Pike</a>',
    'description': 'A heavy polearm with a large, ornate spear head.',
    'damage': '1d10',
    'damage-types': 'Piercing',
    'cost': 5,
    'weight': 18.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Reach',
        'description': 'This weapon adds 5 feet to your reach when used to make a melee attack.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 1
},
{
    'weapon-index': 66,
    'name': 'Poleaxe',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=66>Poleaxe</a>',
    'description': 'A dwarven polearm similar to a maulaxe.',
    'damage': '1d10',
    'damage-types': 'Bludgeoning or Slashing',
    'cost': 5,
    'weight': 18.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Reach',
        'description': 'This weapon adds 5 feet to your reach when used to make a melee attack.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 1
},
{
    'weapon-index': 90,
    'name': 'Quad Spear',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=90>Quad Spear</a>',
    'description': 'A heavy spear, with four heads set at an angle',
    'damage': '1d10',
    'damage-types': 'Piercing',
    'cost': 20,
    'weight': 7,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Special',
        'description': 'A quad spear can be used in two hands as a martial weapon, but requires exotic proficiency to use in one hand.'
    }],
    'type': 2
},
{
    'weapon-index': 67,
    'name': 'Quarterstaff',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=67>Quarterstaff</a>',
    'description': 'A simple staff made of wood or metal. A staff used by a wizard or a druid can be used as a quarterstaff.',
    'damage': '1d6',
    'damage-types': 'Bludgeoning',
    'cost': 0.2,
    'weight': 4.0,
    'properties': [
    {
        'name': 'Versatile (1d8)',
        'description': 'You can use one or two hands to attack with this weapon. A damage value in parentheses appears with the property - the damage when the weapon is used with two hands to make a melee attack.'
    }],
    'type': 0
},
{
    'weapon-index': 68,
    'name': 'Rapier',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=68>Rapier</a>',
    'description': 'A light, thin sword used for stabbing.',
    'damage': '1d8',
    'damage-types': 'Piercing',
    'cost': 25,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    }],
    'type': 1
},
{
    'weapon-index': 69,
    'name': 'Sabre',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=69>Sabre</a>',
    'description': 'A thin, curved sword similar to a rapier.',
    'damage': '1d8',
    'damage-types': 'Slashing',
    'cost': 25,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    }],
    'type': 1
},
{
    'weapon-index': 70,
    'name': 'Sai',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=70>Sai</a>',
    'description': 'A short dagger used for parrying.',
    'damage': '1d4',
    'damage-types': 'Piercing',
    'cost': 3,
    'weight': 1.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    }],
    'type': 2
},
{
    'weapon-index': 71,
    'name': 'Scimitar',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=72>Scimitar</a>',
    'description': 'A smaller version of a sabre favored by peoples in desert climates.',
    'damage': '1d6',
    'damage-types': 'Slashing',
    'cost': 10,
    'weight': 1.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    }],
    'type': 1
},
{
    'weapon-index': 72,
    'name': 'Scythe',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=73>Scythe</a>',
    'description': 'A large haft ending in a long, curving blade perpendicular to its handle, the origin of which as a weapon stems from tools used by grain farmers.',
    'damage': '1d8',
    'damage-types': 'Slashing',
    'cost': 1,
    'weight': 6.0,
    'properties': [
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Reach',
        'description': 'This weapon adds 5 feet to your reach when used to make a melee attack.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 0
},
{
    'weapon-index': 73,
    'name': 'Sheath',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=74>Sheath</a>',
    'description': 'A sheath used to hold a one-handed sword, the cost of which is included in the cost of swords.',
    'damage': '1d4',
    'damage-types': 'Bludgeoning',
    'cost': 0.05,
    'weight': 1.0,
    'properties': [
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    }],
    'type': 0
},
{
    'weapon-index': 74,
    'name': 'Shortsword',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=75>Shortsword</a>',
    'description': 'A small sword with a straight or slightly curved blade.',
    'damage': '1d6',
    'damage-types': 'Slashing',
    'cost': 1,
    'weight': 3.0,
    'properties': [
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    }],
    'type': 0
},
{
    'weapon-index': 75,
    'name': 'Shuriken',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=76>Shuriken</a>',
    'description': 'A small, star-shaped throwing weapon.',
    'damage': '1d4',
    'damage-types': 'Slashing',
    'cost': 1,
    'weight': 0.25,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    },
    {
        'name': 'Special',
        'description': 'You can hold three shurikens in one hand, though each still requires a separate attack.'
    },
    {
        'name': 'Thrown (20/60)',
        'description': 'You can make a ranged attack with this weapon by throwing it. You use the same ability modifier for the attack and damage roll that you would use for a melee attack. Two numbers in parentheses appear with the property - the range and long range, respectively, that are used for the weapon when thrown.'
    }],
    'type': 2
},
{
    'weapon-index': 76,
    'name': 'Sickle',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=77>Sickle</a>',
    'description': 'A shortsword with a blade shaped like a crescent moon.',
    'damage': '1d6',
    'damage-types': 'Piercing or Slashing',
    'cost': 1,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    }],
    'type': 0
},
{
    'weapon-index': 77,
    'name': 'Spear',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=78>Spear</a>',
    'description': 'A staff topped with a stabbing head, favored by guards and soldiers.',
    'damage': '1d6',
    'damage-types': 'Piercing',
    'cost': 0.2,
    'weight': 4.0,
    'properties': [
    {
        'name': 'Thrown',
        'description': 'You can make a ranged attack with this weapon by throwing it. You use the same ability modifier for the attack and damage roll that you would use for a melee attack. Two numbers in parentheses appear with the property - the range and long range, respectively, that are used for the weapon when thrown.'
    },
    {
        'name': 'Versatile (1d8)',
        'description': 'You can use one or two hands to attack with this weapon. A damage value in parentheses appears with the property - the damage when the weapon is used with two hands to make a melee attack.'
    }],
    'type': 0
},
{
    'weapon-index': 78,
    'name': 'Spiral Rapier',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=79>Spiral Rapier</a>',
    'description': "A rapier with a blade shaped like a unicorn&apos;s horn.",
    'damage': '2d4',
    'damage-types': 'Piercing',
    'cost': 20,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Versatile (2d5)',
        'description': 'You can use one or two hands to attack with this weapon. A damage value in parentheses appears with the property - the damage when the weapon is used with two hands to make a melee attack.'
    }],
    'type': 2
},
{
    'weapon-index': 92,
    'name': 'Springflail',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=92>Springflail</a>',
    'description': 'A heavy and spring-loaded flail',
    'damage': '1d10',
    'damage-types': 'Bludgeoning',
    'cost': 20,
    'weight': 7,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Special',
        'description': 'A springflail can be used in two hands as a martial weapon, but requires exotic proficiency to use in one hand.'
    }],
    'type': 2
},
{
    'weapon-index': 79,
    'name': 'Stake',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=80>Stake</a>',
    'description': 'A wooden stake used by monster hunters.',
    'damage': '1d4',
    'damage-types': 'Piercing',
    'cost': 0.05,
    'weight': 1.0,
    'properties': [
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    }],
    'type': 0
},
{
    'weapon-index': 80,
    'name': 'Switch',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=71>Switch</a>',
    'description': 'A small, slender club, often made from a tree branch.',
    'damage': '1d6',
    'damage-types': 'Bludgeoning',
    'cost': 1,
    'weight': 1.0,
    'properties': [
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    }],
    'type': 0
},
{
    'weapon-index': 81,
    'name': 'Swordstaff',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=81>Swordstaff</a>',
    'description': 'A weapon similar to a spear but with a longer head and a proper cutting edge.',
    'damage': '1d6',
    'damage-types': 'Slashing',
    'cost': 0.2,
    'weight': 4.0,
    'properties': [
    {
        'name': 'Versatile (1d8)',
        'description': 'You can use one or two hands to attack with this weapon. A damage value in parentheses appears with the property - the damage when the weapon is used with two hands to make a melee attack.'
    }],
    'type': 0
},
{
    'weapon-index': 82,
    'name': 'Terbutje',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=82>Terbutje</a>',
    'description': 'A broad, flat club, the edges of which are studded with pieces of broken glass or obsidian.',
    'damage': '1d6',
    'damage-types': 'Piercing',
    'cost': 1,
    'weight': 3.0,
    'properties': [
    {
        'name': 'Brutal',
        'description': 'Add an additional damage die when determining the damage dealt by a critical hit.'
    }],
    'type': 0
},
{
    'weapon-index': 83,
    'name': 'Tonfa',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=83>Tonfa</a>',
    'description': "A short, thin club that is wielded parallel to one&apos;s arm.",
    'damage': '1d6',
    'damage-types': 'Bludgeoning',
    'cost': 5,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    },
    {
        'name': 'Special',
        'description': 'Wielding a tonfa of any type in either hand grants a +1 bonus to your Armor Class. You can only gain this benefit if you are wearing light or no armor.'
    }],
    'type': 2
},
{
    'weapon-index': 84,
    'name': 'Tonfa, bladed',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=84>Tonfa, bladed</a>',
    'description': "A short, thin blade that is wielded parallel to one&apos;s arm.",
    'damage': '1d6',
    'damage-types': 'Slashing',
    'cost': 5,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    },
    {
        'name': 'Special',
        'description': 'Wielding a tonfa of any type in either hand grants a +1 bonus to your Armor Class. You can only gain this benefit if you are wearing light or no armor.'
    }],
    'type': 2
},
{
    'weapon-index': 85,
    'name': 'Tonfa, spiked',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=85>Tonfa, spiked</a>',
    'description': "A short, thin spear that is wielded parallel to one&apos;s arm.",
    'damage': '1d6',
    'damage-types': 'Piercing',
    'cost': 5,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    },
    {
        'name': 'Special',
        'description': 'Wielding a tonfa of any type in either hand grants a +1 bonus to your Armor Class. You can only gain this benefit if you are wearing light or no armor.'
    }],
    'type': 2
},
{
    'weapon-index': 86,
    'name': 'War Pick',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=86>War Pick</a>',
    'description': "A pickaxe used as a weapon. A miner&apos;s pickaxe can be used as a war pick.",
    'damage': '2d4',
    'damage-types': 'Piercing',
    'cost': 5,
    'weight': 2.0,
    'properties': [],
    'type': 1
},
{
    'weapon-index': 87,
    'name': 'Warhammer',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=87>Warhammer</a>',
    'description': 'A large hammer used as a weapon. A sledgehammer can be used as a warhammer.',
    'damage': '1d8',
    'damage-types': 'Bludgeoning',
    'cost': 15,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Versatile (1d10)',
        'description': 'You can use one or two hands to attack with this weapon. A damage value in parentheses appears with the property - the damage when the weapon is used with two hands to make a melee attack.'
    }],
    'type': 1
},
{
    'weapon-index': 93,
    'name': 'War Mallet',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=93>War Mallet</a>',
    'description': 'An oversized warhammer that is difficult to use',
    'damage': '2d5',
    'damage-types': 'Bludgeoning',
    'cost': 20,
    'weight': 7,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Special',
        'description': 'A war mallet can be used in two hands as a martial weapon, but requires exotic proficiency to use in one hand.'
    }],
    'type': 2
},
{
    'weapon-index': 88,
    'name': 'Whip',
    'name-linked': '<a class="weapon" href=../weapons/melee-weapon.html?weapon_id=88>Whip</a>',
    'description': 'A length of leather or chain, some tipped with a flaying head.',
    'damage': '1d6',
    'damage-types': 'Slashing',
    'cost': 2,
    'weight': 3.0,
    'properties': [
    {
        'name': 'Finesse',
        'description': 'When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.'
    },
    {
        'name': 'Reach',
        'description': 'This weapon adds 5 feet to your reach when used to make a melee attack.'
    }],
    'type': 0
}];