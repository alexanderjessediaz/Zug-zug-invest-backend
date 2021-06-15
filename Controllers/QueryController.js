import { createNexusServerQuery } from '../Models/Servers.js'
import { createNexusPriceQuery } from '../Models/PriceQuery.js'
import Nexus from 'nexushub-client'
const nexus = new Nexus({})

export const getNexusServers = async (req,res) => {
    const getServerNames = createNexusServerQuery()

    try {
        const serverNames = await nexus.get(getServerNames)
        res.send({serverNames})
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getNexusPriceQuery = async (req,res) => {
    
    // with user query inputs from frontend fetch Nexus API
    const getPriceQuery = createNexusPriceQuery()
    try {
        // const nPriceData = await nexus.get(getPriceQuery)
        // res.send({nPriceData})
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createUserRegionSelection = async (req,res) => {
    try {
        // user region selections sent from frontend
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
