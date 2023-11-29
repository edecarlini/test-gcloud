import cors from 'cors';
import express from 'express';

const app = express();
const PORT = 4200

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/api/status', (req, res) => {
    res.status(200).json({
        project: 'AppME',
        port: PORT
    });
})
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

export default app;
