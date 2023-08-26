/* eslint-disable no-undef */
 import { BiLayer, BiSolidCalendar, BiTask } from 'react-icons/bi';
import {PiChatsCircleLight} from 'react-icons/pi';
import {GrAttachment} from "react-icons/gr";
import './itemContainer.css'
import FileRoot from '../FileUpload/FileRoot';



const ItemContainer = () => {
 

    function toggleModal(modalID){
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById(modalID + "-backdrop").classList.toggle("flex");
  }
  return (
   <div className='bg-white rounded p-2 mt-3'>
    
      {/* client name */}
                        <div className='flex justify-between pb-1'>
                            <div className="flex items-center">
                                <img className="w-6 h-6 rounded" src='https://i.ibb.co/n7GqgRy/profile.png' alt="Default avatar" /> 
                                <p className='font-semibold text-[14px] ml-1'> Client Name</p>
                            </div>
                            <div className="flex items-center">
                                <img className="w-6 h-6 rounded" src='https://i.ibb.co/n7GqgRy/profile.png' alt="Default avatar" /> 
                                <p className='font-semibold text-[14px] ml-1'>Sadik Istiak</p>
                            </div>
                        </div>
                        {/* layer and task */}
                         <div className='flex justify-between py-2'>
                            <div className="flex items-center">
                             <BiLayer/>
                            
                                <p className='font-normal text-[13px] ml-1'>Lorem ipsum hjy sit lore...</p>
                            </div>
                            <div className="flex rounded px-1 bg-gray-200 items-center">
                               <BiTask/> 
                                <p>1/2</p>
                            </div>
                        </div>
                        {/* calender,chat */}
                        
                            <div className="flex gap-3 items-center justify-stretch">
                            <img className="w-6 h-6 rounded" src='https://i.ibb.co/n7GqgRy/profile.png' alt="Default avatar" /> 
                            <img className="w-6 h-6 rounded" src='https://i.ibb.co/n7GqgRy/profile.png' alt="Default avatar" /> 
                            
                                <p className='rounded-full p-1 bg-gray-200 text-[13px] font-normal'>12+</p>
                                <div className='flex items-center font-normal text-[13px]'><PiChatsCircleLight/>15</div>
                                <div className='flex items-center font-normal text-[13px] cursor-pointer' onClick={()=>toggleModal('modal-id')}><GrAttachment />25</div>
                                
                               <div className='flex items-center font-normal text-[13px]'><BiSolidCalendar/>13-12-2022</div> 
                            </div>


{/* modal           */}
<div className="hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" id="modal-id">
  <div className="relative w-auto my-6 mx-auto max-w-3xl">
    
    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
     
      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
        <h3 className="text-3xl font-semibold">
          Modal Title
        </h3>
        <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick="toggleModal('modal-id')">
          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
            ×
          </span>
        </button>
      </div>
      <div className="relative p-6 flex-auto">
        <FileRoot/>
      </div>
   
      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
        
        <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={()=>toggleModal('modal-id')}>
          close
        </button>
      </div>
    </div>
  </div>
</div>
<div className="hidden opacity-25 fixed inset-0 z-40 bg-black" id="modal-id-backdrop"></div>

                    </div>
  )
}

export default ItemContainer;




 
