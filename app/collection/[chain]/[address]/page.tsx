"use client"

import { useRouter } from "next/navigation"
import { Chain } from "@covalenthq/client-sdk"
import { NFTCollectionTokenListView } from "@covalenthq/goldrush-kit"
import { Flex } from "@radix-ui/themes"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export default function Collection({
  params,
}: {
  params: { chain: Chain; address: string }
}) {
  const router = useRouter()

  return (
    <div className="w-full flex flex-col gap-4">
      <SiteHeader />
      <NFTCollectionTokenListView
        chain_name={params.chain}
        collection_address={params.address}
        on_nft_click={(e: any) => {
          router.push(
            `/collection/${params.chain}/${params.address}/token/${e.nft_data.token_id}`
          )
        }}
        custom_styles={{
          card: "bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300",
        }}
      />
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
// import { Chain } from "@covalenthq/client-sdk"
// import { useRouter } from "next/navigation";
// import { NFTCollectionTokenListView } from "@covalenthq/goldrush-kit";
// import { Flex } from "@radix-ui/themes";
// import { Button } from "@/components/ui/button";
// import { SiteHeader } from "@/components/site-header"

// export default function Collection({ params }: { params: { chain: Chain, address: string } }) {
//   const router = useRouter();

//   return (
//     <div className="w-full flex flex-col gap-4">
   
// <SiteHeader />
//       <NFTCollectionTokenListView
//         chain_name={params.chain}
//         collection_address={params.address}
//         on_nft_click={(e: any)=>{
//           router.push(`/collection/${params.chain}/${params.address}/token/${e.nft_data.token_id}`)
//         }}
//       />
//       <Flex onClick={()=>{
//         router.back()
//       }}>
//         <Button>Back</Button>
//       </Flex>
//     </div>
//   )

// }
