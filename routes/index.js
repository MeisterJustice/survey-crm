import {errorHandler} from '../middleware'

import { getIndex, getSurvey, postSurvey } from '../controllers';

const express = require('express');
const router = express.Router();

router.get('/', errorHandler(getIndex));
router.get('/survey', errorHandler(getSurvey))
router.post('/survey', errorHandler(postSurvey));

export default router;
