// "use client"

// import { useContext, useEffect, useState } from "react"
// import { useRouter } from "next/navigation"
// import { ChainItem, CovalentClient } from "@covalenthq/client-sdk"
// import { Flex } from "@radix-ui/themes"
// import { Check, ChevronsUpDown } from "lucide-react"

// import { NftContext } from "@/lib/store"
// import { COVALENT_API_KEY, cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
// } from "@/components/ui/command"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import { useToast } from "@/components/ui/use-toast"

// export default function IndexPage() {
//   const { nftAddress } = useContext(NftContext)
//   const [allChains, setChains] = useState<ChainItem[]>([])
//   const [address, setAddress] = useState(
//     nftAddress ? nftAddress : "0xfeee3700698f8d75bcc18e009022c7b44d2af44f"
//   )
//   const [busy, setBusy] = useState(false)
//   const router = useRouter()
//   const [open, setOpen] = useState(false)
//   const [value, setValue] = useState("eth-mainnet")
//   const { toast } = useToast()

//   const handleAllChains = async () => {
//     setBusy(true)
//     if (!COVALENT_API_KEY) return

//     const client = new CovalentClient(COVALENT_API_KEY)
//     try {
//       const allChainsResp = await client.BaseService.getAllChains()
//       if (allChainsResp.error) {
//         toast({
//           variant: "destructive",
//           title: "Something went wrong.",
//           description: allChainsResp.error_message,
//         })
//       }
//       setChains(allChainsResp.data.items)
//     } catch (exception) {
//       console.log(exception)
//     }
//     setBusy(false)
//   }

//   useEffect(() => {
//     handleAllChains()
//   }, [])

//   return (
//     // <section className="container flex flex-col justify-center gap-6 md:py-10 h-[calc(100vh-150px)] items-center ">
//     <section
//       className={cn(
//         " flex flex-col justify-center items-center h-screen",
//         "bg-cover bg-center bg-no-repeat",
//         "bg-[url('https://covalenthq.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbbf0ee9a-5c2d-4620-bc84-79e668e84e4a%2F215f711f-8cbd-4cd7-bf49-0e6c10c9b6b3%2FAlchemists.jpg?table=block&id=0a0ce7a2-b097-49c0-b49d-23de8434682f&spaceId=bbf0ee9a-5c2d-4620-bc84-79e668e84e4a&width=2000&userId=&cache=v2')]"
//       )}
//       style={{ backgroundSize: "cover" }}
//     >
//       <Flex direction="column" gap="4">
//         <div className="text-center">
//           <h1 className="text-5xl font-extrabold leading-tight tracking-tighter md:text-6xl">
//             <span className="relative inline-block">
//               Alchemist Program 4.0 NFT Collections
//               <span className="absolute top-0 left-0 w-full h-full text-transparent bg-gradient-to-r from-red-400 to-blue-500 bg-clip-text animate-pulse">
//                 Alchemist Program 4.0 NFT Collections
//               </span>
//             </span>
//           </h1>
//           {/* <p className="text-2xl text-gray-700 animate-pulse">
//             Explore our exclusive  collection
//           </p> */}
//         </div>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault()
//             router.push(`/collection/${value}/${address}`)
//           }}
//         >
//           <Flex direction="column" gap="3">
//             {/* <Popover open={open} onOpenChange={setOpen}>
//               <PopoverTrigger asChild>
//                 <Button
//                   variant="outline"
//                   role="combobox"
//                   aria-expanded={open}
//                   className="w-[400px] justify-between"
//                 >
//                   {value
//                     ? allChains.find((chain) => chain.name === value)?.label
//                     : "Select chain..."}
//                   <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className="w-[400px] p-0">
//                 <Command>
//                   <CommandInput placeholder="Search framework..." />
//                   <CommandEmpty>No chain found.</CommandEmpty>
//                   <CommandGroup className="">
//                     {allChains.map((chain) => (
//                       <CommandItem
//                         key={chain.label}
//                         value={chain.name}
//                         onSelect={(currentValue) => {
//                           setValue(currentValue === value ? "" : currentValue)
//                           setOpen(false)
//                         }}
//                       >
//                         <Check
//                           className={cn(
//                             "mr-2 h-4 w-4",
//                             value === chain.label ? "opacity-100" : "opacity-0"
//                           )}
//                         />
//                         {chain.label}
//                       </CommandItem>
//                     ))}
//                   </CommandGroup>
//                 </Command>
//               </PopoverContent>
//             </Popover> */}
//             {/* <Label htmlFor="contract_address">Contract Address</Label> */}
//             {/* <Input
//               className="w-[400px]"
//               type="input"
//               id="address"
//               placeholder="Contract Address"
//               value={address}
//               onChange={(e) => {
//                 setAddress(e.target.value)
//               }}
//             /> */}

//             <div className="text-center">
//               <Button
//                 disabled={address.length === 0 || !value || busy}
//                 type="submit"
//                 className="px-6 py-3 bg-purple-900 bg-opacity-50 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition-all duration-300"
//               >
//                 Go to Collection
//               </Button>
//             </div>
//           </Flex>
//         </form>
//       </Flex>
//     </section>
//   )
// }



























"use client"

import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ChainItem, CovalentClient } from "@covalenthq/client-sdk"
import { Flex } from "@radix-ui/themes"
import { Check, ChevronsUpDown } from "lucide-react"

import { NftContext } from "@/lib/store"
import { COVALENT_API_KEY, cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useToast } from "@/components/ui/use-toast"

export default function IndexPage() {
  const { nftAddress } = useContext(NftContext)
  const [allChains, setChains] = useState<ChainItem[]>([])
  const [address, setAddress] = useState(
    nftAddress ? nftAddress : "0xfeee3700698f8d75bcc18e009022c7b44d2af44f"
  )
  const [busy, setBusy] = useState(false)
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("zora-mainnet")
  const { toast } = useToast()

  const handleAllChains = async () => {
    setBusy(true)
    if (!COVALENT_API_KEY) return

    const client = new CovalentClient(COVALENT_API_KEY)
    try {
      const allChainsResp = await client.BaseService.getAllChains()
      if (allChainsResp.error) {
        toast({
          variant: "destructive",
          title: "Something went wrong.",
          description: allChainsResp.error_message,
        })
      }
      setChains(allChainsResp.data.items)
    } catch (exception) {
      console.log(exception)
    }
    setBusy(false)
  }

  useEffect(() => {
    handleAllChains()
  }, [])

  return (
    // <section className="container flex flex-col justify-center gap-6 md:py-10 h-[calc(100vh-150px)] items-center ">
    //   <Flex direction="column" gap="4">
    //     <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
    //       GoldRush NFT Gallery UI
    //     </h1>
    //     <p className="max-w-[700px] text-lg text-muted-foreground">
    //       Accessible and customizable components that you can copy and paste
    //       into your apps. Free. Open Source. And Next.js 13 Ready.
    //     </p>




 <section
      className={cn(
         " flex flex-col justify-center items-center h-screen",
         "bg-cover bg-center bg-no-repeat",
         "bg-[url('https://covalenthq.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbbf0ee9a-5c2d-4620-bc84-79e668e84e4a%2F215f711f-8cbd-4cd7-bf49-0e6c10c9b6b3%2FAlchemists.jpg?table=block&id=0a0ce7a2-b097-49c0-b49d-23de8434682f&spaceId=bbf0ee9a-5c2d-4620-bc84-79e668e84e4a&width=2000&userId=&cache=v2')]"
       )}
       style={{ backgroundSize: "cover" }}
     >
     <Flex direction="column" gap="4">
         <div className="text-center">
           <h1 className="text-5xl font-extrabold leading-tight tracking-tighter md:text-6xl">
             <span className="relative inline-block">
               Alchemist Program 4.0 NFT Collections
               <span className="absolute top-0 left-0 w-full h-full text-transparent bg-gradient-to-r from-red-400 to-blue-500 bg-clip-text animate-pulse">
                 Alchemist Program 4.0 NFT Collections
               </span>
             </span>
           </h1>
         {/* <p className="text-2xl text-gray-700 animate-pulse">
             Explore our exclusive  collection
          </p> */}
         </div>



    
        <form
          onSubmit={(e) => {
            e.preventDefault()
            router.push(`/collection/${value}/${address}`)
          }}
        >
          <Flex direction="column" gap="3">
{/*             <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[400px] justify-between"
                >
                  {value
                    ? allChains.find((chain) => chain.name === value)?.label
                    : "Select chain..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[400px] p-0">
                <Command>
                  <CommandInput placeholder="Search framework..." />
                  <CommandEmpty>No chain found.</CommandEmpty>
                  <CommandGroup className="">
                    {allChains.map((chain) => (
                      <CommandItem
                        key={chain.label}
                        value={chain.name}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue)
                          setOpen(false)
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === chain.label ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {chain.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            <Label htmlFor="contract_address">Contract Address</Label>
            <Input
              className="w-[400px]"
              type="input"
              id="address"
              placeholder="Contract Address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value)
              }}
            /> */}
            <div>
              <Button
                disabled={address.length === 0 || !value || busy}
                type="submit"
              >
                Continue
              </Button>
            </div>
          </Flex>
        </form>
      </Flex>
    </section>
  )
}
