import * as express from 'express';
import * as path from 'path';

const app = express();
const root = process.cwd();

app.use(express.static(path.join(root, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(root, 'dist', 'index.html'))
});

app.listen(3000, (e: Error) => {
    if (e) {
        throw new Error();
    } else {
        console.log('Server is running on port 3000')
    }
});
