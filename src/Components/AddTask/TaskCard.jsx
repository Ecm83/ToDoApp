import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function TaskCard({ task }) {
  console.log('task de TaskCard:', task)
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
          {task.deathLine}
          {/* {console.log('Log de deathLine es:', task.deathLine)} */}
        </Typography>

        <Typography variant="body2">
          {task.title}
          <hr style={{ border: '1px solid #ed9600' }} />
          {task.description}
          <hr style={{ border: '1px solid #ed9600' }} />
          {task.status}
        </Typography>
      </CardContent>
    </Card>
  )
}
