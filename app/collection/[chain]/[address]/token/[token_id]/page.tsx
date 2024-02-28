// import React from "react";
// import { NFTDetailView } from "@covalenthq/goldrush-kit";
// import { useRouter } from "next/router";
// import { SiteHeader } from "@/components/site-header"

// interface NFTDetailProps {
//   chain: string;
//   address: string;
//   token_id: string;
// }

// const NFTDetailPage: React.FC<NFTDetailProps> = ({ chain, address, token_id }) => {
//   const router = useRouter();

//   // Simulamos la información del NFT
//   const nftData = {
//     nft_data: {
//       external_data: {
//         animation_url: "URL_DEL_VIDEO.mp4" // Reemplazar con la URL real del video
//       }
//     }
//   };

//   return (
//     <div>
//       <SiteHeader />
//       <button onClick={() => router.back()}>Back</button>
//       <NFTDetailView
//         chain_name={chain}
//         collection_address={address}
//         token_id={token_id}
//       />
//       {/* Other Media */}
//       <div className="py-8">
//         <header className="py-2 font-bold text-sm text-gray-600 leading-loose">Other Media</header>
//         <div className="flex flex-row items-center">
//           {nftData?.nft_data?.external_data?.animation_url ? (
//             <video className="w-80 bg-base-200 rounded-lg" autoPlay controls loop>
//               <source src={`https://ipfs.io/ipfs/${nftData?.nft_data?.external_data?.animation_url}`} type="video/mp4"></source>
//             </video>
//           ) : (
//             <div className="flex flex-row justify-center items-center w-80 h-40 bg-base-200 rounded-lg text-pretty text-center text-gray-500 cursor-not-allowed">No Animation</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NFTDetailPage;




'use client'
import { Button } from "@/components/ui/button";
import { Chain} from "@covalenthq/client-sdk"
import { NFTDetailView } from "@covalenthq/goldrush-kit";
import { Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { SiteHeader } from "@/components/site-header"

export default function Collection({ params }: { params: { chain: Chain, address: string, token_id: string } }) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 w-full">
 
<SiteHeader />
      <NFTDetailView
        chain_name={params.chain}
        collection_address={params.address}
        token_id={params.token_id}
      />
      <Flex onClick={()=>{
        router.back()
      }}>
        <Button>Back</Button>
      </Flex>
    </div>
  )
}
