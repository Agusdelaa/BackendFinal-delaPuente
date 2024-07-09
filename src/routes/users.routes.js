import { Router } from 'express';
import { getUsers, passwordRecovery, resetPassword, postDocuments, deleteUsers, deleteUserByEmail, updateRolUserByEmail } from '../controllers/users.controllers.js';
import { passportError, authorization } from '../utils/messagesError.js';
import { uploader } from '../utils/multer.js';

const userRouter = Router();

userRouter.get('/', passportError('jwt'), authorization('admin'), getUsers);
userRouter.post('/password-recovery', passwordRecovery);
userRouter.post('/reset-password/:token', resetPassword);
userRouter.post('/:uid/documents', passportError('jwt'), uploader.array('documents'), postDocuments);
userRouter.put ("/upgradeUser/:email", passportError('jwt'), authorization('admin'), updateRolUserByEmail)
userRouter.delete('/deleteUsers', passportError('jwt'), authorization('admin'), deleteUsers);
userRouter.delete('/:email', passportError('jwt'), authorization('admin'), deleteUserByEmail);

export default userRouter;
