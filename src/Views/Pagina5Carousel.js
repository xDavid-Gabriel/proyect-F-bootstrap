import { Carousel } from "react-bootstrap";

import slider2 from "../assets/img/slider-2.jpg"
import slider3 from "../assets/img/slider-3.jpg"
import slider4 from "../assets/img/slider-4.jpg"


export default function Pagina5Carousel() {
    return (

        <>
            <Carousel fade className="carousel_p5" style={{ maxHeight: "550px", overflow: "hidden" }}>
                <Carousel.Item>
                    <img
                        src={slider2}
                        alt="header1"
                        className="d-block w-100"
                        style={{ objectFit: "content", height: "100%"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={slider3}
                        alt="header2"
                        className="d-block w-100"
                        style={{ objectFit: "content", height: "100%" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={slider4}
                        alt="header3"
                        className="d-block w-100"
                        style={{ objectFit: "content", height: "100%" }}
                    />
                </Carousel.Item>

            </Carousel>
        </>
    )
}
