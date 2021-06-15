import express from 'express';

import { 
    createUserRegionSelection,
    createUserSearchQuery, 
    getNexusSearchSuggestions, 
    getNexusPriceQuery
} from '../Controllers/QueryController.js'

const router = express.Router();

router.get('/', getNexusSearchSuggestions, getNexusPriceQuery)
router.post('/', createUserRegionSelection, createUserSearchQuery)

export default router