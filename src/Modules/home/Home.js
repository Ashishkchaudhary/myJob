import React, { useEffect, useState } from "react";
import { getJobData, fetchJobDetail } from "../api";
import Button from "../components/button/Button";
import Modal from "../components/modal/Modal";
import Popup from "../components/popup/Popup";
import "./Home.css";

const Home = () => {

  const [jobData, setJobData] = useState([]);
  const [jobDescription, setJodDescription] = useState();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const fetchData = () => {
    getJobData().then((res) => {
      if(res?.status == 200) {
        setJobData(res?.data?.data);
      }
    }).catch((err) => {
      setJobData([]);
    })
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  const getJobDetail = (data) => {
    fetchJobDetail(data.id).then((res)=> {
      if (res.status == 200) {
        setJodDescription(res?.data?.data)
      }
    })
    .catch((err) => {
      setJodDescription();
    })
    setIsPopupVisible(true)
  }
  const sty = {
     width: "85%", height: "85%"
  }

  return (
    <div className="homeContainer">
      <div className="header">
        <div className="subHeader">My<span>Jobs</span></div>
        <div className="subHeader">Post a Job</div>
        <Popup open = {isPopupVisible}>
          <div className="popupHeader">
            <div>Application for this job</div>
            <div className="close" onClick={()=>setIsPopupVisible(false)}>&times;</div>
          </div>
          <div className="popupBody">
            <ul>
              <li>location: {jobDescription?.location}</li>
              <li>title: {jobDescription?.title}</li>
              <li>updatedAt: {jobDescription?.updatedAt}</li>
              <li>description: {jobDescription?.description}</li>
            </ul>
          </div>
        </Popup>
      </div>
      <div style={{display: "flex", flexWrap: "wrap", marginLeft: "7%"}}>
      {jobData.map((data) => {
        return (
          <div key={data.id} style ={{ width: "300px", marginLeft: "6%", height: "300px", marginBottom: "20px", position: "relative"}}>
          
          <Modal sty={sty}>
            <h5>{data.title}</h5>
            <p>{data.description.length > 130 ? data.description.slice(0, 127)+"..." : data.description}</p>
            <p>{data.location}</p>
            <Button style={{position: "absolute", bottom: "0px"}} name="View Application" handler={()=>getJobDetail(data)} />
          </Modal>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Home;