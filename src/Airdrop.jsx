import { useConnection, useWallet } from "@solana/wallet-adapter-react"


//task to do
//1. Show user token balances
//2. Let user transfer tokens
export function Airdrop() {
    const wallet = useWallet();
    const {connection} = useConnection();
    
    async function sendAirDropToUser() {
        const amount = document.getElementById("publicKey").value;
        await connection.requestAirdrop(wallet.publicKey, amount * 100000000)
    }
    return <div>
        <input id = "publicKey" type="text" placeholder="Enter amount"></input>
        <button onClick={sendAirDropToUser}>Send airdrop</button>
    </div>
}