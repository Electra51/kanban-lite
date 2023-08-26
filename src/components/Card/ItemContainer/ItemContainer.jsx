 import { BiLayer, BiSolidCalendar, BiTask } from 'react-icons/bi';
import {PiChatsCircleLight} from 'react-icons/pi';
import {GrAttachment} from "react-icons/gr";

const ItemContainer = () => {
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
                                <div className='flex items-center font-normal text-[13px]'><GrAttachment/>25</div>
                               <div className='flex items-center font-normal text-[13px]'><BiSolidCalendar/>13-12-2022</div> 
                            </div>

                        
                    </div>
  )
}

export default ItemContainer