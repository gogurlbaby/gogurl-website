import React from 'react';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption
} from 'mdb-react-ui-kit';

import exercise from '../images/exercise.jpg';
import monika from '../images/monika.jpg';
import salad from '../images/salad.jpg'



const Courossel = () => {
    return (
        <MDBCarousel showControls>
            <MDBCarouselInner>
                <MDBCarouselItem itemId={0}>
                    <MDBCarouselElement src={exercise} alt='...' />
                    <MDBCarouselCaption>
                        <h4>hello</h4>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={1}>
                    <MDBCarouselElement src={monika} alt='...' />
                    <MDBCarouselCaption>
                        <h4>hello, there</h4>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2}>
                    <MDBCarouselElement src={salad} alt='...' />
                    <MDBCarouselCaption>
                        <h4>hey, you</h4>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    )
}
export default Courossel;