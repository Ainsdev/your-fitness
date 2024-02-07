import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


//Scheduling utils (Converting numbers to days and times)

export function formatDate(date: Date | string | number) {
  return new Intl.DateTimeFormat("es-CL", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(date));
}

export function formatStartEndDate(
  startDate: Date | string,
  endDate: Date | string
) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const options: Intl.DateTimeFormatOptions = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  };

  const formattedStart = start.toLocaleDateString("es-CL", options);
  const formattedEnd = end.toLocaleDateString("es-CL", options);

  return `${formattedStart} - ${formattedEnd}`;
}

export function formatCredits(score: number): string {
  let formattedScore = "";

  if (score >= 1000000) {
    formattedScore = (score / 1000000).toFixed(2) + "M";
  } else if (score >= 1000) {
    formattedScore = (score / 1000).toFixed(2) + "k";
  } else {
    formattedScore = score.toString();
  }

  return formattedScore;
}

export function formatId(id: number) {
  return `#${id.toString().padStart(4, "0")}`;
}

export function toSentenceCase(str: string) {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}

export function paymentStatus({
  status,
  shade = 600,
}: {
  status: "PENDING" | "PAID" | "FAILED" | "REJECTED";
  shade?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
}) {
  const bg = `bg-${shade}`;

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
  });
}

export function isArrayOfFile(files: unknown): files is File[] {
  const isArray = Array.isArray(files)
  if (!isArray) return false
  return files.every((file) => file instanceof File)
}
