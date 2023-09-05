export const MAP_STYLES = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];

export const CRIME_TYPES = [
  {
    text: 'PHYSICAL INJURIES',
    value: 'PHYSICALINJURIES',
    icon: 'noindex.png'
  },
  {
    text: 'THEFT',
    value: 'THEFT',
    icon: 'theft.png'
  },
  {
    text: 'ROBBERY',
    value: 'ROBBERY',
    icon: 'roberry.png'
  },
  {
    text: 'HOMICIDE',
    value: 'HOMICIDE',
    icon: 'homicide.png'
  },
  {
    text: 'RAPE',
    value: 'RAPE',
    icon: 'rape.png'
  },
]

export const AREAS =
  [
    {
      "DateComtd": "1/2/2018",
      "TimeComtd": "10:30 PM",
      "Barangay": "Asin Road",
      "PlaceType": "Street_Lighted",
      "X": 120.569668,
      "Y": 16.402218,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "1/3/2018",
      "TimeComtd": "5:00 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Park",
      "X": 120.594912,
      "Y": 16.409128,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "1/5/2018",
      "TimeComtd": "10:30 PM",
      "Barangay": "AZCKO",
      "PlaceType": "Street_Lighted",
      "X": 120.593483,
      "Y": 16.412755,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "1/6/2018",
      "TimeComtd": "11:45 AM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Street_Lighted",
      "X": 120.595378,
      "Y": 16.411122,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "1/8/2018",
      "TimeComtd": "6:00 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.60039,
      "Y": 16.409483,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "1/6/2018",
      "TimeComtd": "8:16 PM",
      "Barangay": "Lualhati",
      "PlaceType": "Street_Lighted",
      "X": 120.620805,
      "Y": 16.413926,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "1/12/2018",
      "TimeComtd": "9:30 PM",
      "Barangay": "Bayan Park Village",
      "PlaceType": "Street_Lighted",
      "X": 120.604981,
      "Y": 16.42739,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "1/14/2018",
      "TimeComtd": "6:10 PM",
      "Barangay": "Kagitingan",
      "PlaceType": "Street_Lighted",
      "X": 120.59573,
      "Y": 16.41524,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "1/21/2018",
      "TimeComtd": "12:30 AM",
      "Barangay": "Magsaysay Upper",
      "PlaceType": "Street_Lighted",
      "X": 120.595624,
      "Y": 16.415948,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "1/25/2018",
      "TimeComtd": "12:40 PM",
      "Barangay": "Gibraltar",
      "PlaceType": "Street_Lighted",
      "X": 120.623087,
      "Y": 16.418723,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "1/25/2018",
      "TimeComtd": "6:00 PM",
      "Barangay": "Loakan Proper",
      "PlaceType": "Street_Lighted",
      "X": 120.619985,
      "Y": 16.379001,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "1/28/2018",
      "TimeComtd": "5:00 PM",
      "Barangay": "Magsaysay Upper",
      "PlaceType": "Street_Lighted",
      "X": 120.595419,
      "Y": 16.41478,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "2/4/2018",
      "TimeComtd": "9:20 AM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Park",
      "X": 120.595521,
      "Y": 16.409815,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "2/4/2018",
      "TimeComtd": "4:00 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Park",
      "X": 120.595711,
      "Y": 16.409318,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "2/9/2018",
      "TimeComtd": "10:00 PM",
      "Barangay": "AZCKO",
      "PlaceType": "Street_Lighted",
      "X": 120.594027,
      "Y": 16.41273,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "2/10/2018",
      "TimeComtd": "12:45 AM",
      "Barangay": "Kayang-Hilltop",
      "PlaceType": "Street_Lighted",
      "X": 120.591712,
      "Y": 16.414616,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "2/6/2018",
      "TimeComtd": "6:00 PM",
      "Barangay": "Kayang Extension",
      "PlaceType": "Street_Lighted",
      "X": 120.590807,
      "Y": 16.414315,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "2/8/2018",
      "TimeComtd": "11:00 AM",
      "Barangay": "Kayang Extension",
      "PlaceType": "Street_Lighted",
      "X": 120.59035,
      "Y": 16.414332,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "2/8/2018",
      "TimeComtd": "8:00 PM",
      "Barangay": "Kayang Extension",
      "PlaceType": "Overpass",
      "X": 120.590808,
      "Y": 16.413116,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "2/1/2018",
      "TimeComtd": "1:20 AM",
      "Barangay": "New Lucban",
      "PlaceType": "Street_Lighted",
      "X": 120.597558,
      "Y": 16.42116,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "2/15/2018",
      "TimeComtd": "4:30 PM",
      "Barangay": "Quezon Hill Subd. Middle",
      "PlaceType": "Street_Lighted",
      "X": 120.574661,
      "Y": 16.415813,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "2/17/2018",
      "TimeComtd": "9:30 AM",
      "Barangay": "Happy Homes (Lucban)",
      "PlaceType": "Street_Lighted",
      "X": 120.593618,
      "Y": 16.427235,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "1/26/2018",
      "TimeComtd": "9:00 PM",
      "Barangay": "Kayang Extension",
      "PlaceType": "Street_Lighted",
      "X": 120.590805,
      "Y": 16.41431,
      "CrimeCategory": "RAPE"
    },
    {
      "DateComtd": "2/16/2018",
      "TimeComtd": "5:00 AM",
      "Barangay": "Magsaysay Upper",
      "PlaceType": "Overpass",
      "X": 120.594852,
      "Y": 16.414068,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "2/22/2018",
      "TimeComtd": "1:30 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.597109,
      "Y": 16.41265,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "2/24/2018",
      "TimeComtd": "2:30 AM",
      "Barangay": "Asin Road",
      "PlaceType": "Street_Lighted",
      "X": 120.564599,
      "Y": 16.40471,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "2/25/2018",
      "TimeComtd": "5:00 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Street_Lighted",
      "X": 120.594485,
      "Y": 16.412006,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "2/26/2018",
      "TimeComtd": "10:30 AM",
      "Barangay": "AZCKO",
      "PlaceType": "Overpass",
      "X": 120.59459,
      "Y": 16.413474,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "2/25/2018",
      "TimeComtd": "9:00 PM",
      "Barangay": "Bakakeng Norte/Sur",
      "PlaceType": "Construction Site",
      "X": 120.590125,
      "Y": 16.384516,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "2/28/2018",
      "TimeComtd": "6:00 PM",
      "Barangay": "AZCKO",
      "PlaceType": "Park",
      "X": 120.594654,
      "Y": 16.413026,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "2/11/2018",
      "TimeComtd": "12:10 AM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Street_Lighted",
      "X": 120.590821,
      "Y": 16.411096,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "3/5/2018",
      "TimeComtd": "8:15 PM",
      "Barangay": "Cresencia Village",
      "PlaceType": "Street_Not Lighted",
      "X": 120.589038,
      "Y": 16.418356,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "3/7/2018",
      "TimeComtd": "1:06 PM",
      "Barangay": "General Luna Lower",
      "PlaceType": "Street_Lighted",
      "X": 120.597178,
      "Y": 16.414648,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "3/9/2018",
      "TimeComtd": "3:50 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Street_Lighted",
      "X": 120.596074,
      "Y": 16.410532,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "3/11/2018",
      "TimeComtd": "3:30 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Park",
      "X": 120.595664,
      "Y": 16.410861,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "3/11/2018",
      "TimeComtd": "3:45 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Park",
      "X": 120.595151,
      "Y": 16.410887,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "3/12/2018",
      "TimeComtd": "4:00 PM",
      "Barangay": "Quezon Hill Subd. Middle",
      "PlaceType": "Street_Lighted",
      "X": 120.573941,
      "Y": 16.416263,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "3/9/2018",
      "TimeComtd": "7:45 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Park",
      "X": 120.595943,
      "Y": 16.411946,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "3/22/2018",
      "TimeComtd": "10:15 PM",
      "Barangay": "Guisad Central",
      "PlaceType": "Street_Not Lighted",
      "X": 120.582803,
      "Y": 16.424721,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "3/24/2018",
      "TimeComtd": "6:00 PM",
      "Barangay": "Bakakeng Central",
      "PlaceType": "Street_Lighted",
      "X": 120.584723,
      "Y": 16.399922,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "4/4/2018",
      "TimeComtd": "12:40 AM",
      "Barangay": "Campo Filipino",
      "PlaceType": "Street_Lighted",
      "X": 120.588762,
      "Y": 16.415117,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "4/6/2018",
      "TimeComtd": "10:30 AM",
      "Barangay": "AZCKO",
      "PlaceType": "Street_Lighted",
      "X": 120.593698,
      "Y": 16.412729,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "4/13/2018",
      "TimeComtd": "10:00 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Park",
      "X": 120.594976,
      "Y": 16.411052,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "4/15/2018",
      "TimeComtd": "10:00 PM",
      "Barangay": "Saint Joseph Village",
      "PlaceType": "Street_Lighted",
      "X": 120.610652,
      "Y": 16.416875,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "4/21/2018",
      "TimeComtd": "2:00 AM",
      "Barangay": "General Luna Upper",
      "PlaceType": "Street_Lighted",
      "X": 120.602807,
      "Y": 16.411174,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "4/27/2018",
      "TimeComtd": "3:45 PM",
      "Barangay": "Kayang Extension",
      "PlaceType": "Street_Lighted",
      "X": 120.589693,
      "Y": 16.415329,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "5/7/2018",
      "TimeComtd": "6:40 PM",
      "Barangay": "AZCKO",
      "PlaceType": "Street_Lighted",
      "X": 120.593489,
      "Y": 16.413642,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "5/9/2018",
      "TimeComtd": "4:30 PM",
      "Barangay": "Magsaysay Upper",
      "PlaceType": "Behind Building",
      "X": 120.59482,
      "Y": 16.413707,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "5/13/2018",
      "TimeComtd": "1:00 AM",
      "Barangay": "Magsaysay Upper",
      "PlaceType": "Overpass",
      "X": 120.594694,
      "Y": 16.413552,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "3/2/2018",
      "TimeComtd": "9:00 PM",
      "Barangay": "Loakan Proper",
      "PlaceType": "Street_Not Lighted",
      "X": 120.614514,
      "Y": 16.373314,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "5/12/2018",
      "TimeComtd": "9:00 PM",
      "Barangay": "Teodora Alonzo",
      "PlaceType": "Street_Lighted",
      "X": 120.596029,
      "Y": 16.417616,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "5/21/2018",
      "TimeComtd": "12:20 AM",
      "Barangay": "Bakakeng Central",
      "PlaceType": "Street_Lighted",
      "X": 120.578753,
      "Y": 16.390906,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "5/23/2018",
      "TimeComtd": "11:40 PM",
      "Barangay": "Sto Tomas Proper",
      "PlaceType": "Street_Not Lighted",
      "X": 120.574315,
      "Y": 16.391669,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "5/31/2018",
      "TimeComtd": "4:00 AM",
      "Barangay": "Bakakeng Central",
      "PlaceType": "Street_Lighted",
      "X": 120.57239,
      "Y": 16.396048,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "6/5/2018",
      "TimeComtd": "9:30 PM",
      "Barangay": "Teodora Alonzo",
      "PlaceType": "Street_Lighted",
      "X": 120.597165,
      "Y": 16.420433,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "4/15/2018",
      "TimeComtd": "12:40 AM",
      "Barangay": "Bakakeng Central",
      "PlaceType": "Street_Lighted",
      "X": 120.579305,
      "Y": 16.392886,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "6/11/2018",
      "TimeComtd": "7:40 AM",
      "Barangay": "Kagitingan",
      "PlaceType": "Street_Lighted",
      "X": 120.595437,
      "Y": 16.414391,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "6/12/2018",
      "TimeComtd": "1:30 PM",
      "Barangay": "AZCKO",
      "PlaceType": "Street_Lighted",
      "X": 120.594373,
      "Y": 16.413641,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "6/16/2018",
      "TimeComtd": "7:30 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.598163,
      "Y": 16.4095,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "6/9/2018",
      "TimeComtd": "8:30 PM",
      "Barangay": "Rizal Monument Area",
      "PlaceType": "Street_Lighted",
      "X": 120.592219,
      "Y": 16.412171,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "6/17/2018",
      "TimeComtd": "4:00 AM",
      "Barangay": "Magsaysay Upper",
      "PlaceType": "Street_Lighted",
      "X": 120.595797,
      "Y": 16.41703,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "6/24/2018",
      "TimeComtd": "12:50 PM",
      "Barangay": "General Luna Lower",
      "PlaceType": "Street_Lighted",
      "X": 120.595845,
      "Y": 16.415082,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "6/25/2018",
      "TimeComtd": "9:30 PM",
      "Barangay": "Engineers Hill",
      "PlaceType": "Street_Lighted",
      "X": 120.600996,
      "Y": 16.406498,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "6/29/2018",
      "TimeComtd": "8:00 PM",
      "Barangay": "Bakakeng Norte/Sur",
      "PlaceType": "Street_Lighted",
      "X": 120.589823,
      "Y": 16.383642,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/1/2018",
      "TimeComtd": "10:35 AM",
      "Barangay": "Magsaysay Lower",
      "PlaceType": "Public Parking Area",
      "X": 120.595598,
      "Y": 16.417807,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "5/13/2018",
      "TimeComtd": "4:00 PM",
      "Barangay": "Mines View",
      "PlaceType": "Park",
      "X": 120.626849,
      "Y": 16.419627,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "6/29/2018",
      "TimeComtd": "3:15 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Park",
      "X": 120.594669,
      "Y": 16.408757,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/7/2018",
      "TimeComtd": "8:45 AM",
      "Barangay": "AZCKO",
      "PlaceType": "Street_Lighted",
      "X": 120.594908,
      "Y": 16.412633,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "7/6/2018",
      "TimeComtd": "12:15 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Public Parking Area",
      "X": 120.59674,
      "Y": 16.405227,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/10/2018",
      "TimeComtd": "3:40 AM",
      "Barangay": "Sto Tomas Proper",
      "PlaceType": "Street_Lighted",
      "X": 120.578262,
      "Y": 16.382361,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/12/2018",
      "TimeComtd": "12:40 AM",
      "Barangay": "Quirino Hill East",
      "PlaceType": "Street_Not Lighted",
      "X": 120.594427,
      "Y": 16.431301,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/14/2018",
      "TimeComtd": "11:59 AM",
      "Barangay": "Dontogan",
      "PlaceType": "Basketball Court",
      "X": 120.574649,
      "Y": 16.387653,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/11/2018",
      "TimeComtd": "11:30 AM",
      "Barangay": "Asin Road",
      "PlaceType": "Street_Lighted",
      "X": 120.564534,
      "Y": 16.409522,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/3/2018",
      "TimeComtd": "6:20 PM",
      "Barangay": "Kabayanihan",
      "PlaceType": "Street_Lighted",
      "X": 120.596615,
      "Y": 16.413666,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "8/6/2018",
      "TimeComtd": "1:30 AM",
      "Barangay": "Magsaysay Lower",
      "PlaceType": "Street_Lighted",
      "X": 120.594913,
      "Y": 16.417682,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/9/2018",
      "TimeComtd": "11:40 PM",
      "Barangay": "Magsaysay Upper",
      "PlaceType": "Overpass",
      "X": 120.594942,
      "Y": 16.413452,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "8/10/2018",
      "TimeComtd": "6:12 PM",
      "Barangay": "Harrison Carantes",
      "PlaceType": "Overpass",
      "X": 120.59498,
      "Y": 16.413429,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "8/13/2018",
      "TimeComtd": "7:40 AM",
      "Barangay": "City Camp Central",
      "PlaceType": "Street_Lighted",
      "X": 120.586264,
      "Y": 16.411248,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/15/2018",
      "TimeComtd": "12:04 AM",
      "Barangay": "M. Roxas",
      "PlaceType": "Street_Lighted",
      "X": 120.607623,
      "Y": 16.413605,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/16/2018",
      "TimeComtd": "11:30 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.598418,
      "Y": 16.410009,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/17/2018",
      "TimeComtd": "8:15 PM",
      "Barangay": "Victoria Village",
      "PlaceType": "Street_Lighted",
      "X": 120.576876,
      "Y": 16.414431,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/18/2018",
      "TimeComtd": "12:00 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.600093,
      "Y": 16.408298,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "8/20/2018",
      "TimeComtd": "7:10 PM",
      "Barangay": "General Luna Lower",
      "PlaceType": "Street_Lighted",
      "X": 120.595892,
      "Y": 16.415101,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "7/15/2018",
      "TimeComtd": "3:00 AM",
      "Barangay": "Bakakeng Norte/Sur",
      "PlaceType": "Street_Lighted",
      "X": 120.588771,
      "Y": 16.389145,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/28/2018",
      "TimeComtd": "12:50 PM",
      "Barangay": "General Luna Lower",
      "PlaceType": "Street_Lighted",
      "X": 120.597581,
      "Y": 16.414465,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "9/3/2018",
      "TimeComtd": "7:00 AM",
      "Barangay": "Lourdes Subdivision Ext.",
      "PlaceType": "Street_Lighted",
      "X": 120.584872,
      "Y": 16.41193,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "9/10/2018",
      "TimeComtd": "9:30 AM",
      "Barangay": "Military Cut-off",
      "PlaceType": "Street_Lighted",
      "X": 120.601498,
      "Y": 16.405494,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "9/9/2018",
      "TimeComtd": "10:00 PM",
      "Barangay": "Pacdal",
      "PlaceType": "Street_Lighted",
      "X": 120.620253,
      "Y": 16.421944,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "9/2/2018",
      "TimeComtd": "6:00 PM",
      "Barangay": "Holy Ghost Proper",
      "PlaceType": "Construction Site",
      "X": 120.600992,
      "Y": 16.412823,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "9/6/2018",
      "TimeComtd": "12:30 AM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.600299,
      "Y": 16.409855,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "9/11/2018",
      "TimeComtd": "11:30 PM",
      "Barangay": "Kabayanihan",
      "PlaceType": "Street_Lighted",
      "X": 120.596394,
      "Y": 16.414055,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "9/12/2018",
      "TimeComtd": "4:05 PM",
      "Barangay": "Malcolm Square-Perfecto",
      "PlaceType": "Park",
      "X": 120.595759,
      "Y": 16.413948,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "9/29/2018",
      "TimeComtd": "1:00 AM",
      "Barangay": "General Luna Upper",
      "PlaceType": "Street_Lighted",
      "X": 120.603303,
      "Y": 16.412754,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "9/29/2018",
      "TimeComtd": "11:50 PM",
      "Barangay": "General Luna Upper",
      "PlaceType": "Street_Lighted",
      "X": 120.603084,
      "Y": 16.413418,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/3/2018",
      "TimeComtd": "5:30 PM",
      "Barangay": "Loakan Proper",
      "PlaceType": "Street_Lighted",
      "X": 120.62582,
      "Y": 16.374877,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/5/2018",
      "TimeComtd": "1:20 AM",
      "Barangay": "Magsaysay Lower",
      "PlaceType": "Street_Lighted",
      "X": 120.594957,
      "Y": 16.417197,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/5/2018",
      "TimeComtd": "12:22 AM",
      "Barangay": "Kagitingan",
      "PlaceType": "Street_Lighted",
      "X": 120.596764,
      "Y": 16.416875,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "10/7/2018",
      "TimeComtd": "11:55 PM",
      "Barangay": "AZCKO",
      "PlaceType": "Street_Lighted",
      "X": 120.592301,
      "Y": 16.411783,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/15/2018",
      "TimeComtd": "10:20 AM",
      "Barangay": "Kabayanihan",
      "PlaceType": "Street_Lighted",
      "X": 120.596595,
      "Y": 16.413297,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "9/28/2018",
      "TimeComtd": "8:30 PM",
      "Barangay": "Magsaysay Upper",
      "PlaceType": "Street_Lighted",
      "X": 120.59574,
      "Y": 16.415481,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/26/2018",
      "TimeComtd": "12:40 AM",
      "Barangay": "Saint Joseph Village",
      "PlaceType": "Street_Lighted",
      "X": 120.608776,
      "Y": 16.415291,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "10/27/2018",
      "TimeComtd": "2:45 AM",
      "Barangay": "Greenwater Village",
      "PlaceType": "Construction Site",
      "X": 120.605301,
      "Y": 16.403515,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/28/2018",
      "TimeComtd": "11:00 PM",
      "Barangay": "Rizal Monument Area",
      "PlaceType": "Park",
      "X": 120.593667,
      "Y": 16.41175,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "11/7/2018",
      "TimeComtd": "5:13 PM",
      "Barangay": "San Luis Village",
      "PlaceType": "Cemetery",
      "X": 120.5755,
      "Y": 16.412683,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/27/2018",
      "TimeComtd": "1:00 AM",
      "Barangay": "AZCKO",
      "PlaceType": "Street_Lighted",
      "X": 120.592894,
      "Y": 16.413891,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "11/8/2018",
      "TimeComtd": "4:30 AM",
      "Barangay": "Cabinet Hill- Teachers Camp",
      "PlaceType": "Street_Lighted",
      "X": 120.607588,
      "Y": 16.413597,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/1/2018",
      "TimeComtd": "3:20 PM",
      "Barangay": "Kabayanihan",
      "PlaceType": "Street_Lighted",
      "X": 120.596651,
      "Y": 16.413739,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "11/16/2018",
      "TimeComtd": "7:50 PM",
      "Barangay": "Padre Zamora",
      "PlaceType": "Street_Lighted",
      "X": 120.592535,
      "Y": 16.417189,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "11/25/2018",
      "TimeComtd": "7:00 PM",
      "Barangay": "Camp 7",
      "PlaceType": "Street_Lighted",
      "X": 120.601115,
      "Y": 16.392391,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "11/26/2018",
      "TimeComtd": "4:00 PM",
      "Barangay": "Kayang Extension",
      "PlaceType": "Street_Lighted",
      "X": 120.590787,
      "Y": 16.414881,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "12/7/2018",
      "TimeComtd": "9:50 PM",
      "Barangay": "New Lucban",
      "PlaceType": "Street_Lighted",
      "X": 120.595222,
      "Y": 16.422137,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "11/23/2018",
      "TimeComtd": "11:00 AM",
      "Barangay": "New Lucban",
      "PlaceType": "Street_Lighted",
      "X": 120.596913,
      "Y": 16.421036,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "12/15/2018",
      "TimeComtd": "11:45 PM",
      "Barangay": "Dizon Subdivision",
      "PlaceType": "Street_Lighted",
      "X": 120.591914,
      "Y": 16.424034,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "12/17/2018",
      "TimeComtd": "3:15 PM",
      "Barangay": "Irisan",
      "PlaceType": "Street_Lighted",
      "X": 120.569849,
      "Y": 16.41617,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "12/20/2018",
      "TimeComtd": "8:20 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Park",
      "X": 120.593693,
      "Y": 16.411724,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "12/28/2018",
      "TimeComtd": "12:00 AM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Street_Lighted",
      "X": 120.595533,
      "Y": 16.41264,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "1/4/2019",
      "TimeComtd": "7:45 AM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.598086,
      "Y": 16.407595,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "1/6/2019",
      "TimeComtd": "7:40 PM",
      "Barangay": "Padre Zamora",
      "PlaceType": "Street_Lighted",
      "X": 120.591042,
      "Y": 16.417505,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "1/7/2019",
      "TimeComtd": "1:30 PM",
      "Barangay": "Bakakeng Central",
      "PlaceType": "Street_Lighted",
      "X": 120.576063,
      "Y": 16.392076,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/14/2018",
      "TimeComtd": "1:00 AM",
      "Barangay": "General Luna Upper",
      "PlaceType": "Street_Lighted",
      "X": 120.602837,
      "Y": 16.411109,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "1/8/2019",
      "TimeComtd": "3:50 PM",
      "Barangay": "Pacdal",
      "PlaceType": "Street_Lighted",
      "X": 120.616367,
      "Y": 16.418141,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "1/10/2019",
      "TimeComtd": "12:00 PM",
      "Barangay": "Saint Joseph Village",
      "PlaceType": "Basketball Court",
      "X": 120.61146,
      "Y": 16.416867,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "12/22/2018",
      "TimeComtd": "10:30 PM",
      "Barangay": "San Luis Village",
      "PlaceType": "Street_Lighted",
      "X": 120.578411,
      "Y": 16.410075,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "1/14/2019",
      "TimeComtd": "12:30 AM",
      "Barangay": "Sto Tomas Proper",
      "PlaceType": "Street_Lighted",
      "X": 120.575954,
      "Y": 16.389058,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "1/18/2019",
      "TimeComtd": "3:00 PM",
      "Barangay": "Saint Joseph Village",
      "PlaceType": "Street_Lighted",
      "X": 120.614772,
      "Y": 16.416133,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "1/19/2019",
      "TimeComtd": "10:51 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Street_Lighted",
      "X": 120.596255,
      "Y": 16.411916,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "1/22/2019",
      "TimeComtd": "8:20 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Street_Lighted",
      "X": 120.592625,
      "Y": 16.406814,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "1/28/2019",
      "TimeComtd": "11:10 AM",
      "Barangay": "Magsaysay Lower",
      "PlaceType": "Street_Lighted",
      "X": 120.596044,
      "Y": 16.417078,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "2/1/2019",
      "TimeComtd": "9:30 AM",
      "Barangay": "Kabayanihan",
      "PlaceType": "Street_Lighted",
      "X": 120.596837,
      "Y": 16.413153,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "2/2/2019",
      "TimeComtd": "10:40 PM",
      "Barangay": "Engineers Hill",
      "PlaceType": "Street_Not Lighted",
      "X": 120.602359,
      "Y": 16.406464,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "2/7/2019",
      "TimeComtd": "7:30 AM",
      "Barangay": "ABCR",
      "PlaceType": "Street_Lighted",
      "X": 120.598194,
      "Y": 16.41939,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "2/12/2019",
      "TimeComtd": "4:35 PM",
      "Barangay": "Salud Mitra",
      "PlaceType": "Street_Lighted",
      "X": 120.600726,
      "Y": 16.410139,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "2/18/2019",
      "TimeComtd": "8:20 AM",
      "Barangay": "Magsaysay Upper",
      "PlaceType": "Street_Lighted",
      "X": 120.594929,
      "Y": 16.413743,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "2/23/2019",
      "TimeComtd": "3:30 AM",
      "Barangay": "Magsaysay Lower",
      "PlaceType": "Public Parking Area",
      "X": 120.595593,
      "Y": 16.417802,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "2/25/2019",
      "TimeComtd": "8:34 AM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Park",
      "X": 120.594563,
      "Y": 16.409779,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "2/28/2019",
      "TimeComtd": "12:30 AM",
      "Barangay": "ABCR",
      "PlaceType": "Street_Lighted",
      "X": 120.597922,
      "Y": 16.419752,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "3/14/2019",
      "TimeComtd": "1:05 PM",
      "Barangay": "Holy Ghost Proper",
      "PlaceType": "Street_Lighted",
      "X": 120.599525,
      "Y": 16.416018,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "1/28/2019",
      "TimeComtd": "9:00 AM",
      "Barangay": "Irisan",
      "PlaceType": "Street_Lighted",
      "X": 120.566544,
      "Y": 16.40966,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "3/14/2019",
      "TimeComtd": "3:50 PM",
      "Barangay": "AZCKO",
      "PlaceType": "Street_Lighted",
      "X": 120.593841,
      "Y": 16.413769,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "3/30/2019",
      "TimeComtd": "11:00 AM",
      "Barangay": "Happy Homes (Lucban)",
      "PlaceType": "Street_Lighted",
      "X": 120.594381,
      "Y": 16.427213,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "4/6/2019",
      "TimeComtd": "1:15 AM",
      "Barangay": "Magsaysay Lower",
      "PlaceType": "Street_Not Lighted",
      "X": 120.59415,
      "Y": 16.427048,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "3/30/2019",
      "TimeComtd": "11:00 PM",
      "Barangay": "Padre Zamora",
      "PlaceType": "Street_Lighted",
      "X": 120.590685,
      "Y": 16.419295,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "4/9/2019",
      "TimeComtd": "10:30 AM",
      "Barangay": "Rizal Monument Area",
      "PlaceType": "Street_Lighted",
      "X": 120.59201,
      "Y": 16.413166,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "4/14/2019",
      "TimeComtd": "9:00 PM",
      "Barangay": "Lualhati",
      "PlaceType": "Park",
      "X": 120.616422,
      "Y": 16.416006,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "4/15/2019",
      "TimeComtd": "11:00 PM",
      "Barangay": "Rizal Monument Area",
      "PlaceType": "Street_Lighted",
      "X": 120.592744,
      "Y": 16.412796,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "4/16/2019",
      "TimeComtd": "5:37 PM",
      "Barangay": "Magsaysay Upper",
      "PlaceType": "Street_Lighted",
      "X": 120.595622,
      "Y": 16.414945,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "4/6/2019",
      "TimeComtd": "11:00 PM",
      "Barangay": "Kabayanihan",
      "PlaceType": "Street_Lighted",
      "X": 120.596637,
      "Y": 16.413704,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "5/3/2019",
      "TimeComtd": "5:20 PM",
      "Barangay": "Magsaysay Upper",
      "PlaceType": "Street_Lighted",
      "X": 120.595042,
      "Y": 16.41374,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "5/4/2019",
      "TimeComtd": "11:15 AM",
      "Barangay": "AZCKO",
      "PlaceType": "Overpass",
      "X": 120.594673,
      "Y": 16.413518,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "5/10/2019",
      "TimeComtd": "5:33 PM",
      "Barangay": "Harrison Carantes",
      "PlaceType": "Street_Lighted",
      "X": 120.597216,
      "Y": 16.411727,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "4/2/2019",
      "TimeComtd": "6:00 PM",
      "Barangay": "Magsaysay Upper",
      "PlaceType": "Street_Lighted",
      "X": 120.595209,
      "Y": 16.413917,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "5/1/2019",
      "TimeComtd": "5:10 PM",
      "Barangay": "Magsaysay Upper",
      "PlaceType": "Overpass",
      "X": 120.594834,
      "Y": 16.413601,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "5/24/2019",
      "TimeComtd": "10:30 PM",
      "Barangay": "Saint Joseph Village",
      "PlaceType": "Street_Lighted",
      "X": 120.578526,
      "Y": 16.41301,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "5/25/2019",
      "TimeComtd": "1:30 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.578526,
      "Y": 16.41301,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "5/14/2019",
      "TimeComtd": "8:00 PM",
      "Barangay": "Holy Ghost Proper",
      "PlaceType": "Between Buildings",
      "X": 120.599564,
      "Y": 16.41598,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "6/10/2019",
      "TimeComtd": "12:00 AM",
      "Barangay": "Salud Mitra",
      "PlaceType": "Street_Not Lighted",
      "X": 120.603319,
      "Y": 16.410403,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "6/13/2019",
      "TimeComtd": "2:05 AM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Park",
      "X": 120.595339,
      "Y": 16.408953,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "6/20/2019",
      "TimeComtd": "2:00 AM",
      "Barangay": "Rizal Monument Area",
      "PlaceType": "Street_Lighted",
      "X": 120.592805,
      "Y": 16.412322,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "6/25/2019",
      "TimeComtd": "1:50 AM",
      "Barangay": "AlfonsoTabora",
      "PlaceType": "Street_Lighted",
      "X": 120.593467,
      "Y": 16.425498,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/1/2019",
      "TimeComtd": "12:52 AM",
      "Barangay": "AZCKO",
      "PlaceType": "Overpass",
      "X": 120.594749,
      "Y": 16.413586,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/6/2019",
      "TimeComtd": "5:50 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.597352,
      "Y": 16.412501,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "7/8/2019",
      "TimeComtd": "7:00 PM",
      "Barangay": "Pinget",
      "PlaceType": "Street_Lighted",
      "X": 120.584862,
      "Y": 16.427253,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/1/2019",
      "TimeComtd": "3:20 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Park",
      "X": 120.595327,
      "Y": 16.411153,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/15/2019",
      "TimeComtd": "7:00 AM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Street_Lighted",
      "X": 120.597252,
      "Y": 16.406885,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/15/2019",
      "TimeComtd": "9:40 PM",
      "Barangay": "SLU-SVP Housing",
      "PlaceType": "Street_Lighted",
      "X": 120.589183,
      "Y": 16.390982,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/9/2019",
      "TimeComtd": "4:30 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Park",
      "X": 120.593543,
      "Y": 16.411954,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/20/2019",
      "TimeComtd": "5:04 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.596635,
      "Y": 16.413101,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "7/16/2019",
      "TimeComtd": "6:51 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.597926,
      "Y": 16.412083,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "7/19/2019",
      "TimeComtd": "3:20 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Park",
      "X": 120.595892,
      "Y": 16.409408,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/23/2019",
      "TimeComtd": "8:30 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.598065,
      "Y": 16.411955,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "7/25/2019",
      "TimeComtd": "6:20 PM",
      "Barangay": "Cresencia Village",
      "PlaceType": "Street_Lighted",
      "X": 120.586497,
      "Y": 16.421089,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/23/2019",
      "TimeComtd": "12:05 AM",
      "Barangay": "San Vicente",
      "PlaceType": "Street_Lighted",
      "X": 120.597727,
      "Y": 16.396359,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/29/2019",
      "TimeComtd": "8:30 PM",
      "Barangay": "Kabayanihan",
      "PlaceType": "Street_Lighted",
      "X": 120.598688,
      "Y": 16.411702,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "7/27/2019",
      "TimeComtd": "5:20 PM",
      "Barangay": "Kagitingan",
      "PlaceType": "Street_Lighted",
      "X": 120.596908,
      "Y": 16.415467,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "8/3/2019",
      "TimeComtd": "4:50 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.599507,
      "Y": 16.409187,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "8/5/2019",
      "TimeComtd": "4:30 PM",
      "Barangay": "Kabayanihan",
      "PlaceType": "Street_Lighted",
      "X": 120.597821,
      "Y": 16.416129,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "7/30/2019",
      "TimeComtd": "3:15 PM",
      "Barangay": "Kabayanihan",
      "PlaceType": "Street_Lighted",
      "X": 120.596629,
      "Y": 16.415583,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "8/5/2019",
      "TimeComtd": "4:30 PM",
      "Barangay": "AZCKO",
      "PlaceType": "Overpass",
      "X": 120.594749,
      "Y": 16.413586,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "8/8/2019",
      "TimeComtd": "8:20 PM",
      "Barangay": "AlfonsoTabora",
      "PlaceType": "Street_Lighted",
      "X": 120.593467,
      "Y": 16.425498,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/23/2019",
      "TimeComtd": "1:00 AM",
      "Barangay": "San Vicente",
      "PlaceType": "Street_Lighted",
      "X": 120.682273,
      "Y": 16.401193,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/11/2019",
      "TimeComtd": "10:30 PM",
      "Barangay": "Kayang-Hilltop",
      "PlaceType": "Street_Lighted",
      "X": 120.596629,
      "Y": 16.415583,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/11/2019",
      "TimeComtd": "8:30 PM",
      "Barangay": "Sto Tomas Proper",
      "PlaceType": "Street_Not Lighted",
      "X": 120.596629,
      "Y": 16.415583,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "7/29/2019",
      "TimeComtd": "1:24 PM",
      "Barangay": "ABCR",
      "PlaceType": "Street_Lighted",
      "X": 120.596629,
      "Y": 16.415583,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "8/17/2019",
      "TimeComtd": "6:00 PM",
      "Barangay": "Kayang-Hilltop",
      "PlaceType": "Street_Lighted",
      "X": 120.596629,
      "Y": 16.415583,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "8/18/2019",
      "TimeComtd": "4:00 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.596337,
      "Y": 16.415312,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "8/19/2019",
      "TimeComtd": "12:20 AM",
      "Barangay": "Campo Filipino",
      "PlaceType": "Street_Lighted",
      "X": 120.596337,
      "Y": 16.415312,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/19/2019",
      "TimeComtd": "1:15 PM",
      "Barangay": "ABCR",
      "PlaceType": "Street_Lighted",
      "X": 120.596629,
      "Y": 16.415583,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "8/21/2019",
      "TimeComtd": "10:00 PM",
      "Barangay": "Salud Mitra",
      "PlaceType": "Street_Lighted",
      "X": 120.596337,
      "Y": 16.415312,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "8/20/2019",
      "TimeComtd": "5:50 PM",
      "Barangay": "Sto Rosario",
      "PlaceType": "Street_Lighted",
      "X": 120.596337,
      "Y": 16.415312,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/1/2019",
      "TimeComtd": "10:55 PM",
      "Barangay": "Harrison Carantes",
      "PlaceType": "Street_Lighted",
      "X": 120.596629,
      "Y": 16.415583,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "8/25/2019",
      "TimeComtd": "11:50 PM",
      "Barangay": "Loakan Proper",
      "PlaceType": "Between Buildings",
      "X": 120.596629,
      "Y": 16.415583,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "8/26/2019",
      "TimeComtd": "12:30 AM",
      "Barangay": "Kabayanihan",
      "PlaceType": "Street_Lighted",
      "X": 120.596629,
      "Y": 16.415583,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/27/2019",
      "TimeComtd": "5:10 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Park",
      "X": 120.596629,
      "Y": 16.415583,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/30/2019",
      "TimeComtd": "4:00 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.596337,
      "Y": 16.415312,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "8/31/2019",
      "TimeComtd": "5:30 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.596629,
      "Y": 16.415583,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "9/1/2019",
      "TimeComtd": "1:25 AM",
      "Barangay": "Camp 7",
      "PlaceType": "Construction Site",
      "X": 120.596337,
      "Y": 16.415312,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "9/2/2019",
      "TimeComtd": "10:40 PM",
      "Barangay": "Padre Burgos",
      "PlaceType": "Street_Not Lighted",
      "X": 120.596337,
      "Y": 16.415312,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "9/2/2019",
      "TimeComtd": "11:40 AM",
      "Barangay": "Magsaysay Upper",
      "PlaceType": "Overpass",
      "X": 120.596629,
      "Y": 16.415583,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "5/12/2019",
      "TimeComtd": "12:30 AM",
      "Barangay": "Salud Mitra",
      "PlaceType": "Street_Lighted",
      "X": 120.596337,
      "Y": 16.415312,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "9/17/2019",
      "TimeComtd": "10:00 PM",
      "Barangay": "Camdas Subdivision",
      "PlaceType": "Street_Lighted",
      "X": 120.596337,
      "Y": 16.415312,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "9/20/2019",
      "TimeComtd": "10:20 PM",
      "Barangay": "Quezon Hill Proper",
      "PlaceType": "Street_Lighted",
      "X": 120.596337,
      "Y": 16.415312,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "9/25/2019",
      "TimeComtd": "12:00 PM",
      "Barangay": "Happy Homes (Lucban)",
      "PlaceType": "Street_Lighted",
      "X": 120.596629,
      "Y": 16.415583,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "9/25/2019",
      "TimeComtd": "10:40 PM",
      "Barangay": "Magsaysay Upper",
      "PlaceType": "Street_Lighted",
      "X": 120.596337,
      "Y": 16.415312,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "9/1/2019",
      "TimeComtd": "1:30 AM",
      "Barangay": "Dizon Subdivision",
      "PlaceType": "Street_Lighted",
      "X": 120.596337,
      "Y": 16.415312,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "9/27/2019",
      "TimeComtd": "10:30 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.596337,
      "Y": 16.415312,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "9/22/2019",
      "TimeComtd": "1:05 AM",
      "Barangay": "Salud Mitra",
      "PlaceType": "Street_Lighted",
      "X": 120.63155,
      "Y": 16.364955,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/8/2019",
      "TimeComtd": "1:30 AM",
      "Barangay": "Magsaysay Lower",
      "PlaceType": "Street_Lighted",
      "X": 120.595069,
      "Y": 16.417737,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/10/2019",
      "TimeComtd": "1:00 AM",
      "Barangay": "Magsaysay Lower",
      "PlaceType": "Street_Not Lighted",
      "X": 120.593228,
      "Y": 16.419274,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/22/2019",
      "TimeComtd": "12:00 PM",
      "Barangay": "Harrison Carantes",
      "PlaceType": "Street_Lighted",
      "X": 120.596591,
      "Y": 16.41186,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "10/22/2019",
      "TimeComtd": "9:30 AM",
      "Barangay": "Malcolm Square-Perfecto",
      "PlaceType": "Street_Lighted",
      "X": 120.595626,
      "Y": 16.414448,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/23/2019",
      "TimeComtd": "4:35 PM",
      "Barangay": "Malcolm Square-Perfecto",
      "PlaceType": "Street_Lighted",
      "X": 120.595899,
      "Y": 16.414062,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "10/24/2019",
      "TimeComtd": "5:00 PM",
      "Barangay": "Kayang-Hilltop",
      "PlaceType": "Street_Lighted",
      "X": 120.594467,
      "Y": 16.414598,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "10/27/2019",
      "TimeComtd": "1:00 PM",
      "Barangay": "Cabinet Hill- Teachers Camp",
      "PlaceType": "Street_Lighted",
      "X": 120.60455,
      "Y": 16.411216,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/28/2019",
      "TimeComtd": "5:25 PM",
      "Barangay": "Kayang-Hilltop",
      "PlaceType": "Street_Lighted",
      "X": 120.595085,
      "Y": 16.415623,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "10/29/2019",
      "TimeComtd": "2:30 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Park",
      "X": 120.596076,
      "Y": 16.409709,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "10/30/2019",
      "TimeComtd": "11:35 AM",
      "Barangay": "AZCKO",
      "PlaceType": "Overpass",
      "X": 120.594191,
      "Y": 16.412862,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "11/5/2019",
      "TimeComtd": "8:00 PM",
      "Barangay": "Bayan Park Village",
      "PlaceType": "Street_Lighted",
      "X": 120.605746,
      "Y": 16.426517,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "11/16/2019",
      "TimeComtd": "9:15 PM",
      "Barangay": "Victoria Village",
      "PlaceType": "Street_Lighted",
      "X": 120.576056,
      "Y": 16.41365,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "11/18/2019",
      "TimeComtd": "1:00 AM",
      "Barangay": "General Luna Upper",
      "PlaceType": "Street_Lighted",
      "X": 120.603318,
      "Y": 16.410428,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "11/15/2019",
      "TimeComtd": "12:27 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.599567,
      "Y": 16.408496,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "11/20/2019",
      "TimeComtd": "11:10 PM",
      "Barangay": "Aurora Hill North Central",
      "PlaceType": "Street_Lighted",
      "X": 120.605906,
      "Y": 16.426008,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "11/19/2019",
      "TimeComtd": "3:29 PM",
      "Barangay": "Harrison Carantes",
      "PlaceType": "Street_Lighted",
      "X": 120.597146,
      "Y": 16.411192,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "11/28/2019",
      "TimeComtd": "5:30 AM",
      "Barangay": "AZCKO",
      "PlaceType": "Street_Lighted",
      "X": 120.594192,
      "Y": 16.412889,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/25/2019",
      "TimeComtd": "1:40 AM",
      "Barangay": "Harrison Carantes",
      "PlaceType": "Jeepney Terminal",
      "X": 120.597739,
      "Y": 16.408393,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "12/1/2019",
      "TimeComtd": "11:00 PM",
      "Barangay": "Camp 7",
      "PlaceType": "Street_Lighted",
      "X": 120.599129,
      "Y": 16.39173,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "12/15/2019",
      "TimeComtd": "9:30 PM",
      "Barangay": "Sto Tomas Proper",
      "PlaceType": "Street_Lighted",
      "X": 120.581176,
      "Y": 16.379694,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "12/19/2019",
      "TimeComtd": "7:15 PM",
      "Barangay": "Salud Mitra",
      "PlaceType": "Street_Lighted",
      "X": 120.599366,
      "Y": 16.41207,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "12/25/2019",
      "TimeComtd": "2:00 AM",
      "Barangay": "Camp 7",
      "PlaceType": "Street_Lighted",
      "X": 120.60076,
      "Y": 16.389211,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "12/27/2019",
      "TimeComtd": "2:00 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.592049,
      "Y": 16.414289,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "12/29/2019",
      "TimeComtd": "1:00 PM",
      "Barangay": "Pucsusan",
      "PlaceType": "Street_Lighted",
      "X": 120.627153,
      "Y": 16.417401,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "12/29/2019",
      "TimeComtd": "1:00 AM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Street_Lighted",
      "X": 120.592521,
      "Y": 16.408464,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "1/8/2020",
      "TimeComtd": "1:30 AM",
      "Barangay": "Kabayanihan",
      "PlaceType": "Street_Lighted",
      "X": 120.596725,
      "Y": 16.414188,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "1/20/2020",
      "TimeComtd": "9:20 AM",
      "Barangay": "Magsaysay Upper",
      "PlaceType": "Street_Lighted",
      "X": 120.594742,
      "Y": 16.414162,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "1/29/2020",
      "TimeComtd": "8:30 PM",
      "Barangay": "Marcoville",
      "PlaceType": "Basketball Court",
      "X": 120.604325,
      "Y": 16.405092,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "2/9/2020",
      "TimeComtd": "11:20 PM",
      "Barangay": "Kayang Extension",
      "PlaceType": "Street_Lighted",
      "X": 120.59074,
      "Y": 16.41323,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "2/24/2020",
      "TimeComtd": "11:50 PM",
      "Barangay": "Pinsao Proper",
      "PlaceType": "Street_Lighted",
      "X": 120.569715,
      "Y": 16.432587,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "2/28/2020",
      "TimeComtd": "4:00 PM",
      "Barangay": "Salud Mitra",
      "PlaceType": "Street_Lighted",
      "X": 120.599788,
      "Y": 16.410658,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "3/6/2020",
      "TimeComtd": "4:30 PM",
      "Barangay": "Gibraltar",
      "PlaceType": "Street_Lighted",
      "X": 120.625013,
      "Y": 16.41742,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "3/12/2020",
      "TimeComtd": "12:50 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.598935,
      "Y": 16.411209,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "6/12/2020",
      "TimeComtd": "2:00 PM",
      "Barangay": "Kabayanihan",
      "PlaceType": "Street_Lighted",
      "X": 120.597481,
      "Y": 16.413641,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "6/13/2020",
      "TimeComtd": "4:30 PM",
      "Barangay": "South Drive",
      "PlaceType": "Construction Site",
      "X": 120.607857,
      "Y": 16.407647,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/16/2020",
      "TimeComtd": "6:40 PM",
      "Barangay": "Bayan Park Village",
      "PlaceType": "Street_Lighted",
      "X": 120.604848,
      "Y": 16.426608,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/19/2020",
      "TimeComtd": "8:35 PM",
      "Barangay": "Lourdes Subd. Proper",
      "PlaceType": "Construction Site",
      "X": 120.582546,
      "Y": 16.410947,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/2/2020",
      "TimeComtd": "5:20 AM",
      "Barangay": "Magsaysay Lower",
      "PlaceType": "Street_Lighted",
      "X": 120.592145,
      "Y": 16.420485,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/16/2020",
      "TimeComtd": "5:30 AM",
      "Barangay": "Irisan",
      "PlaceType": "Street_Lighted",
      "X": 120.56871,
      "Y": 16.4104,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "9/12/2020",
      "TimeComtd": "12:00 AM",
      "Barangay": "Pinget",
      "PlaceType": "Street_Lighted",
      "X": 120.585455,
      "Y": 16.431274,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "9/10/2020",
      "TimeComtd": "4:00 PM",
      "Barangay": "Bakakeng Norte/Sur",
      "PlaceType": "Camping Area",
      "X": 120.588615,
      "Y": 16.387236,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/6/2020",
      "TimeComtd": "11:30 AM",
      "Barangay": "Rizal Monument Area",
      "PlaceType": "Street_Lighted",
      "X": 120.591338,
      "Y": 16.411977,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "9/12/2020",
      "TimeComtd": "9:40 PM",
      "Barangay": "Fairview Village",
      "PlaceType": "Street_Lighted",
      "X": 120.57896,
      "Y": 16.417492,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/23/2020",
      "TimeComtd": "7:45 PM",
      "Barangay": "Lower QM (GEFA Subd.)",
      "PlaceType": "Street_Lighted",
      "X": 120.58956,
      "Y": 16.407505,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "10/24/2020",
      "TimeComtd": "10:40 PM",
      "Barangay": "Magsaysay Lower",
      "PlaceType": "Street_Lighted",
      "X": 120.593568,
      "Y": 16.418593,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/3/2020",
      "TimeComtd": "3:00 PM",
      "Barangay": "Bakakeng Central",
      "PlaceType": "Street_Lighted",
      "X": 120.586549,
      "Y": 16.401597,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "9/27/2020",
      "TimeComtd": "5:00 PM",
      "Barangay": "Irisan",
      "PlaceType": "Street_Lighted",
      "X": 120.554375,
      "Y": 16.413805,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "12/5/2020",
      "TimeComtd": "2:30 PM",
      "Barangay": "Greenwater Village",
      "PlaceType": "Construction Site",
      "X": 120.608025,
      "Y": 16.400625,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/31/2020",
      "TimeComtd": "12:10 PM",
      "Barangay": "Kabayanihan",
      "PlaceType": "Public Parking Area",
      "X": 120.596712,
      "Y": 16.414176,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "12/28/2020",
      "TimeComtd": "6:30 PM",
      "Barangay": "Harrison Carantes",
      "PlaceType": "Street_Lighted",
      "X": 120.597069,
      "Y": 16.411268,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "1/6/2021",
      "TimeComtd": "3:00 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Park",
      "X": 120.593554,
      "Y": 16.41094,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "1/12/2021",
      "TimeComtd": "9:00 PM",
      "Barangay": "Cabinet Hill- Teachers Camp",
      "PlaceType": "Street_Not Lighted",
      "X": 120.607208,
      "Y": 16.413315,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "12/31/2020",
      "TimeComtd": "10:00 PM",
      "Barangay": "Irisan",
      "PlaceType": "Street_Lighted",
      "X": 120.565423,
      "Y": 16.410642,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "3/6/2021",
      "TimeComtd": "2:00 AM",
      "Barangay": "Guisad Central",
      "PlaceType": "Street_Not Lighted",
      "X": 120.585315,
      "Y": 16.422378,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "2/14/2021",
      "TimeComtd": "2:45 PM",
      "Barangay": "Kayang-Hilltop",
      "PlaceType": "Street_Lighted",
      "X": 120.594443,
      "Y": 16.415372,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "4/17/2021",
      "TimeComtd": "9:30 PM",
      "Barangay": "Pinsao Proper",
      "PlaceType": "Street_Lighted",
      "X": 120.581541,
      "Y": 16.423381,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "5/10/2021",
      "TimeComtd": "8:00 PM",
      "Barangay": "Asin Road",
      "PlaceType": "Street_Lighted",
      "X": 120.572152,
      "Y": 16.40432,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "5/25/2021",
      "TimeComtd": "12:30 PM",
      "Barangay": "San Luis Village",
      "PlaceType": "Backyard",
      "X": 120.568343,
      "Y": 16.409161,
      "CrimeCategory": "RAPE"
    },
    {
      "DateComtd": "7/26/2021",
      "TimeComtd": "11:00 PM",
      "Barangay": "Padre Zamora",
      "PlaceType": "Street_Lighted",
      "X": 120.590639,
      "Y": 16.417591,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/7/2021",
      "TimeComtd": "10:59 PM",
      "Barangay": "Quezon Hill Proper",
      "PlaceType": "Street_Lighted",
      "X": 120.586064,
      "Y": 16.4131,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/15/2021",
      "TimeComtd": "9:10 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Park",
      "X": 120.594363,
      "Y": 16.410437,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "8/23/2021",
      "TimeComtd": "4:00 PM",
      "Barangay": "Asin Road",
      "PlaceType": "Street_Lighted",
      "X": 120.563645,
      "Y": 16.404943,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/18/2021",
      "TimeComtd": "10:40 AM",
      "Barangay": "Kayang Extension",
      "PlaceType": "Street_Lighted",
      "X": 120.590543,
      "Y": 16.415027,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/29/2021",
      "TimeComtd": "8:00 PM",
      "Barangay": "MRR Queen of Peace",
      "PlaceType": "Street_Lighted",
      "X": 120.586486,
      "Y": 16.413183,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/29/2021",
      "TimeComtd": "12:45 AM",
      "Barangay": "Sto Tomas Proper",
      "PlaceType": "Street_Lighted",
      "X": 120.574891,
      "Y": 16.389172,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "9/1/2021",
      "TimeComtd": "11:30 PM",
      "Barangay": "Camp 7",
      "PlaceType": "Street_Lighted",
      "X": 120.606987,
      "Y": 16.379328,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "9/7/2021",
      "TimeComtd": "1:00 PM",
      "Barangay": "Kayang-Hilltop",
      "PlaceType": "Street_Lighted",
      "X": 120.594698,
      "Y": 16.415661,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "9/26/2021",
      "TimeComtd": "4:50 PM",
      "Barangay": "Lourdes Subdivision Ext.",
      "PlaceType": "Between Buildings",
      "X": 120.585119,
      "Y": 16.412247,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/2/2021",
      "TimeComtd": "10:00 PM",
      "Barangay": "Dontogan",
      "PlaceType": "Street_Lighted",
      "X": 120.567141,
      "Y": 16.376001,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/22/2021",
      "TimeComtd": "2:50 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.595978,
      "Y": 16.413451,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/7/2021",
      "TimeComtd": "8:45 PM",
      "Barangay": "Dontogan",
      "PlaceType": "Street_Lighted",
      "X": 120.572364,
      "Y": 16.383549,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/25/2021",
      "TimeComtd": "6:30 AM",
      "Barangay": "Bakakeng Central",
      "PlaceType": "Street_Lighted",
      "X": 120.577492,
      "Y": 16.401055,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "11/14/2021",
      "TimeComtd": "3:30 PM",
      "Barangay": "Camdas Subdivision",
      "PlaceType": "Street_Lighted",
      "X": 120.592948,
      "Y": 16.426677,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "11/14/2021",
      "TimeComtd": "3:33 PM",
      "Barangay": "Camdas Subdivision",
      "PlaceType": "Street_Lighted",
      "X": 120.592948,
      "Y": 16.426677,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "12/18/2021",
      "TimeComtd": "9:00 PM",
      "Barangay": "City Camp Proper",
      "PlaceType": "Street_Not Lighted",
      "X": 120.589592,
      "Y": 16.401719,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "2/14/2022",
      "TimeComtd": "9:50 AM",
      "Barangay": "Magsaysay Upper",
      "PlaceType": "Street_Lighted",
      "X": 120.595909,
      "Y": 16.416386,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "1/13/2022",
      "TimeComtd": "12:10 AM",
      "Barangay": "Irisan",
      "PlaceType": "Street_Lighted",
      "X": 120.55648,
      "Y": 16.415731,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "3/3/2022",
      "TimeComtd": "1:00 AM",
      "Barangay": "Salud Mitra",
      "PlaceType": "Street_Lighted",
      "X": 120.602821,
      "Y": 16.411441,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "2/20/2022",
      "TimeComtd": "12:30 AM",
      "Barangay": "Lourdes Subdivision Ext.",
      "PlaceType": "Street_Lighted",
      "X": 120.584114,
      "Y": 16.411855,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "3/24/2022",
      "TimeComtd": "2:40 PM",
      "Barangay": "Sto Tomas School Area Central",
      "PlaceType": "Street_Lighted",
      "X": 120.578624,
      "Y": 16.370861,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "3/21/2022",
      "TimeComtd": "2:20 AM",
      "Barangay": "Dontogan",
      "PlaceType": "Street_Lighted",
      "X": 120.572195,
      "Y": 16.381368,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "3/27/2022",
      "TimeComtd": "11:30 PM",
      "Barangay": "General Luna Upper",
      "PlaceType": "Street_Lighted",
      "X": 120.601454,
      "Y": 16.41545,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "3/28/2022",
      "TimeComtd": "7:05 PM",
      "Barangay": "Quezon Hill Proper",
      "PlaceType": "Street_Lighted",
      "X": 120.579832,
      "Y": 16.415292,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "3/1/2022",
      "TimeComtd": "10:30 AM",
      "Barangay": "Quirino Hill Middle",
      "PlaceType": "Street_Lighted",
      "X": 120.592883,
      "Y": 16.430939,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "4/16/2022",
      "TimeComtd": "7:00 PM",
      "Barangay": "Rizal Monument Area",
      "PlaceType": "Street_Lighted",
      "X": 120.594085,
      "Y": 16.410078,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "4/18/2022",
      "TimeComtd": "9:00 AM",
      "Barangay": "Padre Burgos",
      "PlaceType": "Street_Lighted",
      "X": 120.59418,
      "Y": 16.418905,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "4/20/2022",
      "TimeComtd": "5:30 PM",
      "Barangay": "Rizal Monument Area",
      "PlaceType": "Park",
      "X": 120.595895,
      "Y": 16.411904,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "4/22/2022",
      "TimeComtd": "2:30 AM",
      "Barangay": "Bayan Park East",
      "PlaceType": "Public Place",
      "X": 120.607853,
      "Y": 16.426951,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "4/24/2022",
      "TimeComtd": "2:00 AM",
      "Barangay": "Magsaysay Lower",
      "PlaceType": "Street_Lighted",
      "X": 120.594278,
      "Y": 16.419739,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "4/24/2022",
      "TimeComtd": "4:00 AM",
      "Barangay": "Magsaysay Lower",
      "PlaceType": "Street_Lighted",
      "X": 120.594278,
      "Y": 16.419739,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "4/19/2022",
      "TimeComtd": "2:00 AM",
      "Barangay": "Quirino Hill Lower",
      "PlaceType": "Street_Lighted",
      "X": 120.590391,
      "Y": 16.427729,
      "CrimeCategory": "RAPE"
    },
    {
      "DateComtd": "4/28/2022",
      "TimeComtd": "5:50 PM",
      "Barangay": "Kabayanihan",
      "PlaceType": "Street_Lighted",
      "X": 120.596096,
      "Y": 16.412826,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "4/28/2022",
      "TimeComtd": "5:40 PM",
      "Barangay": "Harrison Carantes",
      "PlaceType": "Street_Lighted",
      "X": 120.596005,
      "Y": 16.412702,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "5/8/2022",
      "TimeComtd": "12:23 AM",
      "Barangay": "Padre Zamora",
      "PlaceType": "Street_Lighted",
      "X": 120.593965,
      "Y": 16.420607,
      "CrimeCategory": "HOMICIDE"
    },
    {
      "DateComtd": "5/12/2022",
      "TimeComtd": "12:30 AM",
      "Barangay": "Padre Burgos",
      "PlaceType": "Street_Lighted",
      "X": 120.59496,
      "Y": 16.417639,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "5/8/2022",
      "TimeComtd": "7:30 PM",
      "Barangay": "Irisan",
      "PlaceType": "Street_Lighted",
      "X": 120.556554,
      "Y": 16.414501,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "3/21/2022",
      "TimeComtd": "2:20 AM",
      "Barangay": "Dontogan",
      "PlaceType": "Vacant Lot",
      "X": 120.572038,
      "Y": 16.381484,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "6/12/2022",
      "TimeComtd": "6:10 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.599379,
      "Y": 16.410688,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "6/13/2022",
      "TimeComtd": "12:32 PM",
      "Barangay": "New Lucban",
      "PlaceType": "Street_Lighted",
      "X": 120.597261,
      "Y": 16.420838,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "6/30/2022",
      "TimeComtd": "5:00 PM",
      "Barangay": "AZCKO",
      "PlaceType": "Street_Lighted",
      "X": 120.594445,
      "Y": 16.413601,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "7/1/2022",
      "TimeComtd": "7:30 PM",
      "Barangay": "Kayang-Hilltop",
      "PlaceType": "Street_Lighted",
      "X": 120.593725,
      "Y": 16.415024,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/9/2022",
      "TimeComtd": "5:30 PM",
      "Barangay": "Fairview Village",
      "PlaceType": "Street_Lighted",
      "X": 120.581755,
      "Y": 16.416854,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/10/2022",
      "TimeComtd": "11:15 PM",
      "Barangay": "Rizal Monument Area",
      "PlaceType": "Street_Lighted",
      "X": 120.591749,
      "Y": 16.4119,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/26/2022",
      "TimeComtd": "4:30 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Bus Terminal",
      "X": 120.598607,
      "Y": 16.410319,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/3/2022",
      "TimeComtd": "11:30 PM",
      "Barangay": "New Lucban",
      "PlaceType": "Street_Lighted",
      "X": 120.598117,
      "Y": 16.421137,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "7/31/2022",
      "TimeComtd": "4:50 PM",
      "Barangay": "Loakan Proper",
      "PlaceType": "Vacant Lot",
      "X": 120.611404,
      "Y": 16.364864,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/10/2022",
      "TimeComtd": "10:30 PM",
      "Barangay": "Bakakeng Central",
      "PlaceType": "Street_Lighted",
      "X": 120.59098,
      "Y": 16.385011,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "8/29/2022",
      "TimeComtd": "1:40 AM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Street_Lighted",
      "X": 120.594628,
      "Y": 16.408739,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "9/17/2022",
      "TimeComtd": "3:45 PM",
      "Barangay": "Kabayanihan",
      "PlaceType": "Street_Lighted",
      "X": 120.596568,
      "Y": 16.413514,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "10/2/2022",
      "TimeComtd": "12:20 AM",
      "Barangay": "Dontogan",
      "PlaceType": "Street_Lighted",
      "X": 120.575485,
      "Y": 16.389045,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/3/2022",
      "TimeComtd": "1:30 AM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.596285,
      "Y": 16.413288,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "10/16/2022",
      "TimeComtd": "4:30 PM",
      "Barangay": "Kabayanihan",
      "PlaceType": "Street_Lighted",
      "X": 120.596714,
      "Y": 16.413749,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "10/19/2022",
      "TimeComtd": "1:50 PM",
      "Barangay": "Kagitingan",
      "PlaceType": "Street_Lighted",
      "X": 120.595879,
      "Y": 16.415529,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "10/23/2022",
      "TimeComtd": "4:50 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Street_Lighted",
      "X": 120.597999,
      "Y": 16.407568,
      "CrimeCategory": "ROBBERY"
    },
    {
      "DateComtd": "10/24/2022",
      "TimeComtd": "2:00 PM",
      "Barangay": "Magsaysay Upper",
      "PlaceType": "Overpass",
      "X": 120.594839,
      "Y": 16.413592,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "10/19/2022",
      "TimeComtd": "5:40 PM",
      "Barangay": "AZCKO",
      "PlaceType": "Street_Lighted",
      "X": 120.593891,
      "Y": 16.413095,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/25/2022",
      "TimeComtd": "5:00 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.59683,
      "Y": 16.412962,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "10/26/2022",
      "TimeComtd": "3:40 PM",
      "Barangay": "Kayang-Hilltop",
      "PlaceType": "Street_Lighted",
      "X": 120.595042,
      "Y": 16.415736,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/27/2022",
      "TimeComtd": "4:20 AM",
      "Barangay": "AZCKO",
      "PlaceType": "Street_Lighted",
      "X": 120.5924,
      "Y": 16.413205,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "11/1/2022",
      "TimeComtd": "10:30 PM",
      "Barangay": "San Luis Village",
      "PlaceType": "Street_Lighted",
      "X": 120.567178,
      "Y": 16.409675,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "11/2/2022",
      "TimeComtd": "10:00 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Street_Lighted",
      "X": 120.59077,
      "Y": 16.411832,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "11/4/2022",
      "TimeComtd": "7:40 PM",
      "Barangay": "Kabayanihan",
      "PlaceType": "Street_Lighted",
      "X": 120.596535,
      "Y": 16.413387,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "10/7/2022",
      "TimeComtd": "3:00 PM",
      "Barangay": "Legarda-Burnham-Kisad",
      "PlaceType": "Street_Lighted",
      "X": 120.592748,
      "Y": 16.40967,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "10/29/2022",
      "TimeComtd": "2:05 AM",
      "Barangay": "Quezon Hill Proper",
      "PlaceType": "Street_Not Lighted",
      "X": 120.583332,
      "Y": 16.413663,
      "CrimeCategory": "RAPE"
    },
    {
      "DateComtd": "11/12/2022",
      "TimeComtd": "3:50 PM",
      "Barangay": "AZCKO",
      "PlaceType": "Street_Lighted",
      "X": 120.594383,
      "Y": 16.413927,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "11/9/2022",
      "TimeComtd": "9:00 PM",
      "Barangay": "Magsaysay Upper",
      "PlaceType": "Overpass",
      "X": 120.596062,
      "Y": 16.416848,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "11/15/2022",
      "TimeComtd": "1:05 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.598837,
      "Y": 16.410363,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "11/18/2022",
      "TimeComtd": "4:30 AM",
      "Barangay": "Gibraltar",
      "PlaceType": "Street_Lighted",
      "X": 120.625469,
      "Y": 16.418824,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "11/28/2022",
      "TimeComtd": "5:45 PM",
      "Barangay": "Session-Governor Pack Road",
      "PlaceType": "Street_Lighted",
      "X": 120.598717,
      "Y": 16.411457,
      "CrimeCategory": "THEFT"
    },
    {
      "DateComtd": "12/5/2022",
      "TimeComtd": "1:43 AM",
      "Barangay": "Brookside",
      "PlaceType": "Public Place",
      "X": 120.601126,
      "Y": 16.420712,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "12/1/2022",
      "TimeComtd": "11:30 AM",
      "Barangay": "Harrison Carantes",
      "PlaceType": "Street_Lighted",
      "X": 120.595909,
      "Y": 16.412876,
      "CrimeCategory": "PHYSICALINJURIES"
    },
    {
      "DateComtd": "11/17/2022",
      "TimeComtd": "3:40 PM",
      "Barangay": "Rizal Monument Area",
      "PlaceType": "Park",
      "X": 120.593531,
      "Y": 16.411792,
      "CrimeCategory": "PHYSICALINJURIES"
    }
  ];
