import React from 'react';
import mainImage from '../images/CBTI_main.png';

const StartPage = ({ number, cbtiRatios, getImageForCbti, setPage }) => {
  return (
    <div className='startPageLayout'>
      <div className='startLogo'>
        <div>DB 드림리더</div>
        <div>옷BTI 테스트</div>
        <img src={mainImage} alt="사진" />
      </div>
      <div onClick={() => setPage(1)} className='startButton'>테스트 시작하기</div>
      <div className='startIntro'> 현재까지<span style={{ color: "#00A664", fontWeight: "bold" }}> {number} </span>명의 <br />사람들이 참여했어요😊</div>
      <div className='cbtiRatios'>
        {cbtiRatios.map((ratio, index) => (
          <div className="cbtiRatioItem" key={index}>
            <img src={getImageForCbti(ratio.cbti)} alt={ratio.cbti} />
            <div className="label-top">{ratio.cbti}</div>
            <div className="label-character">{ratio.character}</div>
            <div className="label-bottom">{ratio.ratio.toFixed(2)}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StartPage;
