import React from "react";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore";
import "firebase/compat/storage";

function Upload() {
  try {
    let uid = firebase.auth().currentUser.uid
    firebase.firestore()
    .collection("user")
    .doc(uid)
    .get()
    .then((res) => {
      let name = res.data().userInfo.name;
      let dogname = res.data().userInfo.dogname;
      document.querySelector(".name").innerText = name;
      document.querySelector(".dogname").innerText = dogname;
    });
  } catch {
    window.location.hash="/signin"
  }
  

  function upload(e) {
    let imgFile = document.querySelector("#image").files[0];
    let storage = firebase.storage();
    let storageRef = storage.ref();
    let savePath = storageRef.child('img/' + imgFile.name);
    let saveImg = savePath.put(imgFile)

    saveImg.on( 'state_changed', 
          null,
          (error) => {
            console.error('실패사유는', error);
          }, 
          () => {
            saveImg.snapshot.ref.getDownloadURL().then((url) => {
              let item = {
                desc : document.querySelector("#content").value,
                date : new Date(),
                img : url,
                name : document.querySelector(".name").innerText,
                who : document.querySelector('input[name="cp_item"]:checked').value,
                when : document.querySelector('input[name="cp_item2"]:checked').value,
                where : document.querySelector('input[name="cp_item3"]:checked').value,
                what : document.querySelector('input[name="cp_item4"]:checked').value,
                emotion : document.querySelector('input[name="cp_item5"]:checked').value,
              }
              firebase.firestore().collection('product').add(item).then(()=>{
                window.location.hash ="/";
              }).catch((err) => {
                alert(err)
              })
            });
          }
      );
  }

  return (
    <div className="upload">
      <input id="image" type="file" className="img" />
      <h4><p className="dogname" style={{"display":"inline", "color":"black"}}></p>와 오늘의 기록 남기기!</h4>
      <div className="name"></div>
        <p>누구와</p>
      <form>
        <label className="box-radio-input"><input type="radio" name="cp_item" value="나" /><span>나</span></label>
        <label className="box-radio-input"><input type="radio" name="cp_item" value="가족" /><span>가족</span></label>
        <label className="box-radio-input"><input type="radio" name="cp_item" value="친구" /><span>친구</span></label>
        <label className="box-radio-input"><input type="radio" name="cp_item" value="연인" /><span>연인</span></label>
      </form>
        <p>언제</p>
      <form>
        <label className="box-radio-input"><input type="radio" name="cp_item2" value="오전" /><span>오전</span></label>
        <label className="box-radio-input"><input type="radio" name="cp_item2" value="오후" /><span>오후</span></label>
      </form>
        <p>어디서</p>
      <form>
        <label className="box-radio-input"><input type="radio" name="cp_item3" value="집" /><span>집</span></label>
        <label className="box-radio-input"><input type="radio" name="cp_item3" value="동네" /><span>동네</span></label>
        <label className="box-radio-input"><input type="radio" name="cp_item3" value="야외" /><span>야외</span></label>
        <label className="box-radio-input"><input type="radio" name="cp_item3" value="애견카페" /><span>애견카페</span></label>
        <label className="box-radio-input"><input type="radio" name="cp_item3" value="기타" /><span>기타</span></label>
      </form>
        <p>무엇을</p>
      <form>
        <label className="box-radio-input"><input type="radio" name="cp_item4" value="산책" /><span>산책</span></label>
        <label className="box-radio-input"><input type="radio" name="cp_item4" value="간식" /><span>간식</span></label>
        <label className="box-radio-input"><input type="radio" name="cp_item4" value="놀기" /><span>놀기</span></label>
        <label className="box-radio-input"><input type="radio" name="cp_item4" value="여행" /><span>여행</span></label>
        <label className="box-radio-input"><input type="radio" name="cp_item4" value="기타" /><span>기타</span></label>
      </form>
        <p>기분</p>
      <form>
        <label className="box-radio-input"><input type="radio" name="cp_item5" value="좋음" /><span>좋음</span></label>
        <label className="box-radio-input"><input type="radio" name="cp_item5" value="행복" /><span>행복</span></label>
        <label className="box-radio-input"><input type="radio" name="cp_item5" value="피곤" /><span>피곤</span></label>
        <label className="box-radio-input"><input type="radio" name="cp_item5" value="짜증" /><span>짜증</span></label>
        <label className="box-radio-input"><input type="radio" name="cp_item5" value="분노" /><span>분노</span></label>
      </form>
      <div>
        <p>한마디 쓰기!</p>
        <input type="text" id="content" className="info content" placeholder="content" />
      </div>
      <button id="send" onClick={upload}>기록하기</button>
    </div>
  );
}

export default Upload;
