import { useRouter } from "next/navigation"
import { Chain, covalent } from "@covalenthq/client-sdk"
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

  // Función para obtener la información de la colección
  const getCollectionInfo = async () => {
    try {
      const client = covalent.getClient()
      const response = await client.nft.collections(params.chain, params.address).execute()
      return response.data
    } catch (error) {
      console.error("Error fetching collection info:", error)
      return null
    }
  }

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
          <div>
            {/* Aquí mostramos la información de la colección */}
            {/* Por ejemplo, puedes mostrar la descripción y el logo */}
            <p>Description: ...</p>
            <img src="logo-url" alt="Collection Logo" className="w-20 h-20" />
          </div>
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








