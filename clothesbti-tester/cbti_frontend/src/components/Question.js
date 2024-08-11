import React from 'react';
import Q1Image from "../images/질문이미지1.png";
import Q2Image from "../images/질문이미지2.png";
import Q3Image from "../images/질문이미지3.png";
import Q4Image from "../images/질문이미지4.png";
import Q5Image from "../images/질문이미지5.png";
import Q6Image from "../images/질문이미지6.png";
import Q7Image from "../images/질문이미지7.png";
import Q8Image from "../images/질문이미지8.png";
import Q9Image from "../images/질문이미지9.png";
import Q10Image from "../images/질문이미지10.png";


const QuestionPage = ({ page, questionList, handleCkAnswer }) => {

  const progressBarWidth = (Math.floor((page - 1) / 2) / 10) * 100;

  // 각 페이지에 맞는 이미지를 동적으로 매핑
  const images = [
    Q1Image, Q2Image, Q3Image, Q4Image, Q5Image,
    Q6Image, Q7Image, Q8Image, Q9Image, Q10Image
  ];

  return (
    <div className='questionLayout'>
      <div className='mbtiTitle'>
        <div>옷BTI 테스트</div>
        <div className='progress_bar'>
          <span 
            style={{ width: `${progressBarWidth}%` }} 
            className='progress_bar_inner'>
          </span>
        </div>
        <div>{`${Math.ceil(page / 2)} / 10`}</div> 
      </div>
      {questionList.map((val, idx) => (
        <div className='questionList' key={idx} style={{ display: page === idx + 1 ? "flex" : "none" }}>
          <div className='questionItemLayout'>
            <div className="chatListLayout">
              {val.q.map((qval, qidx) => (
                <div key={qidx} className='chatBox'>
                  <div>{Math.ceil(page / 2)}.</div> {/* 질문 번호 표시 */}
                  <div> {qval} </div>
                </div>
              ))}
              <img src={images[Math.ceil(page / 2) - 1]} alt={`Question ${idx + 1}`} className='questionImage' />
            </div>
          </div>
          <div className='answerItemLayout'>
            {val.a.map((aval, aidx) => (
              <div key={aidx} className="answerBox" onClick={() => handleCkAnswer(aval.score, idx, aidx + 1)}>
                {aval.text}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionPage;
