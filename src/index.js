import React from 'react';
import ReactDom from 'react-dom/client';

import './style.css';

import one from './assets/images/img1.jpg';
import two from './assets/images/img2.jpg';
import three from './assets/images/img3.jpg';
import four from './assets/images/img4.jpg';
import five from './assets/images/img5.jpg';
import six from './assets/images/img6.jpg';
import seven from './assets/images/img7.jpg';
import eight from './assets/images/img8.jpg'; 

const root = ReactDom.createRoot(document.getElementById('root'));

function Container() {
  return (
    <div>
    </div>
  )
}


function Gallery(props) {
  return (
    <div className='imga'  style={{display:"flex",flexDirection:"column",alignItems:"center",flexBasis:"20%", border:"solid black 2px", padding:"10px", backgroundColor:"white", color:"grey"}}>
      <img  src={props.gpic} alt="img" style={{ width: "100%", height:"200px" }} />
      <p style={{margin:"5px", textAlign:"center"}}>{props.gline}</p>
    </div>

  )
}

var image = [
  {
    pic: one,
    line: "Furry Explorer: Embarking on Adventures"
  },
  {
    pic: two,
    line: "Snuggle Buddies: Warmth in Fur"
  },
  {
    pic: three,
    line: "Playful Pup: Joy in Motion"
  },
  {
    pic: four,
    line: "Inquisitive Eyes: Discovering the World"
  },
  {
    pic: five,
    line: "Paws in the Park: Frolicking Fun"
  },
  {
    pic: six,
    line: "Sleepyhead: Cozy Naptime Moments"
  },
  {
    pic: seven,
    line: "Puppy Love: Heartwarming Connections"
  },
  {
    pic: eight,
    line: "Chew Time Chronicles: Teething Tales"
  }
]


root.render(
  <>
    <div style={{display:"flex", gap:"10px", padding:"10px", flexWrap:"wrap",justifyContent:"space-between", border:"solid black 1px", backgroundColor:"lightgrey"}}>
      {
        image.map(function (item) {
          return (
            <Gallery gpic={item.pic} gline={item.line}></Gallery>
          )
        })
      }
    </div>
  </>
);