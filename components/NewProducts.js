import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";

const Bg = styled.div`
background-color: #d9d9d9cc;
padding-bottom:30px;
`;

const Title = styled.h2`
  font-size: 60px;
  text-align: center;
  margin: 30px;
  font-weight: bold;
`;

export default function NewProducts({products}) {
  return (
    <Bg>
      <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid products={products} />
    </Center>
    </Bg>
  );
}