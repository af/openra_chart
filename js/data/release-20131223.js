units=(window.units||{}); units["release-20131223"]=[
  {
    "Inherits": "^Plane",
    "Buildable": {
      "Queue": "Plane",
      "BuildPaletteOrder": 100,
      "Prerequisites": "afld, stek",
      "Owner": "soviet",
      "Hotkey": "m"
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
    "Armament": {
      "Weapon": "Maverick",
      "LocalOffset": "0,-640,0, 0,640,0",
      "LocalYaw": "-40, 24"
    },
    "AttackPlane": {
      "FacingTolerance": 20
    },
    "Plane": {
      "InitialFacing": 192,
      "ROT": 5,
      "Speed": 20,
      "RearmBuildings": "afld"
    },
    "RenderUnit": {
      "CameraPitch": 99
    },
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
      "Offset": "-598,-683,0"
    },
    "Contrail@2": {
      "Offset": -5986830
    },
    "LeavesHusk": {
      "HuskActor": "MIG.Husk"
    },
    "SmokeTrailWhenDamaged": {
      "Offset": -8530171,
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
      "Owner": "soviet",
      "Hotkey": "y"
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
    "Armament@PRIMARY": {
      "Weapon": "ChainGun.Yak",
      "LocalOffset": "256,-213,0"
    },
    "Armament@SECONDARY": {
      "Name": "secondary",
      "Weapon": "ChainGun.Yak",
      "LocalOffset": 2562130
    },
    "AttackPlane": {
      "FacingTolerance": 20
    },
    "Plane": {
      "RearmBuildings": "afld",
      "InitialFacing": 192,
      "ROT": 5,
      "Speed": 16
    },
    "RenderUnit": {
      "CameraPitch": 99
    },
    "WithShadow": null,
    "LimitedAmmo": {
      "Ammo": 18,
      "PipCount": 6,
      "ReloadTicks": 11
    },
    "IronCurtainable": null,
    "ReturnOnIdle": null,
    "WithMuzzleFlash@PRIMARY": null,
    "WithMuzzleFlash@SECONDARY": {
      "Armament": "secondary"
    },
    "Contrail": {
      "Offset": -85300
    },
    "LeavesHusk": {
      "HuskActor": "YAK.Husk"
    },
    "SmokeTrailWhenDamaged": {
      "Offset": -85300,
      "Interval": 2
    },
    "unitClass": "aircraft",
    "name": "YAK"
  },
  {
    "Inherits": "^Helicopter",
    "Buildable": {
      "Queue": "Helicopter",
      "BuildPaletteOrder": 110,
      "Prerequisites": "hpad",
      "Owner": "allies",
      "Hotkey": "t"
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
      "Offset": -5970341
    },
    "WithRotor@SECONDARY": {
      "Id": "rotor_2",
      "Offset": 5970213
    },
    "WithShadow": null,
    "Cargo": {
      "Types": "Infantry",
      "MaxWeight": 8,
      "PipCount": 8
    },
    "IronCurtainable": null,
    "LeavesHusk": {
      "HuskActor": "TRAN.Husk"
    },
    "unitClass": "aircraft",
    "name": "TRAN"
  },
  {
    "Inherits": "^Helicopter",
    "Buildable": {
      "Queue": "Helicopter",
      "BuildPaletteOrder": 90,
      "Prerequisites": "hpad, atek",
      "Owner": "allies",
      "Hotkey": "l"
    },
    "Valued": {
      "Cost": 2000
    },
    "Tooltip": {
      "Name": "Longbow",
      "Description": "Helicopter Gunship with AG Missiles.\\n  Strong vs Tanks\\n  Weak vs Infantry"
    },
    "Health": {
      "HP": 150
    },
    "Armor": {
      "Type": "Light"
    },
    "RevealsShroud": {
      "Range": 12
    },
    "Armament@PRIMARY": {
      "Weapon": "HellfireAA",
      "LocalOffset": "0,-213,-85"
    },
    "Armament@SECONDARY": {
      "Weapon": "HellfireAG",
      "LocalOffset": "0,213,-85"
    },
    "AttackHeli": {
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
      "Offset": 85
    },
    "WithShadow": null,
    "LimitedAmmo": {
      "Ammo": 8
    },
    "IronCurtainable": null,
    "LeavesHusk": {
      "HuskActor": "HELI.Husk"
    },
    "SmokeTrailWhenDamaged": {
      "Offset": -42700
    },
    "unitClass": "aircraft",
    "name": "HELI"
  },
  {
    "Inherits": "^Helicopter",
    "Buildable": {
      "Queue": "Helicopter",
      "BuildPaletteOrder": 90,
      "Prerequisites": "hpad",
      "Owner": "allies",
      "Hotkey": "h"
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
    "Armament@PRIMARY": {
      "Weapon": "ChainGun",
      "LocalOffset": "85,-213,-85"
    },
    "Armament@SECONDARY": {
      "Name": "secondary",
      "Weapon": "ChainGun",
      "LocalOffset": "85,213,-85"
    },
    "AttackHeli": {
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
    "WithMuzzleFlash@PRIMARY": null,
    "WithMuzzleFlash@SECONDARY": {
      "Armament": "secondary"
    },
    "LeavesHusk": {
      "HuskActor": "HIND.Husk"
    },
    "SmokeTrailWhenDamaged": {
      "Offset": -42700
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
      "Owner": "soviet",
      "Hotkey": "o"
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
    "Armament": {
      "Weapon": "DogJaw"
    },
    "AttackLeap": null,
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
      "Owner": "allies,soviet",
      "Hotkey": "i"
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
    "Armament": {
      "Weapon": "M1Carbine"
    },
    "AttackFrontal": null,
    "TakeCover": null,
    "-RenderInfantry": null,
    "RenderInfantryProne": {
      "IdleAnimations": "idle1,idle2",
      "StandAnimations": "stand,stand2"
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
      "Prerequisites": "barr",
      "Hotkey": "g"
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
    "Armament": {
      "Weapon": "Grenade",
      "LocalOffset": 555,
      "FireDelay": 15
    },
    "AttackFrontal": null,
    "TakeCover": null,
    "-RenderInfantry": null,
    "RenderInfantryProne": {
      "IdleAnimations": "idle1,idle2",
      "StandAnimations": "stand,stand2"
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
      "Owner": "allies,soviet",
      "Hotkey": "r"
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
      "Speed": 4
    },
    "Armament@PRIMARY": {
      "Weapon": "RedEye",
      "LocalOffset": 555
    },
    "Armament@SECONDARY": {
      "Weapon": "Dragon",
      "LocalOffset": 555
    },
    "AttackFrontal": null,
    "TakeCover": null,
    "-RenderInfantry": null,
    "RenderInfantryProne": {
      "IdleAnimations": "idle1,idle2",
      "StandAnimations": "stand,stand2"
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
      "Owner": "soviet",
      "Hotkey": "t"
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
      "Speed": 4
    },
    "Armament": {
      "Weapon": "Flamer",
      "LocalOffset": 4270341,
      "FireDelay": 8
    },
    "AttackFrontal": null,
    "TakeCover": null,
    "-RenderInfantry": null,
    "RenderInfantryProne": {
      "IdleAnimations": "idle1,idle2",
      "StandAnimations": "stand,stand2"
    },
    "unitClass": "infantry",
    "name": "E4"
  },
  {
    "Inherits": "^Infantry",
    "Buildable": {
      "Queue": "Infantry",
      "BuildPaletteOrder": 50,
      "Owner": "soviet,allies",
      "Hotkey": "e"
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
    "RepairsBridges": null,
    "ExternalCaptures": null,
    "TakeCover": null,
    "-AutoTarget": null,
    "AttackMove": {
      "JustMove": true
    },
    "-RenderInfantry": null,
    "RenderInfantryProne": {
      "IdleAnimations": "idle1,idle2",
      "StandAnimations": "stand,stand2"
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
      "Owner": "allies",
      "Hotkey": "p"
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
    "Infiltrates": {
      "Types": "Cash, SupportPower, Exploration"
    },
    "-AutoTarget": null,
    "AttackMove": {
      "JustMove": true
    },
    "-RenderInfantry": null,
    "RenderSpy": {
      "IdleAnimations": "idle1,idle2",
      "StandAnimations": "stand,stand2"
    },
    "Armament": {
      "Weapon": "SilencedPPK"
    },
    "AttackFrontal": null,
    "unitClass": "infantry",
    "name": "SPY"
  },
  {
    "Inherits": "^Infantry",
    "Buildable": {
      "Queue": "Infantry",
      "BuildPaletteOrder": 110,
      "Prerequisites": "techcenter",
      "Owner": "allies",
      "Hotkey": "y",
      "BuildLimit": 1
    },
    "Valued": {
      "Cost": 1200
    },
    "Tooltip": {
      "Name": "Tanya",
      "Description": "Elite commando infantry, armed with \\ndual pistols and C4.\\n  Strong vs Infantry, Buildings\\n  Weak vs Vehicles\\n  Special Ability: Destroy Building with C4\\n\\nMaximum 1 can be trained"
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
    "Armament@PRIMARY": {
      "Weapon": "Colt45"
    },
    "Armament@SECONDARY": {
      "Weapon": "Colt45"
    },
    "AttackFrontal": null,
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
      "BuildPaletteOrder": 20,
      "Owner": "allies",
      "Prerequisites": "tent",
      "Hotkey": "m"
    },
    "Valued": {
      "Cost": 200
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
    "Armament": {
      "Weapon": "Heal"
    },
    "AttackMedic": {
      "Cursor": "heal"
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
      "BuildPaletteOrder": 70,
      "Owner": "allies",
      "Prerequisites": "fix",
      "Hotkey": "c"
    },
    "Valued": {
      "Cost": 500
    },
    "Tooltip": {
      "Name": "Mechanic",
      "Description": "Repairs nearby vehicles.\\n  Strong vs Nothing\\n  Weak vs Everything"
    },
    "Selectable": {
      "Voice": "MechanicVoice",
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
    "Armament": {
      "Weapon": "Repair"
    },
    "AttackMedic": {
      "Cursor": "repair"
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
    "name": "MECH"
  },
  {
    "Inherits": "^Infantry",
    "Buildable": {
      "Queue": "Infantry",
      "BuildPaletteOrder": 70,
      "Prerequisites": "stek,tsla",
      "Owner": "soviet",
      "Hotkey": "l"
    },
    "Valued": {
      "Cost": 400
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
      "Speed": 4
    },
    "RevealsShroud": {
      "Range": 4
    },
    "Armament": {
      "Weapon": "PortaTesla",
      "LocalOffset": 4270341
    },
    "AttackFrontal": null,
    "TakeCover": null,
    "-RenderInfantry": null,
    "RenderInfantryProne": {
      "IdleAnimations": "idle1,idle2",
      "StandAnimations": "stand,stand2"
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
      "Name": "Sniper",
      "Description": "Elite sniper infantry unit.\\n  Strong vs Infantry\\n  Weak vs Vehicles"
    },
    "Buildable": {
      "Queue": "Infantry",
      "BuildPaletteOrder": 80,
      "Owner": "soviet",
      "Prerequisites": "dome",
      "Hotkey": "h"
    },
    "Selectable": {
      "Bounds": "12,17,0,-6"
    },
    "Mobile": {
      "Speed": 4
    },
    "Health": {
      "HP": 80
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
    "Armament": {
      "Weapon": "Sniper"
    },
    "AttackFrontal": null,
    "TakeCover": null,
    "-RenderInfantry": null,
    "RenderInfantryProne": {
      "IdleAnimations": "idle1,idle2",
      "StandAnimations": "stand,stand2"
    },
    "Cloak": {
      "InitialDelay": 250,
      "CloakDelay": 120,
      "CloakSound": null,
      "UncloakSound": null,
      "UncloakOnMove": "yes"
    },
    "Captures": {
      "CaptureTypes": "CivilianBuilding",
      "Sabotage": "no",
      "SabotageHPRemoval": 0
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
      "Owner": "soviet",
      "Hotkey": "u"
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
    "Armament": {
      "Weapon": "TorpTube",
      "LocalOffset": "0,-171,0, 0,171,0",
      "FireDelay": 2
    },
    "AttackFrontal": null,
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
      "Owner": "soviet",
      "Hotkey": "m"
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
    "Armament": {
      "Weapon": "SubMissile",
      "LocalOffset": "0,-171,0, 0,171,0",
      "FireDelay": 2
    },
    "AttackFrontal": null,
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
      "Owner": "allies",
      "Hotkey": "r"
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
      "ROT": 7,
      "Offset": 3410128
    },
    "Armament@PRIMARY": {
      "Weapon": "Stinger",
      "LocalOffset": "0,-100,0, 0,100,0",
      "LocalYaw": "64, -64"
    },
    "Armament@SECONDARY": {
      "Weapon": "DepthCharge",
      "LocalOffset": "0,-100,0, 0,100,0",
      "LocalYaw": "80, -80"
    },
    "AttackTurreted": null,
    "Selectable": {
      "Bounds": 3838
    },
    "RenderUnit": null,
    "WithTurret": null,
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
      "Owner": "allies",
      "Hotkey": "c"
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
      "ROT": 3,
      "Speed": 3
    },
    "RevealsShroud": {
      "Range": 7
    },
    "Turreted@PRIMARY": {
      "Turret": "primary",
      "Offset": -8640128,
      "ROT": 3
    },
    "Turreted@SECONDARY": {
      "Turret": "secondary",
      "Offset": 7680128,
      "ROT": 3
    },
    "Armament@PRIMARY": {
      "Turret": "primary",
      "Weapon": "8Inch",
      "LocalOffset": "480,-100,40, 480,100,40",
      "Recoil": 171,
      "RecoilRecovery": 34
    },
    "Armament@SECONDARY": {
      "Name": "secondary",
      "Turret": "secondary",
      "Weapon": "8Inch",
      "LocalOffset": "480,-100,40, 480,100,40",
      "Recoil": 171,
      "RecoilRecovery": 34
    },
    "AttackTurreted": null,
    "WithMuzzleFlash@PRIMARY": null,
    "WithMuzzleFlash@SECONDARY": {
      "Armament": "secondary"
    },
    "Selectable": {
      "Bounds": 4444
    },
    "RenderUnit": null,
    "WithTurret@PRIMARY": {
      "Turret": "primary"
    },
    "WithTurret@SECONDARY": {
      "Turret": "secondary"
    },
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
      "Owner": "allies,soviet",
      "Hotkey": "t"
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
      "Owner": "allies",
      "Hotkey": "b"
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
      "ROT": 7,
      "Offset": 51200
    },
    "Armament@PRIMARY": {
      "Weapon": "2Inch",
      "LocalOffset": 208048
    },
    "Armament@SECONDARY": {
      "Name": "secondary",
      "Weapon": "DepthCharge"
    },
    "AttackTurreted": null,
    "WithMuzzleFlash@PRIMARY": null,
    "Selectable": {
      "Bounds": 3232
    },
    "RenderUnit": null,
    "WithTurret": null,
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
      "Owner": "soviet",
      "Hotkey": "v"
    },
    "Valued": {
      "Cost": 900
    },
    "Tooltip": {
      "Name": "V2 Rocket",
      "Description": "Long-range rocket artillery.\\n  Strong vs Infantry, Buildings\\n  Weak vs Tanks, Aircraft"
    },
    "Health": {
      "HP": 200
    },
    "Armor": {
      "Type": "Light"
    },
    "Mobile": {
      "Speed": 6
    },
    "RevealsShroud": {
      "Range": 5
    },
    "Armament": {
      "Weapon": "SCUD"
    },
    "AttackFrontal": null,
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
      "Owner": "allies",
      "Hotkey": "l"
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
    "Armament": {
      "Weapon": "25mm",
      "Recoil": 85,
      "RecoilRecovery": 25,
      "LocalOffset": 768090
    },
    "AttackTurreted": null,
    "WithMuzzleFlash": null,
    "RenderUnit": null,
    "WithTurret": null,
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
      "Owner": "allies",
      "Hotkey": "m"
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
    "Armament": {
      "Weapon": "90mm",
      "Recoil": 128,
      "RecoilRecovery": 38,
      "LocalOffset": 720080
    },
    "AttackTurreted": null,
    "WithMuzzleFlash": null,
    "RenderUnit": null,
    "WithTurret": null,
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
      "Owner": "soviet",
      "Hotkey": "h"
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
    "Armament": {
      "Weapon": "105mm",
      "Recoil": 128,
      "RecoilRecovery": 38,
      "LocalOffset": "768,85,90, 768,-85,90"
    },
    "AttackTurreted": null,
    "WithMuzzleFlash": null,
    "RenderUnit": null,
    "WithTurret": null,
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
      "Owner": "soviet",
      "Hotkey": "m"
    },
    "Valued": {
      "Cost": 1800
    },
    "CustomBuildTimeValue": {
      "Value": 2225
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
      "ROT": 2
    },
    "Armament@PRIMARY": {
      "Weapon": "120mm",
      "LocalOffset": "900,180,340, 900,-180,340",
      "Recoil": 171,
      "RecoilRecovery": 30
    },
    "Armament@SECONDARY": {
      "Name": "secondary",
      "Weapon": "MammothTusk",
      "LocalOffset": "-85,384,340, -85,-384,340",
      "LocalYaw": -100100,
      "Recoil": 43
    },
    "AttackTurreted": null,
    "WithMuzzleFlash@PRIMARY": null,
    "RenderUnit": null,
    "WithTurret": null,
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
      "Owner": "allies",
      "Hotkey": "r"
    },
    "Valued": {
      "Cost": 800
    },
    "Tooltip": {
      "Name": "Artillery",
      "Description": "Long-range artillery.\\n  Strong vs Infantry, Buildings\\n  Weak vs Tanks, Aircraft"
    },
    "Health": {
      "HP": 100
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
    "Armament": {
      "Weapon": "155mm",
      "LocalOffset": 6240208
    },
    "AttackFrontal": null,
    "WithMuzzleFlash": null,
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
      "Owner": "allies,soviet",
      "Hotkey": "e"
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
    "RenderHarvester": {
      "ImagesByFullness": "harvempty, harvhalf, harv"
    },
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
      "Owner": "allies,soviet",
      "Hotkey": "b"
    },
    "CustomBuildTimeValue": {
      "Value": 2000
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
      "Owner": "allies",
      "Hotkey": "n"
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
      "ROT": 10,
      "Offset": 85
    },
    "Armament": {
      "Weapon": "M60mg"
    },
    "AttackTurreted": null,
    "WithMuzzleFlash": null,
    "RenderUnit": null,
    "WithTurret": null,
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
      "Owner": "soviet",
      "Hotkey": "c"
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
    "Armament": {
      "Weapon": "M60mg",
      "LocalOffset": 171
    },
    "AttackFrontal": null,
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
      "Owner": "soviet",
      "Hotkey": "p"
    },
    "Valued": {
      "Cost": 800
    },
    "Tooltip": {
      "Name": "Minelayer (Anti-Personnel)",
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
    "DetectCloaked": {
      "Range": 5
    },
    "RenderDetectionCircle": null,
    "unitClass": "vehicles",
    "name": "MNLY.AP"
  },
  {
    "Inherits": "^Tank",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 30,
      "Prerequisites": "fix",
      "Owner": "allies",
      "Hotkey": "i"
    },
    "Valued": {
      "Cost": 800
    },
    "Tooltip": {
      "Name": "Minelayer (Anti-Tank)",
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
    "DetectCloaked": {
      "Range": 5
    },
    "RenderDetectionCircle": null,
    "unitClass": "vehicles",
    "name": "MNLY.AT"
  },
  {
    "Inherits": "^Vehicle",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 120,
      "Prerequisites": "weap",
      "Owner": "allies, soviet",
      "Hotkey": "u"
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
    "Inherits": "^Vehicle",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 160,
      "Prerequisites": "atek",
      "Owner": "allies",
      "Hotkey": "y"
    },
    "Valued": {
      "Cost": 1200
    },
    "Tooltip": {
      "Name": "Mobile Gap Generator",
      "Description": "Regenerates the shroud nearby, \\nobscuring the area.\\n  Unarmed"
    },
    "Health": {
      "HP": 220
    },
    "Armor": {
      "Type": "Heavy"
    },
    "Mobile": {
      "Speed": 6
    },
    "RenderUnit": null,
    "WithIdleOverlay@SPINNER": {
      "Offset": -2990171,
      "Sequence": "spinner"
    },
    "AttackMove": {
      "JustMove": "yes"
    },
    "RevealsShroud": {
      "Range": 6
    },
    "CreatesShroud": {
      "Range": 6
    },
    "RenderShroudCircle": null,
    "Explodes": {
      "Weapon": "UnitExplodeSmall",
      "EmptyWeapon": "UnitExplodeSmall"
    },
    "LeavesHusk": {
      "HuskActor": "MGG.Husk"
    },
    "unitClass": "vehicles",
    "name": "MGG"
  },
  {
    "Inherits": "^Vehicle",
    "Valued": {
      "Cost": 1000
    },
    "Tooltip": {
      "Name": "Mobile Radar Jammer",
      "Description": "Jams nearby enemy radar domes\\nand deflects incoming missiles.\\n  Unarmed"
    },
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 150,
      "Prerequisites": "atek",
      "Owner": "allies",
      "Hotkey": "k"
    },
    "Health": {
      "HP": 220
    },
    "Armor": {
      "Type": "Heavy"
    },
    "Mobile": {
      "Speed": 6
    },
    "RevealsShroud": {
      "Range": 6
    },
    "RenderUnit": null,
    "WithIdleOverlay@SPINNER": {
      "Sequence": "spinner",
      "Offset": -2560256
    },
    "AttackMove": {
      "JustMove": "yes"
    },
    "Explodes": {
      "Weapon": "UnitExplodeSmall",
      "EmptyWeapon": "UnitExplodeSmall"
    },
    "JamsRadar": {
      "Range": 15
    },
    "JamsMissiles": {
      "Range": 4
    },
    "RenderJammerCircle": null,
    "unitClass": "vehicles",
    "name": "MRJ"
  },
  {
    "Inherits": "^Tank",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 130,
      "Prerequisites": "tsla,stek",
      "Owner": "soviet",
      "Hotkey": "t"
    },
    "Valued": {
      "Cost": 1350
    },
    "Tooltip": {
      "Name": "Tesla Tank",
      "Description": "Tank with mounted tesla coil.\\n  Strong vs Infantry, Vehicles\\n  and Buildings  \\n  Weak vs Aircraft"
    },
    "Health": {
      "HP": 400
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
    "Armament": {
      "Weapon": "TTankZap",
      "LocalOffset": 213
    },
    "AttackFrontal": null,
    "RenderUnit": null,
    "WithIdleOverlay@SPINNER": {
      "Sequence": "spinner"
    },
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
      "Owner": "soviet",
      "Hotkey": "k"
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
      "ROT": 5,
      "Offset": -2980298
    },
    "Armament": {
      "Weapon": "FLAK-23",
      "Recoil": 85,
      "LocalOffset": 5120192
    },
    "AttackTurreted": null,
    "WithMuzzleFlash": null,
    "RenderUnit": null,
    "WithTurret": null,
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
      "Owner": "soviet",
      "Hotkey": "o"
    },
    "Valued": {
      "Cost": 2500
    },
    "Tooltip": {
      "Name": "Demolition Truck",
      "Description": "Demolition Truck, actively armed with explosives.\\n  Strong vs Everything\\n  Weak vs Everything"
    },
    "Health": {
      "HP": 50
    },
    "Armor": {
      "Type": "Light"
    },
    "Mobile": {
      "Speed": 6
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
      "Prerequisites": "atek,pdox",
      "Owner": "allies",
      "Hotkey": "j"
    },
    "Valued": {
      "Cost": 1350
    },
    "Tooltip": {
      "Name": "Chrono Tank",
      "Description": "Chrono Tank, teleports to areas within range.\\n  Strong vs Vehicles, Buildings\\n  Weak vs Aircraft"
    },
    "Selectable": {
      "Bounds": 2828
    },
    "Health": {
      "HP": 400
    },
    "Armor": {
      "Type": "Light"
    },
    "Mobile": {
      "Speed": 8,
      "Crushes": "wall, atmine, crate, infantry"
    },
    "RevealsShroud": {
      "Range": 6
    },
    "RenderUnit": null,
    "AutoTarget": null,
    "Armament@PRIMARY": {
      "Weapon": "ChronoTusk",
      "LocalOffset": "0,-171,0",
      "LocalYaw": 100
    },
    "Armament@SECONDARY": {
      "Weapon": "ChronoTusk",
      "LocalOffset": 1710,
      "LocalYaw": -100
    },
    "AttackFrontal": null,
    "ChronoshiftDeploy": null,
    "unitClass": "vehicles",
    "name": "CTNK"
  },
  {
    "Inherits": "^Tank",
    "Buildable": {
      "Queue": "Vehicle",
      "BuildPaletteOrder": 150,
      "Prerequisites": "fix,stek",
      "Owner": "soviet",
      "Hotkey": "q"
    },
    "Valued": {
      "Cost": 2500
    },
    "Tooltip": {
      "Name": "MAD Tank",
      "Description": "Deals seismic damage to nearby vehicles\\nand structures.\\n  Strong vs Vehicles, Buildings\\n  Weak vs Infantry"
    },
    "Health": {
      "HP": 900
    },
    "Armor": {
      "Type": "Heavy"
    },
    "Mobile": {
      "Speed": 4,
      "Crushes": "wall, atmine, crate, infantry"
    },
    "RevealsShroud": {
      "Range": 6
    },
    "Selectable": {
      "Bounds": "44,38,0,-4"
    },
    "RenderUnit": null,
    "AttackMove": {
      "JustMove": true
    },
    "Explodes": {
      "Weapon": "UnitExplodeSmall"
    },
    "MadTank": null,
    "-EjectOnDeath": null,
    "TargetableUnit": {
      "TargetTypes": "Ground, MADTank"
    },
    "unitClass": "vehicles",
    "name": "QTNK"
  }
]