import React from 'react'

const Table = () => {
  return (
    <div>
       <table className='w-full'>
                <thead>
                    <tr>
                        <img src={check} alt="img" />
                        <th className='text-[16px] font-normal'>Name</th>
                        <th className='text-[16px] font-normal'>Registration</th>
                        <th className='text-[16px] font-normal'>Name</th>

                    </tr>
                </thead>
            </table>
    </div>
  )
}

export default Table
