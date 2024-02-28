import Link from "next/link"
import Web3 from "web3"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

// import { Icons } from "@/components/icons"

interface BotonMetamaskProps {
  onConnect?: () => void
}

export const Icons = {
  Metamask: () => (
    <img
      src="https://houseoffirst.com/images/misc/mm_twitch_yellow_matte.gif"
      alt="MetaMask Icon"
    />
  ),
  // Otros iconos...
}

export function BotonMetamask({ onConnect }: BotonMetamaskProps) {
  const handleConnect = async () => {
    try {
      // Verificar si MetaMask está instalado
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum)

        // Solicitar al usuario que se conecte a MetaMask
        await window.ethereum.request({ method: "eth_requestAccounts" })

        // Ejecutar cualquier acción adicional después de la conexión exitosa
        if (onConnect) {
          onConnect()
        }
      } else {
        // Manejar caso en el que MetaMask no está instalado o habilitado
        console.error("MetaMask no está instalado")
      }
    } catch (error) {
      // Manejar errores
      console.error("Error al conectar con MetaMask:", error)
    }
  }

  return (
    <div className="flex items-center space-x-1">
      <button
        className={buttonVariants({
          size: "icon",
          variant: "ghost",
        })}
        onClick={handleConnect}
      >
        <Icons.Metamask className="h-5 w-5" />
        <span className="sr-only">Metamask</span>
      </button>
    </div>
  )
}
