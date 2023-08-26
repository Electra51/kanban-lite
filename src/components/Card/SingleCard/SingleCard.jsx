import './singleCard.css'
import ItemContainer from '../ItemContainer/itemContainer';
const SingleCard = () => {
    return (
        <div className="scrollable-container w-80">
            {/* header */}
            <div className="header p-2 bg-[#F2F4F7]  flex justify-between">
                <div className='flex items-center gap-1'>
                    <div className="h-5 w-5 bg-red-700 rounded-s-md"></div>
                    <p>Incomplete</p>
                </div>
                <div className='px-2 py-0 rounded bg-gray-200'>0</div>
            </div>
            {/* body */}
            <div className="scrollable-body bg-[#F2F4F7]">
                <div>
                  
                   <ItemContainer/>
                    <ItemContainer/>
                    <ItemContainer/>
                    <ItemContainer/>
                    <ItemContainer/>
                    <ItemContainer/>
                    <ItemContainer/>
                     <ItemContainer/>
                      <ItemContainer/>
                       <ItemContainer/>
                        <ItemContainer/>
                         <ItemContainer/>
                </div>
            </div>
        </div>
    )
}

export default SingleCard;