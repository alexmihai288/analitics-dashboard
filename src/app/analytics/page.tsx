import { analytics } from "@/utils/analytics";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const pageview = await analytics.retrieve("pageview", "16/02/2024");

  return <p>{JSON.stringify(pageview)}</p>;
};

export default page;
