import React from 'react'
import check from '../assets/image/svg/check.svg'
import man from '../assets/image/png/man.png'

const Tables = () => {

    let data = [
        {
            names: "John Doe",
            date: "1-1-2024",
            email: "john@gmail.com",
            city: "Hisar",
            state: "Haryana",
            status: "Active",
            invest: "$ 34,343.000",
        },
        {
            names: "John Doe",
            date: "1-1-2024",
            email: "john@gmail.com",
            city: "Hisar",
            state: "Haryana",
            status: "Active",
            invest: "$ 34,343.000",
        },
        {
            names: "John Doe",
            date: "1-1-2024",
            email: "john@gmail.com",
            city: "Hisar",
            state: "Haryana",
            status: "Active",
            invest: "$ 34,343.000",
        },
        {
            names: "John Doe",
            date: "1-1-2024",
            email: "john@gmail.com",
            city: "Hisar",
            state: "Haryana",
            status: "Active",
            invest: "$ 34,343.000",
        },
        {
            names: "John Doe jlkjjdghfjhgkjgkjhk jljljoihugytrtrre",
            date: "1-1-2024",
            email: "john@gmail.com",
            city: "Hisar",
            state: "Haryana",
            status: "Active",
            invest: "$ 34,343.000",
        },

    ]

    return (
        <div className='container border border-solid  overflow-x-scroll scroll_hide '>
            <table className='lg:w-full max-lg:w-[1000px]  my-[20px] font-outfit'>
                <thead className=' border-b-[.5px] border-solid border-[#0000004D] '>
                    <tr>
                        <th className='flex gap-[15px] items-center'>
                            <div className='py-[17px] ps-[7px]'><img src={check} alt="img" /></div>
                            <p className='text-[16px] font-normal py-[17px] ps-[7px]'>Name</p>
                        </th>
                        <th className='text-[16px] font-normal py-[17px] ps-[7px] text-start'>Registration</th>
                        <th className='text-[16px] font-normal py-[17px] ps-[7px] text-start'>City/State</th>
                        <th className='text-[16px] font-normal py-[17px] ps-[7px] text-start'>Member Status</th>
                        <th className='text-[16px] font-normal py-[17px] ps-[7px] text-start'>Total Investment</th>
                        <th className='text-[16px] font-normal py-[17px] ps-[7px] text-start'>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item, i) => {
                        return (
                            <tr key={i} className='py-[10px]'>
                                <td className='flex gap-[15px] items-center py-[17px] px-[7px]'>
                                <img src={check} alt="img" />
                                    <div className='flex gap-[20px] items-center'>
                                        <img src={man} alt="img" />
                                        <div>
                                            <p className='text-[16px] font-normal'>{item.names}</p>
                                            <p className='text-[12px] font-normal opacity-50'>{item.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-[16px] font-normal py-[17px] px-[7px] '>{item.date} </td>
                                <td className='text-[16px] font-normal py-[17px] px-[7px] '>{item.city}/{item.state} </td>
                                <td className='text-[16px] font-normal py-[17px] px-[7px] '>{item.status} </td>
                                <td className='text-[16px] font-normal py-[17px] px-[7px] '>{item.invest} </td>
                                <td className=' py-[17px] px-[7px] '>
                                    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="black" />
                                    </svg>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Tables
