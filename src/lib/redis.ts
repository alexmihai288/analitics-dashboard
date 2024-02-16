import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://eu2-on-garfish-31686.upstash.io",
  token: process.env.REDIS_KEY!,
});

