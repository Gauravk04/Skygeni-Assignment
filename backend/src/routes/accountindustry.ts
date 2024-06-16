import { Router } from 'express';
import * as fs from 'fs';
import * as path from 'path';

const router = Router();

router.get('/', (req, res) => {
    const dataPath = path.join(__dirname, '../../data/accountindustry.json');
    fs.readFile(dataPath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }
        res.json(JSON.parse(data));
    });
});

export default router;
