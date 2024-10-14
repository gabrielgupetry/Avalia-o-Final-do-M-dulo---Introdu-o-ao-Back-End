import express from 'express'
import {v4 as uuidv4} from 'uuid'
import { users } from './users'

import { validateMessage, validateUpdateMessage } from '../middlewares/validation'

const router = express.Router()
export default router

const notes = []

router.post('/message', validateMessage, (request, response) => {
    const { title, description, email } = request.body

    const user = users.find((user) => user.email === email)
  
    if (!user) {
      return response.status(404).json({
        message: "E-mail não encontrado, verifique ou crie um conta."
      })
    }
  
    const newMessage = {
      id: uuidv4(),
      title,
      description,
      email
    }
  
    notes.push(newMessage)
  
    response.status(201).json({
      message: "Mensagem criada com sucesso!",
      note: newMessage
    })
})

router.get('/message/:email', (request, response) => {
    const { email } = request.params

    const user = users.find(user => user.email === email)

    if (!user) {
        return response.status(404).json({
         message: "E-mail não encontrado, verifique ou crie um conta."
      })
     }

     const userNotes = notes.filter((note) => note.email === email)

     response.status(200).json({
     message: `Seja bem vindo(a)!`,
     notes: userNotes,
    })
})

router.put("/message/:id", validateUpdateMessage, (request, response) => {
    const { id } = request.params
    const { title, description } = request.body

    const note = notes.find((note) => note.id === id)

    if (!note) {
        return response.status(404).json({
        message: "Por favor, informe um id válido da mensagem."
        })
    }

    note.title = title
    note.description = description

    return response.status(200).json({
        message: "Mensagem atualizada com sucesso!",
        note: note
    })
})

router.delete("/message/:id", (request, response) => {
    const { id } = request.params

    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex === -1) {
        return response.status(404).json({
        message:
            "Mensagem não encontrada, verifique o identificador em nosso banco."
        })
    }

    const [deletedMessage] = notes.splice(noteIndex, 1)

    return response.status(200).json({
        message: "Mensagem apagada com sucesso!",
        note: deletedMessage
    })
})