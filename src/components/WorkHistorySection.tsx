"use client";

import { WorkHistory } from "./WorkHistory";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const WorkHistorySection = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <WorkHistory />
    </QueryClientProvider>
  );
};

