import { useState } from "react"

import { Button } from "@/components/ui/button"

const NFTCollectionSearch = () => {
  const [collectionAddress, setCollectionAddress] = useState("")
  const [nftData, setNftData] = useState(null)

  const handleSearch = async () => {
    if (!collectionAddress) return

    try {
      const response = await fetch(
        `https://api.covalenthq.com/v1/mainnet/tokens/${collectionAddress}/nft_metadata`
      )
      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }
      const data = await response.json()
      setNftData(data)
      console.log("NFT Collection Data:", data)
    } catch (error) {
      console.error("Error fetching collection info:", error)
    }
  }

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter collection address"
        value={collectionAddress}
        onChange={(e) => setCollectionAddress(e.target.value)}
        className="border border-gray-300 rounded-md p-2"
      />
      <Button onClick={handleSearch}>Search</Button>

      {nftData && (
        <div>
          <h2>NFT Collection Information:</h2>
          <pre>{JSON.stringify(nftData, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default NFTCollectionSearch
