import React,{useState} from 'react'

function Keyboard() {
  const [inputText,setInputText]=useState("abb");
  const [isCaps,SetIsCaps]=useState(false);
  const [isShift,SetIsShift]=useState(false);

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
    console.log(1)
  }

  const handleShiftKey=()=>{
    const shift=!isShift;
    SetIsShift(shift);
  }

  const handleCtrlKey=()=>{
    console.log(1)
  }

  const handleAltKey=()=>{
    console.log(1)
  }

  const handleRegularKey=(key)=>{
    const text=key;
    setInputText((prev)=>prev+key);
  }
  

  return (
    <>
      <h1 className='text-center bg-red-500 p-5 text-3xl'>Virtual Keyboard</h1>
      <div className='flex justify-center'>

        <input 
        type="text" 
        className='w-1/2 border-2 rounded-2xl py-5 px-5 m-10'
        placeholder='Enter Text'
        value={inputText}
        onChange={(e)=>setInputText(e.target.value)}
        />

      </div>

      <div className='row justify-center items-center w-2/3 max-w-full m-auto border-2 p-2 rounded-xl bg-amber-50'>
        <div className='grid grid-cols-14'>
          {['~.`','@.2','#.3','$.4','%.5','^.6','&.7','*.8','(.9',').0','_.-','+.=','<i className="fa-solid fa-delete-left"></i>']
            .map((keyValue)=>(
              <div key={keyValue} className='key border-2 p-2 m-0.5'
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
          {['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{_[', '}_]']
            .map((keyValue)=>(
              <div key={keyValue} className='key p-2 border-2 m-0.5'
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
          {['Caps','A','S','D','F','G','H','J','K','L',':_;','"_\'','Enter']
            .map((keyValue)=>(
              <div key={keyValue} className='key p-2 border-2 m-0.5'
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
          {['Shift','Z','X','C','V','B','N','M','<_,','>_.','?_/']
            .map((keyValue)=>(
              <div key={keyValue} className='key p-2  border-2 m-0.5'
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
              <div key={index} className='key border-2 p-2 m-0.5'
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