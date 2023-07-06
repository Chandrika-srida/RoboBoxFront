import Center from "./Center";
import styled from "styled-components";
import Link from "next/link";
import {primary,secondary} from "@/lib/colors"; 

const Bg = styled.div`
  color: black;
  padding: 70px;
  height: 100vh;
  box-sizing: border-box;
  text-align: center;
`;

const Head = styled.div`
  font-weight: 700;
  font-size: 60px;
  text-transform: capitalize;
  margin-bottom: 80px;
  color:${primary};
  text-align: center;
`;
const SubHead = styled.div`
font-weight: bold;
font-size: 30px;
text-transform: capitalise;
margin: 10px;
`;
const Des = styled.div`
  font-size: 20px;
  line-height: 1.5;
  text-transform: capitalize;
  margin: 30px 0px 20px 0px;
`;

const Click = styled(Link)`
  background-color: ${primary};
  color: white;
  font-weight: bold;
  font-size: 25px;
  border-radius: 4px;
  padding: 10px 40px; 
`;

const Click2 = styled(Link)`
color: ${primary};
font-weight: bold;
font-size: 25px;
padding: 10px 40px; 
`;

const Box = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
row-gap: 50px;
column-gap: 100px;
/* border: 5px solid purple; */
margin: 50px auto;
margin-bottom: 0px;
`;
const IBoxc = styled.div`
background-color: rgba(217, 217, 217, 1);
padding: 30px;
`;

export default function Login() {
  return (
    <Bg>
      <Center>
        <Head>School Management Systems</Head>
        <Box>
          <IBoxc>
            <SubHead>For Teachers</SubHead>
            <Des>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate et hic voluptatibus fugit rerum, eos, aut perferendis
              at nesciunt nostrum obcaecati exercitationem
            </Des>
            <Click href={"/"}>Login</Click>
            <Des>Don't have an account?</Des>
            <Click2 href={"/"}>Sign Up</Click2>
          </IBoxc>
          <IBoxc>
            <SubHead>For Students</SubHead>
            <Des>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate et hic voluptatibus fugit rerum, eos, aut perferendis
              at nesciunt nostrum obcaecati exercitationem
            </Des>
            <Click href={"/"}>Login</Click>
            <Des>Don't have an account?</Des>
            <Click2 href={"/"}>Sign Up</Click2>
          </IBoxc>
        </Box>
      </Center>
    </Bg>
  );
}
