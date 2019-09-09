import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function API_call() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=a9758f47', {
        params: {
          s: 'Spider-man'
        }
      })
      .then(res => {
        setData(res.data.Search)
        console.log(res.data.Search)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
}
