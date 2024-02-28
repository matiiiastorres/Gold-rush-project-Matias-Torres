import "@/styles/globals.css"
import { Flex } from "@radix-ui/themes"

import "@radix-ui/themes/styles.css"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Flex
      className=" min-h-[calc(100vh-150px)] w-full"
      justify="center"
    >
      {children}
    </Flex>
  )
}
