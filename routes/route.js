import express from 'express'
import { getImage, uploadImage } from '../controller/control_Image.js';
import upload from '../utils/upload.js';

const router = express.Router()

router.post('/upload',upload.single('file'),uploadImage)
router.get('/file/:fileID', getImage)


export default router;