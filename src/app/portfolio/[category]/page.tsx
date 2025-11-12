import React from "react";

export default async function PortfolioCategory({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  console.log(category);

  return (
    <div>
      <h1 className="text-3xl mb-5 font-bold">{category}</h1>
    </div>
  );
}
