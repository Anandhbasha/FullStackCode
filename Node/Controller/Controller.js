export const read = (req,res)=>{
    res.status(200).json({ message: "Hello World" })
}

export const insert = (req,res)=>{
  const { name } = req.body
  res.status(200).json({ message: `Hello ${name}` })
}

export const editUser = (req,res)=>{
  const {id} = req.params
  const { name } = req.body
  res.status(200).json({ message: `Item updated: ${name}` })
}

export const deleteUser = (req,res)=>{
  const {id} = req.params
  res.status(200).json({ message: `Item with id ${id} deleted`})
}