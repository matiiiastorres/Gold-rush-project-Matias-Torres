
import { useRouter } from "next/router";
import { Chain } from "@covalenthq/client-sdk";
import { NFTDetailView } from "@covalenthq/goldrush-kit";
import { Flex } from "@radix-ui/themes";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";

export default function Collection({
  params,
}: {
  params: {
    chain: Chain;
    address: string;
    token_id: string;
    external_data: string;
  };
}) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 w-full">
      <SiteHeader />
      <NFTDetailView
        chain_name={params.chain}
        collection_address={params.address}
        token_id={params.token_id}
        external_data={params.external_data}
      />
      {/* Fragmento para mostrar la animación del NFT */}
      <div className="flex justify-center items-center">
        {params.external_data?.animation_url ? (
          <video
            className="w-80 bg-base-200 rounded-lg"
            autoPlay
            controls
            loop
          >
            <source
              src={`https://ipfs.io/ipfs/${params.external_data.animation_url.slice(
                7
              )}`}
              type="video/mp4"
            ></source>
          </video>
        ) : (
          <div className="w-80 h-40 bg-base-200 rounded-lg text-pretty text-center text-gray-500 cursor-not-allowed">
            No Animation
          </div>
        )}
      </div>
      {/* Botón de retroceso */}
      <Flex
        onClick={() => {
          router.back();
        }}
        className="justify-center"
      >
        <Button>Back</Button>
      </Flex>
    </div>
  );
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
