import React from "react";
import { userData } from "./Helper";

const UserDetails = () => {
  return (
    <div className="py-5 overflow-auto">
      <table className="lg:w-full w-[1000px] ">
        <thead>
          <tr className="border-b py-3">
            <th className="text-left py-3 px-3 font-normal text-base text-black">
              <input
                type="checkbox"
                name=""
                id="mainCheck"
                className="w-5 h-5"
              />
            </th>
            <th className="text-left py-3 px-3 font-normal text-base text-black !w-[365px]">
              Name
            </th>
            <th className="text-left py-3 px-3 font-normal text-base text-black w-[160px]">
              Registration
            </th>
            <th className="text-left py-3 px-3 font-normal text-base text-black w-[300px]">
              City / State
            </th>
            <th className="text-left py-3 px-3 font-normal text-base text-black w-[160px]">
              Member Status
            </th>
            <th className="text-left py-3 px-3 font-normal text-base text-black w-[200px]">
              Total Investment
            </th>
            <th className="text-left py-3 px-3 font-normal text-base text-black w-[90px]">
              Action
            </th>
          </tr>
        </thead>
        {userData.map((data, index) => (
          <tbody key={index}>
            <tr>
              <td className="text-left py-3 px-3 w-[54px]">
                <input
                  type="checkbox"
                  name=""
                  id="subCheck"
                  className="w-5 h-5"
                />
              </td>
              <td className="text-left  py-3 px-3 w-[365px]">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-10 h-10"
                      src={data.img}
                      alt="user-profile"
                    />
                    <div className="">
                      <h2 className="font-normal text-base text-black capitalize">
                        {data.name}
                      </h2>
                      <p className="font-normal text-xs text-black/50">
                        {data.email}
                      </p>
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-left py-3 px-3 w-[160px]">
                {data.ragistrationDate}
              </td>
              <td className="text-left py-3 px-3 w-[300px]">
                {data.city}/{data.state}
              </td>
              <td className="text-left py-3 px-3 w-[160px]">{data.stuts}</td>
              <td className="text-left py-3 px-3 w-[200px]">
                {data.investments}
              </td>
              <td className="text-left py-3 px-3 w-[90px]">
                <img src={data.dotImg} alt="three-dots" />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default UserDetails;
