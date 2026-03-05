export default function handler(req, res) {

  const key = "user_" + Math.random().toString(36).substring(2,10)

  res.status(200).json({
    apikey: key
  })

}
