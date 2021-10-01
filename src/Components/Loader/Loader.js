import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { FallBackContainer } from "./Loader.styles";

const loader = (
  <FallBackContainer>
    <Loader type="Circles" color="rgb(25, 118, 210)" height={100} width={100} />
  </FallBackContainer>
);

export default loader;
