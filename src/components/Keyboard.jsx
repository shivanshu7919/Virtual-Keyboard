import React,{useState} from 'react'

function Keyboard({inputText,setInputText}) {
  
  const [isCaps,setIsCaps]=useState(false);
  const [isShift,setIsShift]=useState(false);

  const handleKeyClick=(keyValue)=>{
   if(keyValue==='Tab'){
    handleTabKey();
   } 
   else if(keyValue==='Enter'){
    handleEnterKey();
   }
   else if(keyValue==='<i className="fa-solid fa-delete-left"></i>'){
    handleDeleteKey();
   }
   else if(keyValue==='Caps'){
    handleCapsKey();
   }
   else if(keyValue==='Shift'){
    handleShiftKey();
   }
   else if(keyValue==='Ctrl'){
    handleCtrlKey();
   }
   else if(keyValue==='Alt'){
    handleAltKey();
   }
   else{
    handleRegularKey(keyValue);
   }


  }



  const handleTabKey=()=>{
    const newText=inputText+'    ';
    setInputText(newText);
  }
  
  const handleEnterKey=()=>{
    const newText=inputText+'\n';
    setInputText(newText);
  }

  const handleDeleteKey=()=>{
    if(inputText.length===0) return;

    const newText=inputText.slice(0,inputText.length-1);
    setInputText(newText);
  }

  const handleCapsKey=()=>{
    const updatedCaps=!isCaps;
    setIsCaps(updatedCaps);
    const keys=document.querySelectorAll('.key');
    keys.forEach((key)=>{
      const firstSpanElement=key.querySelector('span:first-child');
      if(firstSpanElement){
        const keyText=firstSpanElement.innerText.toLowerCase();
        if(!['shift','alt','ctrl','caps','tab','enter'].includes(keyText)){
          firstSpanElement.innerText=((updatedCaps && isShift) || (!updatedCaps && !isShift))?keyText.toLowerCase():keyText.toUpperCase();
        }
        if(keyText==='caps'){
          firstSpanElement.parentElement.style.backgroundColor=(updatedCaps)?'blue':'#D1D5DB';
        }
      }
    })
  }

  const handleShiftKey=()=>{
    const updatedShift=!isShift;
    setIsShift(updatedShift);
    const keys=document.querySelectorAll('.key');
    keys.forEach((key)=>{
      const firstSpanElement=key.querySelector('span:first-child');
      if(firstSpanElement){
        const keyText=firstSpanElement.innerText.toLowerCase();
        if(!['shift','alt','caps','tab','enter','ctrl'].includes(keyText)){
          firstSpanElement.innerText=((updatedShift && isCaps) || (!updatedShift && !isCaps))?keyText.toLowerCase():keyText.toUpperCase();
        }
        if(keyText==='shift'){
          firstSpanElement.parentElement.style.backgroundColor=(updatedShift)?'blue':'#D1D5DB';
        }
      }
    })
  }

  const handleCtrlKey=()=>{
    console.log(1)
  }

  const handleAltKey=()=>{
    console.log(1)
  }

  const handleRegularKey=(key)=>{
    const keys=key.split(/[_.]/);
    let newContent;
    if(keys.length>1){
      if(isShift){
        if(keys.length===3){
          if(keys[0]==='>') newContent=inputText+'>';
          else newContent=inputText+'_';
        }
        else newContent=inputText+keys[0];
      }
      else{
        if(keys.length===3){
          if(keys[0]==='>') newContent=inputText+'.';
          else newContent=inputText+'-';
        }
        else newContent=inputText+keys[1];
      }
    }
    else{
      let character=((isShift && isCaps) || (!isShift && !isCaps))?key.toLowerCase():key.toUpperCase();
      newContent=inputText+character;
    }

    setInputText(newContent);
  }
  

  return (
    <>
      
      <div className='flex justify-center'>

        
      </div>

      <div className='row justify-center items-center w-2/3 max-w-full m-auto border-2 p-2 rounded-xl bg-amber-50'>
        <div className='grid grid-cols-14'>
          {['~.`','@.2','#.3','$.4','%.5','^.6','&.7','*.8','(.9',').0','_.-','+.=','<i className="fa-solid fa-delete-left"></i>']
            .map((keyValue)=>(
              <div key={keyValue} className='key border-2 p-2 m-0.5 bg-gray-300'
                onClick={()=>handleKeyClick(keyValue)}
              >
                {
                  keyValue.includes('.')?(
                    keyValue.split('.').map((part,index)=>(
                      <span key={index}>{part}</span>
                    ))
                  ):(
                    keyValue==='<i className="fa-solid fa-delete-left"></i>'?(
                      <button>
                        <i className="fa-solid fa-delete-left"></i>
                      </button>
                    ):(
                      <span>{keyValue}</span>
                    )
                  )
                }
              </div>
            ))
          }
        </div>

        <div className='row grid grid-cols-13'>
          {['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{_[', '}_]']
            .map((keyValue)=>(
              <div key={keyValue} className='key p-2 border-2 m-0.5 bg-gray-300'
                onClick={()=>handleKeyClick(keyValue)}
              >
                {
                  keyValue.includes("_")?(
                    keyValue.split('_').map((part,index)=>(
                      <span key={index}>{part}</span>
                    ))
                  ):(
                    <span>{keyValue}</span>
                  )
                }
              </div>
            ))
          }  
        </div>

        <div className='row grid grid-cols-13'>
          {['Caps','a','s','d','f','g','h','j','k','l',':_;','"_\'','Enter']
            .map((keyValue)=>(
              <div key={keyValue} className='key p-2 border-2 m-0.5 bg-gray-300'
                onClick={()=>handleKeyClick(keyValue)}
              >
                {
                  keyValue.includes('_')?(
                    keyValue.split('_').map((part,index)=>(
                      <span key={index}>{part}</span>
                    ))
                  ):(
                    <span>{keyValue}</span>
                  )
                }
              </div>
            ))
          }
        </div>
        
        <div className='row grid grid-cols-11'>
          {['Shift','z','x','c','v','b','n','m','<_,','>_.','?_/']
            .map((keyValue)=>(
              <div key={keyValue} className='key p-2  border-2 m-0.5 bg-gray-300'
                onClick={()=>handleKeyClick(keyValue)}
              >
                {
                  keyValue.includes('_')?(
                    keyValue.split('_').map((part,index)=>{
                      return(
                        <span key={index}>{part}</span>
                      )
                    })
                  ):(
                    <span>{keyValue}</span>
                  )
                }
              </div>
              ))
            }
        </div>

        <div className='row grid grid-cols-8'>
          {['Ctrl','Alt',' ','Alt','Ctrl','<','>']
            .map((keyValue,index)=>(
              <div key={index} className='key border-2 p-2 m-0.5 bg-gray-300'
                onClick={()=>handleKeyClick(keyValue)}
              >
                {
                  <span>{keyValue}</span>
                }
              </div>
            ))
          }
        </div>

      </div>

    </>
  )
}

export default Keyboard