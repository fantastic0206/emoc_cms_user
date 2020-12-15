import SectionsWrapper from "../SectionsWrapper";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact";
import { useEffect } from "react";

const ModuleSlideShow = (props) => {
  console.log(props);
  useEffect(() => {
    if (props.icon === "square") {
      let icon = document.querySelectorAll(".carousel-indicators li");
      console.log(typeof icon);
      for (let i = 0; i < icon.length; i++) {
        let clsName = icon[i];
        clsName.id += "square";
      }
    }

    let colPadding = document.querySelectorAll(
      ".carousel-multi-item .carousel-inner .carousel-slide-item .col-md-4"
    );
    for (let i = 0; i < colPadding.length; i++) {
      colPadding[i].style.paddingRight = props.padding + "px";
    }
  });
  let imgBox = props.multiimage;
  let imgs = imgBox.split(",");

  const singleImgShow = imgs.map((imgItem, index) => {
    return (
      <MDBCarouselItem itemId={index + 1} key={index}>
        <MDBView>
          <img
            className="d-block w-100"
            src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/${imgItem}`}
            alt=""
          />
        </MDBView>
      </MDBCarouselItem>
    );
  });

  const multiCount = Math.ceil(imgs.length / 3);
  // const colImg;
  var mImgData = [];

  for (let i = 0; i < multiCount; i++) {
    const multiImage = imgs.map((imgItem, index) => {
      if (Math.floor(index / 3) == i) {
        return (
          <MDBCol key={index} md="4">
            <MDBCard className="mb-2">
              <MDBCardImage
                className="img-fluid"
                src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/${imgItem}`}
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBBtn color="primary">DETAILBTN</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        );
      }
    });

    let temp = (
      <MDBCarouselItem itemId={i + 1}>
        <MDBRow>{multiImage}</MDBRow>
      </MDBCarouselItem>
    );
    mImgData.push(temp);
  }

  return (
    <MDBContainer>
      {/* {props.toggleButton === "image" && (
        <div className="start-pause-btn">
          <MDBBtn outline color="danger">
            PAUSE
          </MDBBtn>
          <MDBBtn outline color="primary">
            START
          </MDBBtn>
        </div>
      )} */}
      {props.slideType === "Single Image" &&
        props.transitionEffect === "Fly In Right" &&
        props.toggleButton === "image" && (
          <MDBCarousel
            activeItem={1}
            length={imgs.length}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
            slide
          >
            <MDBCarouselInner>{singleImgShow}</MDBCarouselInner>
          </MDBCarousel>
        )}

      {props.slideType === "Single Image" &&
        props.transitionEffect === "Fly In Left" &&
        props.toggleButton === "image" && (
          <MDBCarousel
            activeItem={1}
            length={imgs.length}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
            slide
          >
            <MDBCarouselInner>{singleImgShow}</MDBCarouselInner>
          </MDBCarousel>
        )}

      {props.slideType === "Single Image" &&
        props.transitionEffect === "Fly In Right" &&
        props.toggleButton === "text" && (
          <MDBCarousel
            interval={100000000}
            activeItem={1}
            length={imgs.length}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
            slide
          >
            <MDBCarouselInner>{singleImgShow}</MDBCarouselInner>
          </MDBCarousel>
        )}

      {props.slideType === "Single Image" &&
        props.transitionEffect === "Fly In Left" &&
        props.toggleButton === "text" && (
          <MDBCarousel
            interval={100000000}
            activeItem={1}
            length={imgs.length}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
            slide
          >
            <MDBCarouselInner>{singleImgShow}</MDBCarouselInner>
          </MDBCarousel>
        )}

      {props.slideType === "Single Image" &&
        props.transitionEffect === "Fade In Right" &&
        props.toggleButton === "image" && (
          <MDBCarousel
            activeItem={1}
            length={imgs.length}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            <MDBCarouselInner>{singleImgShow}</MDBCarouselInner>
          </MDBCarousel>
        )}

      {props.slideType === "Single Image" &&
        props.transitionEffect === "Fade In Left" &&
        props.toggleButton === "image" && (
          <MDBCarousel
            activeItem={1}
            length={imgs.length}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            <MDBCarouselInner>{singleImgShow}</MDBCarouselInner>
          </MDBCarousel>
        )}

      {props.slideType === "Single Image" &&
        props.transitionEffect === "Fade In Right" &&
        props.toggleButton === "text" && (
          <MDBCarousel
            interval={100000000}
            activeItem={1}
            length={imgs.length}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            <MDBCarouselInner>{singleImgShow}</MDBCarouselInner>
          </MDBCarousel>
        )}

      {props.slideType === "Single Image" &&
        props.transitionEffect === "Fade In Left" &&
        props.toggleButton === "text" && (
          <MDBCarousel
            interval={100000000}
            activeItem={1}
            length={imgs.length}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            <MDBCarouselInner>{singleImgShow}</MDBCarouselInner>
          </MDBCarousel>
        )}

      {props.slideType === "Multi Image" &&
        props.transitionEffect === "Fly In Right" &&
        props.toggleButton === "image" && (
          <MDBCarousel
            activeItem={1}
            length={multiCount}
            slide={true}
            showControls={true}
            showIndicators={true}
            multiItem
          >
            <MDBCarouselInner>{mImgData}</MDBCarouselInner>
          </MDBCarousel>
        )}

      {props.slideType === "Multi Image" &&
        props.transitionEffect === "Fly In Right" &&
        props.toggleButton === "text" && (
          <MDBCarousel
            interval={100000000}
            activeItem={1}
            length={multiCount}
            slide={true}
            showControls={true}
            showIndicators={true}
            multiItem
          >
            <MDBCarouselInner>{mImgData}</MDBCarouselInner>
          </MDBCarousel>
        )}
    </MDBContainer>
  );
};

export default SectionsWrapper(ModuleSlideShow);
