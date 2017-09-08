const cityList = {
  "Aarhus": "aarhus",
  "Adelaide": "adelaide",
  "Albuquerque": "albuquerque",
  "Almaty": "almaty",
  "Amsterdam": "amsterdam",
  "Anchorage": "anchorage",
  "Andorra": "andorra",
  "Ankara": "ankara",
  "Asheville": "asheville",
  "Asuncion": "asuncion",
  "Athens": "athens",
  "Atlanta": "atlanta",
  "Auckland": "auckland",
  "Austin": "austin",
  "Baku": "baku",
  "Bali": "bali",
  "Bangkok": "bangkok",
  "Barcelona": "barcelona",
  "Beijing": "beijing",
  "Beirut": "beirut",
  "Belfast": "belfast",
  "Belgrade": "belgrade",
  "Belize City": "belize-city",
  "Bengaluru": "bengaluru",
  "Bergen": "bergen",
  "Berlin": "berlin",
  "Bern": "bern",
  "Birmingham": "birmingham",
  "Birmingham, AL": "birmingham-al",
  "Bogota": "bogota",
  "Boise": "boise",
  "Bologna": "bologna",
  "Bordeaux": "bordeaux",
  "Boston": "boston",
  "Boulder": "boulder",
  "Bozeman": "bozeman",
  "Bratislava": "bratislava",
  "Brighton": "brighton",
  "Brisbane": "brisbane",
  "Bristol": "bristol",
  "Brno": "brno",
  "Brussels": "brussels",
  "Bucharest": "bucharest",
  "Budapest": "budapest",
  "Buenos Aires": "buenos-aires",
  "Buffalo": "buffalo",
  "Cairo": "cairo",
  "Calgary": "calgary",
  "Cambridge": "cambridge",
  "Cape Town": "cape-town",
  "Caracas": "caracas",
  "Cardiff": "cardiff",
  "Casablanca": "casablanca",
  "Charleston": "charleston",
  "Charlotte": "charlotte",
  "Chattanooga": "chattanooga",
  "Chennai": "chennai",
  "Chiang Mai": "chiang-mai",
  "Chicago": "chicago",
  "Chisinau": "chisinau",
  "Christchurch": "christchurch",
  "Cincinnati": "cincinnati",
  "Cleveland": "cleveland",
  "Cluj-Napoca": "cluj-napoca",
  "Cologne": "cologne",
  "Colorado Springs": "colorado-springs",
  "Columbus": "columbus",
  "Copenhagen": "copenhagen",
  "Cork": "cork",
  "Curitiba": "curitiba",
  "Dallas": "dallas",
  "Dar es Salaam": "dar-es-salaam",
  "Delhi": "delhi",
  "Denver": "denver",
  "Des Moines": "des-moines",
  "Detroit": "detroit",
  "Doha": "doha",
  "Dresden": "dresden",
  "Dubai": "dubai",
  "Dublin": "dublin",
  "Dusseldorf": "dusseldorf",
  "Edinburgh": "edinburgh",
  "Edmonton": "edmonton",
  "Eindhoven": "eindhoven",
  "Eugene": "eugene",
  "Florence": "florence",
  "Florianopolis": "florianopolis",
  "Fort Collins": "fort-collins",
  "Frankfurt": "frankfurt",
  "Fukuoka": "fukuoka",
  "Galway": "gaillimh",
  "Gdansk": "gdansk",
  "Geneva": "geneva",
  "Gibraltar": "gibraltar",
  "Glasgow": "glasgow",
  "Gothenburg": "gothenburg",
  "Grenoble": "grenoble",
  "Guadalajara": "guadalajara",
  "Guatemala City": "guatemala-city",
  "Halifax": "halifax",
  "Hamburg": "hamburg",
  "Hannover": "hannover",
  "Havana": "havana",
  "Helsinki": "helsinki",
  "Ho Chi Minh City": "ho-chi-minh-city",
  "Hong Kong": "hong-kong",
  "Honolulu": "honolulu",
  "Houston": "houston",
  "Hyderabad": "hyderabad",
  "Indianapolis": "indianapolis",
  "Innsbruck": "innsbruck",
  "Istanbul": "istanbul",
  "Jacksonville": "jacksonville",
  "Jakarta": "jakarta",
  "Johannesburg": "johannesburg",
  "Kansas City": "kansas-city",
  "Karlsruhe": "karlsruhe",
  "Kathmandu": "kathmandu",
  "Kiev": "kiev",
  "Kingston": "kingston",
  "Knoxville": "knoxville",
  "Krakow": "krakow",
  "Kuala Lumpur": "kuala-lumpur",
  "Kyoto": "kyoto",
  "Lagos": "lagos",
  "La Paz": "la-paz",
  "Las Palmas de Gran Canaria": "las-palmas-de-gran-canaria",
  "Las Vegas": "las-vegas",
  "Lausanne": "lausanne",
  "Leeds": "leeds",
  "Leipzig": "leipzig",
  "Lille": "lille",
  "Lima": "lima",
  "Lisbon": "lisbon",
  "Liverpool": "liverpool",
  "Ljubljana": "ljubljana",
  "London": "london",
  "Los Angeles": "los-angeles",
  "Louisville": "louisville",
  "Luxembourg": "luxembourg",
  "Lviv": "lviv",
  "Lyon": "lyon",
  "Madison": "madison",
  "Madrid": "madrid",
  "Malaga": "malaga",
  "Malmo": "malmo",
  "Managua": "managua",
  "Manchester": "manchester",
  "Manila": "manila",
  "Marseille": "marseille",
  "Medellin": "medellin",
  "Melbourne": "melbourne",
  "Memphis": "memphis",
  "Mexico City": "mexico-city",
  "Miami": "miami",
  "Milan": "milan",
  "Milwaukee": "milwaukee",
  "Minneapolis-Saint Paul": "minneapolis-saint-paul",
  "Minsk": "minsk",
  "Montevideo": "montevideo",
  "Montreal": "montreal",
  "Moscow": "moscow",
  "Mumbai": "mumbai",
  "Munich": "munich",
  "Nairobi": "nairobi",
  "Nantes": "nantes",
  "Naples": "naples",
  "Nashville": "nashville",
  "New Orleans": "new-orleans",
  "New York": "new-york",
  "Nice": "nice",
  "Nicosia": "nicosia",
  "Oklahoma City": "oklahoma-city",
  "Omaha": "omaha",
  "Orlando": "orlando",
  "Osaka": "osaka",
  "Oslo": "oslo",
  "Ottawa": "ottawa",
  "Oulu": "oulu",
  "Oxford": "oxford",
  "Palo Alto": "palo-alto",
  "Panama": "panama",
  "Paris": "paris",
  "Perth": "perth",
  "Philadelphia": "philadelphia",
  "Phnom Penh": "phnom-penh",
  "Phoenix": "phoenix",
  "Phuket": "phuket",
  "Pittsburgh": "pittsburgh",
  "Portland, ME": "portland-me",
  "Portland, OR": "portland-or",
  "Porto": "porto",
  "Porto Alegre": "porto-alegre",
  "Prague": "prague",
  "Providence": "providence",
  "Quebec": "quebec",
  "Quito": "quito",
  "Raleigh": "raleigh",
  "Reykjavik": "reykjavik",
  "Richmond": "richmond",
  "Riga": "riga",
  "Rio De Janeiro": "rio-de-janeiro",
  "Riyadh": "riyadh",
  "Rochester": "rochester",
  "Rome": "rome",
  "Rotterdam": "rotterdam",
  "Saint Petersburg": "saint-petersburg",
  "Salt Lake City": "salt-lake-city",
  "San Antonio": "san-antonio",
  "San Diego": "san-diego",
  "San Francisco Bay Area": "san-francisco-bay-area",
  "San Jose": "san-jose",
  "San Juan": "san-juan",
  "San Luis Obispo": "san-luis-obispo",
  "San Salvador": "san-salvador",
  "Santiago": "santiago",
  "Santo Domingo": "santo-domingo",
  "Sao Paulo": "sao-paulo",
  "Sarajevo": "sarajevo",
  "Saskatoon": "saskatoon",
  "Seattle": "seattle",
  "Seoul": "seoul",
  "Seville": "seville",
  "Shanghai": "shanghai",
  "Singapore": "singapore",
  "Skopje": "skopje",
  "Sofia": "sofia",
  "St. Louis": "st-louis",
  "Stockholm": "stockholm",
  "Stuttgart": "stuttgart",
  "Sydney": "sydney",
  "Taipei": "taipei",
  "Tallinn": "tallinn",
  "Tampa Bay Area": "tampa-bay-area",
  "Tampere": "tampere",
  "Tartu": "tartu",
  "Tashkent": "tashkent",
  "Tbilisi": "tbilisi",
  "Tehran": "tehran",
  "Tel Aviv": "tel-aviv",
  "The Hague": "the-hague",
  "Thessaloniki": "thessaloniki",
  "Tokyo": "tokyo",
  "Toronto": "toronto",
  "Toulouse": "toulouse",
  "Tunis": "tunis",
  "Turin": "turin",
  "Turku": "turku",
  "Uppsala": "uppsala",
  "Utrecht": "utrecht",
  "Valencia": "valencia",
  "Valletta": "valletta",
  "Vancouver": "vancouver",
  "Victoria": "victoria",
  "Vienna": "vienna",
  "Vilnius": "vilnius",
  "Warsaw": "warsaw",
  "Washington, D.C.": "washington-dc",
  "Wellington": "wellington",
  "Winnipeg": "winnipeg",
  "Wroclaw": "wroclaw",
  "Yerevan": "yerevan",
  "Zagreb": "zagreb",
  "Zurich": "zurich"
}

export default cityList;
