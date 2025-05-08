import React from "react"


function Receipt(props) {

   const buildReceipt = () => {
       console.log(`Receipt props: ${JSON.stringify(props)}`)
 
       if(!props.transactionHash) {
           return <></>
       }
       return (
           <div className="container">
            <h1>Reciept</h1>
            <p><b>Transaction Hash:</b> { props.transactionHash }</p>
            <p><b>Block Hash:</b> { props.blockHash }</p>
            <p><b>Block Number:</b> { props.blockNumber }</p>
            <p><b>From:</b> { props.from }</p>
            <p><b>To:</b> { props.to }</p>
            <p><b>Gas Used:</b> { props.gasUsed }</p>
           </div>
       )
   }
    return(
       <>
         { buildReceipt() }
       </>
    )

}

export default Receipt;


//transaction receipt: {
// "transactionHash":"0x1fb62d5f02d350a2e1c00e299649cf973af7469ada664a1fb849643cdf9b63e4",
// "transactionIndex":0,
// "blockHash":"0xfb3dda074653bfb93a920eeeea13dacb978b1fe03960853ca819b87e09b86ff0",
// "blockNumber":3,"from":"0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
// "to":"0x71be63f3384f5fb98995898a86b02fb2426c5788",
// "cumulativeGasUsed":21000,
// "gasUsed":21000,
// "contractAddress":null,"logs":[],
// "logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
// "type":"0x2","status":true,
// "effectiveGasPrice":3170189871}