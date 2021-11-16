export const filters = [
   {
    "title": "Sort ads via",
    "options": [{title: "price", value: "price"}, {title: "Status", value: "Status"}, {titlle: "5 km", value: "5 km"}, {title: "$", value: "$"}, {title: "city", value: "city"}],
    "type": "categoris"  
   },
   {
    "title":"Ukraine, Kiev, Sh...",
    "options": [{title: "Kharkov", value: "Kharkov"}, {title: "Copenhagen", value: "Copenhagen"}, {title: "Madrid", value: "Madrid"}],
    "image": "../../assets/images/filters-img/location_icon.svg",
    "type": "location"    
   },
   {
    "title": "5 km",
    "options": ["10 km", "20 km", "30 km"],
    "image": "../../assets/images/filters-img/radius_icon.svg",
    "type": "distance"
   },
   {
    "title": "$",
    "options": ["usd", "euro", "hryvnia"],
    "type": "currency"
   },
   {
    "title": "Price",
    "options": [100, 200, 300, 400],
    "type": "price"
   },
   {
    "title": "Status",
    "options": [true, false],
    "type": "status"
   }
]