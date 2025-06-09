import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div id='no-scroll' className=" bg-[#1c1c1c] mt-5 rounded w-full p-5 h-90 ">
      {/* Header */}
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-semibold w-1/5  text-white text-center">Employee Name</h2>
        <h3 className="text-lg font-semibold w-1/5  text-white text-center">New Task</h3>
        <h5 className="text-lg font-semibold w-1/5  text-white text-center">Active Task</h5>
        <h5 className="text-lg font-semibold w-1/5  text-white text-center">Completed</h5>
        <h5 className="text-lg font-semibold w-1/5  text-white text-center">Failed</h5>
      </div>

      {/* Scrollable Task List */}
      <div
        id="no-scroll"
      >
        {userData.map((elem, index) => (
          <div
            key={index}
            className="bg-transparent py-2 px-4 flex justify-between rounded w-full border-1 border-white"
          >
            <h2 className="text-lg font-semibold w-1/5  text-white px-2 text-center">{elem.firstname}</h2>
            <h3 className="text-lg font-semibold w-1/5 text-blue-600 px-2 text-center">{elem.taskCounts.newTask}</h3>
            <h5 className="text-lg font-semibold w-1/5 text-yellow-800 px-2 text-center">{elem.taskCounts.active}</h5>
            <h5 className="text-lg font-semibold w-1/5 text-white px-2 text-center">{elem.taskCounts.completed}</h5>
            <h5 className="text-lg font-semibold w-1/5 text-red-600 px-2 text-center">{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
