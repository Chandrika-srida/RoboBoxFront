import {createGlobalStyle} from "styled-components";
import {CartContextProvider} from "@/components/CartContext";
import {primary,secondary} from "@/lib/colors"; 

const GlobalStyles = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre&display=swap');
  *{
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    text-decoration: none;
}
body{
  color: ${primary};
}
.bbg {
    background-color: rgba(23, 36, 42, 1);
    color: white;
    /* border: 1px white solid; */
}
.wbg {
    background-color: white;
    color: rgba(23, 36, 42, 1);
    /* border: 1px black solid; */
}
.container{
    max-width: 1300px;
    margin: 0px auto;
    padding: 0px 50px;
    /* border: 1px white solid; */
}
.boxc, .boxr, .box, .iboxc, .iboxr, .ibox{
    display: grid;
    align-items: center;
    justify-content: center;
}
.mainbg{
    background-image: url(/main/images/main-page.png);
}
.card{
    width: 250px;
    background-color: antiquewhite;
    text-align: center;
}
a{
    text-decoration: none;
}
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
