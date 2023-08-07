import { Button } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'

export default function DeleteCard() {
  const handleDelate = (task, index) => { window.localStorage.removeItem('index')}
 
  return (
    <Button onClick={handleDelate}>
      <DeleteIcon color="primary" sx={{ fontSize: 40 }} />
    </Button>
  )
}
