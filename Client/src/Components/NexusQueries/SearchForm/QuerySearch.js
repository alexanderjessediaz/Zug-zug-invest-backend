import React, {useState} from 'react';
import FactionSelect from '../RegionFilters/FactionSelect.js';
import ServerSelect from '../RegionFilters/ServerSelect.js';
import { Button, Form } from 'react-bootstrap';


const QuerySearch = ({ updateServerString, updateFactionString, updateNexusQuery}) => {
    
    
    const [serverQueryString, setServerQueryString] = useState('')
    const [factionQueryString, setFactionQueryString] = useState('')

    const setUserServer = (e) => {
        setServerQueryString(e)
    }

    const setUserFaction = (e) => {
        setFactionQueryString(e)
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        updateNexusQuery(`/wow-classic/v1/items/${serverQueryString.split(" ").join("-")}-${factionQueryString}/13468/prices`)
    }

    
    
    const [searchInput, setSearchInput] = useState('')
    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }
    
    // useEffect(() => {
    //     async function suggestionsQuery(){
    //         try {
    //             await axios.post("http://localhost:5555", { 
    //                 userSearchInput: searchInput
    //             })
    //         } catch(error) {
    //             console.error(error)
    //         }
    //     }
    //     suggestionsQuery()
    // },[searchInput])
    
    // useEffect(() => {
    //     async function suggestionsSearch(){
    //         try {
    //             await axios.get("http://localhost:5555")
    //             .then((response) => console.log(response))
    //         } catch(error) {
    //             console.error(error)
    //         }
    //     }
    //     suggestionsSearch()
    // }) 
    return (
        <>
            <ServerSelect updateServerString={updateServerString} setUserServer={setUserServer}/>
            <FactionSelect updateFactionString={updateFactionString} setUserFaction={setUserFaction}/>
                {
                    serverQueryString === "" || factionQueryString === "" ?
                    <h6>please select your server and region</h6>:
                    <Form inline>
                        <Form.Label as="label" color="blue">Choose Item</Form.Label>
                        <Form.Control type="text" onChange={handleChange} value={searchInput}/>
                    </Form>
                }
                <Button onClick={handleClick} variant="secondary">Search</Button>
        </>
    )
}

export default QuerySearch