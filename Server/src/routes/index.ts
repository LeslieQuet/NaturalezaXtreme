import { Router } from 'express'
import getArticles from './articles/getArticles';
import postArticle from './articles/postArticle';
import bulkArticles from './articles/bulkArticles';
import getArticleById from './articles/getArticleById';
import updateArticle from './articles/updateArticle';
import deleteArticle from './articles/deleteArticle';
import getUserById from './users/getUserById';

const router = Router();

router.post('/bulkArticles', bulkArticles)
router.post('/articles', postArticle)
router.get('/articles/:id', getArticleById)
router.get('/articles', getArticles)
router.put('/articles', updateArticle)
router.delete('/articles/:id', deleteArticle)
router.get('/user/:id', getUserById)

export default router;
