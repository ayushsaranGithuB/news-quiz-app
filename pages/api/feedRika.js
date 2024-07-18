const API_KEY = process.env.FEEDRIKA_API_KEY;
const url = `https://api.feedrika.com/latest?apiKey=${API_KEY}`;

console.log("API_KEY:", API_KEY);
console.log("url:", url);

async function handleRequest(req, res) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      res.status(200).json(data);
    } else {
      res.status(500).json({ error: response.statusText });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export default handleRequest;
