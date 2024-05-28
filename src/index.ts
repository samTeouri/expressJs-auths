import { app } from './app';
import * as http from 'http';

(async () => {
    const httpServer = await http.createServer(app);
    const port = process.env.PORT;

    httpServer.listen(port, () => {
        console.log(`Serveur disponible sur le port ${port}`);
    });
})();