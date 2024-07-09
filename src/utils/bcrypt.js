import bcrypt from 'bcrypt';
import config from '../config/config.js';

export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(parseInt(config.bycrptSalt)));

export const validatePassword = (passwordSend, passwordBDD) => bcrypt.compareSync(passwordSend, passwordBDD);
