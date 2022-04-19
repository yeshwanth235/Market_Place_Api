import React, { useState } from "react";
import FileBase from "react-file-base64";
import { apiData } from "../../action/userAction";
import { useDispatch } from "react-redux";
import "./napi.css";

const NewApi = () => {
  const dispatch = useDispatch();
  let emailData = localStorage.getItem("Email");
  const [data, setData] = useState({
    name: "",
    email: emailData,
    endpoint: "",
    imgFile: "",
    description: "",
  });

  const clear = () => {
    setData({
      name: "",
      endpoint: "",
      imgFile: "",
      description: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(apiData(data));
    clear();
  };
  return (
    <div className="new-api">
      <div className="napi-content">
        <p>Add new API</p>

        <form onSubmit={handleSubmit}>
          <input
            id="i-one"
            type="text"
            name="name"
            value={data.name}
            placeholder="API Name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <br></br>
          <input
            id="i-two"
            type="text"
            name="endpoint"
            value={data.endpoint}
            placeholder="API End Point"
            onChange={(e) =>
              setData({
                ...data,
                endpoint: e.target.value,
              })
            }
          />
          <br></br>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setData({ ...data, imgFile: base64 })}
          />
          <input
            id="i-three"
            type="text"
            name="description"
            value={data.description}
            placeholder="Description of API"
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
          <br></br>
          <button type="submit">Add API</button>
        </form>
      </div>
    </div>
  );
};

export default NewApi;
