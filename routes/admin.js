import {errorHandler} from '../middleware'
import { getAdmin, getAdminShow, getEdit, putAdmin, deleteAdmin } from '../controllers/admin';

const express = require('express');
const router = express.Router();

router.get('/', errorHandler(getAdmin));

router.get('/:id', errorHandler(getAdminShow));

router.get('/:id/edit', errorHandler(getEdit));

router.put("/:id", errorHandler(putAdmin));

router.delete("/:id", errorHandler(deleteAdmin));

export default router;