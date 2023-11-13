import express from 'express';
import router from './src/router';


async function Start() : Promise<void> {
    try {
        const app = express();
        const PORT = 5000;

        app.use(express.json());
        app.use('/', router);

        app.listen( PORT, () => console.log(`Server running on port ${PORT}`) );
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

void Start();