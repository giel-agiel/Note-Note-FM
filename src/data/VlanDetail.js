// src/data/VlanDetail.js
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Vlan } from './VlanData'

const VlanDetail = () => {
  const { region } = useParams()
  const [items, setItems] = useState([])

  useEffect(() => {
    // flatten nested structure lalu filter berdasarkan region
    const all = []
    Vlan.forEach(obj =>
      Object.values(obj).forEach(arr =>
        arr.forEach(item => all.push(item))
      )
    )
    setItems(all.filter(i => i.region.toLowerCase() === region.toLowerCase()))
  }, [region])

  return (
    <Container>
      <h2>VLANs in &quot;{region}&quot;</h2>
      {items.map((v, idx) => (
        <Card key={idx}>
          <p><strong>List:</strong> {v.vlan.join(', ')}</p>
          <p><strong>Word:</strong> {v.word}</p>
          <p><strong>Text:</strong> {v.writeText}</p>
        </Card>
      ))}
      {items.length === 0 && <Empty>No VLAN found</Empty>}
    </Container>
  )
}

export default VlanDetail

// Styled-components
const Container = styled.div`
  max-width: 700px;
  margin: 40px auto;
  padding: 0 20px;
`

// Definisi Title yang sebelumnya hilang
const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`

const Card = styled.div`
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
`

const Empty = styled.p`
  text-align: center;
  color: #666;
  font-style: italic;
`
