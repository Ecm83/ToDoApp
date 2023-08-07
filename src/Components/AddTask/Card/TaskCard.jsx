import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import DeleteIcon from '@mui/icons-material/Delete'

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material'

export default function TaskCard({ task }) {
  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }
  console.log('task de TaskCard:', task)

  const handleDelete = () => {}

  return (
    // -----------------------Caracteristiques del component de components-------------------------

    <Card sx={{ width: 275, maxHeight: '100px' }}>
      <CardContent
        sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
      >
        {/* -----------------------Renderitzacio del Death line------------------------------------ */}

        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 'bolder',
            fontSize: '15px',
            color: '#ed9600',
          }}
          gutterBottom
        >
          {task.deathLine}
        </Typography>

        {/* ----------------------------Cos de la tarjeta-----------------------***------- */}

        {/* ----------------------Renderitzacio del titol de la tarjeta------------------- */}

        <Typography variant="body2" sx={{ flexGrow: 1 }}>
          {task.title}
          <hr style={{ border: 'solid 3px #ed9600' }} />

          {/* --------------------------Renderitzacio de la descripcio----------------------- */}

          <Box>
            {task.description}
            <hr style={{ border: 'solid 3px #ed9600' }} />
          </Box>

          {/* -------------------------Select del status de la targeta------------------------- */}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            <p>Estat: </p>
            {task.status}
          </Box>
        </Typography>

        {/* --------------------------Renderitzacio del footer de la tarjeta----------------- */}

        <Box sx={{ minWidth: 120, display: 'flex', flexDirection: 'row' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Canvia l' estat
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Canvia l' estat"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button onClick={handleDelete}>
          <DeleteIcon color="primary" sx={{ fontSize: 40 }} />
        </Button>
      </CardContent>
    </Card>
  )
}
