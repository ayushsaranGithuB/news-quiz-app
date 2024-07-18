const API_KEY = process.env.FEEDRIKA_API_KEY;
const url = `https://api.feedrika.com/?apiKey=${API_KEY}&q=${query}`;

// const result = await fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     return data;
//   });

// res.send(result);
