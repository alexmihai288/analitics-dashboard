import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";
import { analytics } from "@/utils/analytics";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const pageview = await analytics.retrieveDays("pageview", 1);

  return (
    <div className="min-h-screen w-full py-12 flex justify-center items-center">
      <div className="relative w-full max-w-6xl mx-auto text-white">
        <AnalyticsDashboard />
      </div>
    </div>
  );
};

export default page;
