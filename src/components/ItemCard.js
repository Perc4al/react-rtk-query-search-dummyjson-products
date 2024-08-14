import React from "react";
import { AspectRatio, Card, Flex, Heading, Box, Text } from "@radix-ui/themes";

function ItemCard({ title, description, category, brand, thumbnail }) {
  return (
    <Card style={{ overflow: "hidden" }}>
      <Flex align="start">
        <Box style={{ flexBasis: "33.33%", flexShrink: 0, padding: "1rem" }}>
          <AspectRatio ratio={1}>
            <img
              src={thumbnail}
              alt={title}
              style={{
                border: "solid 1px",
                borderRadius: "20px",
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </AspectRatio>
        </Box>
        <Flex
          direction="column"
          style={{ flexBasis: "66.67%", padding: "1rem" }}
        >
          <Heading size="4">{title}</Heading>
          <Text size="2" style={{ color: "var(--gray-10)" }}>
            {category}
          </Text>
          <Flex align="center" gap="4">
            <Heading size="3" style={{ color: "var(--accent-10)" }}>
              {brand}
            </Heading>
          </Flex>
          <Text style={{ marginTop: "1rem" }}>{description}</Text>
        </Flex>
      </Flex>
    </Card>
  );
}

export default ItemCard;
