import React, { useState } from 'react';
import { HiOutlineInformationCircle } from 'react-icons/hi';

function PopOver() {

const [showPopover, setShowPopover] = useState(false);

return (
   
    <div className='absolute top-22 right-20 h-20 w-[400px] font-serif text-sm font-light'>    
        <button className='h-3 w-3' onClick={() => setShowPopover(!showPopover)}>
            <HiOutlineInformationCircle /> 
        </button>
        {showPopover && (
            <div onClick={(e) =>  setShowPopover(false)}>
                <div class="flex flex-col gap-2 divide-y divide-emerald-300">
                    <div className='mt-2'>
                        <span className='bg-green-300 text-neutral-700 border border-emerald-600 rounded-md p-1 h-4 w-4 inline-block'>
                        </span>
                        <span className='ml-2'>Green tile indicates that the guessed letter is in the word and in the correct spot</span> 
                        
                    </div>
                    <div>
                        <span className='bg-orange-300 text-neutral-700 border border-emerald-600 rounded-md p-1 h-4 w-4 inline-block'>
                        </span>
                        <span className='ml-2'>Orange tile indicates that the guessed letter is in the word but in the wrong spot</span> 
                    </div>
                    <div>
                        <span className='bg-gray-400 text-neutral-700 border border-emerald-600 rounded-md p-1 h-4 w-4 inline-block'>
                        </span>
                        <span className='ml-2'>Gray tile indicates that the guessed letter is not in the word in any spot</span> 
                    </div>
                </div>
            </div>
        )}
    </div>
);
}

export default PopOver
