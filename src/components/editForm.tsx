import React from 'react'
import { item } from '@/types/item';
interface EditProps{
  item:item;
  status:string;
}
const EditForm = ({item,status}:EditProps) => {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-extrabold'> {item.username}</h1>
        <form>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Change task content to push it into Doing or Completed
                </label>
                <input 
                    type="text"
                    defaultValue={item.content}
                />
                <p className='text-sm text-gray-500'>Current Status: {status}</p>
                {/* write code for changing it to doing or completed and update in backend */}
                
            </div>
        </form>
        <p className='text-xl'>Created on: {item.date.toString()}</p>

    </div>
  )
}

export default EditForm