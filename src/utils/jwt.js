import 'dotenv/config';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';

export const generateToken = (user) => {
    const token = jwt.sign({ user }, config.jwtSecret, { expiresIn: '12h' });
    return token;
}
