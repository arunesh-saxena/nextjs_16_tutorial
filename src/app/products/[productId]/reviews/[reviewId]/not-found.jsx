"use client";

import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathName = usePathname();
  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];
  return (
    <div>
      <h1>
        404 - Review {reviewId} Not Found for {productId}
      </h1>
      <p>Sorry, the review you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
