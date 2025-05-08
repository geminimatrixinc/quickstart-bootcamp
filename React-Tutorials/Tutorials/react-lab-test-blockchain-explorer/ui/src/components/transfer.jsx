import * as Constants from '../constants'

import React, { useEffect, useState } from "react"
import Receipt from "./receipt";

const transactionObj =  {
   "transactionHash":"0x1fb62d5f02d350a2e1c00e299649cf973af7469ada664a1fb849643cdf9b63e4",
   "transactionIndex":0,
   "blockHash":"0xfb3dda074653bfb93a920eeeea13dacb978b1fe03960853ca819b87e09b86ff0",
   "blockNumber":3,"from":"0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
   "to":"0x71be63f3384f5fb98995898a86b02fb2426c5788",
   "cumulativeGasUsed":21000,
   "gasUsed":21000,
   "contractAddress":null,"logs":[],
   "logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
   "type":"0x2","status":true,
   "effectiveGasPrice":3170189871
}

function Transfer (props) {

   //TODO: get this from react router - useParams hook!!
   const destinationAddress = Constants.DEFAULT_DESTINATION_ADDRESS;

   const [input, setInput] = useState("")
   const [receipt, setReceipt] = useState({})

    useEffect(() => {
     
    },[])
 
    const handleInputChange = (e) =>{ 
       console.log(`handle input change ${e.target.value}`)
      setInput(
       e.target.value
    )
   }
    const handleSubmit = (e) => {
        e.preventDefault();
      setReceipt(transactionObj)
    }
    const buildTransferDetails = () => {
          return (
             <>
               <form onSubmit={ handleSubmit } className="container">
                  <p>
                    <b>From:</b> 
                    {Constants.DEFAULT_WALLET_ADDRESS}
                </p>
                  <p>
                    <b>To:</b> 
                    {destinationAddress} 
                  </p>
                  <p>
                    <b>Amount:</b> 
                    <input type="textbox" width={50} value={input} onChange={handleInputChange}/> 
                  </p>
                  <p>
                    <button type="submit">Submit</button>
                  </p>
                </form>
                <Receipt {...receipt} />
             </>
          )
       
    }
     return(
        <>
           <h1>Transfer</h1>
           { buildTransferDetails() }
        </>
     )
 
 }
 
 export default Transfer;