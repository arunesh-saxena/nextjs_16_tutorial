"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ErrorBoundary = ({ error, reset }) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <h3>Error</h3>
      <p color="red">{error.message}.</p>
      <button onClick={()=>reload()}>try again</button>
    </div>
  );
};

export default ErrorBoundary;
