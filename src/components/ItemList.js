import React, { useMemo } from "react";
import {
  useGetProductQuery,
  useGetProductsByCategoryQuery,
} from "../features/productsApiSlice";
import { useSelector } from "react-redux";
import { Box, ScrollArea, Spinner, Heading } from "@radix-ui/themes";
import ItemCard from "./ItemCard";

export const ItemList = () => {
  const { query, category } = useSelector((state) => state.searchFilter);

  const {
    data: searchData,
    isLoading: isSearchLoading,
    error: searchError,
  } = useGetProductQuery(query);
  const {
    data: categoryData,
    isLoading: isCategoryLoading,
    error: categoryError,
  } = useGetProductsByCategoryQuery(category);

  const isLoading = isSearchLoading || isCategoryLoading;
  const error = searchError || categoryError;

  const displayProducts = useMemo(() => {
    let productsToDisplay = [];

    if (category && category !== "all" && categoryData?.products) {
      productsToDisplay = categoryData.products;

      if (query) {
        productsToDisplay = productsToDisplay.filter(
          (product) =>
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );
      }
    } else if (searchData?.products) {
      productsToDisplay = searchData.products;
    }

    return productsToDisplay.map((product) => (
      <ItemCard
        key={product.id}
        title={product.title}
        description={product.description}
        category={product.category}
        brand={product.brand}
        thumbnail={product.thumbnail}
      />
    ));
  }, [category, categoryData, query, searchData]);

  if (isLoading)
    return (
      <Box
        align="center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "50vh",
        }}
      >
        <Spinner size="3" />
      </Box>
    );

  if (error)
    return (
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "50vh",
        }}
      >
        <Heading style={{ color: "var(--gray-10)" }}>
          {`Something went wrong! (${error.message}) Try again later.`}
        </Heading>
      </Box>
    );

  return (
    <Box style={{ maxWidth: "600px", margin: "0 auto", height: "80vh" }}>
      <ScrollArea>{displayProducts}</ScrollArea>
    </Box>
  );
};
