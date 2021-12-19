import UsersModel from '../../models/users'
import dbConnect from '../../utils/dbConnect'
import { compare } from '../../utils/password'

const post = async (req, res) => {
  const { 
    email,
    password
  } = req.body

  await dbConnect()

  const user = await UsersModel.findOne({ email })

  if(!user){
    return res.status(401).json({ success: false, message: 'Invalid'})
  }

  const passIsCorrect = compare(password, user.password)

  if(passIsCorrect){
    return res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
    })
  }
  
  return res.status(401).json({ sucess: false, message: 'Invalid'})
}



export {
  post
}