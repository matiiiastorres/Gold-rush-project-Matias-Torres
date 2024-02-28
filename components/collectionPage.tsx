// import { NFTDetailView } from "@covalenthq/goldrush-kit";
// import { Flex } from "@radix-ui/themes";
// import { useRouter } from "next/router";
// import { Chain } from "@covalenthq/client-sdk";
// import { SiteHeader } from "@/components/SiteHeader";
// import { Button } from "@/components/ui/button";
// import { useNftContext } from "../../context";
// import { shortenAddress, sizeFormatter } from "../../utils/helpers";

// const CollectionPage: React.FC = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const { nftData } = useNftContext();

//   const handleBackClick = () => {
//     router.back();
//   };

//   return (
//     <div className="flex flex-col gap-4 w-full">
//       <SiteHeader />
//       <section className="flex flex-row flex-nowrap justify-center gap-12 p-8">
//         <section className="w-9/12">
//           <section className="relative flex flex-row items-center">
//             <div className="flex-1 text-sm breadcrumbs py-8">
//               <ul>
//                 <li><a href={"/"}>Home</a></li>
//                 <li><a href={"/collection"}>Collection</a></li>
//                 <li>{nftData?.contract_name}</li>
//               </ul>
//             </div>
//           </section>
//           <section>
//             <div className="relative flex flex-row gap-12">
//               <div className="avatar">
//                 <div className="w-[32rem] rounded">
//                   <img src={nftData?.nft_data?.external_data?.image} className={"rounded-md"} />
//                 </div>
//               </div>
//               <section className="self-start flex flex-col gap-y-4">
//                 <div className="font-semibold text-5xl py-4">{nftData?.contract_name} #{nftData?.nft_data?.token_id}</div>
//                 <div className="flex flex-row flex-wrap gap-4 text-balance">
//                   {
//                     nftData?.nft_data?.external_data?.attributes.map((eachAttr: any) => (
//                       <div key={eachAttr.trait_type} className="bg-base-200 rounded-lg px-8 py-4 leading-normal">
//                         <div className="text-gray-600 text-sm">{eachAttr.trait_type}</div>
//                         <div className="font-">{eachAttr.value}</div>
//                       </div>
//                     ))
//                   }
//                 </div>
//               </section>
//             </div>
//             <div className="flex flex-row items-center gap-3 py-4">
//               <div className="font-semibold text-lg text-gray-500">{nftData?.contract_ticker_symbol}</div>
//               <div className="size-2 bg-gray-300 rounded-full mx-4"></div>
//               <div className="font-semibold text-lg text-gray-400"><span className="font-bold text-black">Contract: </span>{shortenAddress(nftData?.contract_address)}</div>
//               <div className="size-2 bg-gray-300 rounded-full mx-4"></div>
//               <div className="font-semibold text-lg text-gray-400"><span className="font-bold text-black">Video: </span>15.4 MB</div>
//             </div>
//             <div className="py-8">
//               <header className="py-2 font-bold text-sm text-gray-600 leading-loose">Other Media</header>
//               <div className="flex flex-row items-center">
//                 {
//                   nftData?.nft_data?.external_data?.animation_url
//                     ?
//                     <video
//                       className="w-80 bg-base-200 rounded-lg"
//                       autoPlay
//                       controls
//                       loop
//                     >
//                       <source src={`https://ipfs.io/ipfs/${nftData?.nft_data?.external_data?.animation_url.slice(7,)}`} type="video/mp4"></source>
//                     </video>

//                     : <div
//                       className="flex flex-row justify-center items-center w-80 h-40 bg-base-200 rounded-lg text-pretty text-center text-gray-500 cursor-not-allowed"
//                     >No Animation</div>
//                 }
//               </div>
//             </div>
//             <div className="py-8">
//               <header className="py-2 font-bold text-sm text-gray-600 leading-loose">Details</header>
//               <div className="flex flex-row gap-8 py-2">
//                 <div className="flex flex-row items-center gap-4">
//                   <span>Owner:</span>
//                   <span className="bg-base-200 rounded-lg p-4 border-[1px] border-b-4 border-solid border-gray-300">{nftData?.nft_data?.original_owner ? shortenAddress(nftData?.nft_data?.original_owner) : "-"}</span>
//                 </div>
//                 <div className="flex flex-row items-center gap-4">
//                   <span>Size:</span>
//                   <span className="bg-base-200 rounded-lg p-4 border-[1px] border-b-4 border-solid border-gray-300">15.4 MB</span>
//                 </div>
//               </div>
//             </div>
//             <div className="py-8 leading-loose text-pretty">
//               <header className="py-2 font-bold text-sm text-gray-600 leading-loose">Description</header>
//               {
//                 nftData?.nft_data?.external_data?.description ||
//                 "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit voluptates, reiciendis aliquam accusamus voluptatibus harum tempore blanditiis, ex iste recusandae quae inventore quas odio dolorem voluptatem labore eligendi distinctio officia."
//               }
//             </div>
//             <div>
//               <a className="bg-[#FF4B8B] px-3 py-2 rounded-lg text-white font-bold text-lg" href={`https://opensea.io/assets/zora/0xfeee3700698f8d75bcc18e009022c7b44d2af44f/${id}`} target="_blank">Mint on Zora</a>
//             </div>
//           </section>
//         </section>
//       </section>
//       <Flex onClick={handleBackClick}>
//         <Button>Back</Button>
//       </Flex>
//     </div>
//   );
// };

// export default CollectionPage;
