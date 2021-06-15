import express from 'express';

import { 
    createUserRegionSelection,
    createUserSearchQuery, 
    getNexusSearchSuggestions, 
    getNexusPriceQuery, 
    getNexusServers
} from '../Controllers/QueryController.js'

const router = express.Router();

router.get('/', getNexusServers, createUserRegionSelection)
// router.post('/', )

export default router