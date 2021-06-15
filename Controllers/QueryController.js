import nexusQueryModel from '../Models/NexusQueryModel.js'
import Nexus from 'nexushub-client'
const nexus = new Nexus({})

export const createUserRegionSelection = async (req,res) => {
    try {
        // user region selections sent from frontend
        // const regionQuery = req.body.nQuery
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createUserSearchQuery = async (req,res) => {
    try {
        // search query user inputs sent from frontend
        // const itemQuery = req.body.userSearchInput
    } catch (error) {
        
    }
}

export const getNexusSearchSuggestions = async (req,res) => {

    // with user input for suggestions get API data
    try {
        const nSearchResults = await nexus.get()
        // query string needs to look like this
        // `/wow-classic/v1/search/suggestions?query=${}`
    } catch (error) {
        
    }
    
}
export const getNexusPriceQuery = async (req,res) => {
    
    // with user query inputs from frontend fetch Nexus API
    try {
        const nPriceData = await nexus.get()
    } catch (error) {
        
    }
    
}

