import { useRouter } from "next/navigation"
import { Chain } from "@covalenthq/client-sdk"
import { NFTDetailView } from "@covalenthq/goldrush-kit"
import { Flex } from "@radix-ui/themes"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export default function Collection({
  params,
}: {
  params: { chain: Chain; address: string; token_id: string }
}) {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-4 w-full">
      <SiteHeader />
      <div className="flex flex-col gap-4">
        {/* Display NFT video if available */}
        {params.external_data && params.external_data.animation_url && (
          <video src={params.external_data.animation_url} controls className="w-full" />
        )}
        {/* Display NFT name */}
        <h2>{params.name}</h2>
        {/* Display NFT description */}
        <p>{params.description}</p>
      </div>
      <Flex
        onClick={() => {
          router.back()
        }}
      >
        <Button>Back</Button>
      </Flex>
    </div>
  )
}



// 'use client'
// import { Button } from "@/components/ui/button";
// import { Chain} from "@covalenthq/client-sdk"
// import { NFTDetailView } from "@covalenthq/goldrush-kit";
// import { Flex } from "@radix-ui/themes";
// import { useRouter } from "next/navigation";
// import { SiteHeader } from "@/components/site-header"

// export default function Collection({ params }: { params: { chain: Chain, address: string, token_id: string } }) {
//   const router = useRouter();

//   return (
//     <div className="flex flex-col gap-4 w-full">
 
// <SiteHeader />
//       <NFTDetailView
//         chain_name={params.chain}
//         collection_address={params.address}
//         token_id={params.token_id}
//       />
//       <Flex onClick={()=>{
//         router.back()
//       }}>
//         <Button>Back</Button>
//       </Flex>
//     </div>
//   )
// }
