db.companies.aggregate([
    { $match: {
        "name": "Facebook"
      }
    }, 
    { $project: {
        _id: 0,
        name: 1,
        people: "$relationships.person.last_name"
      }
    }
])