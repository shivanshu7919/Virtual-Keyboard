import React from 'react'

function Keyboard() {
  

  return (
    <>
      <h1 className='text-center bg-red-500 p-5 text-3xl'>Virtual Keyboard</h1>
      <div className='flex justify-center'>

        <textarea
          className='w-1/2 border-2 rounded-2xl py-5 px-5 m-10'
          placeholder='Enter Text'
        ></textarea>

      </div>

      <div className='justify-center items-center w-2/3 max-w-full m-auto border-2 p-2 rounded-xl bg-amber-50'>
        <div className='grid grid-cols-14'>
          {['~.`','@.2','#.3','$.4','%.5','^.6','&.7','*.8','(.9',').0','_.-','+.=','<i className="fa-solid fa-delete-left"></i>']
            .map((keyValue)=>(
              <div key={keyValue} className='border-2 p-2 m-0.5'>
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
              <div key={keyValue} className='p-2 border-2 m-0.5'
                onClick={()=>handleKey()}
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

        <div className='grid grid-cols-12'>
          {['Caps','A','S','D','F','G','H','J','K','L',':_;','"_\'']
            .map((keyValue)=>(
              <div key={keyValue} className='p-2 border-2 m-0.5'>
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
        
        <div className='grid grid-cols-11'>
          {['Shift','Z','X','C','V','B','N','M','<_,','>_.','?_/']
            .map((keyValue)=>(
              <div key={keyValue} className='p-2  border-2 m-0.5'>
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

        <div className='grid grid-cols-8'>
          {['Ctrl','Alt',' ','Alt','Ctrl','<','>']
            .map((keyValue,index)=>(
              <div key={index} className='border-2 p-2 m-0.5'>
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