import axios from "axios";
import { useEffect, useState } from "react"

const SuperHeroes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/superheros').then((res) => {
      setData(res.data);
      setIsLoading(false);
    })
  }, [])

  if(isLoading) return <h2>Loading...</h2>

  console.log(data)

  return (
    <div>
      <h2 className="font-bold text-2xl mb-2">Super Heroes Page</h2>
      {data.map((hero) => (
        <div key={hero.id}>
          {hero.name}
        </div>
      ))}
    </div>
  )
}

export default SuperHeroes
