export default async function handler(req, res) {

  const { apikey, number, msg } = req.query

  if(!apikey || !number || !msg){
    return res.status(400).json({error:"Missing parameters"})
  }

  res.status(200).json({
    success:true,
    number:number,
    message:msg
  })

}
