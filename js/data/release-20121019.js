units=(window.units||{}); units["release-20121019"]=[
  {
    "Inherits": "^Plane",
    "Buildable": {
      "Queue": "Plane",
      "BuildPaletteOrder": 100,
      "Prerequisites": "afld, stek",
      "BuiltAt": "afld",
      "Owner": "soviet"
    },
    "Valued": {
      "Cost": 2000
    },
    "Tooltip": {
      "Name": "Mig Attack Plane",
      "Description": "Fast Ground-Attack Plane.\\n  Strong vs Buildings\\n  Weak vs Infantry, Light Vehicles"
    },
    "Health": {
      "HP": 70
    },
    "Armor": {
      "Type": "Light"
    },
    "RevealsShroud": {
      "Range": 12
    },
    "AttackPlane": {
      "PrimaryWeapon": "Maverick",
      "PrimaryLocalOffset": "-15,0,0,0,-10, 15,0,0,0,6",
      "FacingTolerance": 20
    },
    "Plane": {
      "InitialFacing": 192,
      "ROT": 5,
      "Speed": 20,
      "RearmBuildings": "afld"
    },
    "RenderUnit": null,
    "WithShadow": null,
    "LimitedAmmo": {
      "Ammo": 8
    },
    "IronCurtainable": null,
    "ReturnOnIdle": null,
    "Selectable": {
      "Bounds": 444000
    },
    "Contrail@1": {
      "ContrailOffset": "16,-14"
    },
    "Contrail@2": {
      "ContrailOffset": "-16,-14"
    },
    "FallsToEarth": {
      "Spins": "no",
      "Moves": "yes",
      "Explosion": "UnitExplode"
    },
    "SmokeTrailWhenDamaged": {
      "Offset": "0,-20,0,-4",
      "Interval": 2
    },
    "unitClass": "aircraft",
    "name": "MIG"
  },
  {
    "Inherits": "^Plane",
    "Buildable": {
      "Queue": "Plane",
      "BuildPaletteOrder": 50,
      "Prerequisites": "afld",
      "BuiltAt": "afld",
      "Owner": "soviet"
    },
    "Valued": {
      "Cost": 1000
    },
    "Tooltip": {
      "Name": "Yak Attack Plane",
      "Description": "Anti-Tanks & Anti-Infantry Plane.\\n  Strong vs Infantry, Tanks\\n  Weak vs Buildings"
    },
    "Health": {
      "HP": 60
    },
    "Armor": {
      "Type": "Light"
    },
    "RevealsShroud": {
      "Range": 10
    },
    "AttackPlane": {
      "PrimaryWeapon": "ChainGun.Yak",
      "SecondaryWeapon": "ChainGun.Yak",
      "PrimaryOffset": "-5,-6,0,0",
      "SecondaryOffset": "5,-6,0,0",
      "FacingTolerance": 20
    },
    "Plane": {
      "RearmBuildings": "afld",
      "InitialFacing": 192,
      "ROT": 5,
      "Speed": 16
    },
    "RenderUnit": null,
    "WithShadow": null,
    "LimitedAmmo": {
      "Ammo": 18,
      "PipCount": 6,
      "ReloadTicks": 11
    },
    "IronCurtainable": null,
    "ReturnOnIdle": null,
    "WithMuzzleFlash": null,
    "Contrail": {
      "ContrailOffset": "0, -20"
    },
    "FallsToEarth": {
      "Spins": "no",
      "Moves": "yes",
      "Explosion": "UnitExplode"
    },
    "SmokeTrailWhenDamaged": {
      "Offset": "0, -20",
      "Interval": 2
    },
    "unitClass": "aircraft",
    "name": "YAK"
  },
  {
    "Inherits": "^Helicopter",
    "Buildable": {
      "Queue": "Plane",
      "BuildPaletteOrder": 110,
      "Prerequisites": "hpad",
      "BuiltAt": "hpad",
      "Owner": "allies"
    },
    "Valued": {
      "Cost": 900
    },
    "Tooltip": {
      "Name": "Transport Helicopter",
      "Description": "Fast Infantry Transport Helicopter.\\n  Unarmed"
    },
    "Health": {
      "HP": 120
    },
    "Armor": {
      "Type": "Light"
    },
    "RevealsShroud": {
      "Range": 12
    },
    "Helicopter": {
      "RearmBuildings": "hpad",
      "InitialFacing": 0,
      "ROT": 5,
      "Speed": 12,
      "LandableTerrainTypes": "Clear,Rough,Road,Ore,Beach"
    },
    "RenderUnit": null,
    "WithRotor@PRIMARY": {
      "Offset": "0,14,0,-8"
    },
    "WithRotor@SECONDARY": {
      "Id": "rotor_2",
      "Offset": "0,-14,0,-5"
    },
    "WithShadow": null,
    "Cargo": {
      "Types": "Infantry",
      "MaxWeight": 8,
      "PipCount": 8
    },
    "IronCurtainable": null,
    "FallsToEarth": {
      "Explosion": "UnitExplode"
    },
    "unitClass": "aircraft",
    "name": "TRAN"
  },
  {
    "Inherits": "^Helicopter",
    "Buildable": {
      "Queue": "Plane",
      "BuildPaletteOrder": 90,
      "Prerequisites": "hpad, atek",
      "BuiltAt": "hpad",
      "Owner": "allies"
    },
    "Valued": {
      "Cost": 2000
    },
    "Tooltip": {
      "Name": "Longbow",
      "Description": "Helicopter Gunship with AG Missiles.\\n  Strong vs Tanks\\n  Weak vs Infantry"
    },
    "Health": {
      "HP": 120
    },
    "Armor": {
      "Type": "Light"
    },
    "RevealsShroud": {
      "Range": 12
    },
    "AttackHeli": {
      "PrimaryWeapon": "HellfireAG",
      "SecondaryWeapon": "HellfireAA",
      "PrimaryOffset": -5002,
      "SecondaryOffset": 5002,
      "FacingTolerance": 20
    },
    "Helicopter": {
      "RearmBuildings": "hpad",
      "LandWhenIdle": false,
      "InitialFacing": 20,
      "ROT": 4,
      "Speed": 16
    },
    "RenderUnit": null,
    "WithRotor": {
      "Offset": "0,0,0,-2"
    },
    "WithShadow": null,
    "LimitedAmmo": {
      "Ammo": 8
    },
    "IronCurtainable": null,
    "FallsToEarth": {
      "Explosion": "UnitExplode"
    },
    "SmokeTrailWhenDamaged": {
      "Offset": "0,-10"
    },
    "unitClass": "aircraft",
    "name": "HELI"
  },
  {
    "Inherits": "^Helicopter",
    "Buildable": {
      "Queue": "Plane",
      "BuildPaletteOrder": 90,
      "Prerequisites": "hpad",
      "BuiltAt": "hpad",
      "Owner": "allies"
    },
    "Valued": {
      "Cost": 1000
    },
    "Tooltip": {
      "Name": "Hind",
      "Description": "Helicopter Gunship with Chainguns.\\n  Strong vs Infantry, Light Vehicles.\\n  Weak vs Tanks"
    },
    "Health": {
      "HP": 150
    },
    "Armor": {
      "Type": "Light"
    },
    "RevealsShroud": {
      "Range": 10
    },
    "AttackHeli": {
      "PrimaryWeapon": "ChainGun",
      "SecondaryWeapon": "ChainGun",
      "PrimaryOffset": "-5,-2,0,2",
      "SecondaryOffset": "5,-2,0,2",
      "FacingTolerance": 20
    },
    "Helicopter": {
      "RearmBuildings": "hpad",
      "LandWhenIdle": false,
      "InitialFacing": 20,
      "ROT": 4,
      "Speed": 12
    },
    "RenderUnit": null,
    "WithRotor": null,
    "WithShadow": null,
    "LimitedAmmo": {
      "Ammo": 24,
      "PipCount": 6,
      "ReloadTicks": 8
    },
    "IronCurtainable": null,
    "Selectable": {
      "Bounds": 383200
    },
    "WithMuzzleFlash": null,
    "FallsToEarth": {
      "Explosion": "UnitExplode"
    },
    "SmokeTrailWhenDamaged": {
      "Offset": "0,-10"
    },
    "unitClass": "aircraft",
    "name": "HIND"
  },
  {
    "Inherits": "^Infantry",
    "Buildable": {
      "Queue": "Infantry",
      "BuildPaletteOrder": 30,
      "Prerequisites": "barr",
      "Owner": "soviet"
    },
    "Valued": {
      "Cost": 200
    },
    "Tooltip": {
      "Name": "Attack Dog",
      "Description": "Anti-infantry unit. Not fooled by the \\nSpy's disguise.\\n  Strong vs Infantry\\n  Weak vs Vehicles"
    },
    "Selectable": {
      "Voice": "DogVoice",
      "Bounds": "12,17,-1,-4"
    },
    "Health": {
      "HP": 12
    },
    "Mobile": {
      "Speed": 7
    },
    "RevealsShroud": {
      "Range": 5
    },
    "AutoTarget": null,
    "AttackLeap": {
      "PrimaryWeapon": "DogJaw",
      "CanAttackGround": "no"
    },
    "RenderInfantry": {
      "IdleAnimations": "idle1,idle2"
    },
    "IgnoresDisguise": null,
    "unitClass": "infantry",
    "name": "DOG"
  },
  {
    "Inherits": "^Infantry",
    "Buildable": {
      "Queue": "Infantry",
      "BuildPaletteOrder": 10,
      "Owner": "allies,soviet"
    },
    "Valued": {
      "Cost": 100
    },
    "Tooltip": {
      "Name": "Rifle Infantry",
      "Description": "General-purpose infantry.\\n  Strong vs Infantry\\n  Weak vs Vehicles"
    },
    "Selectable": {
      "Bounds": "12,17,0,-9"
    },
    "Health": {
      "HP": 50
    },
    "Mobile": {
      "Speed": 4
    },
    "AttackFrontal": {
      "PrimaryWeapon": "M1Carbine"
    },
    "TakeCover": null,
    "-RenderInfantry": null,
    "RenderInfantryProne": {
      "IdleAnimations": "idle1,idle2"
    },
    "unitClass": "infantry",
    "name": "E1"
  },
  {
    "Inherits": "^Infantry",
    "Buildable": {
      "Queue": "Infantry",
      "BuildPaletteOrder": 10,
      "Owner": "soviet",
      "Prerequisites": "barr"
    },
    "Valued": {
      "Cost": 160
    },
    "Tooltip": {
      "Name": "Grenadier",
      "Description": "Infantry armed with grenades. \\n  Strong vs Buildings, Infantry\\n  Weak vs Vehicles"
    },
    "Selectable": {
      "Bounds": "12,17,0,-9"
    },
    "Health": {
      "HP": 50
    },
    "Mobile": {
      "Speed": 5
    },
    "AttackFrontal": {
      "PrimaryWeapon": "Grenade",
      "PrimaryOffset": "0,0,0,-13",
      "FireDelay": 15
    },
    "TakeCover": null,
    "-RenderInfantry": null,
    "RenderInfantryProne": {
      "IdleAnimations": "idle1,idle2"
    },
    "Explodes": {
      "Weapon": "UnitExplodeSmall",
      "Chance": 50
    },
    "unitClass": "infantry",
    "name": "E2"
  },
  {
    "Inherits": "^Infantry",
    "Buildable": {
      "Queue": "Infantry",
      "BuildPaletteOrder": 20,
      "Owner": "allies,soviet"
    },
    "Valued": {
      "Cost": 300
    },
    "Tooltip": {
      "Name": "Rocket Soldier",
      "Description": "Anti-tank/Anti-aircraft infantry.\\n  Strong vs Tanks, Aircraft\\n  Weak vs Infantry"
    },
    "Selectable": {
      "Bounds": "12,17,0,-9"
    },
    "Health": {
      "HP": 45
    },
    "Mobile": {
      "Speed": 3
    },
    "AttackFrontal": {
      "PrimaryWeapon": "RedEye",
      "SecondaryWeapon": "Dragon",
      "PrimaryOffset": "0,0,0,-13"
    },
    "TakeCover": null,
    "-RenderInfantry": null,
    "RenderInfantryProne": {
      "IdleAnimations": "idle1,idle2"
    },
    "unitClass": "infantry",
    "name": "E3"
  },
  {
    "Inherits": "^Infantry",
    "Buildable": {
      "Queue": "Infantry",
      "BuildPaletteOrder": 60,
      "Prerequisites": "ftur",
      "Owner": "soviet"
    },
    "Valued": {
      "Cost": 300
    },
    "Tooltip": {
      "Name": "Flamethrower",
      "Description": "Advanced Anti-infantry unit.\\n  Strong vs Infantry, Buildings\\n  Weak vs Vehicles"
    },
    "Selectable": {
      "Bounds": "12,17,0,-9"
    },
    "Health": {
      "HP": 40
    },
    "Mobile": {
      "Speed": 3
    },
    "AttackFrontal": {
      "PrimaryWeapon": "Flamer",
      "PrimaryOffset": "0,-10,0,-8",
      "FireDelay": 8
    },
    "TakeCover": null,
    "-RenderInfantry": null,
    "RenderInfantryProne": {
      "IdleAnimations": "idle1,idle2"
    },
    "unitClass": "infantry",
    "name": "E4"
  },
  {
    "Inherits": "^Infantry",
    "Buildable": {
      "Queue": "Infantry",
      "BuildPaletteOrder": 50,
      "Owner": "soviet,allies"
    },
    "Valued": {
      "Cost": 500
    },
    "Tooltip": {
      "Name": "Engineer",
      "Description": "Infiltrates and captures enemy structures.\\n  Strong vs Nothing\\n  Weak vs Everything"
    },
    "Selectable": {
      "Voice": "EngineerVoice",
      "Bounds": "12,17,0,-9"
    },
    "Health": {
      "HP": 25
    },
    "Mobile": {
      "Speed": 4
    },
    "Passenger": {
      "PipType": "Yellow"
    },
    "EngineerRepair": null,
    "Captures": null,
    "TakeCover": null,
    "-AutoTarget": null,
    "AttackMove": {
      "JustMove": true
    },
    "-RenderInfantry": null,
    "RenderInfantryProne": {
      "IdleAnimations": "idle1,idle2"
    },
    "unitClass": "infantry",
    "name": "E6"
  },
  {
    "Inherits": "^Infantry",
    "Buildable": {
      "Queue": "Infantry",
      "BuildPaletteOrder": 60,
      "Prerequisites": "dome, tent",
      "Owner": "allies"
    },
    "Valued": {
      "Cost": 500
    },
    "SpyToolTip": {
      "Name": "Spy",
      "Description": "Infiltrates enemy structures to gather \\nintelligence. Exact effect depends on the \\nbuilding infiltrated.\\n  Strong vs Nothing\\n  Weak vs Everything\\n  Special Ability: Disguised"
    },
    "Selectable": {
      "Voice": "SpyVoice",
      "Bounds": "12,17,0,-9"
    },
    "Health": {
      "HP": 25
    },
    "Mobile": {
      "Speed": 4
    },
    "RevealsShroud": {
      "Range": 5
    },
    "Passenger": {
      "PipType": "Yellow"
    },
    "TakeCover": null,
    "Spy": null,
    "-AutoTarget": null,
    "AttackMove": {
      "JustMove": true
    },
    "-RenderInfantry": null,
    "RenderSpy": {
      "IdleAnimations": "idle1,idle2"
    },
    "AttackFrontal": {
      "PrimaryWeapon": "SilencedPPK"
    },
    "unitClass": "infantry",
    "name": "SPY"
  },
  {
    "Inherits": "^Infantry",
    "Buildable": {
      "Queue": "Infantry",
      "BuildPaletteOrder": 110,
      "Prerequisites": "techcenter",
      "Owner": "allies"
    },
    "Valued": {
      "Cost": 1200
    },
    "Tooltip": {
      "Name": "Tanya",
      "Description": "Elite commando infantry, armed with \\ndual pistols and C4.\\n  Strong vs Infantry, Buildings\\n  Weak vs Vehicles\\n  Special Ability: Destroy Building with C4"
    },
    "Selectable": {
      "Voice": "TanyaVoice",
      "Bounds": "12,17,0,-9"
    },
    "Health": {
      "HP": 100
    },
    "Mobile": {
      "Speed": 5
    },
    "RevealsShroud": {
      "Range": 6
    },
    "C4Demolition": {
      "C4Delay": 45
    },
    "Passenger": {
      "PipType": "Red"
    },
    "AttackFrontal": {
      "PrimaryWeapon": "Colt45",
      "SecondaryWeapon": "Colt45"
    },
    "TakeCover": null,
    "-RenderInfantry": null,
    "RenderInfantryProne": {
      "IdleAnimations": "idle1,idle2"
    },
    "unitClass": "infantry",
    "name": "E7"
  },
  {
    "Inherits": "^Infantry",
    "Buildable": {
      "Queue": "Infantry",
      "BuildPaletteOrder": 110,
      "Prerequisites": "stek",
      "Owner": "soviet"
    },
    "Valued": {
      "Cost": 1800
    },
    "Tooltip": {
      "Name": "Volkov",
      "Description": "Elite commando infantry, armed with \\nmodular cannons and grenade launcher.\\n  Strong vs Vehicles, Infantry\\n  Weak vs Aircraft"
    },
    "Selectable": {
      "Voice": "VolkovVoice",
      "Bounds": "12,17,0,-9"
    },
    "Health": {
      "HP": 150
    },
    "Armor": {
      "Type": "Heavy"
    },
    "Mobile": {
      "Speed": 5
    },
    "RevealsShroud": {
      "Range": 4
    },
    "Passenger": {
      "PipType": "Red"
    },
    "AttackFrontal": {
      "PrimaryWeapon": "VolkAT",
      "SecondaryWeapon": "VolkNapalm"
    },
    "TakeCover": null,
    "-RenderInfantry": null,
    "RenderInfantryProne": {
      "IdleAnimations": "idle1"
    },
    "-CrushableInfantry": null,
    "unitClass": "infantry",
    "name": "E8"
  },
  {
    "Inherits": "^Infantry",
    "Buildable": {
      "Queue": "Infantry",
      "BuildPaletteOrder": 20,
      "Owner": "allies",
      "Prerequisites": "tent"
    },
    "Valued": {
      "Cost": 300
    },
    "Tooltip": {
      "Name": "Medic",
      "Description": "Heals nearby infantry.\\n  Strong vs Nothing\\n  Weak vs Everything"
    },
    "Selectable": {
      "Voice": "MedicVoice",
      "Bounds": "12,17,0,-9"
    },
    "Health": {
      "HP": 80
    },
    "Mobile": {
      "Speed": 4
    },
    "RevealsShroud": {
      "Range": 3
    },
    "Passenger": {
      "PipType": "Yellow"
    },
    "AutoHeal": null,
    "AttackMedic": {
      "PrimaryWeapon": "Heal"
    },
    "TakeCover": null,
    "-AutoTarget": null,
    "AttackMove": {
      "JustMove": true
    },
    "-RenderInfantry": null,
    "RenderInfantryProne": {
      "IdleAnimations": "idle1,idle2"
    },
    "unitClass": "infantry",
    "name": "MEDI"
  },
  {
    "Inherits": "^Infantry",
    "Buildable": {
      "Queue": "Infantry",
      "Prerequisites": "stek,tsla",
      "Owner": "soviet"
    },
    "Valued": {
      "Cost": 500
    },
    "Tooltip": {
      "Name": "Tesla Trooper",
      "Description": "Infantry with tesla coils\\n Strong vs Infantry\\n Weak vs Vehicles"
    },
    "Selectable": {
      "Voice": "ShokVoice",
      "Bounds": "12,17,0,-9"
    },
    "Health": {
      "HP": 80
    },
    "Mobile": {
      "Speed": 3
    },
    "RevealsShroud": {
      "Range": 4
    },
    "AttackFrontal": {
      "PrimaryWeapon": "PortaTesla",
      "PrimaryOffset": "0,-10,0,-8"
    },
    "TakeCover": null,
    "-RenderInfantry": null,
    "RenderInfantryProne": {
      "IdleAnimations": "idle1,idle2"
    },
    "-CrushableInfantry": null,
    "unitClass": "infantry",
    "name": "SHOK"
  },
  {
    "Inherits": "^Infantry",
    "Valued": {
      "Cost": 700
    },
    "Tooltip": {
      "Icon": "snipericon",
      "Name": "Sniper",
      "Description": "Elite sniper infantry unit.\\n  Strong vs Infantry\\n  Weak vs Vehicles"
    },
    "Buildable": {
      "Queue": "Infantry",
      "BuildPaletteOrder": 50,
      "Owner": "soviet",
      "Prerequisites": "dome"
    },
    "Selectable": {
      "Bounds": "12,17,0,-6"
    },
    "Mobile": {
      "Speed": 4
    },
    "Health": {
      "HP": 200
    },
    "Passenger": {
      "PipType": "Red"
    },
    "RevealsShroud": {
      "Range": 6
    },
    "AutoTarget": {
      "InitialStance": "HoldFire"
    },
    "AttackFrontal": {
      "PrimaryWeapon": "Sniper"
    },
    "TakeCover": null,
    "-RenderInfantry": null,
    "RenderInfantryProne": {
      "IdleAnimations": "idle1,idle2"
    },
    "Cloak": {
      "InitialDelay": 250,
      "CloakDelay": 120,
      "CloakSound": null,
      "UncloakSound": null,
      "UncloakOnMove": "yes"
    },
    "Captures": {
      "CaptureTypes": "civilianbuilding",
      "AllowAllies": true
    },
    "unitClass": "infantry",
    "name": "SNIPER"
  },
  {
    "Inherits": "^Ship",
    "Buildable": {
      "Queue": "Ship",
      "BuildPaletteOrder": 50,
      "Prerequisites": "spen",
      "BuiltAt": "spen",
      "Owner": "soviet"
    },
    "Valued": {
      "Cost": 950
    },
    "Tooltip": {
      "Name": "Submarine",
      "Description": "Submerged anti-ship unit armed with \\ntorpedoes.\\n  Strong vs Ships\\n  Weak vs Everything\\n  Special Ability: Submerge"
    },
    "Health": {
      "HP": 250
    },
    "Armor": {
      "Type": "Light"
    },
    "Mobile": {
      "ROT": 4,
      "Speed": 5
    },
    "RevealsShroud": {
      "Range": 6
    },
    "-TargetableUnit": null,
    "TargetableSubmarine": {
      "TargetTypes": "Ground, Water",
      "CloakedTargetTypes": "Underwater"
    },
    "RenderUnit": null,
    "Cloak": {
      "InitialDelay": 0,
      "CloakDelay": 50,
      "CloakSound": "subshow1.aud",
      "UncloakSound": "subshow1.aud"
    },
    "AttackFrontal": {
      "PrimaryWeapon": "TorpTube",
      "PrimaryLocalOffset": "-4,0,0,0,0, 4,0,0,0,0",
      "FireDelay": 2
    },
    "Selectable": {
      "Bounds": 3838
    },
    "Chronoshiftable": null,
    "IronCurtainable": null,
    "RepairableNear": null,
    "-DetectCloaked": null,
    "AutoTarget": {
      "InitialStance": "HoldFire"
    },
    "AttackMove": null,
    "unitClass": "ships",
    "name": "SS"
  },
  {
    "Inherits": "^Ship",
    "Buildable": {
      "Queue": "Ship",
      "BuildPaletteOrder": 60,
      "Prerequisites": "spen,stek",
      "BuiltAt": "spen",
      "Owner": "soviet"
    },
    "Valued": {
      "Cost": 2400
    },
    "Tooltip": {
      "Name": "Missile Submarine",
      "Description": "Submerged anti-ground unit armed with \\nlong-range ballistic missiles.\\n  Strong vs Buildings\\n  Weak vs Everything\\n  Special Ability: Submerge"
    },
    "Health": {
      "HP": 400
    },
    "Armor": {
      "Type": "Light"
    },
    "Mobile": {
      "ROT": 3,
      "Speed": 3
    },
    "RevealsShroud": {
      "Range": 6
    },
    "RenderUnit": null,
    "-TargetableUnit": null,
    "TargetableSubmarine": {
      "TargetTypes": "Ground, Water",
      "CloakedTargetTypes": "Underwater"
    },
    "Cloak": {
      "InitialDelay": 0,
      "CloakDelay": 100,
      "CloakSound": "subshow1.aud",
      "UncloakSound": "subshow1.aud"
    },
    "AttackFrontal": {
      "PrimaryWeapon": "SubMissile",
      "FireDelay": 2
    },
    "Selectable": {
      "Bounds": 4444
    },
    "Chronoshiftable": null,
    "IronCurtainable": null,
    "RepairableNear": null,
    "-DetectCloaked": null,
    "AutoTarget": {
      "InitialStance": "HoldFire"
    },
    "AttackMove": null,
    "unitClass": "ships",
    "name": "MSUB"
  },
  {
    "Inherits": "^Ship",
    "Buildable": {
      "Queue": "Ship",
      "BuildPaletteOrder": 70,
      "Prerequisites": "syrd,dome",
      "BuiltAt": "syrd",
      "Owner": "allies"
    },
    "Valued": {
      "Cost": 1000
    },
    "Tooltip": {
      "Name": "Destroyer",
      "Description": "Fast multi-role ship. \\n  Strong vs Submarines, Aircraft\\n  Weak vs Infantry, Tanks"
    },
    "Health": {
      "HP": 400
    },
    "Armor": {
      "Type": "Heavy"
    },
    "Mobile": {
      "ROT": 7,
      "Speed": 6
    },
    "RevealsShroud": {
      "Range": 6
    },
    "Turreted": {
      "ROT": 7
    },
    "AttackTurreted": {
      "PrimaryWeapon": "Stinger",
      "SecondaryWeapon": "DepthCharge",
      "PrimaryOffset": "0,-8,0,-3",
      "PrimaryLocalOffset": "-4,0,0,0,-20, 4,0,0,0,20"
    },
    "Selectable": {
      "Bounds": 3838
    },
    "RenderUnitTurreted": null,
    "AutoTarget": null,
    "Chronoshiftable": null,
    "IronCurtainable": null,
    "RepairableNear": null,
    "DetectCloaked": {
      "Range": 4
    },
    "RenderDetectionCircle": null,
    "unitClass": "ships",
    "name": "DD"
  },
  {
    "Inherits": "^Ship",
    "Buildable": {
      "Queue": "Ship",
      "BuildPaletteOrder": 100,
      "Prerequisites": "syrd,atek",
      "BuiltAt": "syrd",
      "Owner": "allies"
    },
    "Valued": {
      "Cost": 2400
    },
    "Tooltip": {
      "Name": "Cruiser",
      "Description": "Very slow long-range ship. \\n  Strong vs Buildings\\n  Weak vs Ships, Submarines"
    },
    "Health": {
      "HP": 800
    },
    "Armor": {
      "Type": "Heavy"
    },
    "Mobile": {
      "ROT": 2,
      "Speed": 2
    },
    "RevealsShroud": {
      "Range": 7
    },
    "Turreted": {
      "ROT": 3
    },
    "AttackTurreted": {
      "PrimaryWeapon": "8Inch",
      "SecondaryWeapon": "8Inch",
      "PrimaryOffset": "0,17,0,-2",
      "SecondaryOffset": "0,-17,0,-2",
      "PrimaryLocalOffset": "-4,-5,0,0,0, 4,-5,0,0,0",
      "SecondaryLocalOffset": "-4,-5,0,0,0, 4,-5,0,0,0",
      "PrimaryRecoil": 4,
      "SecondaryRecoil": 4,
      "PrimaryRecoilRecovery": 0.8,
      "SecondaryRecoilRecovery": 0.8
    },
    "Selectable": {
      "Bounds": 4444
    },
    "RenderUnitTurreted": null,
    "AutoTarget": null,
    "Chronoshiftable": null,
    "IronCurtainable": null,
    "RepairableNear": null,
    "unitClass": "ships",
    "name": "CA"
  },
  {
    "Inherits": "^Ship",
    "Buildable": {
      "Queue": "Ship",
      "BuildPaletteOrder": 30,
      "Owner": "allies,soviet"
    },
    "Valued": {
      "Cost": 700
    },
    "Tooltip": {
      "Name": "Transport",
      "Description": "General-purpose naval transport.\\nCan carry infantry and tanks.\\n  Unarmed"
    },
    "Health": {
      "HP": 350
    },
    "Armor": {
      "Type": "Heavy"
    },
    "Mobile": {
      "ROT": 10,
      "Speed": 8
    },
    "RevealsShroud": {
      "Range": 6
    },
    "RenderUnit": null,
    "Cargo": {
      "Types": "Infantry, Vehicle",
      "MaxWeight": 5,
      "PipCount": 5
    },
    "IronCurtainable": null,
    "RepairableNear": null,
    "AttackMove": {
      "JustMove": true
    },
    "unitClass": "ships",
    "name": "LST"
  },
  {
    "Inherits": "^Ship",
    "Buildable": {
      "Queue": "Ship",
      "BuildPaletteOrder": 50,
      "Prerequisites": "syrd",
      "BuiltAt": "syrd",
      "Owner": "allies"
    },
    "Valued": {
      "Cost": 500
    },
    "Tooltip": {
      "Name": "Gunboat",
      "Description": "Light scout & support ship. \\n  Strong vs Ships, Submarines\\n  Weak vs Aircraft"
    },
    "Health": {
      "HP": 200
    },
    "Armor": {
      "Type": "Heavy"
    },
    "Mobile": {
      "ROT": 7,
      "Speed": 9
    },
    "RevealsShroud": {
      "Range": 7
    },
    "Turreted": {
      "ROT": 7
    },
    "AttackTurreted": {
      "PrimaryWeapon": "2Inch",
      "SecondaryWeapon": "DepthCharge",
      "PrimaryOffset": "0,-6,0,-1"
    },
    "Selectable": {
      "Bounds": 3232
    },
    "RenderUnitTurreted": null,
    "AutoTarget": null,
    "Chronoshiftable": null,
    "IronCurtainable": null,
    "RepairableNear": null,
    "unitClass": "ships",
    "name": "PT"
  },
  {
    "Inherits": "^Vehicle",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 40,
      "Prerequisites": "dome",
      "Owner": "soviet"
    },
    "Valued": {
      "Cost": 700
    },
    "Tooltip": {
      "Name": "V2 Rocket",
      "Description": "Long-range rocket artillery.\\n  Strong vs Infantry, Buildings\\n  Weak vs Tanks, Aircraft"
    },
    "Health": {
      "HP": 150
    },
    "Armor": {
      "Type": "Light"
    },
    "Mobile": {
      "Speed": 7
    },
    "RevealsShroud": {
      "Range": 5
    },
    "AttackFrontal": {
      "PrimaryWeapon": "SCUD"
    },
    "RenderUnitReload": null,
    "AutoTarget": null,
    "Explodes": {
      "Weapon": "SCUD",
      "EmptyWeapon": null
    },
    "unitClass": "vehicles",
    "name": "V2RL"
  },
  {
    "Inherits": "^Tank",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 40,
      "Owner": "allies"
    },
    "Valued": {
      "Cost": 700
    },
    "Tooltip": {
      "Name": "Light Tank",
      "Description": "Light Tank, good for scouting.\\n  Strong vs Light Vehicles\\n  Weak vs Tanks, Aircraft"
    },
    "Health": {
      "HP": 220
    },
    "Armor": {
      "Type": "Heavy"
    },
    "Mobile": {
      "Speed": 9
    },
    "RevealsShroud": {
      "Range": 4
    },
    "Turreted": {
      "ROT": 5
    },
    "AttackTurreted": {
      "PrimaryWeapon": "25mm",
      "PrimaryRecoil": 2,
      "PrimaryRecoilRecovery": 0.5
    },
    "RenderUnitTurreted": null,
    "AutoTarget": null,
    "Explodes": {
      "Weapon": "UnitExplodeSmall",
      "EmptyWeapon": "UnitExplodeSmall"
    },
    "LeavesHusk": {
      "HuskActor": "1TNK.Husk"
    },
    "unitClass": "vehicles",
    "name": "1TNK"
  },
  {
    "Inherits": "^Tank",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 60,
      "Prerequisites": "fix",
      "Owner": "allies"
    },
    "Valued": {
      "Cost": 850
    },
    "Tooltip": {
      "Name": "Medium Tank",
      "Description": "Allied Main Battle Tank.\\n  Strong vs Tanks, Light Vehicles\\n  Weak vs Infantry, Aircraft"
    },
    "Health": {
      "HP": 450
    },
    "Armor": {
      "Type": "Heavy"
    },
    "Mobile": {
      "Speed": 6,
      "Crushes": "wall, atmine, crate, infantry"
    },
    "RevealsShroud": {
      "Range": 5
    },
    "Turreted": {
      "ROT": 5
    },
    "AttackTurreted": {
      "PrimaryWeapon": "90mm",
      "PrimaryRecoil": 3,
      "PrimaryRecoilRecovery": 0.9
    },
    "RenderUnitTurreted": null,
    "AutoTarget": null,
    "Explodes": {
      "Weapon": "UnitExplodeSmall",
      "EmptyWeapon": "UnitExplodeSmall"
    },
    "LeavesHusk": {
      "HuskActor": "2TNK.Husk"
    },
    "Selectable": {
      "Bounds": 3030
    },
    "unitClass": "vehicles",
    "name": "2TNK"
  },
  {
    "Inherits": "^Tank",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 40,
      "Prerequisites": "fix",
      "Owner": "soviet"
    },
    "Valued": {
      "Cost": 1150
    },
    "Tooltip": {
      "Name": "Heavy Tank",
      "Description": "Soviet Main Battle Tank, with dual cannons\\n  Strong vs Tanks, Light Vehicles\\n  Weak vs Infantry, Aircraft"
    },
    "Health": {
      "HP": 550
    },
    "Armor": {
      "Type": "Heavy"
    },
    "Mobile": {
      "Speed": 5,
      "Crushes": "wall, atmine, crate, infantry"
    },
    "RevealsShroud": {
      "Range": 5
    },
    "Turreted": {
      "ROT": 5
    },
    "AttackTurreted": {
      "PrimaryWeapon": "105mm",
      "PrimaryRecoil": 3,
      "PrimaryRecoilRecovery": 0.9,
      "PrimaryLocalOffset": "2,0,0,0,0, -2,0,0,0,0"
    },
    "RenderUnitTurreted": null,
    "AutoTarget": null,
    "Explodes": {
      "Weapon": "UnitExplodeSmall",
      "EmptyWeapon": "UnitExplodeSmall"
    },
    "LeavesHusk": {
      "HuskActor": "3TNK.Husk"
    },
    "Selectable": {
      "Bounds": 3030
    },
    "unitClass": "vehicles",
    "name": "3TNK"
  },
  {
    "Inherits": "^Tank",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 100,
      "Prerequisites": "fix,stek",
      "Owner": "soviet"
    },
    "Valued": {
      "Cost": 1800
    },
    "Tooltip": {
      "Name": "Mammoth Tank",
      "Description": "Big and slow tank, with anti-air capability.\\n  Strong vs Tanks, Aircraft\\n  Weak vs Infantry"
    },
    "Health": {
      "HP": 900
    },
    "Armor": {
      "Type": "Heavy"
    },
    "Mobile": {
      "Speed": 3,
      "Crushes": "wall, atmine, crate, infantry"
    },
    "RevealsShroud": {
      "Range": 6
    },
    "Turreted": {
      "ROT": 1
    },
    "AttackTurreted": {
      "PrimaryWeapon": "120mm",
      "SecondaryWeapon": "MammothTusk",
      "PrimaryLocalOffset": "-4,-5,0,0,0, 4,-5,0,0,0",
      "SecondaryLocalOffset": "-7,2,0,0,25, 7,2,0,0,-25",
      "PrimaryRecoil": 4,
      "PrimaryRecoilRecovery": 0.7,
      "SecondaryRecoil": 1
    },
    "RenderUnitTurreted": null,
    "AutoTarget": null,
    "Explodes": {
      "Weapon": "UnitExplodeSmall",
      "EmptyWeapon": "UnitExplodeSmall"
    },
    "LeavesHusk": {
      "HuskActor": "4TNK.Husk"
    },
    "SelfHealing": {
      "Step": 1,
      "Ticks": 1,
      "HealIfBelow": "80%",
      "DamageCooldown": 150
    },
    "Selectable": {
      "Bounds": "44,38,0,-4"
    },
    "unitClass": "vehicles",
    "name": "4TNK"
  },
  {
    "Inherits": "^Tank",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 80,
      "Prerequisites": "dome",
      "Owner": "allies"
    },
    "Valued": {
      "Cost": 600
    },
    "Tooltip": {
      "Name": "Artillery",
      "Description": "Long-range artillery.\\n  Strong vs Infantry, Buildings\\n  Weak vs Tanks, Aircraft"
    },
    "Health": {
      "HP": 75
    },
    "Armor": {
      "Type": "Light"
    },
    "Mobile": {
      "ROT": 2,
      "Speed": 6
    },
    "RevealsShroud": {
      "Range": 5
    },
    "AttackFrontal": {
      "PrimaryWeapon": "155mm"
    },
    "RenderUnit": null,
    "Explodes": {
      "Weapon": "UnitExplode",
      "Chance": 75
    },
    "AutoTarget": null,
    "unitClass": "vehicles",
    "name": "ARTY"
  },
  {
    "Inherits": "^Vehicle",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 10,
      "Prerequisites": "proc",
      "Owner": "allies,soviet"
    },
    "Valued": {
      "Cost": 1100
    },
    "Tooltip": {
      "Name": "Ore Truck",
      "Description": "Collects Ore and Gems for processing.\\n  Unarmed"
    },
    "Selectable": {
      "Priority": 7,
      "Bounds": 4242
    },
    "Harvester": {
      "Capacity": 20,
      "Resources": "Ore,Gems",
      "UnloadTicksPerBale": 1,
      "SearchFromProcRadius": 24,
      "SearchFromOrderRadius": 12
    },
    "Health": {
      "HP": 600
    },
    "Armor": {
      "Type": "Heavy"
    },
    "Mobile": {
      "Speed": 6,
      "Crushes": "wall, atmine, crate, infantry"
    },
    "RevealsShroud": {
      "Range": 4
    },
    "RenderHarvester": null,
    "-AttackMove": null,
    "GpsDot": "String:Harvester",
    "LeavesHusk": {
      "HuskActor": "HARV.EmptyHusk"
    },
    "HarvesterHuskModifier": {
      "FullHuskActor": "HARV.FullHusk",
      "FullnessThreshold": 50
    },
    "unitClass": "vehicles",
    "name": "HARV"
  },
  {
    "Inherits": "^Vehicle",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 110,
      "Prerequisites": "fix",
      "Owner": "allies,soviet"
    },
    "Valued": {
      "Cost": 2000
    },
    "Tooltip": {
      "Name": "Mobile Construction Vehicle",
      "Description": "Deploys into another Construction Yard.\\n  Unarmed"
    },
    "Selectable": {
      "Priority": 3,
      "Bounds": 4242
    },
    "Health": {
      "HP": 600
    },
    "Armor": {
      "Type": "Light"
    },
    "Mobile": {
      "Speed": 6,
      "Crushes": "wall, atmine, crate, infantry"
    },
    "RevealsShroud": {
      "Range": 4
    },
    "Transforms": {
      "IntoActor": "fact",
      "Offset": "-1,-1",
      "Facing": 96,
      "TransformSounds": "placbldg.aud, build5.aud",
      "NoTransformSounds": "nodeply1.aud"
    },
    "RenderUnit": null,
    "MustBeDestroyed": null,
    "BaseBuilding": null,
    "-AttackMove": null,
    "LeavesHusk": {
      "HuskActor": "MCV.Husk"
    },
    "unitClass": "vehicles",
    "name": "MCV"
  },
  {
    "Inherits": "^Vehicle",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 30,
      "Owner": "allies"
    },
    "Valued": {
      "Cost": 500
    },
    "Tooltip": {
      "Name": "Ranger",
      "Description": "Fast scout & anti-infantry vehicle.\\n  Strong vs Infantry\\n  Weak vs Tanks, Aircraft"
    },
    "Health": {
      "HP": 150
    },
    "Armor": {
      "Type": "Light"
    },
    "Mobile": {
      "ROT": 10,
      "Speed": 12
    },
    "RevealsShroud": {
      "Range": 8
    },
    "Turreted": {
      "ROT": 10
    },
    "AttackTurreted": {
      "PrimaryWeapon": "M60mg",
      "PrimaryOffset": "0,0,0,-2"
    },
    "WithMuzzleFlash": null,
    "RenderUnitTurreted": null,
    "AutoTarget": null,
    "Cargo": {
      "Types": "Infantry",
      "MaxWeight": 1,
      "PipCount": 1,
      "UnloadFacing": 220
    },
    "unitClass": "vehicles",
    "name": "JEEP"
  },
  {
    "Inherits": "^Tank",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 50,
      "Owner": "soviet"
    },
    "Valued": {
      "Cost": 850
    },
    "Tooltip": {
      "Name": "Armored Personnel Carrier",
      "Description": "Tough infantry transport.\\n  Strong vs Infantry, Light Vehicles\\n  Weak vs Tanks, Aircraft"
    },
    "Health": {
      "HP": 300
    },
    "Armor": {
      "Type": "Heavy"
    },
    "Mobile": {
      "Speed": 10
    },
    "RevealsShroud": {
      "Range": 5
    },
    "AttackFrontal": {
      "PrimaryWeapon": "M60mg",
      "PrimaryOffset": "0,0,0,-4"
    },
    "RenderUnit": null,
    "WithMuzzleFlash": null,
    "AutoTarget": null,
    "Cargo": {
      "Types": "Infantry",
      "MaxWeight": 5,
      "PipCount": 5,
      "UnloadFacing": 220
    },
    "unitClass": "vehicles",
    "name": "APC"
  },
  {
    "Inherits": "^Tank",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 30,
      "Prerequisites": "fix",
      "Owner": "soviet"
    },
    "Valued": {
      "Cost": 800
    },
    "Tooltip": {
      "Name": "Minelayer (Anti-Personnel)",
      "Icon": "MNLYICON",
      "Description": "Lays mines to destroy unwary enemy units.\\n  Unarmed"
    },
    "Health": {
      "HP": 100
    },
    "Armor": {
      "Type": "Heavy"
    },
    "Mobile": {
      "Speed": 9
    },
    "RevealsShroud": {
      "Range": 5
    },
    "RenderUnit": {
      "Image": "MNLY"
    },
    "Minelayer": {
      "Mine": "MINP"
    },
    "MineImmune": null,
    "LimitedAmmo": {
      "Ammo": 5
    },
    "AttackMove": {
      "JustMove": true
    },
    "unitClass": "vehicles",
    "name": "MNLY.AP"
  },
  {
    "Inherits": "^Tank",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 30,
      "Prerequisites": "fix",
      "Owner": "allies"
    },
    "Valued": {
      "Cost": 800
    },
    "Tooltip": {
      "Name": "Minelayer (Anti-Tank)",
      "Icon": "MNLYICON",
      "Description": "Lays mines to destroy unwary enemy units.\\n  Unarmed"
    },
    "Health": {
      "HP": 100
    },
    "Armor": {
      "Type": "Heavy"
    },
    "Mobile": {
      "Speed": 9
    },
    "RevealsShroud": {
      "Range": 5
    },
    "RenderUnit": {
      "Image": "MNLY"
    },
    "Minelayer": {
      "Mine": "MINV"
    },
    "MineImmune": null,
    "LimitedAmmo": {
      "Ammo": 3
    },
    "AttackMove": {
      "JustMove": true
    },
    "unitClass": "vehicles",
    "name": "MNLY.AT"
  },
  {
    "Inherits": "^Vehicle",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 120,
      "Prerequisites": "weap",
      "Owner": "allies, soviet"
    },
    "Valued": {
      "Cost": 500
    },
    "Tooltip": {
      "Name": "Supply Truck",
      "Description": "Transports cash to other players.\\n  Unarmed"
    },
    "Health": {
      "HP": 110
    },
    "Armor": {
      "Type": "Light"
    },
    "Mobile": {
      "Speed": 9
    },
    "RevealsShroud": {
      "Range": 3
    },
    "RenderUnit": null,
    "SupplyTruck": {
      "Payload": 500
    },
    "AttackMove": {
      "JustMove": "yes"
    },
    "unitClass": "vehicles",
    "name": "TRUK"
  },
  {
    "Inherits": "^Tank",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 130,
      "Prerequisites": "stek,tsla",
      "Owner": "soviet"
    },
    "Valued": {
      "Cost": 1350
    },
    "Tooltip": {
      "Name": "Tesla Tank",
      "Description": "Tank with mounted tesla coil.\\n  Strong vs Infantry, Light Vehicles\\n  and Buildings  \\n  Weak vs Tanks, Aircraft"
    },
    "Health": {
      "HP": 150
    },
    "Armor": {
      "Type": "Light"
    },
    "Mobile": {
      "Speed": 8,
      "Crushes": "wall, atmine, crate, infantry"
    },
    "RevealsShroud": {
      "Range": 7
    },
    "AttackFrontal": {
      "PrimaryWeapon": "TTankZap",
      "PrimaryOffset": "0,0,0,-5"
    },
    "RenderUnitSpinner": null,
    "Selectable": {
      "Bounds": 282800
    },
    "AutoTarget": null,
    "unitClass": "vehicles",
    "name": "TTNK"
  },
  {
    "Inherits": "^Vehicle",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 30,
      "Owner": "soviet"
    },
    "Valued": {
      "Cost": 600
    },
    "Tooltip": {
      "Name": "Flak Truck",
      "Description": "Flak Truck, good for scouting.\\n  Strong vs Light Vehicles, Aircraft  \\n  Weak vs Tanks"
    },
    "Health": {
      "HP": 120
    },
    "Armor": {
      "Type": "Light"
    },
    "Mobile": {
      "ROT": 10,
      "Speed": 9
    },
    "RevealsShroud": {
      "Range": 4
    },
    "Turreted": {
      "ROT": 5
    },
    "AttackTurreted": {
      "PrimaryWeapon": "FLAK-23",
      "PrimaryOffset": "0,5,0,-4",
      "PrimaryRecoil": 2
    },
    "RenderUnitTurreted": null,
    "AutoTarget": null,
    "Explodes": {
      "Weapon": "UnitExplodeSmall",
      "EmptyWeapon": "UnitExplodeSmall"
    },
    "Selectable": {
      "Bounds": 282800
    },
    "unitClass": "vehicles",
    "name": "FTRK"
  },
  {
    "Inherits": "^Vehicle",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 140,
      "Prerequisites": "stek",
      "Owner": "soviet"
    },
    "Valued": {
      "Cost": 1500
    },
    "Tooltip": {
      "Name": "Demolition Truck",
      "Description": "Demolition Truck, actively armed with explosives.\\n  Strong vs Everything\\n  Weak vs Everything"
    },
    "Health": {
      "HP": 110
    },
    "Armor": {
      "Type": "Light"
    },
    "Mobile": {
      "Speed": 8
    },
    "RevealsShroud": {
      "Range": 3
    },
    "RenderUnit": null,
    "AttackMove": {
      "JustMove": "yes"
    },
    "Explodes": {
      "Weapon": "MiniNuke",
      "EmptyWeapon": "MiniNuke"
    },
    "DemoTruck": null,
    "-IronCurtainable": null,
    "Chronoshiftable": {
      "ExplodeInstead": "yes"
    },
    "unitClass": "vehicles",
    "name": "DTRK"
  },
  {
    "Inherits": "^Vehicle",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 140,
      "Prerequisites": "atek",
      "Owner": "allies"
    },
    "Valued": {
      "Cost": 1200
    },
    "Tooltip": {
      "Name": "Chrono Tank",
      "Description": "Chrono Tank, teleports to areas within range.\\n  Strong vs Vehicles, Buildings\\n  Weak vs Tanks"
    },
    "Selectable": {
      "Bounds": 2828
    },
    "Health": {
      "HP": 200
    },
    "Armor": {
      "Type": "Light"
    },
    "Mobile": {
      "Speed": 8
    },
    "RevealsShroud": {
      "Range": 3
    },
    "RenderUnit": null,
    "AutoTarget": null,
    "AttackFrontal": {
      "PrimaryWeapon": "ChronoTusk",
      "SecondaryWeapon": "ChronoTusk",
      "PrimaryLocalOffset": "-4,0,0,0,0, -4,0,0,0,0",
      "SecondaryLocalOffset": "4,0,0,0,25, 4,0,0,0,-25"
    },
    "ChronoshiftDeploy": null,
    "unitClass": "vehicles",
    "name": "CTNK"
  }
]