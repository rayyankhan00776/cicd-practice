import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT =  1200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('server successfully running!');
});