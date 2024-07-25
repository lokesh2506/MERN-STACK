const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


const DropDowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select"); 

for(let slct of DropDowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(slct.name==="from" && currCode==="USD"){
          newOption.selected="selected";
        }
        if(slct.name==="to" && currCode==="INR"){
          newOption.selected="selected";
        }
        slct.append(newOption);
    }

    slct.addEventListener("change",(evt)=>{
      updateFlag(evt.target);
    });
}

const updateFlag=(element)=>{
  let currCode= element.value;
  let countryCode=countryList[currCode];
  let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
  let img=element.parentElement.querySelector("img");
  img.src=newSrc;
};
 
btn.addEventListener("click",async (evt)=>{
  evt.preventDefault();
  let amount=document.querySelector(".amount input");
  let amtVal=amount.value;
  if(amtVal===""||amtVal<1){
    amtVal=1
    amount.value="1";
  }
  const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response=await fetch(URL);
  let data=await response.json();
  let rate=data[toCurr.value.toLowerCase()]; 
  let finalAmt=amount*rate;
  msg.innerText=`${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
});