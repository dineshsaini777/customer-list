import React from "react";
import userImg from "../assets/image/svg/user-img.svg";

const UserDetails = () => {
  return (
    <div>
      <table className="w-full">
        <tr className="border-b py-3">
          <th className="text-left py-3 px-3">Name</th>
          <th className="text-left py-3 px-3">Registration</th>
          <th className="text-left py-3 px-3">City / State</th>
          <th className="text-left py-3 px-3">Member Status</th>
          <th className="text-left py-3 px-3">Total Investment</th>
          <th className="text-left py-3 px-3">Action</th>
        </tr>
        <tr>
          <td className="text-left py-3 px-3">
            <div className="flex items-center gap-3">
              <img className="w-10 h-10" src={userImg} alt="user-profile" />
              <div>
                <h2 className="font-normal text-base text-black capitalize">
                  John Deo
                </h2>
                <p className="font-normal text-xs text-black/50">
                  john@example.com
                </p>
              </div>
            </div>
          </td>
          <td className="text-left py-3 px-3">Maria Anders</td>
          <td className="text-left py-3 px-3">Germany</td>
          <td className="text-left py-3 px-3">Alfreds Futterkiste</td>
          <td className="text-left py-3 px-3">Maria Anders</td>
          <td className="text-left py-3 px-3">Germany</td>
        </tr>
      </table>
    </div>
  );
};

export default UserDetails;
