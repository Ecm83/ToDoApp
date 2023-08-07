import './App.css'
import React from 'react'
import { Container, Box } from '@mui/material'
import CreateTaskCard from './Components/AddTask/CreateTaskCard'
import MainAppBar from './Components/Main/MainAppBar'

function App() {
  return (
    <>
      <MainAppBar />
      <Container>
        <Box sx={{ width: '33%' }}>
          <CreateTaskCard />
        </Box>
      </Container>
    </>
  )
}

export default App
