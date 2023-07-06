import styled from "styled-components";
import {primary,secondary} from "@/lib/colors";
import Center from "./Center";
import Link from "next/link";


const Bg = styled.div`
  color: white;
  padding-top:60px;
  background-color: ${primary};
  height: 100vh;
`;
const Box = styled.div`
display:grid;
grid-template-columns: 1fr 2.5fr;
row-gap: 50px;
column-gap: 100px;
/* border: 5px solid purple; */
margin: 50px auto;
margin-bottom: 0px;
`;
const IBox = styled.div`
display:grid;
grid-template-rows: 1fr 1fr 0.2fr;
height:100%;
// border:white solid 2px;
`;
const Des = styled.div`
  font-weight: bold;
  font-size: 25px;
  line-height: 1.8;
  letter-spacing: 0.01cm;
  color: #ffffff;
`;

const Head = styled.div`
  font-weight: 700;
  font-size: 60px;
  line-height: 1.1;
  text-align:left;
  text-transform: capitalize;
  margin-bottom: 80px;
  color: white;
`;
const Click = styled(Link)`
  background-color: ${secondary};
  color: ${primary};
  font-weight: bold;
  font-size: 25px;
  border-radius: 4px;
  text-align: center;
  padding: 10px 40px;
`;

export default function Testimonials() {
    return (
        <Bg>
            <Center>
                <Box>
                    <IBox>
                        <Head>Parent Testimonials</Head>
                        <Des>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Des>
                        <Click href={"/"}>See More</Click>
                    </IBox>
                </Box>
            </Center>
        </Bg>
    );
}