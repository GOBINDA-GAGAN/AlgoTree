const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Algo Tree' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
