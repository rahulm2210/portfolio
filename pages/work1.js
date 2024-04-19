import React from "react";
import { useState } from 'react';
import FsLightbox from "fslightbox-react";

export default function work1() {
  const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});

	function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	}
  const images = [
    'assets/img/work-1.jpg',
    'assets/img/work-2.jpg',
    'assets/img/work-3.jpg',
    'assets/img/work-4.jpg',
    'assets/img/work-5.jpg',
    'assets/img/work-6.jpg'
  ]
     
    return (
        <div>
        <section id="work" className="portfolio-mf paralax-mf sect-pt4 route bg-image" >
      <div className="overlay-mf"></div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a white">
                Portfolio
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {images.map((item,index) =>
            <div className="col-md-4" key={index}>
            <div className="work-box">
              <a className="work-img">
                  <img src={item} alt="" className="img-fluid" onClick={() => openLightboxOnSlide(index+1)}/>
              </a>
              
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Lorem impsum dolor</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      )
    }
        
        <FsLightbox
				toggler={lightboxController.toggler}
				sources={[
					"assets/img/work-1.jpg",
					"assets/img/work-2.jpg",
          "assets/img/work-3.jpg",
					"assets/img/work-4.jpg",
          "assets/img/work-5.jpg",
					"assets/img/work-6.jpg"
				]}
				slide={lightboxController.slide}
			/>
          

        </div>
      </div>
    </section>
    </div>
    )
}