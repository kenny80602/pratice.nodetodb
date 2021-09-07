import express from 'express';
import indexRouter from './routes/index.js'
const app=express();
const port=3000;

app.use(express.json());
app.use('/api/vi/',indexRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})