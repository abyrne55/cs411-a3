## Cannabis Wrapper API 

There's unfortunately very few publicly-accessible APIs for cannabis strain information, so we created a simple Django-based API that wraps around a CSV file (data/strains-kushy_api.2017-11-14.csv) obtained from the now-defunct Kushy API.

The API is currently publicly-accessible via the URL http://strains.n-x.win/api. Here's a few example querys

### Show the first 5 strains in the database
Request: `GET /api`

Response:
```json
[
  {
    "id": 1,
    "name": "100 OG",
    "description": "",
    "strain_type": "Hybrid",
    "effects": "Focused",
    "ailment": "Depression",
    "flavor": "Citrus"
  },
 ...
  {
    "id": 6,
    "name": "Afghan Big Bud",
    "description": "",
    "strain_type": "Indica",
    "effects": "Euphoric, Happy, Talkative, Relaxed, Sleepy, Dry Mouth, Paranoid",
    "ailment": "Stress, Pain, Nausea, Insomnia, Depression",
    "flavor": "Lemon, Lavender"
  }
]
```

### Show details of strain #3
Request: `GET /api/strain/3`

Response:
```json
{
  "id": 3,
  "name": "A-10",
  "description": "",
  "strain_type": "Indica",
  "effects": "Relaxed, Happy, Uplifted, Energetic, Sleepy, Dry Mouth, Paranoid",
  "ailment": "Stress, Insomnia, Pain, Muscle Spasms, Depression",
  "flavor": "Citrus, Sweet"
}
```

### Search for strains with a "tingly" effect
Request: `GET /api/search?effects=tingly`

Response:
```json
[
  {
    "id": 27,
    "name": "Arabian Gold",
    "description": "",
    "strain_type": "Hybrid",
    "effects": "Euphoric, Tingly, Sleepy, Creative, Paranoid",
    "ailment": "Stress, Insomnia, Pain",
    "flavor": ""
  },
  {
    "id": 40,
    "name": "Big Wreck",
    "description": "",
    "strain_type": "Hybrid",
    "effects": "Euphoric, Relaxed, Uplifted, Tingly, Happy, Dry Mouth, Paranoid",
    "ailment": "Stress, Insomnia, Depression, Lack of Appetite, Muscle Spasms",
    "flavor": "Earthy"
  },
 ...
  {
    "id": 111,
    "name": "Deep Purple",
    "description": "",
    "strain_type": "Hybrid",
    "effects": "Relaxed, Euphoric, Sleepy, Happy, Tingly, Dry Mouth, Anxious",
    "ailment": "Stress, Pain, Depression, Insomnia, Lack of Appetite",
    "flavor": "Grape, Earthy, Sweet"
  }
]
```

### Search for hybrid strains with "afghan" in the name
Request: `GET /api/search?strain_type=hybrid&name=afghan`

Response:
```json
[
  {
    "id": 5,
    "name": "Afghani Bullrider",
    "description": "",
    "strain_type": "Hybrid",
    "effects": "Uplifted, Relaxed, Happy, Euphoric, Dry Mouth, Paranoid",
    "ailment": "Stress, Depression, Insomnia, Pain",
    "flavor": "Sweet, Pine, Earthy"
  },
  {
    "id": 306,
    "name": "Pure Afghan",
    "description": "",
    "strain_type": "Hybrid",
    "effects": "Relaxed, Sleepy, Happy, Hungry, Creative, Dry Mouth, Paranoid",
    "ailment": "Insomnia, Pain, Stress, Depression",
    "flavor": "Earthy"
  },
 ...
  {
    "id": 1761,
    "name": "Blue Afghani",
    "description": "",
    "strain_type": "Hybrid",
    "effects": "Relaxed, Euphoric, Hungry, Creative, Happy, Dry Mouth, Paranoid",
    "ailment": "Lack of Appetite, Stress, Insomnia, Depression",
    "flavor": "Blueberry"
  }
]
```

