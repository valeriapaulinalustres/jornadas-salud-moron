import { useEffect, useState } from 'react'
import './multimedia.css'

type propsTitle = {
    title:string,
  }
  

function Multimedia({title}:propsTitle) {

    interface fotos {
        nombre: string,
        url: string,
      }
      
      const fotos:Array<fotos> = [
        {nombre: "1.jpg", url: "./assets/fotos/1.jpeg"},
        {nombre: "2.jpg", url: "./assets/fotos/2.jpeg"},
        {nombre: "3.jpg", url: "./assets/fotos/3.jpeg"},
        {nombre: "5.jpg", url: "./assets/fotos/5.jpeg"},
        {nombre: "6.jpg", url: "./assets/fotos/6.jpeg"},
        {nombre: "7.jpg", url: "./assets/fotos/7.jpeg"},
        {nombre: "8.jpg", url: "./assets/fotos/8.jpeg"},
        {nombre: "9.jpg", url: "./assets/fotos/9.jpeg"},
        {nombre: "10.jpg", url: "./assets/fotos/10.jpeg"},
        {nombre: "11.jpg", url: "./assets/fotos/11.jpeg"},
        {nombre: "12.jpg", url: "./assets/fotos/12.jpeg"},
        {nombre: "13.jpg", url: "./assets/fotos/13.jpeg"},
        {nombre: "14.jpg", url: "./assets/fotos/14.jpeg"},
        {nombre: "15.jpg", url: "./assets/fotos/15.jpeg"},
        {nombre: "16.jpg", url: "./assets/fotos/16.jpeg"},
        {nombre: "17.jpg", url: "./assets/fotos/17.jpeg"},
        {nombre: "18.jpg", url: "./assets/fotos/18.jpeg"},
        {nombre: "19.jpg", url: "./assets/fotos/19.jpeg"},
        {nombre: "20.jpg", url: "./assets/fotos/20.jpeg"},
        {nombre: "21.jpg", url: "./assets/fotos/21.jpeg"},
        {nombre: "22.jpg", url: "./assets/fotos/22.jpeg"},
        {nombre: "23.jpg", url: "./assets/fotos/23.jpeg"},
        {nombre: "24.jpg", url: "./assets/fotos/24.jpeg"},
        {nombre: "25.jpg", url: "./assets/fotos/25.jpeg"},
        {nombre: "26.jpg", url: "./assets/fotos/26.jpeg"},
        {nombre: "27.jpg", url: "./assets/fotos/27.jpeg"},
        {nombre: "28.jpg", url: "./assets/fotos/28.jpeg"},
        {nombre: "29.jpg", url: "./assets/fotos/29.jpeg"},
        {nombre: "30.jpg", url: "./assets/fotos/30.jpeg"},
        {nombre: "31.jpg", url: "./assets/fotos/31.jpeg"},
        
        {nombre: "33.jpg", url: "./assets/fotos/33.jpeg"},
        {nombre: "34.jpg", url: "./assets/fotos/34.jpeg"},
        {nombre: "35.jpg", url: "./assets/fotos/35.jpeg"},
        {nombre: "36.jpg", url: "./assets/fotos/36.jpeg"},
        {nombre: "37.jpg", url: "./assets/fotos/37.jpeg"},
        {nombre: "38.jpg", url: "./assets/fotos/38.jpeg"},
        {nombre: "39.jpg", url: "./assets/fotos/39.jpeg"},
        {nombre: "40.jpg", url: "./assets/fotos/40.jpeg"},
        {nombre: "41.jpg", url: "./assets/fotos/41.jpeg"},
        {nombre: "42.jpg", url: "./assets/fotos/42.jpeg"},
        {nombre: "43.jpg", url: "./assets/fotos/43.jpeg"},
        {nombre: "44.jpg", url: "./assets/fotos/44.jpeg"},
        
        {nombre: "46.jpg", url: "./assets/fotos/46.jpeg"},
        {nombre: "47.jpg", url: "./assets/fotos/47.jpeg"},
        {nombre: "48.jpg", url: "./assets/fotos/48.jpeg"},
        {nombre: "49.jpg", url: "./assets/fotos/49.jpeg"},
        {nombre: "50.jpg", url: "./assets/fotos/50.jpeg"},
        {nombre: "51.jpg", url: "./assets/fotos/51.jpeg"},
        {nombre: "52.jpg", url: "./assets/fotos/52.jpeg"},
        {nombre: "53.jpg", url: "./assets/fotos/53.jpeg"},
        {nombre: "54.jpg", url: "./assets/fotos/54.jpeg"},
        {nombre: "55.jpg", url: "./assets/fotos/55.jpeg"},
        {nombre: "56.jpg", url: "./assets/fotos/56.jpeg"},
        {nombre: "57.jpg", url: "./assets/fotos/57.jpeg"},
        {nombre: "58.jpg", url: "./assets/fotos/58.jpeg"},
        {nombre: "59.jpg", url: "./assets/fotos/59.jpeg"},
        {nombre: "60.jpg", url: "./assets/fotos/60.jpeg"},
        {nombre: "61.jpg", url: "./assets/fotos/61.jpeg"},
        {nombre: "62.jpg", url: "./assets/fotos/62.jpeg"},
        {nombre: "63.jpg", url: "./assets/fotos/63.jpeg"},
        {nombre: "64.jpg", url: "./assets/fotos/64.jpeg"},
        {nombre: "65.jpg", url: "./assets/fotos/65.jpeg"},
        {nombre: "66.jpg", url: "./assets/fotos/66.jpeg"},
        {nombre: "67.jpg", url: "./assets/fotos/67.jpeg"},
      
        {nombre: "69.jpg", url: "./assets/fotos/69.jpeg"},
        {nombre: "70.jpg", url: "./assets/fotos/70.jpeg"},
        {nombre: "71.jpg", url: "./assets/fotos/71.jpeg"},
        {nombre: "72.jpg", url: "./assets/fotos/72.jpeg"},
        {nombre: "73.jpg", url: "./assets/fotos/73.jpeg"},
        {nombre: "74.jpg", url: "./assets/fotos/74.jpeg"},
        {nombre: "75.jpg", url: "./assets/fotos/75.jpeg"},
        {nombre: "76.jpg", url: "./assets/fotos/76.jpeg"},
        {nombre: "77.jpg", url: "./assets/fotos/77.jpeg"},
        {nombre: "78.jpg", url: "./assets/fotos/78.jpeg"},
        {nombre: "79.jpg", url: "./assets/fotos/79.jpeg"},
        {nombre: "80.jpg", url: "./assets/fotos/80.jpeg"},
        {nombre: "81.jpg", url: "./assets/fotos/81.jpeg"},
        {nombre: "82.jpg", url: "./assets/fotos/82.jpeg"},
        {nombre: "83.jpg", url: "./assets/fotos/83.jpeg"},
        {nombre: "84.jpg", url: "./assets/fotos/84.jpeg"},
        {nombre: "85.jpg", url: "./assets/fotos/85.jpeg"},
        {nombre: "86.jpg", url: "./assets/fotos/86.jpeg"},
        {nombre: "87.jpg", url: "./assets/fotos/87.jpeg"},
        {nombre: "88.jpg", url: "./assets/fotos/88.jpeg"},
        {nombre: "89.jpg", url: "./assets/fotos/89.jpeg"},
        {nombre: "90.jpg", url: "./assets/fotos/90.jpeg"},
        {nombre: "91.jpg", url: "./assets/fotos/91.jpeg"},
        {nombre: "92.jpg", url: "./assets/fotos/92.jpeg"},
        {nombre: "93.jpg", url: "./assets/fotos/93.jpeg"},
        {nombre: "94.jpg", url: "./assets/fotos/94.jpeg"},
        {nombre: "95.jpg", url: "./assets/fotos/95.jpeg"},
        {nombre: "96.jpg", url: "./assets/fotos/96.jpeg"},
        {nombre: "97.jpg", url: "./assets/fotos/97.jpeg"},
        {nombre: "98.jpg", url: "./assets/fotos/98.jpeg"},
        {nombre: "99.jpg", url: "./assets/fotos/99.jpeg"},
        {nombre: "100.jpg", url: "./assets/fotos/100.jpeg"},
        {nombre: "101.jpg", url: "./assets/fotos/101.jpeg"},
        {nombre: "102.jpg", url: "./assets/fotos/102.jpeg"},
        {nombre: "103.jpg", url: "./assets/fotos/103.jpeg"},
        {nombre: "104.jpg", url: "./assets/fotos/104.jpeg"},
       




       

           

      
       
      
      
      ]


  const [style, setStyle] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0)

const slideLength:number = fotos.length

  //---------Carousel------------------------------------


  const autoScroll:boolean = true;
  let slideInterval:any;
  let intervalTime:number= 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    console.log("p")
  }

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }


  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  useEffect(() => {
    if (autoScroll) {
      auto()
   
    }
    return () => clear()
  }, [currentSlide])

  function clear() {
    clearInterval(slideInterval)

  }

  //--------------------------------------------------------

  return (
    <>
     <h2 className='carousel-title'>{title}</h2>
      <div className='carousel-container'>
       
        <div className="arrowPrev" onClick={prevSlide}>{"<"}</div>
        <div className="arrowNext" onClick={nextSlide}>{">"}</div>
       
        {fotos.map((el, index) => {
          return (
            <div className={index === currentSlide ? "slideCurrent" : "slide"} key={index}>
              {index === currentSlide && (
                  <img src={el.url} width="100%"  alt={el.nombre} className="carouselImg" />

              )
              }
            </div>
          )
        })}
        
        
      </div>
     
    </>
  )
}

export default Multimedia