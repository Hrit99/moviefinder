const { Movie } = require("../models/movie")

const getMoviesBatch = async (lastval) => {
  console.log(Number(lastval));
  let agg = [{
    '$sort': {
      'No_of_Votes': Number(-1)
    }
  },
  {
    '$match': {
      'No_of_Votes': {
        '$lt': Number(lastval)
      }
    }
  }, {
    '$limit': 20
  }
  ];
  const cursor = Movie.aggregate(agg);
  return await cursor.exec()

}



const getMoviesBatchSearch = async (lastval, str) => {
  console.log(Number(lastval));
  let agg = [
    {
      '$match': {
        'Series_Title': {
          '$regex': `${str}`, 
          '$options': 'i'
        }
      }
    }, {
      '$sort': {
        'No_of_Votes': Number(-1)
      }
    }, {
      '$match': {
        'No_of_Votes': {
          '$lt': Number(lastval)
        }
      }
    }
  ]

  const cursor = Movie.aggregate(agg);
  return await cursor.exec()

}

module.exports = { getMoviesBatch, getMoviesBatchSearch }