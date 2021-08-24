import { HLight } from "./StyledItems";
import propTypes from 'prop-types';

const HighLight = ({ Icon, Descp }) => {
  return (
    <HLight>
      <Icon className = "HightLightIcon"/>
      <h6 className = "HightLightDescp">{Descp}</h6>
    </HLight>
  );
};

HighLight.propTypes = {
  Icon:propTypes.func,
  Descp:propTypes.string
}
export default HighLight;
