





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
    <div className="bg-background w-full flex flex-col gap-4">
      <SiteHeader />
      <div className="flex flex-col md:flex-row gap-4">
        {/* Galería de NFT (ocupará la mitad de la pantalla en dispositivos grandes) */}
        <div className="w-full md:w-1/2">
          <NFTCollectionTokenListView
            chain_name={params.chain}
            collection_address={params.address}
            on_nft_click={(e: any) => {
                console.log("Datos del NFT:", e); // Agregar console.log() aquí
              router.push(
                `/collection/${params.chain}/${params.address}/token/${e.nft_data.}`
              )
            }}
            custom_styles={{
              card: "bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300",
            }}
          />
        </div>
        {/* Descripción de la colección (ocupará la mitad de la pantalla en dispositivos grandes) */}
        <div className="w-full md:w-1/2">
          <div>
            <img  src="https://covalenthq.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbbf0ee9a-5c2d-4620-bc84-79e668e84e4a%2Fa2bbfe3f-f4ec-474e-97a7-cc2986cd5a1a%2Falchemist_logo_medallion_720.png?table=block&id=0a0ce7a2-b097-49c0-b49d-23de8434682f&spaceId=bbf0ee9a-5c2d-4620-bc84-79e668e84e4a&width=250&userId=&cache=v2"className="w-28 h-28" alt="" />
            <h3 className="text-[2rem] font-semibold text-[#ff4c8b]">
              Alchemist 4.0
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                src="https://covalenthq.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbbf0ee9a-5c2d-4620-bc84-79e668e84e4a%2Fa2bbfe3f-f4ec-474e-97a7-cc2986cd5a1a%2Falchemist_logo_medallion_720.png?table=block&id=0a0ce7a2-b097-49c0-b49d-23de8434682f&spaceId=bbf0ee9a-5c2d-4620-bc84-79e668e84e4a&width=250&userId=&cache=v2"
                  className="w-8 h-8 rounded-full"
                  alt=""
                />
                <div>Covalent</div>
              </div>
              <div className="flex items-center gap-2">
                {/* Botón de mint info (mostrado solo en dispositivos grandes) */}
                <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-9 px-4 py-2 font-normal hidden md:flex">
                  Mint Info
                </button>
                {/* Botón de mint info (mostrado solo en dispositivos pequeños) */}
                <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-9 px-4 py-2 font-normal flex md:hidden">
                  Mint Info
                </button>
              </div>
            </div>
            <p className="text-sm line-clamp-2">
              Special-made NFTs for Alchemists that have shown above and beyond
              contributions to the ecosystem and community.
              <br />
              <br />
              These are available for a limited time for version Alchemist 4.0.
            </p>
            {/* Información adicional */}
            <div className="text-sm grid grid-cols-1 gap-2">
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">Contract Address</div>
                <a
                  href="https://explorer.zora.energy/address/0xfeee3700698f8d75bcc18e009022c7b44d2af44f"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-9 px-4 py-2 font-normal">
                    0xfeee...af44f
                  </button>
                </a>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">Total Items</div>
                <div>16</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">Network</div>
                <div>Zora Mainnet</div>
              </div>
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-border h-[1px] w-full"
            ></div>
            {/* Botones adicionales (mostrados solo en dispositivos grandes) */}
            <div className="my-4 hidden md:flex">
              <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 w-full bg-primary-covalent text-white hover:opacity-[0.75] hover:bg-primary-covalent transition-all">
                Mint Info
              </button>
            </div>
            {/* Botones adicionales (mostrados solo en dispositivos pequeños) */}
            <div className="my-4 flex md:hidden">
              <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 w-full bg-primary-covalent text-white hover:opacity-[0.75] hover:bg-primary-covalent transition-all">
                Mint Info
              </button>
            </div>
          </div>
        </div>
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
















// "use client"

// import { useRouter } from "next/navigation"
// import { Chain } from "@covalenthq/client-sdk"
// import { NFTCollectionTokenListView } from "@covalenthq/goldrush-kit"
// import { Flex } from "@radix-ui/themes"

// import { Button } from "@/components/ui/button"
// import { SiteHeader } from "@/components/site-header"


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

//     </div>
//   )
// }








