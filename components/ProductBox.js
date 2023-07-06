import styled from "styled-components";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";
import { primary } from "@/lib/colors";

const ProductWrapper = styled.div`
background-color:white;
border-radius: 15px;
text-align:center;
padding: 20px;
`;

const WhiteBox = styled(Link)`
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 100%;
    max-height: 180px;
  }
`;

const Title = styled(Link)`
  font-weight: Bold;
  font-size: 20px;
  color: ${primary};
  // border: solid black 2px;
`;

const ProductInfoBox = styled.div`
  display:grid;
  align-items:center;
  align-content: center;
  grid-template-rows: 1fr 2fr;
`;

const PriceRow = styled.div`
  @media screen and (min-width: 768px) {
    display:grid;
    align-items:center;
    align-content: center;
  grid-template-rows: 1fr 2fr;
  // border:solid black 2px;
  }

`;

const Price = styled.div`
font-size: 20px;
  font-weight:400;
  // border:solid black 2px;

  @media screen and (min-width: 768px) {
    font-weight:600;
  }
`;

export default function ProductBox({_id,title,description,price,images}) {
  const {addProduct} = useContext(CartContext);
  const url = '/product/'+_id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
          <img src={images?.[0]} alt=""/>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>
            ${price}
          </Price>
          <Button block onClick={() => addProduct(_id)} primary outline>
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}