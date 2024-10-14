export function validateUserRegistration(request, response, next) {
    const { name, email, password } = request.body

    if (!name) {
        return response.status(400).json({
            message: 'Por favor, verifique se passou o nome.'
        })
    } else if (!email) {
        return response.status(400).json({
            message: 'Por favor, verifique se passou o email.'
        })
    } else if (!password) {
        return response.status(400).json({
            message: 'Por favor, verifique se passou a senha.'
        })
    }

    next()
}

export function validateUserLogin(request, response, next) {
    const { email, password } = request.body

    if (!email) {
        return response.status(400).json({
            message: 'Inisira um e-mail válido.'
        })
    }

    if (!password) {
        return response.status(400).json({
            message: 'Insira uma senha válida.'
        })
    }

    next()
}

export function validateMessage(request, response, next) {
    const { title, description } = request.body

    if (!title) {
      return response.status(400).json({
        message: "Insira um título válido."
      })
    }
  
    if (!description) {
      return response.status(400).json({
        message: "Insira uma descrição válida."
      })
    }
  
    next()
}

export function validateUpdateMessage(request, response, next) {
    const { title, description } = request.body
  
    if (!title) {
      return response.status(400).json({
        message: "O título não pode ser vazio."
      })
    }
  
    if (!description) {
      return response.status(400).json({
        message: "A descrição não pode ser vazia."
      })
    }
  
    next()
}