import { useEffect, useState } from "react";
import { CopyIcon } from "./icons";
import { Bounce, ToastContainer, toast } from "react-toastify";

function Dashboard() {
  type DataEntry = {
    site: string;
    username: string;
    password: string;
  };
  const [Data, SetData] = useState<DataEntry>({
    site: "",
    username: "",
    password: "",
  });
  const [DataArray, SetDataArray] = useState<DataEntry[]>([]);

  useEffect(() => {
    let foundData = localStorage.getItem("Data");
    if (foundData) {
      SetDataArray(JSON.parse(foundData));
    }
  }, []);

  const savePassword = () => {
    SetDataArray([...DataArray, Data]);
    localStorage.setItem("Data", JSON.stringify([...DataArray, Data]));
    console.log([...DataArray, Data]);
  };

  //@ts-ignore
  const handleChange = (e) => {
    SetData({ ...Data, [e.target.name]: e.target.value });
  };

  const CopyText = (text: any) => {
    toast("🦄 copied to clipboard !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(150%_150%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="max-w-[60vw] mx-auto h-[40vh] text-center px-20 gap-5 flex flex-col">
        <div className="text-white">
          <h1 className="pt-5 text-2xl font-bold">
            <span>&lt;</span>PASSOP/<span>&gt;</span>
          </h1>
          <p>Your Own Password Manager</p>
        </div>

        <input
          value={Data.site}
          name="site"
          onChange={handleChange}
          placeholder="Enter website's link"
          className="w-full rounded-full mt-5 px-3 py-1"
          type="text"
        />
        <div className="flex gap-5">
          <input
            value={Data.username}
            name="username"
            onChange={handleChange}
            placeholder="Enter Username"
            className="w-3/4 rounded-full px-3 py-1"
            type="text"
          />
          <input
            value={Data.password}
            name="password"
            onChange={handleChange}
            placeholder="Enter Password"
            className="w-1/2 rounded-full px-3 py-1"
            type="text"
          />
        </div>

        <div className="text-center">
          <button
            onClick={savePassword}
            className="bg-[#2B1563] text-white px-4 py-1 rounded-xl"
          >
            Add Password
          </button>
        </div>

        <div className="table mt-6 text-left text-white">
          <h1 className="text-3xl font-bold py-4">Your Passwords :&#41;</h1>
          {DataArray.length === 0 && <div> NO DATA TO SHOW</div>}
          {DataArray.length != 0 && (
            <table className="table-auto w-full">
              <thead className="bg-[#2B1563] ">
                <tr>
                  <th className="py-2 text-center border-white border">
                    WEBSITE'S LINK
                  </th>
                  <th className="py-2 text-center border-white border">
                    USERNAME
                  </th>
                  <th className="py-2 text-center border-white border">
                    PASSWORD
                  </th>
                  <th className="py-2 text-center border-white border">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {DataArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" p-2 text-center w-32 border-white border">
                        <div className="flex justify-center items-center">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <span
                            className="mx-2 cursor-pointer"
                            onClick={() => {
                              CopyText(item.site);
                            }}
                          >
                            <CopyIcon />
                          </span>{" "}
                        </div>
                      </td>
                      <td className=" p-2 text-center w-32 border-white border">
                        <div className="flex justify-center items-center">
                          <span> {item.username} </span>
                          <span
                            className="mx-2 cursor-pointer"
                            onClick={() => {
                              CopyText(item.username);
                            }}
                          >
                            <CopyIcon />
                          </span>{" "}
                        </div>
                      </td>
                      <td className=" p-2 text-center w-32 border-white border">
                        <div className="flex justify-center items-center">
                          <span> {item.password} </span>
                          <span
                            className="mx-2 cursor-pointer"
                            onClick={() => {
                              CopyText(item.password);
                            }}
                          >
                            <CopyIcon />
                          </span>{" "}
                        </div>
                      </td>
                      <td className=" p-2 text-center w-32 border-white border">
                        DELETE
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
