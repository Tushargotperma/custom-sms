export default async function handler(req, res) {

  const { apikey, number, msg } = req.query;

  if (!apikey || !number || !msg) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  const SMS_API_KEY = "vfy4Jjl1g9CFVdcHiEe3sxPKGNAQo2I8Ur6qaTmuRwOXhtnS7kwsPnZgO3epAvhLoWHItU8KNbRVxSj0";

  try {

    const response = await fetch("https://st2sms.com/api/send", {
      method: "POST",
      headers: {
        "Authorization": SMS_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        number: number,
        message: msg
      })
    });

    const data = await response.json();

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: "SMS send failed" });
  }

}
