import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import image from "../../img/image.png";
import "./Mono.css";

function Mono({ disInfo, setDisInfo }) {
  const navigate = useNavigate();

  // デフォルトで"もの"を選択するための初期値設定
  useEffect(() => {
    setDisInfo(prevState => ({
      ...prevState,
      kind: "もの"
    }));
  }, [setDisInfo]);

  const ok = () => {
    navigate("/login/home/addpost/mono/suremono");
  };

  const back = () => {
    navigate("/login/home");
  };

  const upload = async (e) => {
    const file = e.target.files[0];
    setDisInfo(prevState => ({
      ...prevState,
      img: URL.createObjectURL(file),
      file: file
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDisInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <div className='mono-blue'>figare</div>
      <div className='mono-head'>
        <img src={image} height='50px' className='back-btn' onClick={back} alt='戻る' />
        <div style={{ textAlign: "center", width: "100vw" }}>
          <p className='mono-title'>＜詳細情報を入力してね＞</p>
        </div>
      </div>
      <div>
        <div className="kind-item">
          種類：
        </div>
        <div className="kind-select">
          <input
            type='radio'
            name='kind'
            value="もの"
            checked={disInfo.kind === "もの"}
            onChange={handleInputChange}
          />
          <label>もの</label>
          <input
            type='radio'
            name='kind'
            value="ペット"
            checked={disInfo.kind === "ペット"}
            onChange={handleInputChange}
          />
          <label>ペット</label>
          <input
            type='radio'
            name='kind'
            value="人"
            checked={disInfo.kind === "人"}
            onChange={handleInputChange}
          />
          <label>人</label>
        </div>
        <div className='file-item'>
          写真：
        </div>
        <div className='mono-file'>
          {disInfo.img && <img src={disInfo.img} width="50%" alt="Preview" />}  
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={upload}
          />
        </div>
        <div className='characteristic'>
          <textarea
            name="text"
            value={disInfo.text}
            onChange={handleInputChange}
            placeholder="※特徴や情報などご記載ください。(任意)"
            
          />
        </div>
        <div className='okbtn-posi'>
          <button className='ok-btn' onClick={ok}>OK</button>
        </div>
      </div>
    </div>
  );
}

export default Mono;
