import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './app.scss';
import StartPage from './components/Start';
import QuestionPage from './components/Question';
import ResultPage from './components/Result';
import NQImage from "./images/NQ_환경우주.PNG";
import NSImage from "./images/NS_그린.PNG";
import FQImage from "./images/FQ_모던.PNG";
import FSImage from "./images/FS_트랜드.PNG";
import Q1Image from "./images/질문이미지1.png";
import Q2Image from "./images/질문이미지2.png";
import Q3Image from "./images/질문이미지3.png";
import Q4Image from "./images/질문이미지4.png";
import Q5Image from "./images/질문이미지5.png";
import Q6Image from "./images/질문이미지6.png";
import Q7Image from "./images/질문이미지7.png";
import Q8Image from "./images/질문이미지8.png";
import Q9Image from "./images/질문이미지9.png";
import Q10Image from "./images/질문이미지10.png";

// import E1Image from "./images/설명이미지1.PNG";
// import E2Image from "./images/설명이미지2.PNG";
// import E3Image from "./images/설명이미지3.PNG";
// import E4Image from "./images/설명이미지4.PNG";
// import E5Image from "./images/설명이미지5.PNG";
// import E6Image from "./images/설명이미지6.PNG";
// import E7Image from "./images/설명이미지7.PNG";
// import E8Image from "./images/설명이미지8.PNG";
// import E9Image from "./images/설명이미지9.PNG";
// import E10Image from "./images/설명이미지10.PNG";


const App = () => {
  const [number, setNumber] = useState(0);
  const [page, setPage] = useState(0);
  const [cbtiRatios, setCbtiRatios] = useState([]);
  const [CbtiList, setCbtiList] = useState([
    { name: "N", count: 0 }, { name: "F", count: 0 }, { name: "Q", count: 0 }, { name: "S", count: 0 }
  ]);
  const [mbtiContents, setMbtiContents] = useState({
    name: '',
    mbti: '',
    contents: [],
    goods: [],
    bads: [],
    image: ''
  });

  useEffect(() => {
    axios.get('/api/participant-count')
      .then(response => {
        const max = response.data.count;
        let now = max;
        const handle = setInterval(() => {
          setNumber(Math.ceil(max - now));
          if (now < 1) {
            clearInterval(handle);
          }
          const step = now / 10;
          now -= step;
        }, 50);
        return () => clearInterval(handle);
      })
      .catch(error => console.error(error));

    axios.get('/api/cbti-ratios')
      .then(response => {
        setCbtiRatios(response.data.map(item => ({
          ...item,
          character: getCharacterName(item.cbti)
        })));
      })
      .catch(error => console.error(error));
  }, []);

  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    setVh();
    window.addEventListener('resize', setVh);
  }, []);

  const questionList = [
    {
      q: ['Q. 옷을 얼마나 자주 구매하시나요?'],
      image: Q1Image,
      a: [
        {score: 'F', text: "1주일에 한 번"},
        {score: 'F', text: "1개월에 한 번"},
        {score: 'N', text: "3개월에 한 번"},
        {score: 'N', text: "6개월에 한 번 혹은 그 이상"}
      ]
    },
    {
      q: ['2020년 1인당 연간 옷 구매량은 68벌이었어요. 40년 전보다 1인당 옷 구매량이 500% 증가했답니다'],
      image: Q1Image,
      a: [
        {score: 'None', text: "다음 질문"}
        ]
    },
    {
      q: ['Q. 중고 의류도 퀄리티가 좋다면 구매하시나요?'],
      image: Q2Image,
      a: [
        {score: 'N', text: "네"},
        {score: 'F', text: "아니오"}
      ]
    },
    {
      q: ['헌옷수거함에 모인 중고의류들, 어디로 가고 있을까요? 빈티지 매장 등 국내에서 유통되는 옷은 전체의 5%밖에 되지 않는다고 해요. 나머지 95%는 해외로 수출되고 있답니다'],
      image: Q2Image,
      a: [
        {score: 'None', text: "다음 질문"}
      ]
    },
    {
      q: ['Q. 트렌드 변화에 맞춰 주기적으로 옷을 구매하시나요?'],
      image: Q3Image,
      a: [
        {score: 'F', text: "네"},
        {score: 'N', text: "아니오"}
      ]
    },
    {
      q: ['패션이 환경에 미치는 영향은 대부분 옷을 만드는 데 사용되는 원재료에서 발생합니다. 패션 산업에 쓰이는 면화는 세계 농지의 약 2.5%를 사용하며, 폴리에스테르와 같은 합성 재료는 매년 3억4200만 배럴의 기름을 필요로 합니다. 또한 염료 사용 등의 의류 생산 과정은 1년에 4300만 톤의 화학물질을 필요로 합니다.'],
      image: Q3Image,
      a: [
        {score: 'None', text: "다음 질문"}
      ]
    },
    {
      q: ['Q. 나의 개성을 보여주기 위해서는 옷이 많을수록 좋다고 생각하나요?'],
      image: Q4Image,
      a: [
        {score: 'F', text: "네"},
        {score: 'N', text: "아니오"}
      ]
    },
    {
      q: ['생산부터 유통, 소비까지의 과정이 1-2주 내에 모두 완료되는 울트라-패스트패션이 주목 받고 있습니다. 그러나 MZ세대는 옷을 구매하는 동기에 있어 유행과 상황성을 가장 많이 고려하기때문에 개성보다는 일시적 만족을 위해 많은 옷울 구매하는 사람들이 많다.'],
      image: Q4Image,
      a: [
        {score: 'None', text: "다음 질문"}
      ]
    },
    {
      q: ['Q. 제품 구매 시 환경적 영향이나 윤리적 생산 과정을 고려하시나요?'],
      image: Q5Image,
      a: [
        {score: 'N', text: "네"},
        {score: 'F', text: "아니오"}
      ]
    },
    {
      q: ['패션 산업은 전 세계 탄소 배출의 약 10%를 차지하며, 매년 약 9200만톤의 의류 폐기물을 발생시켜요. 지속가능한 소재, 재활용 소재를 사용하고, 제품의 수명을 연장하기 위한 수선 서비스를 제공하는 기업제품을 사용함으로써 환경에 이바지하는 소비자가 될 수 있습니다!'],
      image: Q5Image,
      a: [
        {score: 'None', text: "다음 질문"}
      ]
    },
    {
      q: ['Q. 옷을 한번 구매하면 얼마나 오래 입으시나요?'],
      image: Q6Image,
      a: [
        {score: 'Q', text: "1개월 이상"},
        {score: 'Q', text: "3개월 이상"},
        {score: 'S', text: "6개월 이상"},
        {score: 'S', text: "1년 이상"}
      ]
    },
    {
      q: ['생산부터 유통, 소비까지의 과정이 1-2주 내에 모두 완료되는 울트라-패스트패션이 주목 받고 있습니다. 그러나 MZ세대는 옷을 구매하는 동기에 있어 유행과 상황성을 가장 많이 고려하기때문에 개성보다는 일시적 만족을 위해 많은 옷울 구매하는 사람들이 많다.'],
      image: Q6Image,
      a: [
        {score: 'None', text: "다음 질문"}
      ]
    },
    {
      q: ['Q. 옷 수선이 필요할 때 수선보다는 새 옷을 찾아 구매하시나요?'],
      image: Q7Image,
      a: [
        {score: 'Q', text: "네"},
        {score: 'S', text: "아니오"}
      ]
    },
    {
      q: ['환경부에 따르면 국내에서 발생하는 의류 폐기물은 2020년 기준 약 8만 2422톤으로 하루 평균 225톤에 달하며 폐섬유까지 치면 연 37만 톤으로 늘어난다고 합니다. 뿐만 아니라 우리나라의 헌 옷 수출량은 미국, 중국, 영국, 독일 다음으로 세계 5위를 차지하고 있습니다.'],
      image: Q7Image,
      a: [
        {score: 'None', text: "다음 질문"}
      ]
    },
    {
      q: ['Q. 옷을 버리기 전에 업사이클링이나 주변에 기부하는 방법을 고민하시나요?'],
      image: Q8Image,
      a: [
        {score: 'S', text: "네"},
        {score: 'Q', text: "아니오"}
      ]
    },
    {
      q: ['의류 자체 생산과 유통 과정에서 패션 산업은 전 세계 탄소 배출량의 10%의 탄소를 배출하고 있습니다. 새로운 옷을 사지 않고 기존의 옷을 다시 입고, 안 쓰는 물건을 기부한다면 많은 양의 탄소 배출량을 줄이고, 많은 양의 물을 아낄 수 있겠죠?'],
      image: Q8Image,
      a: [
        {score: 'None', text: "다음 질문"}
      ]
    },
    {
      q: ['Q. 계절별로 옷장 정리를 하고 어떤 옷을 가지고 있는지 알고 계시나요?'],
      image: Q9Image,
      a: [
        {score: 'S', text: "네"},
        {score: 'Q', text: "아니오"}
      ]
    },
    {
      q: ['한 연구에 따르면, 옷 입는 횟수를 2배로 늘리면 의류 산업에서 배출되는 탄소량을 44%까지 감축시킬 수 있다고 합니다.'],
      image: Q9Image,
      a: [
        {score: 'None', text: "다음 질문"}
      ]
    },
    {
      q: ['Q. 옷을 오래 입기 위해서 옷 소재별 세탁, 관리 방법을 찾아보는 편인가요?'],
      image: Q10Image,
      a: [
        {score: 'S', text: "네"},
        {score: 'Q', text: "아니오"}
      ]
    },
    {
      q: ['매년 생산되는 옷이 무려 1,000억 벌이고, 이 중 버려지는 옷이 330억 벌이라고 합니다. 순환전문 연구기관 엘렌맥아더재단에 따르면 의류를 포함한 패션 쓰레기로 인해 바다에 배출되는 플라스틱이 50만톤에 이른다고 합니다. '],
      image: Q10Image,
      a: [
        {score: 'None', text: "결과 보기"}
      ]
    }
  ];
  

  const mbtis = [
    { mbti: "NQ", name: '모던스타일리스트', contents: ['벼락치기 진짜 잘해요.', '논리적이고 뛰어난 적응력을 가지고 있어요.', '처음엔 낯을 가리지만 친해지면 장난도 잘 쳐요.'], goods: ['충고사항 NQ'], bads: ['고쳐야할 사항 NQ'], image: NQImage },
    { mbti: "NS", name: '그린스타일리스트', contents: ['타인 배려를 잘하지만 눈치를 많이 봐요.', '순하고 정이 많아요.', '상대방의 이야기를 잘 들어줘요.'], goods: ['충고사항 NS'], bads: ['고쳐야할 사항 NS'], image: NSImage },
    { mbti: "FQ", name: '환경우주비행사', contents: ['책임감이 높고, 신중해요.', '한번 시작한 일을 끝까지 해내요.', '약속 어기는건 싫어요.'], goods: ['충고사항 FQ'], bads: ['고쳐야할 사항 FQ'], image: FQImage },
    { mbti: "FS", name: '트랜드패션리더', contents: ['나서는건 싫어하지만 관심받는건 좋아요.', '성실하고 온화해요.', '눈치가 빠르고 센스있어요.'], goods: ['충고사항 FS'], bads: ['고쳐야할 사항 FS'], image: FSImage }
  ];

  const handleCkAnswer = (score, idx) => {
    let ls = CbtiList;
    if ((idx + 1) % 2 !== 0) {  
      for (let i = 0; i < ls.length; i++) {
        if (ls[i].name === score) {
          ls[i].count += 1;
        }
      }
      setCbtiList([...ls]);
    }
    
    setPage(page + 1);

    if (idx + 1 === questionList.length) {  
      setCbti();
      const answers = ls.map(item => item.count);
      const NorF = CbtiList.find(data => data.name === "N").count > CbtiList.find(data => data.name === "F").count ? "N" : "F";
      const QorS = CbtiList.find(data => data.name === "Q").count > CbtiList.find(data => data.name === "S").count ? "Q" : "S";
      const cbti = `${NorF}${QorS}`;
  
      axios.post('/api/submit-response', { answers, cbti })
        .then(response => {
          console.log('Response submitted:', response.data);
          return axios.get('/api/cbti-ratios');
        })
        .then(response => {
          setCbtiRatios(response.data.map(item => ({
            ...item,
            character: getCharacterName(item.cbti)
          })));
        })
        .catch(error => console.error('Error submitting response:', error));
    }
  };

  const getCharacterName = (cbti) => {
    const character = mbtis.find(mbti => mbti.mbti === cbti);
    return character ? character.name : '';
  };

  function setCbti() {
    let NorF = CbtiList.find(data => data.name === "N").count > CbtiList.find(data => data.name === "F").count ? "N" : "F";
    let QorS = CbtiList.find(data => data.name === "Q").count > CbtiList.find(data => data.name === "S").count ? "Q" : "S";
    let CBTI = NorF + QorS;
    setMbtiContents(mbtis.find(val => val.mbti === CBTI));
  }

  const handleShare = async () => {
    const shareData = {
      title: "ClothesBTI Test",
      text: "CBTI테스트 결과보기",
      url: "https://ji-ny.github.io/mbti_test/",
    };

    const url = window.location.href;
    try {
      await navigator.share(shareData);
      console.log("공유하기 성공");
    } catch {
      await navigator.clipboard.writeText(url);
      alert("클립보드에 링크가 복사되었습니다.");
    }
  }

  function getImageForCbti(cbti) {
    switch (cbti) {
      case 'NQ':
        return NQImage;
      case 'NS':
        return NSImage;
      case 'FQ':
        return FQImage;
      case 'FS':
        return FSImage;
      default:
        return null;
    }
  }

  return (
    <div className="mbtiLayout">
      {page === 0 ?
        <StartPage
          number={number}
          cbtiRatios={cbtiRatios}
          getImageForCbti={getImageForCbti}
          setPage={setPage}
        />
        : page <= questionList.length ?
          <QuestionPage
            page={page}
            questionList={questionList}
            handleCkAnswer={handleCkAnswer}
          />
          :
          <ResultPage
            mbtiContents={mbtiContents}
            handleShare={handleShare}
            CbtiList={CbtiList} // 추가된 부분
          />
      }
    </div>
  );
}

export default App;
