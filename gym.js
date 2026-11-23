// Public facility facts and independent practice suggestions. The diagram is
// a schematic of the published floor list, not a surveyed building plan.
const GYM = {
  name: '북부스포츠센터', address: '충남 천안시 서북구 성환읍 성환1로 45', phone: '041-529-5040',
  checked: '2026-11-20',
  urls: {
    main: 'https://www.cauc.or.kr/_buksports/',
    floors: 'https://www.cauc.or.kr/_buksports/main.asp?no=20',
    court: 'https://www.cauc.or.kr/_buksports/main.asp?no=8',
    notices: 'https://www.cauc.or.kr/_buksports/main.asp?no=10',
    gear: 'https://www.eshare.go.kr/UserPortal/Upv/UprResrcGym/index.do?rsrc_no=CC26N0851084',
    room: 'https://www.eshare.go.kr/UserPortal/Upv/UprResrcGym/index.do?rsrc_no=CC26N1120787',
    gym: 'https://cauc.or.kr/_buksports/main.asp?no=6',
    football: 'https://www.cauc.or.kr/_buksports/main.asp?no=9',
    pool: 'https://www.cauc.or.kr/_buksports/main.asp?no=5',
    booking: 'https://sports.cauc.or.kr/',
    access: 'https://www.cauc.or.kr/_buksports/main.asp?no=13',
    videos: 'https://cauc.or.kr/_buksports/main.asp?PageNo=7&m_mode=view&no=10&pds_no=20230918092316938625130&tb_nm=tbl_buk_notice'
  },
  floors: [
    ['3층','🏀','다목적체육관','농구골대 · 관람석 100석','court'],
    ['2층','☘️','다목적실 · 휴게실','다목적실은 대관 대상 · 휴게실 이용 확인','quiet'],
    ['1층','🚲','헬스장 · 사무실','러닝머신 · 실내 사이클 · 안내실','fitness'],
    ['지하 1층','🏊','수영장','25m 5레인 · 어린이풀 · 샤워실','pool'],
    ['지하 2층','🔧','기계실 · 전기실','운동 공간 아님 · 출입하지 않기','service'],
    ['외부','⚽','축구장 · 공중화장실','축구장 예약 및 승인 후 이용','outdoor']
  ],
  gear: [
    {icon:'🏀',name:'농구골대',place:'3층 다목적체육관',access:'대관 없는 시간 일일입장',desc:'공 잡기 → 제자리 튀기기 → 편한 거리에서 슛. 낮은 골대·공 대여는 확인 필요.',sport:'A01',source:'gear'},
    {icon:'⚽',name:'축구장',place:'외부 운동장',access:'공식 예약 · 승인 필요',desc:'승인된 공간에서 공 밀기 → 정지한 공 차기 → 가까운 표적 맞히기. 공·콘 제공 여부 확인.',sport:'A02',source:'football'},
    {icon:'🚶',name:'러닝머신',place:'1층 헬스장',access:'발권 · 이용수칙 준수',desc:'직원에게 사용법을 배운 뒤 정지 상태에서 안전장치 확인 → 아주 느린 걷기 → 편한 시간만큼 걷기. 속도 경쟁 안 하기.',source:'gym'},
    {icon:'🚲',name:'실내 사이클',place:'1층 헬스장',access:'발권 · 이용수칙 준수',desc:'직원 도움으로 안장 조절 → 정지 상태에서 자세 확인 → 낮은 저항으로 천천히 페달 밟기. 불편하면 멈추기.',source:'gym'},
    {icon:'🏊',name:'수영장·어린이풀',place:'지하 1층',access:'수영장 이용규정 · 안전요원 안내',desc:'물 적응부터 강습 또는 안전요원 안내에 따라 진행. 혼자 입수하거나 잠수하는 과제는 제공하지 않음.',source:'pool'},
    {icon:'🧘',name:'다목적실',place:'2층',access:'대관 및 관리자 승인 확인',desc:'공간 사용이 허가되면 준비운동, 제자리 움직임 등 저자극 활동. 매트·발판 등 비품과 개인 도구 반입 여부 확인.',sport:'D06',source:'room'}
  ]
};

function gymSportInfo(s) {
  if(s.id==='A01') return {status:'농구골대 확인',place:'3층 다목적체육관',detail:'농구골대는 공식 확인됐어요. 대관 없는 일일입장 시간에 이용해요. 공, 낮은 골대, 큰 바구니는 비치/대여 여부를 확인하고 허용된 도구만 사용해요.'};
  if(s.id==='A02') return {status:'예약 필요',place:'외부 축구장',detail:'축구장 이용 예약과 승인이 필요해요. 공, 미니골대, 콘 비치 여부는 확인되지 않았어요.'};
  if(s.cat==='D') return {status:'공간·도구 확인',place:'2층 다목적실 또는 허가된 공간',detail:'이 운동은 개인 연습 과제예요. 2층 다목적실은 대관 대상이며 운동 종류, 공간, 기구 반입 및 대여 여부를 직원에게 확인해야 해요.'};
  return {status:'종목·도구 확인',place:'시설 허가 또는 다른 안전한 장소',detail:'이 종목이 센터에서 허용되는지, 운동기구가 비치되어 있는지 공개 자료로 확인되지 않았어요. 허가된 별도 공간에서 개인 준비물로 연습하거나 다른 장소에서 해요.'};
}
