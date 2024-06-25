import React from 'react'

const UserList = () => {
    return (
        <div >
            <table className='w-full'>
                <tbody>
                    <td className='flex justify-between'>
                        <th>Name</th>
                        <th>Registration</th>
                        <th>City / State</th>
                        <th>Member Status</th>
                        <th>Total Investment</th>
                        <th>Action</th>
                    </td>
                </tbody>
            </table>
        </div>
    )
}

export default UserList