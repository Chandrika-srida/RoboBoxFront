import Center from "./Center";
import styled from "styled-components";
import Link from "next/link";
import {primary,secondary} from "@/lib/colors";

const Bg = styled.div`
  color: white;
  padding-top:60px;
`;

const Des = styled.div`
  font-weight: bold;
  font-size: 25px;
  line-height: 1.8;
  letter-spacing: 0.01cm;
  text-transform: capitalize;
  color: #ffffff;
`;

const Head = styled.div`
  font-weight: 700;
  font-size: 60px;
  line-height: 1.1;
  text-align:left;
  text-transform: capitalize;
  margin-bottom: 80px;
  color: ${secondary};
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

const Boxc = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 2.5fr 1fr;
  gap: 25px;
`;

const iBoxr = styled.div``;

export default function Home() {
  return (
    <Bg>
      <Center>
        <Boxc>
            <iBoxr>
            <Head>Unleash the creator inside you !</Head>
            <Click href={"/products"}>SHOP NOW</Click>
            </iBoxr>
          <img src="images/room.png" alt="edwd" width="500px" />
          <Des>
            <p>turn your curious</p>
            <p>thinker today into</p>
            <div><big>creators of </big></div>
            <big>tomorrow</big>
          </Des>
        </Boxc>
      </Center>
    </Bg>
  );
}
