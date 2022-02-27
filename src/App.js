import './index.css';
import { initializeApp } from "firebase/app";

import LoginPage from "./Pages/LoginPage";
import LoginPage_patient from './Pages/LoginPage_patient';
import Main from "./Pages/MainPage";
import Caregiver from './Pages/Caregiver';
import Chat from './Pages/Chat';
import {CurrentPageContext} from "./Contexts/CurrentPageContext";
import {useState} from "react";
import {UserContext} from "./Contexts/UserContext";
import {PatientContext} from "./Contexts/PatientContext";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBFUIgTDJYAlmYCqexWy2520kqyCffNvTQ",
    authDomain: "unihack2022.firebaseapp.com",
    projectId: "unihack2022",
    storageBucket: "unihack2022.appspot.com",
    messagingSenderId: "1033312762188",
    appId: "1:1033312762188:web:88100671097ef8f38fb7e9",
    measurementId: "G-9FDEGRG2XH"
  };

  const app = initializeApp(firebaseConfig);

  const [currentPage, setCurrentPage] = useState("main");
  const [user, setUser] = useState(null);
  const [patient, setPatient] = useState(null);

  return (
      <PatientContext.Provider value={[patient, setPatient]}>
          <UserContext.Provider value={[user, setUser]}>
              <CurrentPageContext.Provider value={[currentPage, setCurrentPage]}>
                  <div style={{
                      textAlign: "center"
                  }}>
                      {currentPage === "main" && <Main/>}
                      {currentPage === "login" && <LoginPage/>}
                      {currentPage === "login_patient" && <LoginPage_patient/>}
                      {currentPage === "caregiver" && <Caregiver/>}
                      {currentPage === "chat" && <Chat/>}
                  </div>
              </CurrentPageContext.Provider>
          </UserContext.Provider>
      </PatientContext.Provider>
  );
}

export default App;
