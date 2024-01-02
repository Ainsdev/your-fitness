import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string | number) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "EUR" | "GBP" | "BDT"
    notation?: Intl.NumberFormatOptions["notation"]
  } = {}
) {
  const { currency = "USD", notation = "compact" } = options

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
  }).format(Number(price))
}

export function formatId(id: number) {
  return `#${id.toString().padStart(4, "0")}`
}

export function toSentenceCase(str: string) {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
}

export function paymentStatus({
  status,
  shade = 600,
}: {
  status: "PENDING" | "PAID" | "FAILED" | "REJECTED"
  shade?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
}) {
  const bg = `bg-${shade}`

  return cn({
    [`${bg}-red`]: status === "REJECTED" || status === "FAILED",
    [`${bg}-yellow`]: status === "PENDING",
    // [`${bg}-yellow`]: [
    //   "processing",
    //   "requires_action",
    //   "requires_capture",
    //   "requires_confirmation",
    //   "requires_payment_method",
    // ].includes(status),
    [`bg-green-${shade}`]: status === "PAID",
  })
}