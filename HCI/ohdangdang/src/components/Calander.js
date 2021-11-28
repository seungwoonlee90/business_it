import React from 'react';
import footprint from '../icon/footprint.png'
import clap from '../icon/clap.png'
import happy from '../icon/Group 298.png'
import sad from '../icon/Group 305.png'
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore";
import "firebase/compat/storage";

function Calander() {
  try {
    let uid = firebase.auth().currentUser.uid
    firebase.firestore()
    .collection("user")
    .doc(uid)
    .get()
    .then((res) => {
      let dogname = res.data().userInfo.dogname;
      let dogdate = new Date(new Date() - new Date(res.data().userInfo.dongdate)).getDay();
      document.querySelectorAll(".dogname")[0].innerText = dogname;
      document.querySelectorAll(".dogname")[1].innerText = dogname;
      document.querySelector(".dogdate").innerText = dogdate;
    });
  } catch {
    window.location.hash="/signin"
  }

  return (
    <div className="calander">
      <div className="calander-head"><img src={footprint} alt="footprint" />&nbsp; {new Date().getFullYear()}년 12월</div>
      <div className="calander-info">
        <h4>{new Date().getFullYear()}년 12월</h4>
        <div>
          <span className="material-icons">chevron_left</span>
          <span className="material-icons">chevron_right</span>
        </div>
      </div>
      <div className="calander-main">
        <h3>Mon</h3>
        <h3>Tue</h3>
        <h3>Wed</h3>
        <h3>Thu</h3>
        <h3>Fri</h3>
        <h3>Sat</h3>
        <h3>Sun</h3>
        <div><img src={happy} alt="footprint" /></div>
        <div><img src={sad} alt="footprint" /></div>
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
        <div>08</div>
        <div>09</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
        <div>24</div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28</div>
        <div>29</div>
        <div>30</div>
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
      <div className="calander-text">
        <div className="calander-text-monthly">
          <img src={clap} alt="clap" />
          <p>&nbsp; <p style={{"color":"black", "display":"inline", "fontWeight":"700"}} className="dogname"></p>와 <p style={{"color":"black", "display":"inline", "fontWeight":"700"}}>12</p>월 <p style={{"color":"black", "display":"inline", "fontWeight":"700"}}>1</p>회 기록 <p style={{"color":"black", "display":"inline", "fontWeight":"700"}}>3</p>% 달성!</p>
        </div>
        <div className="calander-text-total">
          <img src={footprint} alt="footprint" />
          <div>&nbsp; 지금까지 <p style={{"color":"black", "display":"inline", "fontWeight":"700"}} className="dogname"></p>와 함께한 <p style={{"color":"black", "display":"inline", "fontWeight":"700"}} className="dogdate"></p>일간 오댕댕 <p style={{"color":"black", "display":"inline", "fontWeight":"700"}}>2</p>회 기록</div>
        </div>
      </div>
    </div>
  )
}

export default Calander