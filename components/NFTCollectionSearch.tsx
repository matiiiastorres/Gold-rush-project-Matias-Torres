import { useState } from "react";
import { Button } from "@/components/ui/button";

const NFTCollectionSearch = () => {
  const [collectionAddress, setCollectionAddress] = useState("");
  const [nftData, setNftData] = useState(null);

  const handleSearch = async () => {
    if (!collectionAddress) return;

    try {
      const response = await fetch(
        `https://api.covalenthq.com/v1/zora/mainnet/tokens/${collectionAddress}/nft_metadata?key=cqt_rQMT4whKFkpbPHBGFvrdmpYY4gF3`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setNftData(data);
      console.log("NFT Collection Data:", data);
    } catch (error) {
      console.error("Error fetching collection info:", error);
    }
  };

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
          <div className="grid grid-cols-3 gap-4">
            {nftData.items.map((nft, index) => (
              <div key={index} className="border border-gray-300 rounded-md p-2">
                <img src={nft.external_data.image} alt={`NFT ${index}`} className="w-full h-auto" />
                <p>{nft.external_data.name}</p>
                <p>{nft.external_data.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NFTCollectionSearch;
