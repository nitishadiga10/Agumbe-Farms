import { useEffect, useCallback } from "react";
import { Slider, Intro } from "../Components/StyledItems";
import propTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

const ImageSlider = ({ imageArray, needIntro = false }) => {
  const dispatch = useDispatch();
  const imageIndex = useSelector((state) => state.imageIndex);

  const leftHandler = (i) => {
    dispatch({
      type: "updateImageIndex",
      payload:
        imageIndex !== 0
          ? (imageIndex - 1) % imageArray.length
          : imageArray.length - 1,
    });
  };
  const rightHandler = useCallback(() => {
    dispatch({
      type: "updateImageIndex",
      payload: (imageIndex + 1) % imageArray.length,
    });
  }, [imageArray.length, dispatch, imageIndex]);

  useEffect(() => {
    if (!needIntro) {
      const interval = setInterval(() => rightHandler(), 3000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [needIntro, rightHandler]);

  return (
    <Slider>
      <img
        src={imageArray[imageIndex]}
        alt="Pic1"
        width="100%"
        height="100%"
      ></img>
      {!needIntro && (
        <>
          <AiOutlineDoubleRight
            className="right"
            onClick={rightHandler}
          ></AiOutlineDoubleRight>
          <AiOutlineDoubleLeft
            className="left"
            onClick={leftHandler}
          ></AiOutlineDoubleLeft>
        </>
      )}
      {needIntro && (
        <Intro>
          <h1 className="Heading">WELCOME TO AGUMBE FARMS</h1>
          <p className="SubHeading">ORGANIC FARM IN CHERRAPUNJI OF KARNATAKA</p>
        </Intro>
      )}
    </Slider>
  );
};

ImageSlider.propTypes = {
  imageArray: propTypes.array.isRequired,
  needIntro: propTypes.bool,
};
export default ImageSlider;
