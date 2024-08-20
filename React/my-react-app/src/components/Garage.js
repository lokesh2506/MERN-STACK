
import Apple  from './Apple.js';
import Com from './com';


function Garage(){
    // const brand ='ford';
   const CarInfo={brand:'ferrari',color:'black'};

   const CarList=[
    {brand:'Tesla',color:'red'},
    {brand:'Civic',color:'blue'}
   ]
   const numberList=[1,2,3,4,5,6];
  // const CarInfo={};
  const isDoorOpen=true;
   const appleInfo={type:'14pro',color:'red'};
   const ShowCarInfo=CarInfo.brand!==undefined && CarInfo.color!==undefined;
  return(
    <div classs="new">
        {/* <Com  brand={brand}  color={'black'} color1='red'/> */}
        {/* <Com CarInfo={CarInfo}/> */}
      
        {/* condional rendering */}
        {/* { CarInfo.brand!==undefined && CarInfo.color!==undefined ? 
        <Com CarInfo={CarInfo}/> : null 
        } */}

        {  ShowCarInfo? <Com CarInfo={CarInfo}/> : null }
        
        {
          isDoorOpen ? <h2> Door is opened</h2> : <h2> Door is closed</h2>
        }
      
        <ul>
         {CarList.map((CarInfo)=> <li key={CarInfo.brand}> <Com CarInfo={CarInfo}/></li>)}
        </ul>
        
        <ul>
         {numberList.map((value,index)=> <p key={index}>{value}</p>)}
        </ul>
        {/* props inside a class components  */}
        <Apple appleInfo={appleInfo} />
    </div>
  ); 
}

export default Garage;