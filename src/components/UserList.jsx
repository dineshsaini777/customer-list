import React from 'react'
import { data } from './Data'

const UserList = () => {
    return (
        <div className='overflow-auto p-5'>

            <table className='lg:w-full w-[1000px]  '>
                <tbody>
                    <tr className='border-b'>
                        <th className='text-left w-[54px] '  > <input className='ms-6 w-6 h-6' type="checkbox" /></th>
                        <th className='text-left ps-3 ' > Name</th>
                        <th className='text-start'>Registration</th>
                        <th className='text-start'>City / State</th>
                        <th className='text-start'>Member Status</th>
                        <th className='text-start'>Total Investment</th>
                        <th className='text-start'>Action</th>

                    </tr>

                    {data.map((item, index) => {
                        return (

                            <tr key={index}>
                                <td className='p-3 w-[54px]'>

                                    <input className='ms-3 w-6 h-6 ' type="checkbox" />




                                </td>
                                <td className='p-3 w-[365px]'>
                                    <div className='flex gap-3 items-center'>


                                        <div className='flex '>
                                            <img src={item.src} alt="img" />
                                            <div className=' flex flex-col ms-2'>
                                                <h1 className='text-start text-base'>{item.name}</h1>
                                                <h1 className='text-xs text-start' >{item.fullname}</h1>
                                            </div>
                                        </div>
                                    </div>

                                </td>
                                <td className='text-start w-[160px]'>
                                    <h1 className='text-base'>{item.date}</h1>
                                </td>
                                <td className='text-start w-[300px]'>
                                    <h1 className='text-base'>{item.city}</h1>
                                </td>
                                <td className='text-start w-[160px]'>
                                    <h1 className='text-base'>{item.active}</h1>
                                </td>
                                <td className='text-start w-[200px]'>
                                    <h1 className='text-base'>{item.rup}</h1>
                                </td>
                                <td className='text-start w-[90px]' >
                                    <img src={item.image} alt="image" />
                                </td>
                            </tr>
                        )
                    })}


                </tbody>

            </table>
        </div>
    )
}

export default UserList