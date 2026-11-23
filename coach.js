/* Silent, articulated visual modeling. Each lesson has its own goal, equipment
   and motion; joints are solved at fixed limb lengths, not image scaling. */
const COACH = (() => {
 const lessons={
 A01:['hold|공을 두 손으로 잡아요|몸을 낮춰 바닥에 공을 놓아요|공에서 손을 떼요','bounce|공을 허리 앞에 잡아요|공을 바닥에 한 번 튀겨요|다시 두 손으로 잡아요','dribble|무릎을 조금 굽혀요|손으로 공을 세 번 튀겨요|공을 두 손으로 잡아요','shoot|골대를 보고 공을 잡아요|무릎을 펴며 두 팔을 위로 뻗어요|공이 골대로 가는 것을 봐요','driveShoot|공을 잡고 골대를 봐요|천천히 공을 튀기고 앞으로 이동해요|멈춰서 골대 쪽으로 슛해요'],
 A02:['kick|공 옆에 한 발을 디뎌요|다른 발 안쪽으로 공을 살짝 밀어요|공이 앞으로 굴러가요','kick|공과 넓은 표적을 봐요|한 발로 공을 차요|표적에 닿는지 봐요','kick|골대를 향해 서요|공을 가까운 골대로 차요|공이 골대로 들어가는지 봐요','dribbleFoot|공 옆에 서요|작게 공을 밀며 콘을 돌아요|출발선 방향으로 돌아와요','dribbleKick|공과 두 콘을 봐요|콘 두 개를 지나며 공을 밀어요|골대 쪽으로 공을 차요'],
 A03:['lift|공을 두 손으로 잡아요|두 손을 위로 들어 올려요|천천히 내려요','tossCatch|몸 앞에 공을 잡아요|공을 위로 가볍게 던져요|양손으로 받아요','volley|두 손을 이마 앞에 준비해요|손끝으로 공을 위로 보내요|공을 보며 손을 내려요','volley2|공을 보고 손을 준비해요|위로 치고 잡기를 두 번 해요|공을 두 손으로 잡아요','wallCatch|벽 표적을 보고 공을 잡아요|공을 벽 쪽으로 가볍게 쳐요|되돌아오는 공을 받아요'],
 A04:['place|공을 두 손에 잡아요|바구니 가까이 공을 내밀어요|바구니에 넣어요','throw|벽 표적을 봐요|공을 어깨 뒤에서 앞으로 던져요|공이 표적에 닿는지 봐요','throw|골대를 바라봐요|팔을 앞으로 뻗어 던져요|공이 골대로 가요','wallCatch|벽 표적을 봐요|공을 벽 쪽으로 던져요|돌아오는 공을 받아요','bounceThrow|공을 허리 앞에 잡아요|제자리에서 공을 튀겨 잡아요|표적을 향해 던져요'],
 A05:['stick|스틱을 두 손으로 잡아요|스틱 면으로 공을 밀어요|공이 앞쪽으로 굴러가요','stick|공과 표시선을 봐요|스틱으로 천천히 공을 밀어요|공을 선까지 보내요','stick|골대를 봐요|스틱으로 공을 골대 쪽으로 밀어요|스틱을 멈춰요','stickWalk|공 가까이 스틱을 둬요|콘을 돌며 공을 조금씩 밀어요|공을 멈춰요','stickGoal|공과 콘 두 개를 봐요|스틱으로 공을 밀며 콘을 지나가요|골대 쪽으로 공을 보내요'],
 A06:['balloon|매달린 풍선을 봐요|손바닥으로 살짝 쳐요|풍선이 흔들리는 것을 봐요','balloon|떠 있는 풍선을 봐요|손을 위로 뻗어 한 번 쳐요|풍선을 바라봐요','balloon2|풍선 아래에 서요|풍선을 두 번 연속 쳐요|손을 내려요','balloon3|바닥 표시 위에 서요|풍선을 세 번 가볍게 쳐요|제자리에 서요','balloonNet|풍선과 낮은 선을 봐요|풍선을 위로 가볍게 쳐요|낮은 선 너머로 보내요'],
 B01:['balanceBall|라켓을 수평으로 들고 공을 잡아요|라켓 위에 공을 올려요|라켓이 기울지 않게 해요','racket|라켓과 고정 공을 봐요|라켓을 앞쪽으로 가볍게 휘둘러요|공이 앞쪽으로 움직여요','racket|한 손에 셔틀콕을 잡아요|셔틀콕을 놓고 라켓으로 쳐요|셔틀콕이 날아가요','racket|낮은 네트를 봐요|셔틀콕을 라켓으로 쳐요|네트 너머를 봐요','racket|바닥 표적을 봐요|셔틀콕을 가볍게 쳐요|표적 쪽으로 보내요'],
 B02:['balanceBall|라켓을 수평으로 잡아요|공을 라켓에 올려요|공이 떨어지지 않게 해요','paddleBounce|라켓 위에 공을 올려요|라켓으로 공을 한 번 튕겨요|라켓을 수평으로 유지해요','paddleBounce3|라켓을 수평으로 들어요|공을 두세 번 튕겨요|공을 멈춰요','tableHit|탁구대와 공을 봐요|라켓으로 공을 앞쪽으로 쳐요|공이 탁구대에서 한 번 튀어요','tableReturn|탁구대와 반사판을 봐요|공을 반사판으로 보내요|돌아온 공을 다시 쳐요'],
 B03:['bat|배트를 두 손으로 잡아요|고정 공을 배트로 살짝 밀어요|공이 티대에서 이동해요','bat|티대의 공을 봐요|몸을 돌리며 배트로 공을 쳐요|배트를 천천히 멈춰요','bat|공과 넓은 표적을 봐요|배트로 공을 표적 방향으로 쳐요|공이 날아간 방향을 봐요','bat2|공을 티대에 올려요|표적 방향으로 두 번 쳐요|배트를 내려요','batWalk|티대의 공을 봐요|공을 치고 배트를 안전하게 내려요|표시선까지 걸어요'],
 B04:['putt|공 옆에 서서 퍼터를 잡아요|퍼터로 공을 부드럽게 밀어요|공이 큰 표적까지 굴러가요','putt|공과 가까운 홀을 봐요|퍼터로 공을 살짝 쳐요|공이 홀에 닿아요','putt|공과 조금 먼 홀을 봐요|퍼터를 작은 폭으로 움직여요|공이 홀 쪽으로 굴러가요','putt2|두 홀을 봐요|첫 홀에 공을 보내요|다음 홀을 향해 다시 보내요','putt2|우회 표시와 홀을 봐요|표시를 따라 첫 홀로 공을 보내요|두 번째 홀을 향해 보내요'],
 C01:['roll|공을 두 손으로 잡아요|몸을 낮추고 공을 앞으로 굴려요|공이 넓은 표적에 가요','roll|핀 하나를 봐요|몸을 낮추고 공을 굴려요|핀이 넘어지는지 봐요','roll|핀 세 개를 봐요|공을 핀 방향으로 굴려요|멈추고 핀을 확인해요','roll|조금 멀리 놓인 핀을 봐요|공을 핀 여섯 개 쪽으로 굴려요|넘어진 핀을 확인해요','roll2|남은 핀을 봐요|공을 핀 쪽으로 굴려요|다시 공을 굴려 남은 핀을 맞혀요'],
 C02:['ringPlace|링을 두 손에 잡아요|기둥 위에 링을 올려요|링이 기둥에 걸려요','ring|링과 큰 기둥을 봐요|링을 아래에서 앞으로 던져요|링이 기둥으로 가요','ring|조금 먼 기둥을 봐요|링을 앞으로 부드럽게 던져요|링이 떨어지는 곳을 봐요','ring|지정된 기둥을 봐요|링을 그 기둥 쪽으로 던져요|맞는 기둥인지 확인해요','ring2|두 기둥을 봐요|첫 번째 기둥에 링을 던져요|두 번째 기둥에 링을 던져요'],
 C03:['roll|목표 구역을 봐요|공을 낮게 굴려요|공이 목표 구역에 닿아요','roll|큰 원을 봐요|공을 원 안으로 굴려요|공이 원 안에 멈춰요','roll|하얀 목표 공을 봐요|색 공을 목표 공 쪽으로 굴려요|가까이 멈추는지 봐요','roll|조금 떨어진 목표 공을 봐요|공의 방향을 맞춰 굴려요|목표 공 가까이 보내요','roll3|목표 공을 봐요|색 공을 하나씩 굴려요|목표 공 주변을 확인해요'],
 C04:['place|콩주머니와 바구니를 봐요|손을 앞으로 뻗어요|바구니에 넣어요','underThrow|콩주머니를 손에 잡아요|아래에서 위로 가볍게 던져요|바구니에 떨어지는지 봐요','underThrow|바닥의 큰 원을 봐요|원 쪽으로 콩주머니를 던져요|원 안에 놓이는지 봐요','underThrow|원하는 표적을 골라요|그 표적에 콩주머니를 던져요|어디에 떨어졌는지 봐요','underThrow2|거리 다른 두 표적을 봐요|첫 표적에 던져요|두 번째 표적에 던져요'],
 C05:['place|원반과 가까운 표적을 봐요|원반을 표적 쪽에 내려놓아요|손을 떼요','disc|원반을 몸 앞에 잡아요|팔을 펼치며 원반을 보내요|원반이 날아가는 방향을 봐요','disc|넓은 표적을 봐요|원반을 표적 쪽으로 던져요|원반이 닿는 곳을 봐요','disc|조금 먼 표적을 봐요|팔을 펴고 원반을 보내요|표적 쪽을 봐요','disc2|두 표적을 봐요|첫 번째 표적에 원반을 보내요|두 번째 표적에 보내요'],
 C06:['place|공과 같은 그림 바구니를 찾아요|그 바구니에 공을 넣어요|그림이 같은지 봐요','underThrow|색과 그림이 같은 표적을 봐요|그 표적에 공을 던져요|공이 떨어지는 곳을 봐요','underThrow|두 그림을 살펴봐요|같은 그림 표적에 공을 던져요|그림이 같은지 확인해요','underThrow2|두 표적의 순서를 봐요|첫 그림 쪽으로 공을 던져요|다음 그림 쪽으로 던져요','underThrow3|세 그림의 순서를 봐요|차례대로 공을 던져요|순서를 다 마쳤는지 봐요'],
 D01:['walk|바닥 표시선을 봐요|한 발씩 선까지 걸어요|선에서 멈춰요','walkTurn|콘과 출발선을 봐요|콘 주위를 걸어요|출발선으로 돌아와요','walk|두 콘 사이를 봐요|콘 사이를 천천히 걸어요|끝에서 멈춰요','walk|후프와 콘을 봐요|후프 안을 디디고 콘을 지나가요|안전하게 멈춰요','walk|후프·콘·선을 순서대로 봐요|후프를 디디고 콘을 지나 선까지 걸어요|선에서 멈춰요'],
 D02:['stand|발을 편하게 벌려요|몸을 똑바로 세워 균형을 잡아요|편안하게 유지해요','walk|넓은 바닥선을 봐요|선 위로 한 발씩 걸어요|두 발로 멈춰요','balance|지지대를 잡아요|한 발을 천천히 들어요|발을 다시 내려요','walk|넓은 발판을 봐요|발판을 하나씩 디뎌요|두 발로 멈춰요','walkBalance|바닥선을 봐요|선을 따라 걸어요|두 발로 잠시 멈춰 균형을 잡아요'],
 D03:['liftFoot|양발로 서요|한 발을 천천히 들어봐요|발을 내려요','stepOver|바닥 줄 앞에 서요|한 발씩 줄을 넘어가요|두 발로 멈춰요','ropeStep|줄 손잡이를 잡아요|줄을 앞쪽 바닥에 돌려 놓아요|줄을 한 발씩 넘어요','jump|줄을 뒤에 두고 손잡이를 잡아요|줄을 앞쪽으로 돌리며 가볍게 뛰어요|두 발로 부드럽게 착지해요','jump3|손잡이를 잡고 발을 모아요|줄을 돌리며 두세 번 가볍게 뛰어요|두 발로 착지하고 멈춰요'],
 D04:['hoopHands|후프를 두 손으로 잡아요|한 손을 후프 안에 넣어요|손을 다시 빼요','stepOver|바닥 후프 앞에 서요|후프 안으로 한 발씩 들어가요|두 발로 서요','hoopWaist|허리 높이에 후프를 잡아요|허리를 조금 움직여 후프를 돌려봐요|두 손으로 다시 잡아요','hoopWaist|후프를 허리에 둬요|허리를 움직여 한 바퀴 돌려요|후프를 잡아요','hoopWaist3|후프를 허리에 둬요|두세 번 짧게 돌려요|후프를 손으로 잡아요'],
 D05:['walk|같은 그림 발판을 봐요|그 발판을 한 발로 밟아요|발을 내려 멈춰요','walk|발판 두 개를 봐요|한 발씩 두 발판을 밟아요|멈춰요','walk|그림 카드의 순서를 봐요|지정된 발판 두 개를 차례로 밟아요|순서를 확인해요','walk|그림 세 개를 순서대로 봐요|발판 세 개를 순서대로 밟아요|멈춰요','walk|발판 네 개의 순서를 봐요|네 개를 차례로 밟아요|두 발로 멈춰요'],
 D06:['reach|매트에서 편안하게 서요|양팔을 앞쪽으로 뻗어요|팔을 천천히 내려요','liftArms|양발로 편하게 서요|양팔을 위로 올려요|팔을 천천히 내려요','twist|매트에 편하게 앉아요|몸통을 작게 좌우로 돌려요|가운데로 돌아와요','squat|양발을 편하게 벌려요|팔을 뻗으며 무릎을 살짝 굽혀요|다시 일어나요','stretch3|매트에서 서요|팔 뻗기, 팔 올리기, 무릎 굽히기를 해요|편하게 서요'],
 D07:['walk|첫 칸을 봐요|한 발을 칸 안에 디뎌요|발을 모아요','walk|두 칸을 봐요|한 칸씩 천천히 걸어요|두 번째 칸에서 멈춰요','walk|사다리 끝을 봐요|한 칸씩 걸어 끝까지 가요|사다리 밖에 서요','ladderTwo|첫 칸을 봐요|한 칸에 두 발씩 차례로 디뎌요|사다리 끝에서 멈춰요','ladderSide|바닥 칸을 봐요|앞으로 간 후 옆 칸으로 이동해요|멈춰요'],
 D08:['stepOver|바닥 표시를 봐요|한 발을 표시 위에 디뎌요|발을 다시 내려요','step|낮은 발판과 지지대를 확인해요|한 발을 발판 위에 올려요|발을 다시 내려요','stepUp|낮은 발판 앞에 서요|한 발씩 올라가요|한 발씩 내려와요','stepUp3|발판 앞에 서요|두세 번 천천히 올라갔다 내려와요|바닥에서 멈춰요','stepAlt|발판 앞에서 준비해요|왼발과 오른발을 번갈아 먼저 올려요|안전하게 내려와요']
 };
 const lerp=(a,b,t)=>a+(b-a)*t, clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)), ease=t=>t*t*(3-2*t);
 const mix=(a,b,t)=>a.map((v,i)=>lerp(v,b[i],t));
 const floor=326, col={skin:'#e8bb8d',shirt:'#59a98b',shirtDark:'#3f826e',pants:'#637fa0',shoe:'#fafafa'};
 // Hip center, torso tilt, left/right hand and foot targets (relative to hip).
 const neutral=[205,232,0,-30,9,32,9,-21,88,22,88];
 const P=(base,patch)=>Object.assign([...base],patch);
 const hands=(a,x1,y1,x2,y2)=>P(a,{3:x1,4:y1,5:x2,6:y2});
 const foot=(a,x1,y1,x2,y2)=>P(a,{7:x1,8:y1,9:x2,10:y2});
 const hold=hands(neutral,27,-38,57,-38), reach=hands(neutral,53,-49,80,-48), raised=hands(neutral,28,-110,58,-117), low=foot(hands(P(neutral,{1:278,2:24}),38,10,57,14),-24,42,26,42), back=hands(P(neutral,{2:-8}),4,-42,-12,-91), follow=hands(P(neutral,{2:12}),39,-24,83,-69);
 function lesson(id,l){let [action,...copy]=lessons[id][l].split('|');return {id,l,action,copy};}
 function frame(L,t){
  let id=L.id,a=L.action,l=L.l, x=205,y=232, q=hold, obj=[263,194,0], tool=0, phase=clamp(t), u=phase<.17?0:phase>.86?1:(phase-.17)/.69;
  const e=ease(u), hump=Math.sin(Math.PI*u), wave=(n)=>Math.sin(Math.PI*2*n*u), bounce=n=>Math.abs(Math.sin(Math.PI*n*u));
  const path=(p0,p1,h=0,f=e)=>[lerp(p0[0],p1[0],f),lerp(p0[1],p1[1],f)-h*Math.sin(Math.PI*f),lerp(p0[2]||0,p1[2]||0,f)];
  const target=targetPoint(L), isD=id[0]==='D', end=[target[0],target[1],0];
  const change=(p0,p1,p2)=>u<.5?mix(p0,p1,ease(u*2)):mix(p1,p2,ease(u*2-1));
  const repeat=/[23]$/.test(a)?Number(a.at(-1)):1;
  // Main motion. Preparation and end are held; selected stages are independently replayable.
  if(a==='hold'){q=mix(hold,low,e);obj=[q[0]+q[5]-10,lerp(194,310,e),0];}
  else if(['bounce','dribble','driveShoot','bounceThrow'].includes(a)){
   const count=a==='dribble'?3:a==='driveShoot'?2:1, combined=a==='driveShoot'||a==='bounceThrow', b=combined?clamp(u/.55):u, z=Math.abs(Math.sin(Math.PI*count*b));
   q=hands(P(neutral,{1:236+z*7,2:7}),27,-35,56,-24+z*20); if(a==='driveShoot')q[0]+=b*76;
   obj=[q[0]+58,194+z*108,0];
   if(combined&&u>.55){let s=clamp((u-.55)/.45);let start=P(hold,{0:q[0]});q=mix(start,P(a==='driveShoot'?raised:follow,{0:q[0]}),ease(clamp(s*2)));obj=s<.4?[q[0]+q[5],q[1]+q[6]-12,0]:path([q[0]+55,a==='driveShoot'?112:160,0],end, a==='driveShoot'?108:38,clamp((s-.4)/.6));}
  }
  else if(a==='shoot'||a==='throw'||a==='underThrow'||a==='disc'||a==='ring'||a.startsWith('ring2')||a.startsWith('disc2')||a.startsWith('underThrow')){
   let n=repeat, r=u===1?1:(u*n)%1, wind=a==='shoot'?hands(P(neutral,{1:246}),25,-44,57,-46):a==='disc'||a==='disc2'?hands(P(neutral,{2:-9}),-15,-44,11,-49):a.startsWith('underThrow')||a.startsWith('ring')?hands(P(neutral,{2:4}),-14,2,15,9):back;
   let release=a==='shoot'?raised:a.startsWith('underThrow')||a.startsWith('ring')?hands(neutral,20,-26,75,-46):follow;
   q=r<.28?mix(hold,wind,ease(r/.28)):r<.49?mix(wind,release,ease((r-.28)/.21)):mix(release,neutral,ease((r-.49)/.51));
   let start=[release[0]+release[5],release[1]+release[6]-9,0];obj=r<.49?[q[0]+q[5],q[1]+q[6]-9,0]:path(start,end,a==='shoot'?115:a.startsWith('ring')?65:40,clamp((r-.49)/.51));if(a.startsWith('disc')||a.startsWith('ring'))obj[2]=r*260;
  }
  else if(a==='place'||a==='ringPlace'){q=mix(hold,hands(P(neutral,{0:target[0]-87,1:245,2:10}),50,-18,77,-18),ease(clamp(u*1.4)));obj=path([263,194,0],end,3,e);if(u>.76)q=mix(q,P(neutral,{0:target[0]-87}),ease((u-.76)/.24));}
  else if(a==='lift'||a==='tossCatch'||a.startsWith('volley')||a.startsWith('balloon')||a==='wallCatch'){
   let n=repeat,r=u===1?1:(u*n)%1, rise=Math.sin(Math.PI*r);
   q=change(hold,raised,hold);if(a==='lift')obj=[q[0]+43,q[1]+q[4]-16,0];
   else if(a==='wallCatch'){q=change(hold,follow,hold);obj=path([263,189,0],r<.5?end:[263,189,0],0,0);obj=r<.5?path([263,189,0],end,45,ease(r*2)):path(end,[263,189,0],28,ease(r*2-1));}
   else if(a==='balloonNet'){q=change(hold,raised,neutral);obj=path([253,112,0],end,45,e);}
   else {let balloon=a.startsWith('balloon');q=hands(P(neutral,{1:232+3*rise}),27,-(65+35*rise),55,-(65+37*rise));obj=[250+12*Math.sin(Math.PI*r), (balloon?115:155)-rise*(balloon?53:75),0];}
  }
  else if(a==='kick'||a.startsWith('dribbleFoot')||a==='dribbleKick'){
   let move=a!=='kick', s=move?clamp(u/.75):0, strike=move?clamp((u-.75)/.25):u, dx=move?s*115:0;
   q=P(neutral,{0:205+dx,2:-5+strike*9});q=foot(q,-25,88,23+52*Math.sin(Math.PI*strike),88-21*Math.sin(Math.PI*strike));if(move&&u<.75)q=walkPose(205+dx,u*4);
   obj=[lerp(267+dx,target[0],ease(strike)),310,360*strike+dx];if(a==='dribbleFoot'){q=walkPose(205+Math.sin(Math.PI*u)*110,u*4);obj=[q[0]+55,310,u*420];}
  }
  else if(a.startsWith('stick')||a.startsWith('putt')||a.startsWith('bat')||['racket','balanceBall','paddleBounce','paddleBounce3','tableHit','tableReturn'].includes(a)){
   let ground=a.startsWith('stick')||a.startsWith('putt'), bat=a.startsWith('bat'), balancing=a==='balanceBall'||a.startsWith('paddleBounce'), n=repeat,r=u===1?1:(u*n)%1;
   if(ground){let walking=a==='stickWalk'||a==='stickGoal', dx=walking?clamp(u/.75)*105:0;q=foot(hands(P(neutral,{0:205+dx,1:242,2:14}),31,-14,50,7),-21,78,22,78);tool=lerp(166,137,ease(clamp(r*1.6)));obj=[lerp(289+dx,target[0],ease(clamp((r-.38)/.62))),313,350*r];if(walking&&u<.75){q=hands(walkPose(205+dx,u*4),31,-14,50,13);obj=[q[0]+78,313,dx*3];tool=157;}}
   else if(balancing){q=hands(neutral,41,-53,68,-38-9*bounce(n));tool=90;obj=[q[0]+68+(id==='B01'?78:36), q[1]+q[6]-(id==='B01'?22:25)-(a==='balanceBall'?0:54*bounce(n)),0];}
   else {q=change(hands(P(neutral,{2:-9}),-2,-58,3,-66),hands(P(neutral,{2:12}),49,-52,74,-57),neutral);tool=lerp(-130,38,ease(clamp(r*1.4)));if(a==='tableReturn'){obj=r<.6?path([325,201,0],end,24,clamp(r/.6)):path(end,[325,201,0],22,clamp((r-.6)/.4));}else obj=r<.42?[bat?328:290,bat?220:153,0]:path([bat?328:290,bat?220:153,0],end,bat?51:35,clamp((r-.42)/.58));if(a==='batWalk'&&u>.65){q=walkPose(205+(u-.65)*300,u*5);tool=145;}}
  }
  else if(a.startsWith('roll')){let r=u===1?1:(u*repeat)%1;q=r<.4?mix(hold,low,ease(r/.4)):mix(low,neutral,ease((r-.4)/.6));obj=r<.4?[q[0]+q[5],q[1]+q[6]+4,0]:path([289,310,0],end,0,clamp((r-.4)/.6));obj[2]=r*360;}
  else if(isD){
   obj=null;
   if(a==='stand')q=hands(neutral,-34,-22,34,-22);
   else if(a==='liftFoot'||a==='balance'){q=foot(neutral,-20,88,36,88-35*hump);q=hands(q,-31,-25,65,-48);}
   else if(a==='walk'||a==='walkTurn'||a==='walkBalance'||a==='ladderTwo'||a==='ladderSide'||a==='stepOver'||a==='ropeStep'){
    let travel=a==='walkTurn'?Math.sin(Math.PI*u)*172:(a==='stepOver'||a==='ropeStep'?110:target[0]-205)*e;
    q=walkPose(205+travel,u*(a==='ladderTwo'?6:4));if(a==='ropeStep')tool=1;
    if(a==='walkBalance'&&u>.8)q=mix(q,P(neutral,{0:205+travel}),ease((u-.8)/.2));
   }
   else if(a==='step'||a.startsWith('stepUp')||a==='stepAlt'){
    let n=a==='stepAlt'?2:repeat,r=u===1?1:(u*n)%1;let p1=foot(P(neutral,{0:220}),-32,88,62,51),p2=foot(P(neutral,{0:288,1:193}),-18,88,22,88);
    if(a==='step')q=change(neutral,p1,neutral);else{if(r<.25)q=mix(neutral,p1,ease(r*4));else if(r<.5)q=mix(p1,p2,ease(r*4-1));else if(r<.75)q=mix(p2,p1,ease(r*4-2));else q=mix(p1,neutral,ease(r*4-3));}
   }
   else if(a.startsWith('jump')){let r=u===1?1:(u*repeat)%1,h=Math.sin(Math.PI*r);q=foot(P(neutral,{1:232-24*h}),-16,88,17,88);q=hands(q,-37,-22,46,-22);tool=r*360;}
   else if(a==='hoopHands'){q=hands(neutral,40,-52,75,-52+32*hump);tool=0;obj=[278,191,0];}
   else if(a.startsWith('hoopWaist')){q=hands(P(neutral,{2:5*wave(repeat)}),-31,-37,42,-36);obj=[q[0]+10,235,0];tool=wave(repeat);}
   else if(a==='reach')q=change(neutral,reach,neutral);
   else if(a==='liftArms')q=change(neutral,raised,neutral);
   else if(a==='twist'){q=hands(P(neutral,{1:275,2:12*wave(1)}),-35,-45,58,-49);q=foot(q,-35,44,38,44);}
   else if(a==='squat'||a==='stretch3'){let bend=hands(P(neutral,{1:263,2:13}),31,-38,77,-43);bend=foot(bend,-24,57,26,57);if(a==='stretch3')q=u<.33?mix(neutral,reach,Math.sin(Math.PI*u/.33)):u<.66?mix(neutral,raised,Math.sin(Math.PI*(u-.33)/.33)):mix(neutral,bend,Math.sin(Math.PI*(u-.66)/.34));else q=change(neutral,bend,neutral);}
  }
  return {q,obj,tool,u};
 }
 function walkPose(x,s){let w=Math.sin(s*Math.PI*2), lift=Math.abs(w)*22;return foot(hands(P(neutral,{0:x,1:232-3*Math.abs(w),2:4}),-25-w*32,-24,36+w*32,-24),-16+37*w,88-(w>0?lift:0),18-37*w,88-(w<0?lift:0));}
 function targetPoint(L){let {id,l,action:a}=L;if(id==='A01')return [a.includes('hoot')?488:280,a.includes('hoot')?120:310];if(id==='A02'||id==='A05')return [l===0?370:l===1?430:505,310];if(id==='A03')return [505,145];if(id==='A04')return l===0?[345,265]:[505,l===2?238:155];if(id==='A06')return [490,120];if(id==='B01')return [l===4?505:475,l===4?310:205];if(id==='B02')return [490,220];if(id==='B03')return [500,296];if(id==='B04')return [l<2?395:500,313];if(id==='C01')return [l<2?420:520,310];if(id==='C02')return [l===0?330:l===1?414:500,274];if(id==='C03')return [l<2?410:485,311];if(id==='C04'||id==='C05'||id==='C06')return [l===0?350:490,l<2?268:310];if(id==='D05')return [295+Math.min(l,3)*52,314];if(id==='D07')return [l<2?315+l*60:515,310];return [id==='D01'&&l===0?365:490,310];}
 const line=(x,y,X,Y,stroke='#a0b9ab',w=3)=>`<path d="M${x} ${y}L${X} ${Y}" fill="none" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round"/>`;
 const ellipse=(x,y,rx,ry,fill,stroke='none',w=2)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"/>`;
 const rect=(x,y,w,h,r,fill,stroke='none')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="3"/>`;
 const circle=(x,y,r,fill,stroke='none')=>ellipse(x,y,r,r,fill,stroke);
 const cone=(x,y=320)=>`<path d="M${x-13} ${y-3}L${x-5} ${y-36}Q${x} ${y-42} ${x+5} ${y-36}L${x+13} ${y-3}Z" fill="#e4ad58" stroke="#a3783b" stroke-width="2"/>${rect(x-19,y-5,38,7,3,'#b98242')}`;
 const goal=(x=480)=>`<path d="M${x-20} 320V229H${x+68}V320" fill="#fffaf0" fill-opacity=".6" stroke="#74948f" stroke-width="6" stroke-linejoin="round"/>${Array.from({length:5},(_,i)=>line(x-15+i*18,232,x-15+i*18,319,'#c0d4ce',1)).join('')}${Array.from({length:5},(_,i)=>line(x-18,235+i*20,x+65,235+i*20,'#c0d4ce',1)).join('')}`;
 const mark=(x,y=320)=>ellipse(x,y,35,9,'#f2dfad','#d0aa5a',3);
 const basket=(x,y=268,c='#e3c58c')=>`<path d="M${x-29} ${y-7}L${x-23} ${y+39}Q${x} ${y+47} ${x+23} ${y+39}L${x+29} ${y-7}Z" fill="${c}" stroke="#9a916c" stroke-width="3"/>${ellipse(x,y-7,29,8,'#fff8e4','#9a916c',3)}`;
 const wall=(x,y)=>rect(x-12,y-69,22,142,5,'#b7ceca')+circle(x-13,y,30,'#faf4da','#bc9d5a')+circle(x-13,y,16,'#eac36b','#fff9e9');
 function props(L){
  let {id,l,action:a}=L,[x,y]=targetPoint(L), out='';
  if(id==='A01'&&a.includes('hoot'))out=line(537,325,537,72,'#7d9991',9)+rect(475,49,99,65,5,'#fffdf4','#94aaa2')+rect(490,73,57,30,2,'none','#c6d6d0')+`<path d="M465 119H513L505 155H473Z" fill="#fdfdf3" stroke="#d5ad79" stroke-width="2"/>`+ellipse(489,119,25,6,'none','#c87c46',5);
  if((id==='A02'||id==='A05'))out=(l>=2?goal():mark(x))+(l>=3?cone(340)+(l===4?cone(408):''):'');
  if(id==='A03'&&l===4||id==='A04'&&l!==0&&l!==2)out=wall(x,y);
  if(id==='A04'&&l===2)out=goal();
  if(id==='A04'&&l===0)out=basket(x,y);
  if(id==='A06'&&l===0)out=line(253,45,253,92,'#849b94',2);
  if((id==='A06'&&l===4)||(id==='B01'&&l===3))out=line(385,320,385,178,'#789c99',5)+rect(388,184,115,48,3,'#e1ebe4','#9cbbb1')+line(505,320,505,178,'#789c99',5);
  if(id==='B01'&&l===4)out=mark(x);
  if(id==='B02'&&l>=3)out=rect(337,226,229,13,4,'#8aafad')+line(352,239,352,319,'#789a9a',5)+line(552,239,552,319,'#789a9a',5)+line(447,226,447,196,'#8ca5a2',3)+(l===4?rect(547,153,17,74,4,'#c1d8d0'):'');
  if(id==='B03')out=line(328,321,328,224,'#78928e',7)+ellipse(328,320,23,5,'#a6b8ad')+mark(x);
  if(id==='B04')out=rect(280,306,270,25,8,'#a9c9a5')+ellipse(x,318,15,6,'#617c6c')+(l>=3?ellipse(390,318,14,6,'#617c6c'):'');
  if(id==='C01'){let n=[0,1,3,6,6][l];out=mark(x)+Array.from({length:n},(_,i)=>`<g class="coach-pin" data-pin="${i}"><path d="M${x-14+i*12} 319Q${x-22+i*12} 305 ${x-16+i*12} 293L${x-16+i*12} 278Q${x-10+i*12} 269 ${x-5+i*12} 278V293Q${x+2+i*12} 305 ${x-6+i*12} 319Z" fill="#fff9ee" stroke="#aab8b3" stroke-width="2"/>${line(x-16+i*12,291,x-5+i*12,291,'#c57f6a',3)}</g>`).join('');}
  if(id==='C02')out=ellipse(x,321,40,8,'#c8d9bd')+line(x,317,x,258,'#c99d51',11)+(l===4?line(x-80,317,x-80,258,'#82a7a3',11):'');
  if(id==='C03')out=mark(x)+(l>=2?circle(x+15,313,9,'#fffdf2','#aeb7ab'):'');
  if(id==='C04'||id==='C05'||id==='C06'){if(l<2||id==='C06'){out=basket(x,l<2?y:277)+(l>=2?basket(x-95,277,'#a4c8b8'):'');if(id==='C06')out+=circle(x,292,8,'#f7e2a6');}else out=mark(x)+ (l>=3?mark(x-80):'');}
  if(id==='D01')out=line(353,321,353,343,'#b89454',5)+(l>=1?cone(365):'')+(l>=2?cone(453):'')+(l>=3?ellipse(303,321,37,9,'none','#d0a85d',5):'')+(l===4?line(491,313,491,341,'#b89454',5):'');
  if(id==='D02')out=l===2?line(277,320,277,178,'#9bb2ad',7)+line(277,178,310,178,'#9bb2ad',7):rect(185,313,365,15,6,'#e5d6a8');
  if(id==='D03'&&l===1)out=line(265,315,280,340,'#c49258',5);
  if(id==='D04'&&l===1)out=ellipse(315,321,65,14,'none','#d5a259',5);
  if(id==='D05')out=Array.from({length:l===0?1:l<3?2:l===3?3:4},(_,i)=>rect(271+i*52,313,45,18,4,['#dec38b','#aaccc0','#b5c4e1','#dfb1a1'][i])+circle(293+i*52,321,4,'#fffdf0')).join('');
  if(id==='D06')out=rect(120,308,335,25,8,'#c8dccc');
  if(id==='D07')out=line(240,306,550,306,'#b6ab82',4)+line(240,333,550,333,'#b6ab82',4)+Array.from({length:6},(_,i)=>line(240+i*62,306,240+i*62,333,'#d3ad66',5)).join('');
  if(id==='D08')out=l===0?mark(285):line(347,315,347,180,'#a1b9b4',6)+line(347,180,264,180,'#a1b9b4',6)+rect(251,296,104,25,5,'#9fbfb4','#6b9890')+rect(252,290,103,9,4,'#c7ded5');
  return out;
 }
 function object(L){let id=L.id,a=L.action;if(id==='A01')return circle(0,0,16,'#eea65f','#995f37')+line(-15,0,15,0,'#a26742',2)+`<path d="M0 -15Q-11 0 0 15M0 -15Q11 0 0 15" fill="none" stroke="#a26742" stroke-width="2"/>`;if(id==='A02')return circle(0,0,15,'#fffdf3','#6d8b88')+`<path d="M0 -7L7 -2L4 6H-4L-7 -2Z" fill="#627e7a"/>`;if(id==='A06')return ellipse(0,-8,19,23,'#e3b5a1','#b87972')+line(0,15,0,25,'#b87972',2);if(id==='B01'&&L.l>=2)return `<path d="M-3 -5L4 -17L13 -2L3 5Z" fill="#fffdf1" stroke="#a7b9b3" stroke-width="2"/>`+circle(-4,0,5,'#d6b985');if(id==='C02'||id==='D04')return ellipse(0,0,id==='D04'?55:16,id==='D04'?12:8,'none','#d5a053',5);if(id==='C04')return rect(-11,-9,22,18,4,'#d69a83','#aa7868');if(id==='C05')return ellipse(0,0,21,6,'#78b5a4','#477c70',2);return circle(0,0,id==='B02'||id==='B04'||id==='A05'?7:id==='C01'?16:13,id==='C03'?'#c77b69':id==='A03'?'#efeee3':'#e6bf73','#a78b57');}
 function toolShape(L){let id=L.id;if(id==='A05')return line(0,0,0,-82,'#7b9796',6)+`<path d="M0 -82Q13 -91 29 -82" stroke="#749b96" stroke-width="8" fill="none" stroke-linecap="round"/>`;if(id==='B04')return line(0,0,0,-82,'#7b9796',5)+rect(-4,-87,25,8,3,'#87a99e');if(id==='B03')return line(0,0,0,-81,'#bba078',13);if(id==='B01')return line(0,0,0,-55,'#739a92',5)+ellipse(0,-78,15,25,'#e4efe8','#729b8f',4)+line(-10,-78,10,-78,'#a1bbb2',1)+line(0,-100,0,-57,'#a1bbb2',1);if(id==='B02')return line(0,0,0,-19,'#a68d73',9)+ellipse(0,-36,18,23,'#c77e73','#975e55',3);return '';}
 function scene(L,asset){return `<div class="scene coach-scene" id="scene"><svg id="coach-svg" viewBox="0 0 640 380" role="img" aria-label="운동의 단계별 자세와 도구 움직임"><defs><linearGradient id="coach-bg" x2="0" y2="1"><stop stop-color="#f5f5ec"/><stop offset="1" stop-color="#e7eee4"/></linearGradient><clipPath id="coach-face"><circle r="36"/></clipPath></defs><rect width="640" height="380" fill="url(#coach-bg)"/><rect y="326" width="640" height="54" fill="#dce5d7"/><path d="M0 326H640" stroke="#b1c4b0" stroke-width="2"/><path d="M0 355H640" stroke="#f5f8ec" stroke-width="2"/><g id="coach-props">${props(L)}</g><ellipse id="coach-shadow" cx="205" cy="324" rx="49" ry="8" fill="#a6b9a1" opacity=".35"/><g id="coach-rig">
 <path id="coach-leg0" fill="none" stroke="#506d8a" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/><ellipse id="coach-shoe0" rx="17" ry="8" fill="#e6eee9" stroke="#a9b9b2" stroke-width="2"/>
 <path id="coach-arm0" fill="none" stroke="#c99e78" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
 <path id="coach-leg1" fill="none" stroke="${col.pants}" stroke-width="25" stroke-linecap="round" stroke-linejoin="round"/><ellipse id="coach-shoe1" rx="18" ry="9" fill="#fffdf3" stroke="#a9b9b2" stroke-width="2"/>
 <g id="coach-body"><path d="M-26 -59Q-18 -72 0 -72Q20 -72 30 -58L25 -1Q0 9 -25 -1Z" fill="${col.shirt}" stroke="${col.shirtDark}" stroke-width="2"/><path d="M-18 -51H20" stroke="#e5f1dd" stroke-width="4" stroke-linecap="round"/><rect x="-9" y="-81" width="18" height="17" rx="6" fill="${col.skin}"/></g>
 <path id="coach-arm1" fill="none" stroke="${col.skin}" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/><circle id="coach-hand" r="10" fill="${col.skin}"/>
 <g id="coach-head"><circle r="38" fill="#fdf2dc" stroke="#fffdf5" stroke-width="3"/><image href="./assets/${asset}.webp" x="-47" y="-42" width="94" height="84" preserveAspectRatio="xMidYMid slice" clip-path="url(#coach-face)"/></g><g id="coach-tool">${toolShape(L)}</g><path id="coach-rope" fill="none" stroke="#c19462" stroke-width="4" stroke-linecap="round"/><g id="coach-object">${object(L)}</g></g></svg></div>`;}
 function solve(a,b,L1,L2,sign){let dx=b[0]-a[0],dy=b[1]-a[1],d=Math.max(.01,Math.hypot(dx,dy)),len=clamp(d,Math.abs(L1-L2)+.1,L1+L2-.1),ux=dx/d,uy=dy/d,along=(L1*L1-L2*L2+len*len)/(2*len),h=Math.sqrt(Math.max(0,L1*L1-along*along)), j=[a[0]+ux*along-uy*h*sign,a[1]+uy*along+ux*h*sign];return [j,[a[0]+ux*len,a[1]+uy*len]];}
 function draw(L,t,doc=document){let f=frame(L,t),q=f.q, [x,y,tilt]=q,angle=tilt*Math.PI/180, sh=[x+Math.sin(angle)*60,y-Math.cos(angle)*60], set=(id,k,v)=>doc.getElementById(id)?.setAttribute(k,v), tr=(id,X,Y,rot=0)=>set(id,'transform',`translate(${X.toFixed(2)} ${Y.toFixed(2)}) rotate(${rot.toFixed(2)})`);
  tr('coach-body',x,y,tilt);tr('coach-head',sh[0],sh[1]-45,tilt*.45);set('coach-shadow','cx',x);
  let lastHand;
  for(let i=0;i<2;i++){let side=i===0?-1:1,hip=[x+side*15,y],shoulder=[sh[0]+side*22,sh[1]+7], legTarget=[x+q[7+i*2],y+q[8+i*2]], handTarget=[x+q[3+i*2],y+q[4+i*2]], [knee,ankle]=solve(hip,legTarget,44,45,-1),[elbow,hand]=solve(shoulder,handTarget,40,37,1);set('coach-leg'+i,'d',`M${hip} L${knee} L${ankle}`);set('coach-arm'+i,'d',`M${shoulder} L${elbow} L${hand}`);set('coach-shoe'+i,'cx',ankle[0]+7);set('coach-shoe'+i,'cy',ankle[1]+3);if(i===1){set('coach-hand','cx',hand[0]);set('coach-hand','cy',hand[1]);lastHand=hand;}}
  tr('coach-tool',lastHand[0],lastHand[1],f.tool);set('coach-object','visibility',f.obj?'visible':'hidden');if(f.obj)tr('coach-object',...f.obj);
  let rope=L.id==='D03'&&L.l>=2, h=rope?Math.cos(f.tool*Math.PI/180):0;set('coach-rope','visibility',rope?'visible':'hidden');if(rope)set('coach-rope','d',`M${x-35} ${y-20} Q${x+5} ${h>0?y-220*h:325} ${x+43} ${y-20}`);
 }
 return {lesson,frame,scene,draw,solve,lessons};
})();
