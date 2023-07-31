import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { Container, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useState, useEffect } from 'react'
import TaskCard from './TaskCard'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import Button from '@mui/material/Button'
import dayjs from 'dayjs'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'

const statuses = ['Pendent', 'En procés', 'Eliminada', 'Finalitzada']
const InitialState = {
  title: '',
  status: 'Pendent',
  description: '',
  deathLine: '',
}

export default function CreateTaskCard() {
  const [taskList, setTaskList] = useState([])
  const [state, setState] = useState(InitialState)
  const [date, setDate] = useState(dayjs(new Date()))

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((previousState) => ({
      ...previousState,
      [name]: value,
    }))
  }
  useEffect(() => {
    if (taskList.length !== 0)
      window.localStorage.setItem('cardData', JSON.stringify(taskList))
    if (taskList.length === 0) {
      const getData = JSON.parse(localStorage.getItem('cardData'))
      if (getData) setTaskList(getData)
      console.log('getData en useEffect:', getData)
      console.log('taskList en el UseEffect:', taskList)
    }
  }, [taskList.length])

  const handleSubmit = () => {
    setState((previousState) => ({
      ...previousState,
      deathLine: date.toDate().toLocaleDateString('ca-CA', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      }),
    }))
    setTaskList((previousList) => [
      ...previousList,
      {
        ...state,
        deathLine: date.toDate().toLocaleDateString('ca-CA', {
          weekday: 'long',
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        }),
      },
    ])
    setState(InitialState)
  }

  return (
    <Container sx={{ display: 'flex', gap: '75px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          gap: '5px',
          width: '33%',
        }}
      >
        {/*------------- Title -------------------------*/}

        <Box
          component="form"
          sx={{
            '& > :not(style)': {
              m: 1,
              width: '100%',
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Títol de la tasca"
            variant="standard"
            name="title"
            onChange={handleChange}
            value={state.title}
            sx={{ backgroundColor: 'primary', color: 'white' }}
          />
        </Box>

        {/* ---------------Status----------------------- */}

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Estat</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.status}
              label="Status"
              onChange={handleChange}
              name="status"
            >
              <MenuItem value={'Pendent'}>Pendent</MenuItem>
              <MenuItem value={'En procés'}>En procés</MenuItem>
              <MenuItem value={'Eliminada'}>Eliminada</MenuItem>
              <MenuItem value={'Finalitzada'}>Finalitzada</MenuItem>
            </Select>
          </FormControl>

          {/* -------------------Description-------------------*/}
        </Box>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="standard-multiline-static"
              label="Descripcio de la tasca"
              multiline
              rows={4}
              variant="standard"
              name="description"
              onChange={handleChange}
              value={state.description}
            />
          </div>
        </Box>

        {/* -------------------------Date Picker------------------------ */}

        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker
                label="Basic date picker"
                name="deathLine"
                onChange={(newValue) => setDate(newValue)}
                value={date}
                format="DD/MM/YYYY"
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>

        {/* ------------------------- Save Button --------------------------- */}

        <div>
          <Button variant="contained" onClick={handleSubmit}>
            Afegir tasca
          </Button>
        </div>
      </Box>

      {/* --------------------------Add Task Button---------------------- */}

      <Box>
        {taskList.length === 0 ? (
          <Typography>No hi ha feines a mostrar</Typography>
        ) : (
          taskList.map((task, index) => <TaskCard task={task} key={index} />)
        )}
      </Box>
    </Container>
  )
}
