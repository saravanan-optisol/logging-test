import Express from "express";

const app = Express();

app.get('/', (req, res) => {
    res.send('Server is running');
})
app.listen(3300, () => {
    console.log('server started');
})