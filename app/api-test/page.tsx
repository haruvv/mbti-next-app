'use client'
import React, { useState, useEffect } from 'react'

// APIレスポンスの型を配列にする
interface ApiResponseItem {
  id: number
  title: string
  description: string
}

const ApiTest: React.FC = () => {
  const [data, setData] = useState<ApiResponseItem[]>([])

  useEffect(() => {
    fetch('http://localhost:8000/api/tasks')
      .then(response => response.json())
      .then((data: ApiResponseItem[]) => setData(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    <div>
      <h1>API Test</h1>
      {data.length > 0 ? (
        <div>
          <h2>Data Received</h2>
          {data.map(item => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  )
}

export default ApiTest
