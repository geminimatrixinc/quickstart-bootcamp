db.getCollection('Restaurants').find(

     { "cuisine": {$eq: "Japanese" } }, // query

     { "restaurant_id": 1, "cuisine":1, "name":1, "city": 1}   // field projection

    ).sort({ "restaurant_id": 1 })

// SELECT 
     // restaurant_id, 
     // cuisine, 
     // name, city 
// FROM Restaurants 
// WHERE 
//   cuisine = 'Japanese'
// ORDER BY restaurant_id ASC
