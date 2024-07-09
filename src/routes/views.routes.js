import { Router } from 'express';
import passport from 'passport';
import { passportError, authorization } from '../utils/messagesError.js';
import { checkCookie, getCart, getHome, getRealtimeProducts, getRealtimeChat, getUserRegister, getUserLogin, getuserProfile, getUsersInfo, getDocumentsView, getResetPassword } from '../controllers/views.controllers.js';


const viewsRouter = Router();

viewsRouter.get('/home', getHome);
viewsRouter.get('/realtimeproducts', passportError('jwt'), authorization('premium'), getRealtimeProducts);
viewsRouter.get('/realtimechat', passportError('jwt'), getRealtimeChat);
viewsRouter.get('/userregister', checkCookie, getUserRegister);
viewsRouter.get('/userlogin', checkCookie, getUserLogin);
viewsRouter.get('/userprofile', passport.authenticate('jwt', { session: false, failureRedirect: '/userlogin' }), getuserProfile);
viewsRouter.get('/usersmanagement', passportError('jwt'), authorization('admin'), getUsersInfo);
viewsRouter.get('/cart', passport.authenticate('jwt', { session: false, failureRedirect: '/userlogin' }), getCart);
viewsRouter.get("/uploadDoc", passportError('jwt'), getDocumentsView)
viewsRouter.get("/reset-password/:token", passportError('jwt'), getResetPassword)


export default viewsRouter;
