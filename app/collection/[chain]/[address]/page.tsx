import { useRouter } from "next/navigation"
import { Chain } from "@covalenthq/client-sdk"
import { useEffect, useState } from "react"
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
  const [collectionInfo, setCollectionInfo] = useState<any>(null)

  useEffect(() => {
    const fetchCollectionInfo = async () => {
      try {
        const response = await fetch(`https://api.covalenthq.com/v1/${params.chain}/tokens/${params.address}/nft_metadata/`)
        if (!response.ok) {
          throw new Error('Failed to fetch collection info')
        }
        const data = await response.json()
        setCollectionInfo(data)
      } catch (error) {
        console.error("Error fetching collection info:", error)
      }
    }
    fetchCollectionInfo()
  }, [params.chain, params.address])

  return (
    <>
      <div className="bg-background w-full flex flex-col gap-4 h-screen">
        <SiteHeader />
        
        {/* Sección de la lista de NFT */}
        <NFTCollectionTokenListView
          chain_name={params.chain}
          collection_address={params.address}
          on_nft_click={(e: any) => {
            console.log(e)
            router.push(`/collection/${params.chain}/${params.address}/token/${e.nft_data.token_id}`)
          }}
        />
        
        {/* Sección de información de la colección */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold">Collection Information</h2>
          {collectionInfo && (
            <div>
              <p>Description: {collectionInfo.description}</p>
              <img src={collectionInfo.logo_url} alt="Collection Logo" className="w-20 h-20" />
            </div>
          )}
        </div>
        
        {/* Botón de retroceso */}
        <Flex onClick={() => router.back()}>
          <Button>Back</Button>
        </Flex>
        
        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </>
  )
}

















// "use client"

// import { useRouter } from "next/navigation"
// import { Chain } from "@covalenthq/client-sdk"
// import { NFTCollectionTokenListView } from "@covalenthq/goldrush-kit"
// import { Flex } from "@radix-ui/themes"

// import { Button } from "@/components/ui/button"
// import { SiteHeader } from "@/components/site-header"
// // import { Footer } from "@/components/footer"

// export default function Collection({
//   params,
// }: {
//   params: { chain: Chain; address: string }
// }) {
//   const router = useRouter()

//   return (
//     <div className=" bg-background w-full flex flex-col gap-4">
//       <SiteHeader />
//       <NFTCollectionTokenListView
//         chain_name={params.chain}
//         collection_address={params.address}
//         on_nft_click={(e: any) => {
//           router.push(
//             `/collection/${params.chain}/${params.address}/token/${e.nft_data.token_id}`
//           )
//         }}
//         custom_styles={{
//           card: "bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300",
//         }}
//       />
//       <Flex
//         onClick={() => {
//           router.back()
//         }}
//       >
//         <Button>Back</Button>
//       </Flex>
// {/*       <Footer /> */}
//     </div>
//   )
// }








