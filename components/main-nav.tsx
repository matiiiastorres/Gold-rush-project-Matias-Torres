import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
       <img
          src="https://covalenthq.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbbf0ee9a-5c2d-4620-bc84-79e668e84e4a%2Fa2bbfe3f-f4ec-474e-97a7-cc2986cd5a1a%2Falchemist_logo_medallion_720.png?table=block&id=0a0ce7a2-b097-49c0-b49d-23de8434682f&spaceId=bbf0ee9a-5c2d-4620-bc84-79e668e84e4a&width=250&userId=&cache=v2"
          alt="Logo"
          className="h-10 w-10"
        />
        {/* <Icons.logo className="h-6 w-6" /> */}
        {/* <span className="inline-block font-bold">{siteConfig.name}</span> */}
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
