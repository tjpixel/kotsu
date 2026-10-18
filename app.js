/* Kotsu · interfaz (web de pruebas del diseño de iPhone). App hermana de Tsuyo y Neiro.
   Pestañas Hoy · Progreso · Metas, hoja «Tú», temporizador a pantalla completa y Plus simulado. */
'use strict';

/* ═════ ICONOS ═════ */
const IC={
  chevR:'<path d="M9 5.5l6.5 6.5L9 18.5"/>',chevL:'<path d="M14.5 5.5L8 12l6.5 6.5"/>',chevD:'<path d="M6 9.5l6 6 6-6"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',x:'<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
  plus:'<path d="M12 5.5v13M5.5 12h13"/>',minus:'<path d="M6 12h12"/>',up:'<path d="M12 19V5.5M6.5 11L12 5.5 17.5 11"/>',
  more:'<circle cx="5.5" cy="12" r="1.8" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none"/><circle cx="18.5" cy="12" r="1.8" fill="currentColor" stroke="none"/>',
  play:'<path fill="currentColor" stroke="none" d="M8 5.2v13.6c0 .8.9 1.3 1.6.9l10.6-6.8c.6-.4.6-1.3 0-1.7L9.6 4.3C8.9 3.9 8 4.4 8 5.2z"/>',
  pause:'<rect x="6.5" y="5" width="3.6" height="14" rx="1.3" fill="currentColor" stroke="none"/><rect x="13.9" y="5" width="3.6" height="14" rx="1.3" fill="currentColor" stroke="none"/>',
  star:'<path d="M12 3.6l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.5l-5.1 2.8L8 13.6l-4.3-4 5.8-.7z"/>',
  starF:'<path fill="currentColor" stroke="none" d="M12 3.2l2.3 5.6 6 .5-4.6 3.9 1.4 5.9L12 15.9l-5.1 3.2 1.4-5.9-4.6-3.9 6-.5z"/>',
  book:'<path d="M4.5 5.5c2.5-.9 5-.6 7.5 1 2.5-1.6 5-1.9 7.5-1v13c-2.5-.9-5-.6-7.5 1-2.5-1.6-5-1.9-7.5-1z"/><path d="M12 6.5v13"/>',
  cal:'<rect x="4" y="5" width="16" height="15" rx="3.2"/><path d="M4 10h16M8.5 3v4M15.5 3v4"/>',
  heart:'<path d="M12 20s-7.6-4.6-7.6-10.3A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.6 2.4C19.6 15.4 12 20 12 20z"/>',
  pen:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
  clock:'<circle cx="12" cy="13" r="7.5"/><path d="M12 9.5V13l2.5 1.5M10 3h4"/>',
  chart:'<path d="M4 19.5h16"/><path d="M5 15.5l4.5-4.5 3.2 3.2L19 8"/>',
  list:'<rect x="4.5" y="3.5" width="15" height="17" rx="3.2"/><path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4.4"/>',
  shield:'<path d="M12 3.5l7 2.6v5.4c0 4.4-3 8-7 9-4-1-7-4.6-7-9V6.1z"/>',
  down:'<path d="M12 4v11M7 10.5l5 5 5-5M5 20h14"/>',
  trash:'<path d="M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13"/>',
  moon:'<path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.2 8.2 0 1 0 10.2 10.2z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
  lock:'<rect x="5.5" y="10.5" width="13" height="10" rx="2.5"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>',
  note:'<path d="M9 18V5.5l10-2V16"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/>',
  cap:'<path d="M2.5 9.5L12 5l9.5 4.5L12 14z"/><path d="M6.5 11.5v4.2c1.6 1.4 3.4 2.1 5.5 2.1s3.9-.7 5.5-2.1v-4.2"/>',
  target:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
  wind:'<path d="M3 9h11a3 3 0 1 0-3-3M3 15h15a3 3 0 1 1-3 3M3 12h7"/>',
  smile:'<circle cx="12" cy="12" r="8.5"/><path d="M8.5 14c.9 1.3 2.1 2 3.5 2s2.6-.7 3.5-2M9 9.8v.4M15 9.8v.4"/>',
  user:'<circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.2-3.8 4-5.6 7.5-5.6s6.3 1.8 7.5 5.6"/>',
  lotus:'<path d="M12 19.5c-3.8 0-7-2-8.5-5 2.2-.6 4.6-.2 6.4 1M12 19.5c3.8 0 7-2 8.5-5-2.2-.6-4.6-.2-6.4 1"/><path d="M12 19.5c-2.2-1.6-3.3-3.8-3.3-6.3S10 8 12 6c2 2 3.3 4.7 3.3 7.2s-1.1 4.7-3.3 6.3z"/>',
  dumbbell:'<path d="M6.5 7.5v9M17.5 7.5v9M3.5 10v4M20.5 10v4M6.5 12h11"/>',
  walk:'<circle cx="13" cy="4.8" r="1.8"/><path d="M10.5 21l2-6-2.5-2.5 1-4.5 3 2.5 3 1M9.5 9.5l-2 3.5M12.5 15l3 6"/>',
  drop:'<path d="M12 3.5c3.2 4 5.8 7.2 5.8 10.4a5.8 5.8 0 0 1-11.6 0C6.2 10.7 8.8 7.5 12 3.5z"/>',
  bed:'<path d="M3.5 18.5v-11M3.5 14h17v4.5M20.5 14v-2.5a3 3 0 0 0-3-3H11V14"/><circle cx="7.3" cy="11" r="1.8"/>',
  phone:'<rect x="7" y="3.5" width="10" height="17" rx="2.5"/><path d="M4 4l16 16"/>',
  chat:'<path d="M5 6.5h14a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-7l-4 3v-3H5A1.5 1.5 0 0 1 3.5 16V8A1.5 1.5 0 0 1 5 6.5z"/>',
  belt:'<path d="M3 10.5h18v3H3z"/><path d="M10.5 9h3v6h-3zM11 15l-2.5 5M13 15l2.5 5"/>',
  sword:'<path d="M19.5 4.5L8 16M16 4l4 4M6 14l4 4M8 16l-3.5 3.5"/>',
  leaf:'<path d="M5 19c0-8 5-13.5 14-14 .2 9-5.3 14-13 14z"/><path d="M5 19c3-4 6-6.5 9.5-8.5"/>',
  coffee:'<path d="M5 9.5h11v5a4.5 4.5 0 0 1-4.5 4.5h-2A4.5 4.5 0 0 1 5 14.5z"/><path d="M16 11h1.5a2.2 2.2 0 0 1 0 4.4H16M8.5 3.5v2.5M12 3.5v2.5"/>',
  money:'<rect x="3" y="6.5" width="18" height="11" rx="2.5"/><circle cx="12" cy="12" r="2.5"/><path d="M6.5 9.5v.01M17.5 14.5v.01"/>',
  home:'<path d="M4 11l8-6.5 8 6.5v8.5H4z"/><path d="M10 19.5V14h4v5.5"/>',
  flag:'<path d="M5.5 21V4M5.5 4.5h11l-2.5 4 2.5 4h-11"/>',
  mountain:'<path d="M3 19.5l6.2-10 3.6 5.6 2.4-3.6 5.8 8z"/><path d="M15.2 11.5V4.5l3.6 1.6-3.6 1.6"/>',
  fire:'<path d="M12 21c-3.6 0-6-2.4-6-5.6 0-3.4 3-5.2 3.4-9 2.6 1.4 4 3.6 4 5.6 1-.6 1.6-1.7 1.8-3 1.8 1.6 2.8 3.8 2.8 6.4 0 3.2-2.4 5.6-6 5.6z"/>',
  minimize:'<path d="M6 9.5l6 6 6-6"/>',
  ext:'<path d="M14 5h5v5M19 5l-8 8M18 14v4a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 18V7.5A1.5 1.5 0 0 1 6.5 6H10"/>'
};
const HAB_IC=['star','lotus','dumbbell','walk','wind','drop','book','pen','cap','chat','target','list','sun','moon','bed','phone','note','belt','sword','heart','leaf','coffee','money','home'];
const ic=(n,s=20,w=2)=>'<svg width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="'+w+'" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(IC[n]||IC.star)+'</svg>';
const chev=()=>'<svg class="chev" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+IC.chevR+'</svg>';
const $=id=>document.getElementById(id);
const dk=(pose,cell,extra)=>'<span class="deshi" data-pose="'+pose+'" data-cell="'+cell+'"'+(extra||'')+'></span>';
const dkStage=(pose,cell)=>'<div class="dk">'+dk(pose,cell)+'<div class="floor"></div></div>';
const DIAS=['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
const MESES=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const cap1=s=>s.replace(/^./,c=>c.toUpperCase());
const longDate=d=>{const x=new Date(d+'T00:00:00');return cap1(DIAS[x.getDay()])+', '+x.getDate()+' de '+MESES[x.getMonth()]};
const mmss=s=>{s=Math.max(0,Math.round(s));return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')};
const plural=(n,a,b)=>n+' '+(n===1?a:(b||a+'s'));
const pctTxt=p=>p==null?'–':Math.round(p*100)+' %';
const fmt1=n=>n==null?'–':n.toFixed(1).replace('.',',');
const dayName=d=>d===T()?'Hoy':(d===shiftD(T(),-1)?'Ayer':(d===shiftD(T(),1)?'Mañana':cap1(DIAS[wdOf(d)])));
const hico=(h,s)=>'<span class="hico"'+(s?' style="width:'+s+'px;height:'+s+'px;border-radius:'+Math.round(s*.3)+'px"':'')+'>'+ic(h.ic,s?Math.round(s*.5):19)+'</span>';
/* postura de Deshi según el área del hábito */
const POSE_AREA={mente:'seiza',descanso:'seiza',cuerpo:'walk',dojo:'suburi',arte:'cheer',aprender:'stand',trabajo:'stand',otros:'stand'};

/* ═════ AVISOS Y PANTALLA ═════ */
let tmo;
function toast(m){const t=$('toast');t.textContent=m;t.classList.add('on');clearTimeout(tmo);tmo=setTimeout(()=>t.classList.remove('on'),2000)}
let WL=null;
async function keepAwake(on){
  try{if(on&&'wakeLock' in navigator&&document.visibilityState==='visible'){if(!WL){WL=await navigator.wakeLock.request('screen');WL.addEventListener('release',()=>{WL=null})}}
    else if(!on&&WL){await WL.release();WL=null}}catch(e){WL=null}
}
function buzz(){
  try{navigator.vibrate&&navigator.vibrate([200,100,200])}catch(e){}
  try{const ac=new(window.AudioContext||window.webkitAudioContext)();[0,.22].forEach((t,i)=>{const o=ac.createOscillator(),g=ac.createGain();o.frequency.value=i?880:660;g.gain.setValueAtTime(.0001,ac.currentTime+t);g.gain.exponentialRampToValueAtTime(.18,ac.currentTime+t+.02);g.gain.exponentialRampToValueAtTime(.0001,ac.currentTime+t+.3);o.connect(g);g.connect(ac.destination);o.start(ac.currentTime+t);o.stop(ac.currentTime+t+.32)});setTimeout(()=>ac.close(),900)}catch(e){}
}

/* ═════ TEMA ═════ */
const DARKQ=matchMedia('(prefers-color-scheme: dark)');
const isDark=()=>{const t=PREF.get('theme','auto');return t==='dark'||(t==='auto'&&DARKQ.matches)};
function applyTheme(){
  const t=PREF.get('theme','auto');document.documentElement.dataset.theme=t;
  document.querySelectorAll('meta[name=theme-color]').forEach(m=>{m.dataset.c=m.dataset.c||m.content;m.content=t==='auto'?m.dataset.c:(t==='dark'?'#0A0A0C':'#F2F2F6')});
  const b=$('btnTheme');if(b){const d=isDark();b.innerHTML=ic(d?'sun':'moon',20);b.setAttribute('aria-label',d?'Cambiar a tema claro':'Cambiar a tema oscuro')}
}
function toggleTheme(){
  const go=()=>{PREF.set('theme',isDark()?'light':'dark');applyTheme()};
  const b=$('btnTheme');if(b){b.classList.add('spin');setTimeout(()=>b.classList.remove('spin'),60)}
  if(document.startViewTransition&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.startViewTransition(go);else go();
}
DARKQ.addEventListener&&DARKQ.addEventListener('change',applyTheme);
function setTheme(t){PREF.set('theme',t);applyTheme();openSheet(meSheet,true,true)}
function applyLook(){
  const L=Object.assign({},DB.profile.deshi||{},{belt:constancy().belt[0]});
  Deshi.setLook(L);document.documentElement.style.setProperty('--belt',Deshi.BELTS[L.belt]);
}

/* ═════ NAVEGACIÓN ═════ */
let cur='hoy',curDate=T(),VD=T(),GV=null,POP=null;
function go(v){
  if(v===cur&&v==='metas')GV=null;
  if(v==='hoy'&&cur==='hoy')VD=T();
  cur=v;
  document.querySelectorAll('.view').forEach(x=>x.classList.toggle('on',x.id==='v-'+v));
  document.querySelectorAll('.tab').forEach(b=>{const on=b.dataset.v===v;b.classList.toggle('on',on);if(on)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});
  window.scrollTo(0,0);render();
}
function render(){
  if(T()!==curDate){if(VD===curDate)VD=T();curDate=T()}
  applyLook();
  if(cur==='hoy')renderHoy();if(cur==='progreso')renderProg();if(cur==='metas')renderMetas();
  renderAcc();POP=null;
  $('btnMe').innerHTML='<span class="deshi" data-pose="stand" data-crop="head" data-box="40" data-still></span>';
}

/* ═════ HOY ═════ */
function weekStrip(){
  return '<div class="week">'+weekDates(VD).map(dt=>{
    const k=dayKind(dt),hoy=dt===T(),fut=dt>T();
    let c=k==='full'?'done':(k==='part'?'part':(fut&&k!=='rest'?'plan':''));if(hoy)c+=' today';if(dt===VD&&!hoy)c+=' sel';
    const lbl=longDate(dt)+(k==='full'?', cumplido':(k==='part'?', a medias':''));
    return '<div class="day'+(hoy?' today':'')+'"><span class="dl">'+WDL[wdOf(dt)]+'</span>'+
      (fut?'<span class="dc '+c+'">'+Number(dt.slice(8))+'</span>':'<button class="dc '+c+'" onclick="VD=\''+dt+'\';render()" aria-label="'+lbl+'">'+Number(dt.slice(8))+'</button>')+'<span class="dot"></span></div>';
  }).join('')+'</div>';
}
function heroMsg(st,d){
  const left=st.sch-st.done;
  if(d>T())return'Aún no ha llegado';
  if(!st.sch)return st.extra?'Día libre, y aun así has sumado':'Hoy no toca nada. Descansa.';
  if(!left)return d===T()?'Todo hecho. Poco a poco, cada día.':'Lo hiciste todo';
  if(st.pct>=FULL)return'Día cumplido · '+(left===1?'te queda 1':'te quedan '+left);
  if(!st.done)return d===T()?'Empieza por el más fácil':'No marcaste nada';
  return left===1?(d===T()?'Te queda 1':'Quedó 1'):(d===T()?'Te quedan ':'Quedaron ')+left;
}
/* anillo del día: un tramo por hábito, como el icono de Kotsu */
function dayRing(H,d,pose){
  const n=H.length,R=96,C=110,SW=14,done=H.filter(x=>doneOn(x.id,d)).length;let g='';
  const pt=a=>{const r=(a-90)*Math.PI/180;return(C+R*Math.cos(r)).toFixed(2)+' '+(C+R*Math.sin(r)).toFixed(2)};
  g+='<circle cx="'+C+'" cy="'+C+'" r="'+R+'" fill="none" stroke="var(--fill2)" stroke-width="'+SW+'" opacity="'+(n&&n<=16?0:1)+'"/>';
  if(n===1)g+='<circle cx="'+C+'" cy="'+C+'" r="'+R+'" fill="none" stroke="'+(done?'var(--tint)':'var(--fill2)')+'" stroke-width="'+SW+'"/>';
  else if(n>1&&n<=16){
    const round=n<=10,gap=round?(n<=6?17:15):4,step=360/n;
    H.forEach((x,i)=>{const a0=i*step+gap/2,a1=(i+1)*step-gap/2,on=doneOn(x.id,d);
      g+='<path d="M'+pt(a0)+' A'+R+' '+R+' 0 0 1 '+pt(a1)+'" fill="none" stroke="'+(on?'var(--tint)':'var(--fill2)')+'" stroke-width="'+SW+'" stroke-linecap="'+(round?'round':'butt')+'" style="transition:stroke .3s"/>'});
  }else if(n>16){const L=2*Math.PI*R;
    g+='<circle cx="'+C+'" cy="'+C+'" r="'+R+'" fill="none" stroke="var(--tint)" stroke-width="'+SW+'" stroke-linecap="round" stroke-dasharray="'+L.toFixed(1)+'" stroke-dashoffset="'+(L*(1-done/n)).toFixed(1)+'" transform="rotate(-90 '+C+' '+C+')" style="transition:stroke-dashoffset .4s"/>'}
  return '<div class="dring"><svg viewBox="0 0 220 220" width="220" height="220" role="img" aria-label="'+(n?done+' de '+n+' hábitos hechos':'Día libre')+'">'+g+'</svg><div class="in">'+dkStage(pose,1.55)+'</div></div>';
}
function renderHoy(){
  const v=$('v-hoy'),d=VD,isT=d===T(),st=dayStat(d),H=habitsOn(d),all=activeHabits();
  const pose=!st.sch?'seiza':(st.done===st.sch?'cheer':(st.done?'walk':'stand'));
  let h='<div class="head"><div><h1 class="lt">'+dayName(d)+'</h1><p class="sb l2 sub">'+(isT?longDate(d):fmtDY(d)+' · '+DIAS[wdOf(d)])+'</p></div>'+
    (isT?'':'<button class="pill tint" style="height:30px;padding:0 12px;margin-bottom:6px" onclick="VD=T();render()">Volver a hoy</button>')+'</div><div class="pad stack" style="padding-top:16px">';
  if(!all.length){
    h+='<div class="card" style="padding:20px;text-align:center"><div style="display:flex;justify-content:center">'+dkStage('rei',2)+'</div><h2 class="t2" style="margin-top:14px">Empieza con uno</h2><p class="sb l2" style="margin-top:4px">Un hábito pequeño que puedas hacer casi cada día.</p><button class="btn pri" style="margin-top:16px" onclick="openManager()">Añadir hábitos</button></div></div>';
    v.innerHTML=h;return;
  }
  h+='<div class="card" style="padding:20px 18px 18px;text-align:center">'+dayRing(H,d,pose)+
    '<h2 class="t1 num" style="margin-top:12px">'+(st.sch?st.done+' de '+st.sch:'Día libre')+(st.sch?'<span class="sb l3 semi"> · '+Math.round(st.pct*100)+' %</span>':'')+'</h2>'+
    '<p class="sb l2" style="margin-top:2px">'+heroMsg(st,d)+'</p></div>';
  if(DB.profile.moodOn!==false&&d<=T()){
    const m=DB.mood[d],late=new Date().getHours()>=18||!isT;
    if(m||late)h+='<div class="card" style="padding:14px 14px 12px"><div class="row" style="justify-content:space-between;padding:0 2px 10px"><p class="hl">'+(isT?'¿Cómo ha ido el día?':'Ánimo de ese día')+'</p>'+
      '<button class="fn link" onclick="openMood(\''+d+'\')">'+(m&&m.t?'Ver nota':'Añadir nota')+'</button></div><div class="seg5">'+
      MOODS.map((s,i)=>'<button class="'+(m&&m.v===i+1?'on':'')+'" onclick="setMood(\''+d+'\','+(i+1)+')" aria-pressed="'+!!(m&&m.v===i+1)+'"><span class="n">'+(i+1)+'</span><span class="s">'+s+'</span></button>').join('')+'</div></div>';
  }
  h+='</div>';
  h+='<div class="sec"><div class="stitle"><h3 class="t3">'+(weekDates(VD)[0]===mondayOf(T())?'Esta semana':'Semana del '+fmtD(weekDates(VD)[0]))+'</h3><span class="fn l2">'+pctTxt(weekRate(mondayOf(VD)))+'</span></div><div class="pad"><div class="card" style="padding:14px 8px 12px">'+weekStrip()+'</div></div></div>';
  const pi=hoyPanel();
  h+='<div class="pad" style="padding-top:22px"><div class="segc" id="dseg" role="tablist" aria-label="Cómo ver el día">'+['Lista','Línea de tiempo'].map((l,i)=>'<button role="tab" class="'+(pi===i?'on':'')+'" aria-selected="'+(pi===i)+'" onclick="setHoyPanel('+i+')">'+l+'</button>').join('')+'</div></div>';
  let L1='';
  MOMENTS.forEach(([k,n])=>{
    const L=H.filter(x=>momentOf(x.at)===k);if(!L.length)return;
    const dn=L.filter(x=>doneOn(x.id,d)).length;
    L1+='<div class="sec" style="padding-top:20px"><div class="stitle"><h3 class="t3">'+n+'</h3><span class="fn l2 num">'+dn+' de '+L.length+'</span></div><div class="pad"><div class="group">'+L.map(x=>habitRow(x,d)).join('')+'</div></div></div>';
  });
  if(!H.length)L1='<div class="pad" style="padding-top:20px"><div class="card empty">'+(isT?'Hoy no te toca ningún hábito.':'Ese día no tocaba ningún hábito.')+'</div></div>';
  h+='<div class="dpan" id="dpan" onscroll="dpanScroll()"><div class="dslide" id="ds0">'+L1+'</div><div class="dslide" id="ds1">'+timelineHTML(H,d)+'</div></div>';
  const off=all.filter(x=>!schedOn(x,d));
  h+='<div class="sec"><div class="pad"><div class="group">'+
    (off.length?'<button class="cell" onclick="openOffToday(\''+d+'\')"><span class="ic gray">'+ic('cal',17)+'</span><div class="cb"><div class="tt"><p class="bd">'+(isT?'Hoy no tocan':'Ese día no tocaban')+'</p><p class="fn l2 ell">'+off.map(x=>esc(x.n)).join(', ')+'</p></div><span class="val num">'+off.length+'</span>'+chev()+'</div></button>':'')+
    '<button class="cell" onclick="openManager()"><span class="ic soft">'+ic('list',17)+'</span><div class="cb"><span class="tt bd">Mis hábitos</span><span class="val num">'+all.length+'</span>'+chev()+'</div></button></div></div></div>';
  v.innerHTML=h;
  dpanSync(true);
}

/* Lista ↔ Línea de tiempo: se desliza con el dedo o con el selector */
const hoyPanel=()=>PREF.get('hoyPanel',0)===1?1:0;
let DPI=0,dpRaf=null;
function dpanSync(instant){
  const c=$('dpan');if(!c)return;DPI=hoyPanel();
  if(instant){c.style.scrollBehavior='auto';c.scrollLeft=DPI*c.clientWidth;c.style.scrollBehavior=''}
  else c.scrollTo({left:DPI*c.clientWidth,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  dpanHeight();
}
function dpanHeight(){const c=$('dpan'),s=$('ds'+DPI);if(c&&s)c.style.height=s.offsetHeight+'px'}
function setHoyPanel(i){PREF.set('hoyPanel',i);dpanSeg(i);dpanSync(false)}
function dpanSeg(i){DPI=i;document.querySelectorAll('#dseg button').forEach((b,k)=>{b.classList.toggle('on',k===i);b.setAttribute('aria-selected',k===i)});dpanHeight()}
function dpanScroll(){
  if(dpRaf)return;
  dpRaf=requestAnimationFrame(()=>{dpRaf=null;const c=$('dpan');if(!c||!c.clientWidth)return;
    const i=Math.round(c.scrollLeft/c.clientWidth);if(i!==DPI&&(i===0||i===1)){PREF.set('hoyPanel',i);dpanSeg(i)}});
}
addEventListener('resize',()=>{if(cur==='hoy')dpanSync(true)});

/* línea de tiempo por horas, con la línea de «ahora» */
function timelineHTML(H,d){
  const isT=d===T(),now=new Date(),nm=now.getHours()*60+now.getMinutes();
  const timed=H.filter(x=>isTime(x.at)),loose=H.filter(x=>!isTime(x.at));
  const hr=x=>+x.at.slice(0,2);
  let out='';
  if(timed.length){
    let S=Math.min(...timed.map(hr)),E=Math.max(...timed.map(hr));
    if(isT){S=Math.min(S,now.getHours());E=Math.max(E,now.getHours())}
    S=Math.max(0,S);E=Math.min(23,E);
    const EV=56,PAD=8,EMPTY=30,hh={},by={};
    timed.forEach(x=>{(by[hr(x)]=by[hr(x)]||[]).push(x)});
    for(let k=S;k<=E;k++)hh[k]=by[k]?Math.max(EMPTY,by[k].length*(EV+6)+PAD):EMPTY;
    const top=k=>{let t=0;for(let j=S;j<k;j++)t+=hh[j];return t};
    const total=top(E+1);let g='';
    for(let k=S;k<=E;k++){
      const y=top(k);
      g+='<span class="tlt c1 num" style="top:'+y+'px">'+String(k).padStart(2,'0')+':00</span><i class="tlg" style="top:'+(y+8)+'px"></i>';
      (by[k]||[]).forEach((x,j)=>{
        const on=doneOn(x.id,d),t=DB.log[d]&&DB.log[d][x.id],late=isT&&!on&&(+x.at.slice(0,2)*60+ +x.at.slice(3))<nm;
        const vi=viaOf(x.id,d);
        const sub=[x.at,x.mode==='timer'&&!x.app?x.min+' min':'',on&&vi&&vi!=='-'?'hecho en '+SISTERS[vi].n:(on&&isTime(t)?'hecho a las '+t:''),late?'<span class="amb">pendiente</span>':''].filter(Boolean).join(' · ');
        const ey=y+4+j*(EV+6);
        g+='<i class="tld'+(on?' on':'')+'" style="top:'+(ey+EV/2-6)+'px"></i>'+
          '<div class="tle'+(on?' done':'')+'" style="top:'+ey+'px;height:'+EV+'px">'+
          '<button class="hck'+(on?' on':'')+(POP===x.id&&on?' pop':'')+'" style="margin-left:0;width:44px" onclick="toggleHabit(\''+x.id+'\',\''+d+'\')" aria-pressed="'+on+'" aria-label="'+(on?'Desmarcar ':'Marcar ')+esc(x.n)+'"'+(d>T()?' disabled style="opacity:.4"':'')+'><i>'+(on?ic('check',15,3):'')+'</i></button>'+
          '<button class="grow" style="min-width:0;text-align:left;align-self:stretch;display:flex;flex-direction:column;justify-content:center" onclick="openHabit(\''+x.id+'\',\''+d+'\')"><span class="bd ell" style="display:block">'+esc(x.n)+'</span><span class="fn l2 ell" style="display:block">'+sub+'</span></button>'+
          (x.app&&!on&&isT?sisBtn(x,'margin-right:10px'):x.mode==='timer'&&!on&&isT?'<button class="tmr" style="margin-right:10px" onclick="startTimer(\''+x.id+'\')" aria-label="Empezar temporizador de '+esc(x.n)+'">'+ic('play',12)+x.min+' min</button>':'<span class="hico" style="width:30px;height:30px;border-radius:9px;margin:0 12px 0 6px">'+ic(x.ic,16)+'</span>')+
          '</div>';
      });
    }
    if(isT&&now.getHours()>=S&&now.getHours()<=E){
      const y=top(now.getHours())+now.getMinutes()/60*hh[now.getHours()];
      g+='<div class="tln" style="top:'+y.toFixed(1)+'px"><span class="c1 num semi">'+String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0')+'</span><i></i></div>';
    }
    out+='<div class="pad" style="padding-top:20px"><div class="card" style="padding:16px 14px 12px 10px"><div class="tl" style="height:'+(total+4)+'px">'+g+'</div></div></div>';
  }else out+='<div class="pad" style="padding-top:20px"><div class="card empty">Ponles hora a tus hábitos (al editarlos) y aquí verás tu día ordenado.</div></div>';
  if(loose.length)out+='<div class="sec" style="padding-top:20px"><div class="stitle"><h3 class="t3">Sin hora</h3><span class="fn l2 num">'+loose.filter(x=>doneOn(x.id,d)).length+' de '+loose.length+'</span></div><div class="pad"><div class="group">'+loose.map(x=>habitRow(x,d)).join('')+'</div></div></div>';
  return out;
}
function habitRow(x,d){
  const on=doneOn(x.id,d),S=streakOf(x),fut=d>T(),note=DB.notes[d]&&DB.notes[d][x.id];
  const vi=viaOf(x.id,d),sis=x.app&&!on&&d===T();
  const sub=[isTime(x.at)?x.at:'',x.mode==='timer'&&!x.app?x.min+' min':'',on&&vi&&vi!=='-'?'hecho en '+SISTERS[vi].n:'',S.cur>=2?S.cur+' seguidos':'',note?'con nota':''].filter(Boolean).join(' · ')||AREAS[x.a].n;
  return '<div class="cell hcell'+(on?' done':'')+'" style="padding-left:10px">'+
    '<button class="hck'+(on?' on':'')+(POP===x.id&&on?' pop':'')+'" onclick="toggleHabit(\''+x.id+'\',\''+d+'\')" aria-pressed="'+on+'" aria-label="'+(on?'Desmarcar ':'Marcar ')+esc(x.n)+'"'+(fut?' disabled style="opacity:.4"':'')+'><i>'+(on?ic('check',15,3):'')+'</i></button>'+
    '<button class="row grow" style="gap:0;min-width:0;text-align:left;align-self:stretch" onclick="openHabit(\''+x.id+'\',\''+d+'\')">'+hico(x)+
    '<div class="cb"><div class="tt"><p class="bd ell">'+esc(x.n)+'</p><p class="fn l2 ell">'+sub+'</p></div>'+
    ((x.mode==='timer'||sis)&&!on&&d===T()?'':chev())+'</div></button>'+
    (sis?'<div style="display:flex;align-items:center;padding-right:14px">'+sisBtn(x)+'</div>':(x.mode==='timer'&&!on&&d===T()?'<div style="display:flex;align-items:center;padding-right:14px"><button class="tmr" onclick="startTimer(\''+x.id+'\')" aria-label="Empezar temporizador de '+esc(x.n)+'">'+ic('play',12)+x.min+' min</button></div>':''))+
    '</div>';
}
function toggleHabit(id,d){
  if(d>T())return toast('Ese día aún no ha llegado');
  const was=doneOn(id,d),before=dayStat(d);
  setDone(id,d,!was);
  if(was&&viaOf(id,d)&&viaOf(id,d)!=='-')DB.via[d][id]='-';else if(!was&&viaOf(id,d)==='-')delete DB.via[d][id];
  save();
  if(!was){POP=id;try{navigator.vibrate&&navigator.vibrate(12)}catch(e){}
    const after=dayStat(d);if(after.sch&&after.done===after.sch&&before.done<before.sch)setTimeout(()=>toast(d===T()?'¡Día completo!':'Día completo'),150);
    else if(after.pct>=FULL&&before.pct<FULL)setTimeout(()=>toast('Día cumplido'),150)}
  if(SHS.length)drawSheet();render();
}
function openOffToday(d){
  openSheet(()=>{const L=activeHabits().filter(x=>!schedOn(x,d)).sort(byTime);
    return{title:d===T()?'Hoy no tocan':'Ese día no tocaban',body:'<div class="pad"><p class="sb l2 center" style="padding:0 12px 16px">Si haces alguno igualmente, márcalo: suma, y no te resta nada.</p><div class="group">'+L.map(x=>habitRow(x,d)).join('')+'</div></div>'}});
}

/* ═════ APPS HERMANAS ═════ */
const viaOf=(id,d)=>DB.via[d]&&DB.via[d][id];
const sisBtn=(x,st)=>'<a class="tmr" href="'+sisterUrl(x.app)+'" target="_blank" rel="noopener"'+(st?' style="'+st+'"':'')+' onclick="event.stopPropagation()" aria-label="Abrir '+SISTERS[x.app].n+'">'+SISTERS[x.app].n+ic('ext',13,2.2)+'</a>';
function syncSisters(){
  const L=activeHabits().filter(x=>x.app);if(!L.length)return 0;
  const from=shiftD(T(),-14);let n=0,today=[];
  const cache={};
  L.forEach(x=>{const D=cache[x.app]=cache[x.app]||sisterDays(x.app);
    D.forEach(d=>{if(d<from||d>T()||(DB.cfg.start&&d<DB.cfg.start))return;if(doneOn(x.id,d)||viaOf(x.id,d)==='-')return;
      setDone(x.id,d,true);(DB.via[d]=DB.via[d]||{})[x.id]=x.app;n++;if(d===T())today.push(x)})});
  if(n){save();if(today.length)setTimeout(()=>toast('Hecho en '+SISTERS[today[0].app].n+': '+today[0].n),300)}
  return n;
}

/* ═════ ÁNIMO ═════ */
function setMood(d,v){
  const m=DB.mood[d];
  if(m&&m.v===v&&!m.t){delete DB.mood[d]}else DB.mood[d]={v,t:m?m.t:''};
  save();render();
  if(DB.mood[d]&&!m)toast('Ánimo guardado');
}
let MD=null;
function openMood(d){
  const m=DB.mood[d]||{};MD={d,v:m.v||0,t:m.t||''};
  openSheet(()=>({title:d===T()?'Tu día':'Ánimo · '+fmtD(d),ok:1,onOk:'saveMood()',body:'<div class="pad stack">'+
    '<div class="seg5">'+MOODS.map((s,i)=>'<button class="'+(MD.v===i+1?'on':'')+'" onclick="MD.v=MD.v==='+(i+1)+'?0:'+(i+1)+';drawSheet()"><span class="n">'+(i+1)+'</span><span class="s">'+s+'</span></button>').join('')+'</div>'+
    '<textarea class="ta" id="mdT" maxlength="1000" placeholder="¿Qué ha pasado hoy? ¿Qué te ha ayudado?" oninput="MD.t=this.value">'+esc(MD.t)+'</textarea>'+
    (DB.mood[d]?'<button class="btn sec danger" onclick="delete DB.mood[\''+d+'\'];save();closeSheet();render()">Borrar</button>':'')+'</div>'}));
}
function saveMood(){
  if(!MD)return closeSheet();
  if(MD.v)DB.mood[MD.d]={v:MD.v,t:clean(MD.t,1000)};else if(clean(MD.t))return toast('Elige cómo te has sentido');else delete DB.mood[MD.d];
  save();closeSheet();render();
}

/* ═════ HÁBITO ═════ */
function miniCal(x){
  const today=T(),start=shiftD(mondayOf(today),-28);let h='<div class="mcal" aria-label="Últimas cinco semanas">'+['L','M','X','J','V','S','D'].map(l=>'<span class="c1 l3" style="aspect-ratio:auto">'+l+'</span>').join('');
  for(let i=0;i<35;i++){const d=shiftD(start,i),on=doneOn(x.id,d),sch=schedOn(x,d),fut=d>today;
    h+='<span class="'+(on?'on':(sch&&!fut&&d!==today?'miss':''))+(d===today?' tdy':'')+'"'+(fut?' style="opacity:.35"':'')+'>'+Number(d.slice(8))+'</span>'}
  return h+'</div>';
}
function openHabit(id,d){
  d=d||T();
  openSheet(()=>{const x=habitById(id);if(!x)return{title:'',body:''};
    const S=streakOf(x),r30=rateOf(x,30),on=doneOn(id,d),note=(DB.notes[d]&&DB.notes[d][id])||'';
    const notes=Object.keys(DB.notes).filter(k=>DB.notes[k][id]&&k!==d).sort().reverse().slice(0,isPlus()?50:5);
    const goals=(DB.goals||[]).filter(g=>(g.hab||[]).includes(id));
    return{title:esc(x.n),body:
      '<div class="pad stack">'+
      '<div class="row" style="gap:14px;padding:0 4px">'+hico(x,52)+'<div class="grow"><p class="hl">'+AREAS[x.a].n+'</p><p class="fn l2">'+freqTxt(x.days)+(isTime(x.at)?' · '+x.at:'')+(x.mode==='timer'?' · '+x.min+' min':'')+(x.app?' · con '+SISTERS[x.app].n:'')+'</p></div></div>'+
      '<div class="chips3">'+[[S.cur,'Racha'],[S.best,'Mejor racha'],[pctTxt(r30),'30 días']].map(([a,b])=>'<div style="flex:1;background:var(--sheet2)"><p class="t2 num">'+a+'</p><p class="c1 l2">'+b+'</p></div>').join('')+'</div>'+
      '<div class="card" style="padding:14px 14px 12px;background:var(--sheet2)">'+miniCal(x)+'</div>'+
      (x.app&&!on&&d===T()?'<a class="btn pri" href="'+sisterUrl(x.app)+'" target="_blank" rel="noopener">'+SISTERS[x.app].verb+' en '+SISTERS[x.app].n+ic('ext',17,2.2)+'</a><p class="fn l2 center" style="margin-top:-4px">Al volver a Kotsu se marca solo si has '+SISTERS[x.app].did+'.</p>':'')+
      (x.mode==='timer'&&!x.app&&!on&&d===T()?'<button class="btn pri" onclick="closeSheet();startTimer(\''+id+'\')">'+ic('play',18)+'Empezar · '+x.min+' min</button>':'')+
      (d<=T()?'<button class="btn '+(on?'sec':((x.mode==='timer'||x.app)&&d===T()?'sec':'pri'))+'" onclick="toggleHabit(\''+id+'\',\''+d+'\')">'+(on?'Desmarcar':ic('check',18,2.6)+'Hecho'+(d===T()?'':' el '+fmtD(d)))+'</button>':'')+
      (d<=T()?'<div class="field"><label for="hN">Nota · '+(d===T()?'hoy':fmtD(d))+'</label><textarea class="ta" id="hN" maxlength="600" placeholder="Cómo ha ido, qué has notado…" onchange="setNote(\''+id+'\',\''+d+'\',this.value)">'+esc(note)+'</textarea></div>':'')+
      (notes.length?'<p class="ghead" style="padding:8px 16px 0">Notas anteriores</p><div class="group">'+notes.map(k=>'<div class="cell static"><div class="cb" style="padding-left:2px"><div class="tt"><p class="fn l2">'+fmtDY(k)+'</p><p class="sb" style="white-space:pre-wrap">'+esc(DB.notes[k][id])+'</p></div></div></div>').join('')+'</div>':'')+
      (goals.length?'<p class="ghead" style="padding:8px 16px 0">Te acerca a</p><div class="group">'+goals.map(g=>'<button class="cell" onclick="closeSheet();GV=\''+g.id+'\';go(\'metas\')"><span class="ic soft">'+ic('mountain',17)+'</span><div class="cb"><span class="tt bd ell">'+esc(g.t)+'</span>'+chev()+'</div></button>').join('')+'</div>':'')+
      '<div class="group" style="margin-top:4px"><button class="cell" onclick="openEdit(\''+id+'\',true)"><span class="ic gray">'+ic('pen',17)+'</span><div class="cb"><span class="tt bd">Editar hábito</span>'+chev()+'</div></button></div>'+
      '</div>'}});
}
function setNote(id,d,v){
  v=clean(v,600);
  if(v){DB.notes[d]=DB.notes[d]||{};DB.notes[d][id]=v}else if(DB.notes[d]){delete DB.notes[d][id];if(!Object.keys(DB.notes[d]).length)delete DB.notes[d]}
  save();render();
}

/* editor */
let HE=null;
function openEdit(id,push,preset){
  const x=id?habitById(id):null;
  if(!x&&activeHabits().length>=FREE_HABITS&&!isPlus())return openPlus('habits');
  HE=x?JSON.parse(JSON.stringify(x)):Object.assign({id:null,n:'',ic:'star',a:(goalsAreas()[0]||'otros'),days:ALLDAYS.slice(),at:'',mode:'check',min:10,on:true,app:''},preset||{});
  if(!HE.days)HE.days=ALLDAYS.slice();
  openSheet(editSheet,push);
}
const goalsAreas=()=>Array.isArray(DB.profile.areas)?DB.profile.areas:[];
function editSheet(){
  const e=HE,qd=[['Todos',ALLDAYS],['L a V',[1,2,3,4,5]],['Finde',[0,6]]];
  return{title:e.id?'Editar hábito':'Nuevo hábito',ok:1,onOk:'saveEdit()',body:'<div class="pad stack">'+
    '<div class="field"><label for="heN">Nombre</label><input id="heN" maxlength="60" value="'+esc(e.n)+'" placeholder="Meditar, leer, estirar…" oninput="HE.n=this.value"></div>'+
    '<div><p class="ghead" style="padding-left:16px">Icono</p><div class="icgrid">'+HAB_IC.map(k=>'<button class="'+(e.ic===k?'on':'')+'" onclick="HE.ic=\''+k+'\';drawSheet()" aria-label="Icono '+k+'" aria-pressed="'+(e.ic===k)+'">'+ic(k,20)+'</button>').join('')+'</div></div>'+
    '<div><p class="ghead" style="padding-left:16px">Área</p><div class="chips">'+AREA_ORDER.map(k=>'<button class="'+(e.a===k?'on':'')+'" onclick="HE.a=\''+k+'\';drawSheet()">'+ic(AREAS[k].ic,15)+AREAS[k].n+'</button>').join('')+'</div></div>'+
    '<div><p class="ghead" style="padding-left:16px">Días</p><div class="daysel">'+[1,2,3,4,5,6,0].map(d=>'<button class="'+(e.days.includes(d)?'on':'')+'" onclick="heDay('+d+')" aria-pressed="'+e.days.includes(d)+'">'+WDL[d]+'</button>').join('')+'</div>'+
      '<div class="chips" style="margin-top:10px">'+qd.map(([l,a])=>'<button class="'+(a.length===e.days.length&&a.every(z=>e.days.includes(z))?'on':'')+'" onclick="HE.days='+JSON.stringify(a)+';drawSheet()">'+l+'</button>').join('')+'</div></div>'+
    '<div class="field"><label for="heT">Hora (opcional) · ordena tu día en mañana, tarde y noche</label><div class="row"><input id="heT" type="time" class="grow" value="'+esc(e.at)+'" onchange="HE.at=this.value;drawSheet()">'+(e.at?'<button class="btn sec sm" onclick="HE.at=\'\';drawSheet()">Sin hora</button>':'')+'</div></div>'+
    '<div><p class="ghead" style="padding-left:16px">Cómo se hace</p><div class="segc"><button class="'+(e.mode==='check'?'on':'')+'" onclick="HE.mode=\'check\';drawSheet()">Marcar</button><button class="'+(e.mode==='timer'?'on':'')+'" onclick="HE.mode=\'timer\';drawSheet()">Con tiempo</button></div>'+
      (e.mode==='timer'?'<div class="row" style="justify-content:center;gap:18px;margin-top:14px"><button class="step" style="width:46px;height:46px" onclick="HE.min=Math.max(1,HE.min-(HE.min>15?5:1));drawSheet()" aria-label="Menos">'+ic('minus',20)+'</button><span class="t2 num" style="min-width:90px;text-align:center">'+e.min+' min</span><button class="step" style="width:46px;height:46px" onclick="HE.min=Math.min(240,HE.min+(HE.min>=15?5:1));drawSheet()" aria-label="Más">'+ic('plus',20)+'</button></div>':'<p class="fn l2" style="padding:8px 6px 0">Con tiempo abre un temporizador a pantalla completa y se marca solo al terminar.</p>')+'</div>'+
    '<div><p class="ghead" style="padding-left:16px">Se hace en</p><div class="chips">'+[['','Solo Kotsu'],['tsuyo','Tsuyo'],['neiro','Neiro']].map(([k,l])=>'<button class="'+((e.app||'')===k?'on':'')+'" onclick="HE.app=\''+k+'\';drawSheet()">'+l+'</button>').join('')+'</div>'+
      '<p class="fn l2" style="padding:8px 6px 0">'+(e.app?'Hoy tendrás un botón para abrir '+SISTERS[e.app].n+', y el hábito se marca solo cuando '+(e.app==='tsuyo'?'entrenes':'practiques')+' allí (en el mismo navegador).':'Únelo a Tsuyo o Neiro y se marcará solo al entrenar o practicar allí.')+'</p></div>'+
    (e.id?'<div class="stack" style="margin-top:8px"><button class="btn sec" onclick="archiveHabit()">'+(e.on===false?'Recuperar hábito':'Archivar')+'</button>'+
      '<button class="btn sec danger" onclick="confirmSheet(\'Borrar hábito\',\'Se borrará con todo su historial. Si solo quieres dejarlo por ahora, mejor archívalo.\',\'Borrar\',\'delHabit()\',true)">Borrar</button></div>':'')+
    '</div>'};
}
function heDay(d){const a=HE.days,i=a.indexOf(d);if(i>=0){if(a.length===1)return toast('Elige al menos un día');a.splice(i,1)}else a.push(d);drawSheet()}
function saveEdit(){
  const e=HE;e.n=clean(e.n,60);if(!e.n)return toast('Ponle un nombre');
  if(e.id){const i=DB.habits.findIndex(x=>x.id===e.id);if(i>=0)DB.habits[i]=cleanHabit(e)}
  else{e.id=uid();e.since=T();DB.habits.push(cleanHabit(e));toast('Hábito añadido')}
  save();backSheet();render();
}
function archiveHabit(){
  const x=habitById(HE.id);if(!x)return;
  if(x.on===false&&activeHabits().length>=FREE_HABITS&&!isPlus())return openPlus('habits');
  x.on=x.on===false;save();closeSheet();render();toast(x.on?'Hábito recuperado':'Archivado: su historial se queda');
}
function delHabit(){
  const id=HE.id;DB.habits=DB.habits.filter(x=>x.id!==id);
  Object.keys(DB.log).forEach(d=>{delete DB.log[d][id];if(!Object.keys(DB.log[d]).length)delete DB.log[d]});
  Object.keys(DB.notes).forEach(d=>{delete DB.notes[d][id];if(!Object.keys(DB.notes[d]).length)delete DB.notes[d]});
  Object.keys(DB.via).forEach(d=>{delete DB.via[d][id];if(!Object.keys(DB.via[d]).length)delete DB.via[d]});
  DB.goals.forEach(g=>g.hab=(g.hab||[]).filter(x=>x!==id));
  save();closeSheet();render();toast('Hábito borrado');
}

/* mis hábitos */
function openManager(push){
  openSheet(()=>{const A=activeHabits().sort(byTime),Z=(DB.habits||[]).filter(x=>x.on===false),have=new Set((DB.habits||[]).map(x=>x.n.toLowerCase()));
    const ar=goalsAreas().length?goalsAreas():AREA_ORDER,sug=SUGG.filter(s=>!have.has(s.n.toLowerCase())).sort((a,b)=>(ar.includes(b.a)-ar.includes(a.a)));
    const lim=!isPlus()&&A.length>=FREE_HABITS;
    return{title:'Mis hábitos',body:'<div class="pad stack">'+
      '<div class="group">'+A.map(x=>'<button class="cell" onclick="openEdit(\''+x.id+'\',true)">'+hico(x)+'<div class="cb"><div class="tt"><p class="bd ell">'+esc(x.n)+'</p><p class="fn l2 ell">'+freqTxt(x.days)+(isTime(x.at)?' · '+x.at:'')+(x.mode==='timer'?' · '+x.min+' min':'')+'</p></div>'+chev()+'</div></button>').join('')+
        '<button class="cell" onclick="openEdit(null,true)"><span class="ic soft">'+ic('plus',17,2.4)+'</span><div class="cb"><div class="tt"><p class="bd ink">Nuevo hábito</p>'+(lim?'<p class="fn l2">Gratis hasta '+FREE_HABITS+'; sin límite con Plus</p>':'')+'</div></div></button></div>'+
      (isPlus()?'':'<p class="gfoot" style="padding:0 16px">'+A.length+' de '+FREE_HABITS+' hábitos activos</p>')+
      (sug.length?'<p class="ghead" style="padding:10px 16px 0">Ideas para empezar</p><div class="group">'+sug.slice(0,8).map(s=>'<button class="cell" onclick="addSugg(\''+esc(s.n).replace(/'/g,'')+'\')"><span class="hico">'+ic(s.ic,19)+'</span><div class="cb"><div class="tt"><p class="bd ell">'+esc(s.n)+'</p><p class="fn l2">'+AREAS[s.a].n+(s.mode==='timer'?' · '+s.min+' min':'')+'</p></div><span class="ink">'+ic('plus',20,2.4)+'</span></div></button>').join('')+'</div>':'')+
      (Z.length?'<p class="ghead" style="padding:10px 16px 0">Archivados</p><div class="group">'+Z.map(x=>'<button class="cell" onclick="openEdit(\''+x.id+'\',true)">'+hico(x)+'<div class="cb"><span class="tt bd l2 ell">'+esc(x.n)+'</span>'+chev()+'</div></button>').join('')+'</div>':'')+
      '</div>'}},push);
}
function addSugg(n){
  const s=SUGG.find(x=>x.n===n);if(!s)return;
  openEdit(null,true,{n:s.n,ic:s.ic,a:s.a,mode:s.mode||'check',min:s.min||10,at:s.at||'',days:(s.days||ALLDAYS).slice(),app:guessApp(s.n,s.a)});
}

/* ═════ TEMPORIZADOR ═════ */
const TM={on:false,min:false,id:null,d:null,total:0,left:0,endAt:0,run:false,iv:null,ph:'run',note:''};
function startTimer(id){
  const x=habitById(id);if(!x)return;
  if(TM.on&&TM.id!==id){expandTimer();return toast('Termina antes el temporizador abierto')}
  if(!TM.on)Object.assign(TM,{on:true,min:false,id,d:T(),total:x.min*60,left:x.min*60,run:true,endAt:Date.now()+x.min*6e4,ph:'run',note:''});
  TM.min=false;tmPersist();$('timer').classList.add('on');keepAwake(true);tmLoop();renderTimer();renderAcc();
}
const tmLeft=()=>TM.run?Math.max(0,(TM.endAt-Date.now())/1000):TM.left;
function tmPersist(){PREF.set('tmr',TM.on&&TM.ph==='run'?{id:TM.id,d:TM.d,total:TM.total,left:TM.left,endAt:TM.endAt,run:TM.run}:null)}
function tmLoop(){clearInterval(TM.iv);TM.iv=setInterval(tmTick,250);tmTick()}
function tmTick(){
  if(!TM.on||TM.ph!=='run')return;
  const l=tmLeft();
  if(l<=0){finishTimer(true);return}
  const t=$('tmT');if(t)t.textContent=mmss(Math.ceil(l));
  const r=$('tmR');if(r)r.setAttribute('stroke-dashoffset',(TM_C*(1-l/TM.total)).toFixed(1));
  const a=$('accT');if(a)a.textContent=mmss(Math.ceil(l));
}
const TM_C=2*Math.PI*112;
function tmToggle(){if(TM.run){TM.left=tmLeft();TM.run=false}else{TM.endAt=Date.now()+TM.left*1000;TM.run=true}tmPersist();renderTimer();renderAcc()}
function tmAdd(){const l=tmLeft()+60;TM.total+=60;if(TM.run)TM.endAt=Date.now()+l*1000;else TM.left=l;tmPersist();tmTick()}
function renderTimer(){
  const x=habitById(TM.id);if(!x){closeTimer();return}
  let h='';
  if(TM.ph==='run'){
    const l=tmLeft();
    h='<div class="fnav"><button class="ibtn glass" onclick="minimizeTimer()" aria-label="Minimizar">'+ic('minimize',22,2.2)+'</button><p class="hl">'+esc(x.n)+'</p><button class="ibtn glass" onclick="confirmSheet(\'Dejar el temporizador\',\'No se marcará el hábito.\',\'Dejarlo\',\'closeSheet();closeTimer()\',true)" aria-label="Cerrar">'+ic('x',18,2.4)+'</button></div>'+
      '<div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:22px;padding:10px 0">'+
      '<div class="tring"><svg width="250" height="250" viewBox="0 0 250 250"><circle cx="125" cy="125" r="112" fill="none" stroke="var(--fill2)" stroke-width="12"/><circle id="tmR" cx="125" cy="125" r="112" fill="none" stroke="var(--tint)" stroke-width="12" stroke-linecap="round" stroke-dasharray="'+TM_C.toFixed(1)+'" stroke-dashoffset="'+(TM_C*(1-l/TM.total)).toFixed(1)+'"/></svg>'+
        '<div class="in"><span class="big num" id="tmT" style="font-size:64px;line-height:70px">'+mmss(Math.ceil(l))+'</span><span class="fn l2">'+(TM.run?'de '+Math.round(TM.total/60)+' min':'En pausa')+'</span></div></div>'+
      '<div style="display:flex;justify-content:center">'+dkStage(TM.run?POSE_AREA[x.a]||'stand':'stand',1.8)+'</div></div>'+
      '<div class="row" style="justify-content:center;gap:22px;padding-bottom:10px"><button class="step" onclick="tmAdd()" aria-label="Un minuto más"><span class="fn semi">+1</span></button>'+
        '<button class="step" style="width:78px;height:78px;background:var(--tint);color:var(--on-tint)" onclick="tmToggle()" aria-label="'+(TM.run?'Pausar':'Seguir')+'">'+ic(TM.run?'pause':'play',30)+'</button>'+
        '<button class="step" onclick="finishTimer(false)" aria-label="Terminar ya">'+ic('check',24,2.6)+'</button></div>';
  }else{
    const mins=Math.max(1,Math.round((TM.total-TM.left)/60));
    h='<div class="fnav"><div style="width:44px"></div><div></div><div style="width:44px"></div></div>'+
      '<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">'+dkStage('cheer',2.6)+
      '<h1 class="t1" style="margin-top:22px">¡Hecho!</h1><p class="sb l2" style="margin-top:4px">'+esc(x.n)+' · '+plural(mins,'minuto')+(streakOf(x).cur>=2?' · '+streakOf(x).cur+' días seguidos':'')+'</p>'+
      '<textarea class="ta" style="margin-top:22px" maxlength="600" placeholder="Una nota, si quieres: cómo ha ido, qué has notado…" oninput="TM.note=this.value">'+esc(TM.note)+'</textarea></div>'+
      '<div class="foot"><button class="btn pri" onclick="closeTimer(true)">Guardar</button></div>';
  }
  $('timer').innerHTML='<div class="fullin">'+h+'</div>';
}
function finishTimer(auto){
  if(TM.ph!=='run')return;
  TM.left=tmLeft();TM.run=false;TM.ph='done';clearInterval(TM.iv);
  if(auto)buzz();
  if(!doneOn(TM.id,TM.d)){setDone(TM.id,TM.d,true);save()}
  tmPersist();
  if(TM.min){TM.min=false;$('timer').classList.add('on')}
  renderTimer();renderAcc();render();
}
function closeTimer(saveNote){
  if(saveNote&&clean(TM.note))setNote(TM.id,TM.d,TM.note);
  clearInterval(TM.iv);TM.on=false;TM.min=false;TM.ph='run';$('timer').classList.remove('on');keepAwake(false);PREF.set('tmr',null);closeSheet();render();
}
function minimizeTimer(){TM.min=true;$('timer').classList.remove('on');keepAwake(false);render()}
function expandTimer(){if(!TM.on)return;TM.min=false;$('timer').classList.add('on');renderTimer();renderAcc();keepAwake(true)}
function renderAcc(){
  const a=$('acc');if(!a)return;
  const show=TM.on&&TM.min&&TM.ph==='run';a.hidden=!show;
  document.querySelectorAll('.view').forEach(v=>v.classList.toggle('with-acc',show));
  if(!show)return;const x=habitById(TM.id);if(!x)return;
  a.innerHTML=hico(x,40).replace('class="hico"','class="hico" style="margin:0;background:var(--tint);color:var(--on-tint);width:40px;height:40px;border-radius:50%"')+
    '<div class="grow"><p class="hl ell">'+esc(x.n)+'</p><p class="fn l2 num"><span id="accT">'+mmss(Math.ceil(tmLeft()))+'</span>'+(TM.run?'':' · en pausa')+'</p></div>'+
    '<span class="mini" role="button" aria-label="'+(TM.run?'Pausar':'Seguir')+'" onclick="event.stopPropagation();tmToggle()">'+ic(TM.run?'pause':'play',18)+'</span>';
}

/* ═════ PROGRESO ═════ */
function weekPcts(nw){const thisW=mondayOf(T()),out=[];for(let i=nw-1;i>=0;i--){const w=shiftD(thisW,-7*i);out.push({w,p:weekRate(w)})}return out}
function pctChart(V){
  const W=330,H=124,left=6,right=40,top=10,bot=22,cw=(W-left-right)/V.length,Y=v=>top+(H-top-bot)*(1-v);let g='';
  [[.75,'75 %'],[1,'100 %']].forEach(([t,l])=>{g+='<line x1="'+left+'" x2="'+(W-right+6)+'" y1="'+Y(t)+'" y2="'+Y(t)+'" stroke="var(--sep)" stroke-dasharray="3 3"/><text x="'+(W-2)+'" y="'+(Y(t)+4)+'" text-anchor="end" font-size="10.5" fill="var(--label3)">'+l+'</text>'});
  V.forEach((v,i)=>{const x=left+i*cw+4,w=cw-8,p=v.p||0,h=Math.max(v.p!=null?3:0,(H-top-bot)*p),y=H-bot-h,isCur=i===V.length-1,ok=p>=WEEK_OK;
    g+='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="5" fill="'+(isCur?'var(--tint-soft)':(ok?'var(--tint)':'var(--fill)'))+'"'+(isCur?' stroke="var(--ink)" stroke-width="1.5"':'')+'/>';
    const d=new Date(v.w+'T00:00:00');g+='<text x="'+(x+w/2)+'" y="'+(H-6)+'" text-anchor="middle" font-size="10" fill="'+(isCur?'var(--ink)':'var(--label3)')+'" font-weight="'+(isCur?600:400)+'">'+(isCur?'Esta':d.getDate()+' '+MES3[d.getMonth()])+'</text>'});
  return '<svg viewBox="0 0 '+W+' '+H+'" width="100%" role="img" aria-label="Porcentaje de hábitos hechos por semana">'+g+'</svg>';
}
function moodChart(L){
  const W=330,H=110,l=18,r=8,t=8,b=8,n=L.length,X=i=>l+i*(W-l-r)/Math.max(1,n-1),Y=v=>t+(5-v)/4*(H-t-b);
  let g='';[1,3,5].forEach(v=>{g+='<line x1="'+l+'" x2="'+(W-r)+'" y1="'+Y(v)+'" y2="'+Y(v)+'" stroke="var(--sep)" stroke-dasharray="3 3"/><text x="2" y="'+(Y(v)+4)+'" font-size="10" fill="var(--label3)">'+v+'</text>'});
  const P=L.map((m,i)=>m.v?[X(i),Y(m.v),m.k]:null).filter(Boolean);
  if(P.length>1)g+='<path d="'+P.map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)).join('')+'" fill="none" stroke="var(--ink)" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>';
  g+=P.map(p=>'<circle cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="3.4" fill="'+(p[2]==='full'?'var(--ink)':'var(--bg2)')+'" stroke="var(--ink)" stroke-width="1.6"/>').join('');
  return '<svg viewBox="0 0 '+W+' '+H+'" width="100%" role="img" aria-label="Tu ánimo en los últimos 30 días">'+g+'</svg>';
}
function heatmap(weeks){
  const today=T(),start=shiftD(mondayOf(today),-7*(weeks-1));let h='';
  for(let i=0;i<weeks*7;i++){const d=shiftD(start,i);if(d>today){h+='<i class="fut"></i>';continue}
    const s=dayStat(d),c=s.pct==null?'':(s.pct>=FULL?'l3':(s.pct>=.5?'l2':(s.pct>0?'l1':'')));
    h+='<i class="'+c+(d===today?' now':'')+'" title="'+fmtDY(d)+'"></i>'}
  return '<div class="heat" style="grid-template-columns:repeat('+weeks+',minmax(0,1fr))" role="img" aria-label="Calendario de las últimas '+weeks+' semanas">'+h+'</div>';
}
function renderProg(){
  const C=constancy(),goal=C.next?C.next[2]:C.belt[2],from=C.belt[2],cells=C.next?(goal-from):1,V=weekPcts(8),prev=V[V.length-2].p;
  const A=activeHabits();
  let h='<div class="head"><div><h1 class="lt">Progreso</h1><p class="sb l2 sub">Tu constancia, poco a poco</p></div></div><div class="pad stack" style="padding-top:16px">';
  h+='<button class="card" style="padding:16px 18px 16px 16px;display:block;width:100%;text-align:left" onclick="openBeltSheet()"><div class="row" style="gap:14px">'+
    '<div class="avatar" style="width:58px;height:58px;background:var(--fill2)"><span class="deshi" data-pose="stand" data-crop="head" data-box="58" data-still></span></div>'+
    '<div class="grow"><p class="fn l2">Constancia</p><p class="t2">Cinturón '+C.belt[1].toLowerCase()+'</p><p class="fn l2">'+plural(C.n,'semana')+' constante'+(C.n===1?'':'s')+(C.streak>1?' · '+C.streak+' seguidas':'')+'</p></div></div>'+
    (C.next?'<div class="beltbar">'+Array.from({length:Math.min(cells,30)},(_,i)=>'<i class="'+(i<C.n-from?'on':'')+'"></i>').join('')+'</div>'+
      '<div class="row" style="justify-content:space-between;margin-top:7px"><span class="c1 l2">Faltan '+plural(goal-C.n,'semana')+' para el '+C.next[1].toLowerCase()+'</span><span class="c1 l3 num">'+C.n+'/'+goal+'</span></div>'
      :'<p class="fn l2" style="margin-top:10px">Has llegado al cinturón negro.</p>')+'</button>';
  h+='<div class="card" style="padding:16px 16px 14px"><p class="fn l2">Esta semana</p><div class="row" style="margin-top:2px;gap:8px"><span class="t2 num">'+pctTxt(C.week)+'</span>'+
    (C.week!=null&&prev!=null&&Math.abs(C.week-prev)>=.05?'<span class="pill '+(C.week>prev?'tint':'amb')+'">'+(C.week>prev?'Mejor':'Peor')+' que la anterior</span>':'')+'</div>'+
    '<p class="fn l2">De los hábitos que tocaban hasta hoy · constante desde el 75 %</p><div class="chart">'+pctChart(V)+'</div></div>';
  const wk=isPlus()?53:FREE_WEEKS,since=shiftD(mondayOf(T()),-7*(wk-1));let full=0,tot=0;
  for(let d=since;d<=T();d=shiftD(d,1)){const k=dayKind(d);if(k==='rest')continue;tot++;if(k==='full')full++}
  h+='<div class="card" style="padding:16px 16px 14px"><div class="row" style="justify-content:space-between"><p class="fn l2">'+(isPlus()?'Último año':'Últimas '+wk+' semanas')+'</p>'+(isPlus()?'':'<button class="pill plus" onclick="openPlus()">Año entero</button>')+'</div>'+
    '<p class="t2 num" style="margin-top:2px">'+plural(full,'día')+' cumplido'+(full===1?'':'s')+'</p><p class="fn l2">De '+tot+' con hábitos · cumplido es hacer el 80 % o más</p><div style="margin-top:14px">'+heatmap(wk)+'</div>'+
    '<div class="row" style="justify-content:flex-end;gap:6px;margin-top:10px"><span class="c1 l3">Menos</span><span class="hleg"><i style="background:var(--fill2)"></i><i style="background:var(--tint-soft)"></i><i style="background:color-mix(in srgb,var(--tint) 60%,var(--fill2))"></i><i style="background:var(--tint)"></i></span><span class="c1 l3">Más</span></div></div>';
  h+=habitMapCard();
  if(DB.profile.moodOn!==false){
    const L=Array.from({length:30},(_,i)=>{const d=shiftD(T(),i-29);return{v:moodOn(d),k:dayKind(d)}}),vals=L.map(m=>m.v).filter(Boolean),I=moodInsight(60);
    h+='<div class="card" style="padding:16px 16px 14px"><p class="fn l2">Ánimo</p><div class="row" style="margin-top:2px;gap:8px"><span class="t2 num">'+fmt1(avg(vals.slice(-14)))+'<span class="sb l3 semi"> de 5</span></span></div>'+
      '<p class="fn l2">'+(vals.length?'Media de los últimos días que lo apuntaste':'Apunta cómo ha ido tu día desde Hoy')+'</p>'+
      (vals.length>=2?'<div class="chart">'+moodChart(L)+'</div><div class="row" style="gap:14px;margin-top:6px"><span class="c1 l2 row" style="gap:6px"><i style="width:9px;height:9px;border-radius:50%;background:var(--ink);display:block"></i>Día cumplido</span><span class="c1 l2 row" style="gap:6px"><i style="width:9px;height:9px;border-radius:50%;box-shadow:inset 0 0 0 1.6px var(--ink);display:block"></i>Resto</span></div>':'')+
      (I?'<div class="note" style="margin-top:12px;background:var(--tint-soft)"><span>'+(I.hi-I.lo>=.3?'Los días que cumples, tu ánimo es de <b class="ink">'+fmt1(I.hi)+'</b>; el resto, de '+fmt1(I.lo)+'. Tus hábitos te sientan bien.':(I.lo-I.hi>=.3?'Los días que cumples tu ánimo es algo más bajo ('+fmt1(I.hi)+' frente a '+fmt1(I.lo)+'). ¿Quizá te estás exigiendo demasiado?':'Tu ánimo es parecido cumplas o no ('+fmt1(I.hi)+' y '+fmt1(I.lo)+').'))+'</span></div>':'')+'</div>';
  }
  h+='</div>';
  if(A.length){
    const ar=AREA_ORDER.filter(k=>A.some(x=>x.a===k));
    h+='<div class="sec"><div class="stitle"><h3 class="t3">Áreas</h3><span class="fn l2">Últimos 30 días</span></div><div class="pad"><div class="group">'+ar.map(k=>{
      const L=A.filter(x=>x.a===k),rs=L.map(x=>rateOf(x,30)).filter(r=>r!=null),r=avg(rs);
      return '<div class="cell static"><span class="ic soft">'+ic(AREAS[k].ic,17)+'</span><div class="cb"><div class="tt"><div class="row" style="justify-content:space-between"><p class="bd">'+AREAS[k].n+'</p><span class="fn l2 num">'+pctTxt(r)+'</span></div><div class="areabar"><i style="width:'+((r||0)*100).toFixed(0)+'%"></i></div></div></div></div>'}).join('')+'</div></div></div>';
    h+='<div class="sec"><div class="stitle"><h3 class="t3">Hábitos</h3><span class="fn l2">Racha · 30 días</span></div><div class="pad"><div class="group">'+A.slice().sort((a,b)=>(rateOf(b,30)||0)-(rateOf(a,30)||0)).map(x=>{const S=streakOf(x);
      return '<button class="cell" onclick="openHabit(\''+x.id+'\')">'+hico(x)+'<div class="cb"><div class="tt"><p class="bd ell">'+esc(x.n)+'</p><p class="fn l2">'+(S.cur?plural(S.cur,'día')+' seguido'+(S.cur===1?'':'s'):'Sin racha')+(S.best>S.cur?' · mejor '+S.best:'')+'</p></div><span class="val num">'+pctTxt(rateOf(x,30))+'</span>'+chev()+'</div></button>'}).join('')+'</div></div></div>';
  }
  h+='<div class="sec"><div class="stitle" style="justify-content:flex-start;gap:8px"><h3 class="t3">Más detalle</h3>'+(isPlus()?'':'<span class="pill plus">Plus</span>')+'</div><div class="pad"><div class="group">'+
    '<button class="cell" onclick="openYear()"><span class="ic soft">'+ic('cal',18)+'</span><div class="cb"><div class="tt"><p class="bd">Resumen del año</p><p class="fn l2">Mes a mes, tus mejores hábitos y tu ánimo</p></div>'+chev()+'</div></button>'+
    '<button class="cell" onclick="openNotes()"><span class="ic soft">'+ic('pen',18)+'</span><div class="cb"><div class="tt"><p class="bd">Notas</p>'+(isPlus()?'':'<p class="fn l2">Últimos 30 días; todas con Plus</p>')+'</div>'+chev()+'</div></button>'+
    '</div></div></div>';
  $('v-progreso').innerHTML=h;
}
/* mapa de hábitos: cada hábito en un mes, como el heatmap de NEXA */
let HMY=new Date().getFullYear();
function monthRate(x,y,m){
  let s=0,k=0;const dim=new Date(y,m+1,0).getDate(),today=T();
  for(let i=1;i<=dim;i++){const d=dstr(new Date(y,m,i));if(d>today)break;if(schedOn(x,d)){s++;if(doneOn(x.id,d))k++}}
  return s?k/s:null;
}
const hmLevel=r=>r==null?'':(r>.8?'h5':(r>.6?'h4':(r>.4?'h3':(r>.2?'h2':(r>0?'h1':'h0')))));
function habitMapCard(){
  const A=activeHabits().slice().sort((a,b)=>AREA_ORDER.indexOf(a.a)-AREA_ORDER.indexOf(b.a)||byTime(a,b));if(!A.length)return'';
  const years=[...new Set(Object.keys(DB.log).map(d=>+d.slice(0,4)).concat([new Date().getFullYear()]))].sort();
  if(!years.includes(HMY))HMY=years[years.length-1];
  const y=HMY,nowY=new Date().getFullYear(),nowM=new Date().getMonth(),M3=['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  let fix='<div class="hm-c"></div>',grid='';
  grid+=A.map(x=>'<button class="hm-h" onclick="openHabit(\''+x.id+'\')" aria-label="'+esc(x.n)+'" title="'+esc(x.n)+'">'+ic(x.ic,16)+'</button>').join('');
  for(let m=0;m<12;m++){
    const fut=y>nowY||(y===nowY&&m>nowM);
    fix+='<div class="hm-m'+(y===nowY&&m===nowM?' now':'')+'">'+M3[m]+'</div>';
    A.forEach(x=>{
      if(fut){grid+='<i class="hm-x fut"></i>';return}
      const r=monthRate(x,y,m),p=r==null?null:Math.round(r*100);
      grid+='<button class="hm-x '+hmLevel(r)+'" onclick="toast(\''+esc(x.n).replace(/'/g,'')+' · '+MESES[m]+': '+(p==null?'sin datos':p+' %')+'\')" aria-label="'+esc(x.n)+', '+MESES[m]+': '+(p==null?'sin datos':p+' %')+'">'+(p?p:'')+'</button>';
    });
  }
  return '<div class="card" style="padding:16px 14px 14px"><div class="row" style="justify-content:space-between;padding:0 2px"><div><p class="fn l2">Mapa de hábitos</p><p class="t2">'+y+'</p></div>'+
    (years.length>1?'<div class="row" style="gap:4px"><button class="ibtn" style="width:36px;height:36px;background:var(--fill2)'+(y===years[0]?';opacity:.35':'')+'" onclick="HMY='+(y-1)+';render()" aria-label="Año anterior"'+(y===years[0]?' disabled':'')+'>'+ic('chevL',16,2.4)+'</button><button class="ibtn" style="width:36px;height:36px;background:var(--fill2)'+(y===years[years.length-1]?';opacity:.35':'')+'" onclick="HMY='+(y+1)+';render()" aria-label="Año siguiente"'+(y===years[years.length-1]?' disabled':'')+'>'+ic('chevR',16,2.4)+'</button></div>':'')+'</div>'+
    '<p class="fn l2" style="padding:2px 2px 12px">Cada casilla, un hábito en un mes: el % de los días que tocaba y lo hiciste</p>'+
    '<div class="hm"><div class="hm-fix">'+fix+'</div><div class="hm-sc"><div class="hm-g" style="grid-template-columns:repeat('+A.length+',minmax(36px,1fr))">'+grid+'</div></div></div>'+
    '<div class="row" style="justify-content:flex-end;gap:6px;margin-top:12px"><span class="c1 l3">0 %</span><span class="hleg">'+['h1','h2','h3','h4','h5'].map(c=>'<i class="hm-x '+c+'" style="width:14px;height:10px;border-radius:3px;min-height:0"></i>').join('')+'</span><span class="c1 l3">100 %</span></div></div>';
}
function openBeltSheet(){
  const C=constancy();
  openSheet(()=>({title:'Cinturón',body:'<div style="display:flex;justify-content:center;padding:6px 0 4px">'+dkStage('rei',2.4)+'</div><div class="pad">'+
    '<p class="sb l2 center" style="padding:6px 10px 16px">Una semana es constante si haces al menos <b>el 75 %</b> de los hábitos que te tocaban. Deshi cambia de cinturón con las semanas constantes, no con los días perfectos.</p>'+
    '<div class="group">'+BELT_STEPS.map(b=>'<div class="cell static"><span class="ic" style="background:'+Deshi.BELTS[b[0]]+';box-shadow:inset 0 0 0 .5px var(--sep)"></span><div class="cb"><span class="tt bd'+(b[0]===C.belt[0]?' semi':'')+'">'+b[1]+'</span><span class="val num">'+(b[2]?plural(b[2],'semana'):'Al empezar')+'</span>'+(C.n>=b[2]?ic('check',17,2.6):'')+'</div></div>').join('')+'</div></div>'}));
}
function openYear(){
  if(!isPlus())return openPlus('year');
  const y=new Date().getFullYear(),mons=[];
  for(let m=0;m<12;m++){let s=0,k=0,full=0,days=0;const mv=[];const dim=new Date(y,m+1,0).getDate();
    for(let i=1;i<=dim;i++){const d=dstr(new Date(y,m,i));if(d>T())break;const st=dayStat(d);s+=st.sch;k+=st.done;if(st.pct!=null){days++;if(st.pct>=FULL)full++}const mo=moodOn(d);if(mo)mv.push(mo)}
    mons.push({m,p:s?k/s:null,full,days,mood:avg(mv)})}
  const checks=Object.keys(DB.log).filter(d=>d.startsWith(y+'-')).reduce((a,d)=>a+Object.keys(DB.log[d]).length,0);
  const best=activeHabits().map(x=>({x,r:rateOf(x,365)})).filter(o=>o.r!=null).sort((a,b)=>b.r-a.r).slice(0,3);
  const fullY=mons.reduce((a,b)=>a+b.full,0);
  openSheet(()=>({title:'Resumen de '+y,body:'<div class="pad stack">'+
    '<div class="chips3">'+[[checks,'Hechos'],[fullY,'Días cumplidos'],[constancy().n,'Semanas constantes']].map(([a,b])=>'<div style="flex:1;background:var(--sheet2)"><p class="t2 num">'+a+'</p><p class="c1 l2">'+b+'</p></div>').join('')+'</div>'+
    '<div class="group">'+mons.filter(o=>o.p!=null).map(o=>'<div class="cell static"><div class="cb" style="padding-left:2px"><div class="tt"><div class="row" style="justify-content:space-between"><p class="bd">'+cap1(MESES[o.m])+'</p><span class="fn l2 num">'+pctTxt(o.p)+(o.mood?' · ánimo '+fmt1(o.mood):'')+'</span></div><div class="areabar"><i style="width:'+(o.p*100).toFixed(0)+'%"></i></div></div></div></div>').join('')+'</div>'+
    (best.length?'<p class="ghead" style="padding:8px 16px 0">Tus más constantes</p><div class="group">'+best.map(o=>'<div class="cell static">'+hico(o.x)+'<div class="cb"><span class="tt bd ell">'+esc(o.x.n)+'</span><span class="val num">'+pctTxt(o.r)+'</span></div></div>').join('')+'</div>':'')+
    '</div>'}));
}
function openNotes(){
  const lim=isPlus()?null:shiftD(T(),-30),L=[];
  Object.keys(DB.notes).forEach(d=>{if(lim&&d<lim)return;Object.keys(DB.notes[d]).forEach(id=>{const x=habitById(id);L.push({d,t:DB.notes[d][id],w:x?x.n:'Hábito borrado',x})})});
  Object.keys(DB.mood).forEach(d=>{if(lim&&d<lim)return;if(DB.mood[d].t)L.push({d,t:DB.mood[d].t,w:'Tu día · '+MOODS[DB.mood[d].v-1].toLowerCase()})});
  L.sort((a,b)=>b.d.localeCompare(a.d));
  openSheet(()=>({title:'Notas',body:'<div class="pad">'+(L.length?'<div class="group">'+L.slice(0,300).map(n=>'<div class="cell static">'+(n.x?hico(n.x):'<span class="hico">'+ic('smile',19)+'</span>')+'<div class="cb"><div class="tt"><p class="fn l2">'+esc(n.w)+' · '+fmtDY(n.d)+'</p><p class="sb" style="white-space:pre-wrap">'+esc(n.t)+'</p></div></div></div>').join('')+'</div>':'<div class="empty">Aún no hay notas. Puedes escribirlas al marcar un hábito o al apuntar tu día.</div>')+
    (isPlus()?'':'<button class="btn sec" style="margin-top:14px" onclick="openPlus()">Ver todas con Plus</button>')+'</div>'}));
}

/* ═════ METAS ═════ */
const activeGoals=()=>(DB.goals||[]).filter(g=>!g.done);
const goalById=id=>(DB.goals||[]).find(g=>g.id===id)||null;
function renderMetas(){
  const v=$('v-metas'),g=GV&&goalById(GV);
  if(g)return renderGoal(v,g);
  GV=null;const A=activeGoals(),Z=(DB.goals||[]).filter(x=>x.done);
  let h='<div class="head"><div><h1 class="lt">Metas</h1><p class="sb l2 sub">Tu hoja de ruta, etapa a etapa</p></div></div><div class="pad stack" style="padding-top:16px">';
  if(!A.length)h+='<div class="card" style="padding:20px;text-align:center"><div style="display:flex;justify-content:center">'+dkStage('walk',2)+'</div><h2 class="t2" style="margin-top:14px">Algo grande, por etapas</h2>'+
    '<p class="sb l2 balance" style="margin-top:4px">Escribe por qué te importa, pártelo en etapas con tareas concretas y une los hábitos que te acercan.</p><button class="btn pri" style="margin-top:16px" onclick="openGoalEdit()">Crear una meta</button></div>';
  A.forEach(x=>{const P=goalProgress(x),nh=(x.hab||[]).filter(id=>habitById(id)&&habitById(id).on!==false).length;
    h+='<button class="card" style="padding:16px 18px;display:block;width:100%;text-align:left" onclick="GV=\''+x.id+'\';window.scrollTo(0,0);render()">'+
      '<div class="row" style="justify-content:space-between;gap:10px"><p class="t3 grow" style="min-width:0">'+esc(x.t)+'</p>'+(x.hz?'<span class="pill gray">'+esc(x.hz)+'</span>':'')+'</div>'+
      '<p class="fn l2" style="margin-top:4px">'+(P.now?'En curso: '+esc(P.now.t):(P.st?plural(P.stDone,'etapa')+' de '+P.st+' hecha'+(P.stDone===1?'':'s'):'Sin etapas'))+'</p>'+
      '<div class="qbar"><i style="width:'+(P.pct*100).toFixed(0)+'%"></i></div>'+
      '<div class="row" style="justify-content:space-between;margin-top:8px"><span class="c1 l2">'+(P.tk?P.ok+' de '+P.tk+' tareas':plural(P.st,'etapa'))+(nh?' · '+plural(nh,'hábito'):'')+'</span><span class="c1 l3 num">'+Math.round(P.pct*100)+' %</span></div></button>';
  });
  if(A.length)h+='<button class="btn sec" onclick="openGoalEdit()">'+ic('plus',18,2.4)+'Nueva meta</button>';
  if(Z.length)h+='<div><p class="ghead" style="padding:10px 16px 7px">Logradas</p><div class="group">'+Z.map(x=>'<button class="cell" onclick="GV=\''+x.id+'\';render()"><span class="ic tint">'+ic('check',17,2.6)+'</span><div class="cb"><span class="tt bd ell">'+esc(x.t)+'</span>'+chev()+'</div></button>').join('')+'</div></div>';
  h+='</div>';v.innerHTML=h;
}
function renderGoal(v,g){
  const P=goalProgress(g),H=(g.hab||[]).map(habitById).filter(x=>x&&x.on!==false);
  let h='<div class="pad" style="padding-top:0"><button class="row link" style="gap:2px;height:36px;margin-left:-6px" onclick="GV=null;render()">'+ic('chevL',20,2.4)+'Metas</button></div>'+
    '<div class="head"><div class="grow"><h1 class="t1 balance">'+esc(g.t)+'</h1><p class="sb l2 sub">'+(g.done?'Lograda':(g.hz?esc(g.hz):'Sin fecha'))+' · '+Math.round(P.pct*100)+' %</p></div>'+
    '<button class="ibtn glass" style="margin-bottom:2px" onclick="openGoalMenu(\''+g.id+'\')" aria-label="Opciones de la meta">'+ic('more',22)+'</button></div>'+
    '<div class="pad stack" style="padding-top:14px">'+(g.why?'<div class="why">'+esc(g.why)+'</div>':'<button class="card row" style="padding:14px 16px;width:100%;text-align:left;gap:12px" onclick="openGoalEdit(\''+g.id+'\')"><span class="ic soft" style="width:34px;height:34px;border-radius:10px;display:grid;place-items:center">'+ic('heart',18)+'</span><div class="grow"><p class="hl">¿Por qué te importa?</p><p class="fn l2">Escríbelo: es lo que te sostiene en los días flojos</p></div>'+chev()+'</button>')+
    '<div class="qbar" style="margin-top:2px"><i style="width:'+(P.pct*100).toFixed(0)+'%"></i></div></div>';
  h+='<div class="sec"><div class="stitle"><h3 class="t3">Etapas</h3><span class="fn l2">'+(P.st?P.stDone+' de '+P.st:'')+'</span></div><div class="pad"><div>';
  (g.st||[]).forEach((s,i)=>{const ok=(s.tk||[]).filter(t=>t.ok).length;
    h+='<div class="stg '+s.s+'" style="padding-bottom:14px"><span class="sn">'+(s.s==='done'?ic('check',14,3):i+1)+'</span><div class="card" style="padding:14px 16px 10px">'+
      '<button class="row" style="width:100%;text-align:left;gap:8px;align-items:flex-start" onclick="openStage(\''+g.id+'\',\''+s.id+'\')"><div class="grow" style="min-width:0"><p class="hl">'+esc(s.t)+'</p>'+(s.per?'<p class="fn l2">'+esc(s.per)+'</p>':'')+'</div>'+
        '<span class="pill '+(s.s==='now'?'tint':(s.s==='done'?'gray':'amb'))+'">'+ST_N[s.s]+'</span></button>'+
      (s.obj?'<p class="sb l2" style="margin-top:8px">'+esc(s.obj)+'</p>':'')+
      ((s.tk||[]).length?'<div style="margin:8px -6px 0">'+(s.tk||[]).map(t=>'<button class="row" style="width:100%;text-align:left;gap:0;padding:7px 6px;align-items:flex-start" onclick="toggleTask(\''+g.id+'\',\''+s.id+'\',\''+t.id+'\')" aria-pressed="'+t.ok+'"><span class="goalbox'+(t.ok?' ok':'')+'" style="width:22px;height:22px;margin:0 11px 0 0;align-self:flex-start">'+(t.ok?ic('check',12,3.2):'')+'</span><span class="sb grow'+(t.ok?' l2 strike':'')+'">'+esc(t.t)+'</span>'+(t.tag?'<span class="c1 l2" style="margin-left:8px;white-space:nowrap">'+esc(t.tag)+'</span>':'')+'</button>').join('')+'</div>':'')+
      '<div class="row" style="justify-content:space-between;margin-top:4px"><button class="fn link" style="height:34px" onclick="openStage(\''+g.id+'\',\''+s.id+'\',1)">'+((s.tk||[]).length?'Añadir tarea':'Añadir tareas')+'</button>'+((s.tk||[]).length?'<span class="c1 l3 num">'+ok+'/'+s.tk.length+'</span>':'')+'</div>'+
      '</div></div>';
  });
  h+='</div><button class="btn sec" onclick="addStage(\''+g.id+'\')">'+ic('plus',18,2.4)+'Añadir etapa</button></div></div>';
  h+='<div class="sec"><div class="stitle"><h3 class="t3">Hábitos que te acercan</h3></div><div class="pad"><div class="group">'+
    H.map(x=>habitRow(x,T())).join('')+
    '<button class="cell" onclick="openGoalHabits(\''+g.id+'\')"><span class="ic soft">'+ic(H.length?'pen':'plus',17,2.4)+'</span><div class="cb"><div class="tt"><p class="bd ink">'+(H.length?'Cambiar hábitos':'Unir hábitos')+'</p>'+(H.length?'':'<p class="fn l2">Lo que haces cada día es lo que te lleva hasta aquí</p>')+'</div></div></button></div></div></div>';
  v.innerHTML=h;
}
function toggleTask(gid,sid,tid){
  const g=goalById(gid),s=g&&g.st.find(x=>x.id===sid),t=s&&s.tk.find(x=>x.id===tid);if(!t)return;
  t.ok=!t.ok;
  if(t.ok&&s.tk.every(x=>x.ok)&&s.s!=='done'){toast('Etapa completa: márcala como hecha cuando quieras')}
  save();render();
}
function openGoalMenu(id){
  const g=goalById(id);if(!g)return;
  openSheet(()=>({title:esc(g.t),body:'<div class="pad"><div class="group">'+
    '<button class="cell" onclick="openGoalEdit(\''+id+'\',true)"><span class="ic gray">'+ic('pen',17)+'</span><div class="cb"><span class="tt bd">Editar meta</span>'+chev()+'</div></button>'+
    '<button class="cell" onclick="openGoalHabits(\''+id+'\',true)"><span class="ic gray">'+ic('list',17)+'</span><div class="cb"><span class="tt bd">Hábitos unidos</span>'+chev()+'</div></button>'+
    '<button class="cell" onclick="goalDone(\''+id+'\')"><span class="ic soft">'+ic(g.done?'up':'check',17,2.4)+'</span><div class="cb"><span class="tt bd">'+(g.done?'Volver a abrirla':'Marcar como lograda')+'</span></div></button>'+
    '<button class="cell" onclick="confirmSheet(\'Borrar meta\',\'Se borrarán sus etapas y tareas. Tus hábitos se quedan.\',\'Borrar\',\'delGoal(\\\''+id+'\\\')\',true)"><span class="ic red">'+ic('trash',17)+'</span><div class="cb"><span class="tt bd red">Borrar meta</span></div></button>'+
    '</div></div>'}));
}
function goalDone(id){
  const g=goalById(id);if(!g)return;
  if(g.done&&activeGoals().length>=FREE_GOALS&&!isPlus())return openPlus('goals');
  g.done=!g.done;if(g.done)(g.st||[]).forEach(s=>s.s='done');save();closeSheet();render();if(g.done)toast('¡Meta lograda!');
}
function delGoal(id){DB.goals=DB.goals.filter(g=>g.id!==id);GV=null;save();closeSheet();render();toast('Meta borrada')}
let GE=null;
function openGoalEdit(id,push){
  const g=id?goalById(id):null;
  if(!g&&activeGoals().length>=FREE_GOALS&&!isPlus())return openPlus('goals');
  GE=g?{id:g.id,t:g.t,why:g.why,hz:g.hz}:{id:null,t:'',why:'',hz:''};
  openSheet(()=>({title:GE.id?'Editar meta':'Nueva meta',ok:1,onOk:'saveGoalEdit()',body:'<div class="pad stack">'+
    '<div class="field"><label for="geT">Qué quieres conseguir</label><input id="geT" maxlength="80" value="'+esc(GE.t)+'" placeholder="Abrir mi propio dojo, correr 10 km…" oninput="GE.t=this.value"></div>'+
    '<div class="field"><label for="geW">Por qué te importa</label><textarea class="ta" id="geW" maxlength="600" placeholder="Lo que te gustaría leer un día que no tengas ganas" oninput="GE.why=this.value">'+esc(GE.why)+'</textarea></div>'+
    '<div class="field"><label for="geH">Horizonte (opcional)</label><input id="geH" maxlength="60" value="'+esc(GE.hz)+'" placeholder="En 2 años, verano de 2027…" oninput="GE.hz=this.value"></div>'+
    (GE.id?'':'<p class="fn l2" style="padding:0 6px">Después la partes en etapas. Empezamos con una, en curso.</p>')+'</div>'}),push);
}
function saveGoalEdit(){
  const t=clean(GE.t,80);if(!t)return toast('Escribe qué quieres conseguir');
  if(GE.id){const g=goalById(GE.id);Object.assign(g,{t,why:clean(GE.why,600),hz:clean(GE.hz,60)});save();closeSheet();render();return}
  const g={id:uid(),t,why:clean(GE.why,600),hz:clean(GE.hz,60),hab:[],done:false,st:[{id:uid(),t:'Primera etapa',per:'',obj:'',s:'now',tk:[]}]};
  DB.goals.push(g);GV=g.id;save();closeSheet();if(cur!=='metas')go('metas');else render();
  setTimeout(()=>openStage(g.id,g.st[0].id),260);
}
function openGoalHabits(id,push){
  openSheet(()=>{const g=goalById(id),A=activeHabits().sort(byTime);if(!g)return{title:'',body:''};
    return{title:'Hábitos que te acercan',body:'<div class="pad">'+(A.length?'<p class="sb l2 center" style="padding:0 10px 14px">Elige los hábitos que trabajan para esta meta. Los verás en ella con su racha.</p><div class="group">'+A.map(x=>{const on=(g.hab||[]).includes(x.id);
      return '<button class="cell" onclick="toggleGoalHab(\''+id+'\',\''+x.id+'\')">'+hico(x)+'<div class="cb"><span class="tt bd ell">'+esc(x.n)+'</span><span class="sw'+(on?' on':'')+'" role="switch" aria-checked="'+on+'"></span></div></button>'}).join('')+'</div>'
      :'<div class="empty">Aún no tienes hábitos.</div><button class="btn pri" onclick="openManager(true)">Añadir hábitos</button>')+'</div>'}},push);
}
function toggleGoalHab(gid,hid){const g=goalById(gid);g.hab=g.hab||[];const i=g.hab.indexOf(hid);if(i>=0)g.hab.splice(i,1);else g.hab.push(hid);save();drawSheet();render()}
function addStage(gid){const g=goalById(gid);const s={id:uid(),t:'Etapa '+(g.st.length+1),per:'',obj:'',s:g.st.some(x=>x.s==='now')?'next':'now',tk:[]};g.st.push(s);save();render();openStage(gid,s.id)}
let SE=null;
function openStage(gid,sid,focusTask){
  const g=goalById(gid),s=g&&g.st.find(x=>x.id===sid);if(!s)return;
  SE={gid,sid,t:s.t,per:s.per,obj:s.obj,s:s.s,tk:JSON.parse(JSON.stringify(s.tk||[])),nt:''};
  openSheet(()=>({title:'Etapa',ok:1,onOk:'saveStage()',body:'<div class="pad stack">'+
    '<div class="field"><label for="seT">Nombre</label><input id="seT" maxlength="80" value="'+esc(SE.t)+'" oninput="SE.t=this.value"></div>'+
    '<div class="field"><label for="seP">Cuándo (opcional)</label><input id="seP" maxlength="60" value="'+esc(SE.per)+'" placeholder="Este mes, de enero a marzo…" oninput="SE.per=this.value"></div>'+
    '<div class="field"><label for="seO">Objetivo de la etapa</label><textarea class="ta" id="seO" maxlength="600" placeholder="Qué tiene que pasar para darla por hecha" oninput="SE.obj=this.value">'+esc(SE.obj)+'</textarea></div>'+
    '<div><p class="ghead" style="padding-left:16px">Estado</p><div class="segc">'+['done','now','next'].map(k=>'<button class="'+(SE.s===k?'on':'')+'" onclick="SE.s=\''+k+'\';drawSheet()">'+ST_N[k]+'</button>').join('')+'</div></div>'+
    '<div><p class="ghead" style="padding-left:16px">Tareas</p><div class="group">'+SE.tk.map((t,i)=>'<div class="cell static" style="padding-left:12px"><div class="cb" style="gap:6px"><input class="grow" style="border:0;background:none;outline:none;font-size:16px;min-width:0'+(t.ok?';color:var(--label2);text-decoration:line-through':'')+'" value="'+esc(t.t)+'" maxlength="160" oninput="SE.tk['+i+'].t=this.value" aria-label="Tarea"><input style="border:0;background:var(--fill2);border-radius:9px;outline:none;font-size:13px;width:84px;height:28px;padding:0 8px" value="'+esc(t.tag)+'" maxlength="24" placeholder="Etiqueta" oninput="SE.tk['+i+'].tag=this.value" aria-label="Etiqueta"><button class="ibtn" style="width:32px;height:32px;color:var(--label3)" onclick="SE.tk.splice('+i+',1);drawSheet()" aria-label="Quitar tarea">'+ic('x',15,2.4)+'</button></div></div>').join('')+
      '<div class="cell static" style="padding-left:12px"><div class="cb" style="gap:6px"><input id="seNT" class="grow" style="border:0;background:none;outline:none;font-size:16px;min-width:0" placeholder="Nueva tarea" maxlength="160" value="'+esc(SE.nt)+'" oninput="SE.nt=this.value" onkeydown="if(event.key===\'Enter\'){event.preventDefault();seAdd()}"><button class="btn pri sm" onclick="seAdd()">Añadir</button></div></div></div>'+
      '<p class="gfoot" style="padding-left:16px">La etiqueta es opcional: «Esta semana», «Clave», «Diario»…</p></div>'+
    '<button class="btn sec danger" onclick="delStage()">Borrar etapa</button></div>'}),true);
  if(focusTask)setTimeout(()=>{const e=$('seNT');if(e)e.focus()},350);
}
function seAdd(){const t=clean(SE.nt,160);if(!t)return;SE.tk.push({id:uid(),t,ok:false,tag:''});SE.nt='';drawSheet();setTimeout(()=>{const e=$('seNT');if(e)e.focus()},30)}
function saveStage(){
  const g=goalById(SE.gid),s=g&&g.st.find(x=>x.id===SE.sid);if(!s)return closeSheet();
  if(clean(SE.nt))seAdd();
  const idx=g.st.indexOf(s);
  Object.assign(s,{t:clean(SE.t,80)||'Etapa',per:clean(SE.per,60),obj:clean(SE.obj,600),s:SE.s,tk:SE.tk.map(t=>({id:t.id,t:clean(t.t,160),ok:!!t.ok,tag:clean(t.tag,24)})).filter(t=>t.t)});
  if(s.s==='now')g.st.forEach((o,i)=>{if(o!==s&&o.s==='now')o.s=i<idx?'done':'next'});
  save();closeSheet();render();
}
function delStage(){const g=goalById(SE.gid);g.st=g.st.filter(x=>x.id!==SE.sid);save();closeSheet();render()}

/* ═════ HOJAS ═════ */
const SHS=[];
function openSheet(fn,push,replace){
  if(replace&&SHS.length)SHS[SHS.length-1]=fn;else if(push&&$('sheet').classList.contains('on'))SHS.push(fn);else{SHS.length=0;SHS.push(fn)}
  drawSheet();
}
function drawSheet(){
  const fn=SHS[SHS.length-1];if(!fn)return closeSheet();
  const o=fn(),sh=$('sheet'),sc=sh.querySelector('.sbody')?.scrollTop||0,same=sh.dataset.k===String(SHS.length)+fn.name;
  const act=document.activeElement,aid=act&&act.id&&sh.contains(act)?act.id:null;
  sh.innerHTML='<div class="grabber"></div><div class="shead">'+(SHS.length>1?'<button class="ibtn l x-btn" onclick="backSheet()" aria-label="Atrás">'+ic('chevL',18,2.4)+'</button>':'')+
    '<p class="hl ell">'+(o.title||'')+'</p><button class="ibtn r '+(o.ok?'ok-btn':'x-btn')+'" onclick="'+(o.onOk||'closeSheet()')+'" aria-label="'+(o.ok?'Guardar':'Cerrar')+'">'+ic(o.ok?'check':'x',o.ok?18:16,o.ok?2.8:2.4)+'</button></div>'+
    '<div class="sbody">'+o.body+'</div>';
  sh.dataset.k=String(SHS.length)+fn.name;
  if(same)sh.querySelector('.sbody').scrollTop=sc;
  if(aid&&same){const e=$(aid);if(e&&e.tagName!=='BUTTON'){e.focus();try{const n=e.value.length;e.setSelectionRange(n,n)}catch(x){}}}
  sh.classList.add('on');$('scrim').classList.add('on');
}
function backSheet(){SHS.pop();SHS.length?drawSheet():closeSheet()}
function closeSheet(){$('sheet').classList.remove('on');$('scrim').classList.remove('on');SHS.length=0;delete $('sheet').dataset.k;if(document.activeElement)document.activeElement.blur()}
function confirmSheet(title,text,btn,fn,danger){
  openSheet(()=>({title,body:'<div class="pad">'+(text?'<p class="sb center" style="padding:0 12px">'+text+'</p>':'')+'<div class="stack" style="margin-top:18px"><button class="btn '+(danger?'sec danger':'pri')+'" onclick="'+fn.replace(/"/g,'&quot;')+'">'+btn+'</button><button class="btn sec" onclick="backSheet()">Cancelar</button></div></div>'}),true);
}

/* ═════ TÚ ═════ */
function openMe(){openSheet(meSheet)}
function meSheet(){
  const p=DB.profile||{},C=constancy(),th=PREF.get('theme','auto'),ar=goalsAreas();
  const row=(lbl,val,fn)=>'<button class="cell" onclick="'+fn+'"><div class="cb" style="padding-left:2px"><span class="tt bd">'+lbl+'</span><span class="val">'+val+'</span>'+chev()+'</div></button>';
  return{title:'Tú',ok:1,body:
    '<div class="row" style="align-items:flex-end;gap:16px;padding:4px 24px 0">'+dkStage('stand',2)+'<div class="grow" style="padding-bottom:8px">'+
      '<input class="t2" style="border:0;background:none;width:100%;outline:none;padding:0" value="'+esc(p.name||'')+'" placeholder="Tu nombre" maxlength="30" onchange="setProfile(\'name\',this.value.trim().slice(0,30))" aria-label="Tu nombre">'+
      '<p class="fn l2">En este móvil · sin cuenta</p><span class="pill" style="margin-top:8px;background:var(--amber-soft);color:var(--amber)">Cinturón '+C.belt[1].toLowerCase()+'</span></div></div>'+
    '<div class="pad" style="margin-top:22px"><p class="ghead" style="padding-left:16px">Tu día</p><div class="group">'+
      row('Mis hábitos',activeHabits().length,'openManager(true)')+row('Lo que quieres cuidar',ar.length?(ar.length>1?ar.length+' áreas':AREAS[ar[0]].n):'—','openAreas()')+
      '<button class="cell" onclick="setProfile(\'moodOn\',DB.profile.moodOn===false);openSheet(meSheet,true,true)"><div class="cb" style="padding-left:2px"><div class="tt"><p class="bd">Apuntar el ánimo</p><p class="fn l2">Al final del día, de 1 a 5</p></div><span class="sw'+(p.moodOn!==false?' on':'')+'" role="switch" aria-checked="'+(p.moodOn!==false)+'"></span></div></button></div>'+
      '<p class="gfoot" style="padding-left:16px">Los recordatorios llegarán con la app de iPhone.</p></div>'+
    '<div class="pad" style="margin-top:22px"><p class="ghead" style="padding-left:16px">Deshi</p><div class="group">'+row('Aspecto','Piel, pelo y gi','openLook()')+row('Cinturón','Por constancia','openBeltSheet()')+'</div></div>'+
    '<div class="pad" style="margin-top:22px"><button class="group" style="display:block;width:100%" onclick="openPlus()"><div class="cell" style="min-height:64px"><span class="ic tint" style="width:34px;height:34px;border-radius:10px">'+ic('starF',18)+'</span>'+
      '<div class="cb"><div class="tt"><p class="hl">'+(isPlus()?'Kotsu Plus activo':'Prueba Kotsu Plus')+'</p><p class="fn l2">'+(isPlus()?'Simulado en esta versión de pruebas':'7 días gratis · hábitos y metas sin límite')+'</p></div>'+chev()+'</div></div></button></div>'+
    '<div class="pad" style="margin-top:22px"><p class="ghead" style="padding-left:16px">Apariencia</p><div class="segc" role="group" aria-label="Apariencia">'+
      [['auto','Automática'],['light','Clara'],['dark','Oscura']].map(([k,l])=>'<button class="'+(th===k?'on':'')+'" onclick="setTheme(\''+k+'\')">'+l+'</button>').join('')+'</div></div>'+
    '<div class="pad" style="margin-top:22px"><p class="ghead" style="padding-left:16px">Tus datos</p><div class="group">'+
      '<button class="cell" onclick="exportData()"><span class="ic gray">'+ic('down',17)+'</span><div class="cb"><div class="tt"><p class="bd">Descargar mis datos</p><p class="fn l2">Copia completa, para guardarla o cambiar de móvil</p></div></div></button>'+
      '<button class="cell" onclick="openImport(true)"><span class="ic gray">'+ic('up',17)+'</span><div class="cb"><div class="tt"><p class="bd">Importar una copia</p><p class="fn l2">De Kotsu, de NEXA o una hoja de ruta</p></div>'+chev()+'</div></button>'+
      '<button class="cell" onclick="openPrivacy()"><span class="ic gray">'+ic('shield',17)+'</span><div class="cb"><span class="tt bd">Privacidad</span>'+chev()+'</div></button>'+
      '<button class="cell" onclick="confirmSheet(\'Borrar datos\',\'Se borrarán tus hábitos, tu historial, tus notas y tus metas de este móvil. <b>No se puede deshacer.</b>\',\'Borrar\',\'doWipe()\',true)"><span class="ic red">'+ic('trash',17)+'</span><div class="cb"><span class="tt bd red">Borrar los datos de este móvil</span></div></button>'+
    '</div><p class="gfoot center" style="padding:16px 0 0">Kotsu '+CFG.version+' · de la familia de Tsuyo y Neiro</p></div>'};
}
function setProfile(k,v){DB.profile=Object.assign({},DB.profile,{[k]:v});save();render()}
function openAreas(){
  openSheet(()=>{const a=goalsAreas();return{title:'Lo que quieres cuidar',body:'<div class="pad stack"><p class="sb l2 center" style="padding:0 10px">Hasta tres. Kotsu te propone ideas de hábitos de estas áreas.</p>'+
    AREA_ORDER.filter(k=>k!=='otros').map(k=>optBtn(AREAS[k],a.includes(k),"toggleArea('"+k+"')",AREAS[k].ic)).join('')+'</div>'}},true);
}
function toggleArea(k){const a=goalsAreas().slice(),i=a.indexOf(k);if(i>=0)a.splice(i,1);else{if(a.length>=3)return toast('Hasta tres áreas');a.push(k)}setProfile('areas',a);drawSheet()}
function openLook(){
  openSheet(()=>{const L=Deshi.getLook(),chip=(on,js,color,lbl)=>'<button class="ibtn" style="width:46px;height:46px;background:'+color+';box-shadow:inset 0 0 0 '+(on?'3px var(--ink)':'.5px var(--sep)')+'" onclick="'+js+'" aria-label="'+lbl+'" aria-pressed="'+on+'"></button>';
    const grp=(t,arr,key)=>'<p class="ghead" style="padding-left:16px;margin-top:16px">'+t+'</p><div class="card row" style="padding:12px 14px;flex-wrap:wrap">'+arr.map(([n,c],i)=>chip(L[key]===i,"setLook('"+key+"',"+i+")",c,t+' '+n)).join('')+'</div>';
    return{title:'Aspecto de Deshi',body:'<div style="display:flex;justify-content:center;padding:8px 0 10px">'+dkStage('stand',2.6)+'</div><div class="pad">'+grp('Piel',Deshi.SKINS,'skin')+grp('Pelo',Deshi.HAIRS,'hair')+grp('Gi',Deshi.GIS,'gi')+'</div>'}},true);
}
function setLook(k,i){const L=Object.assign({},DB.profile.deshi||{});L[k]=i;DB.profile=Object.assign({},DB.profile,{deshi:Deshi.cleanLook(L)});save();applyLook();drawSheet();render()}
function openPrivacy(){
  openSheet(()=>({title:'Privacidad',body:'<div class="prose fn" style="font-size:15px;line-height:21px">'+
    '<h4>Responsable</h4><p>'+esc(CFG.owner)+' · '+esc(CFG.ownerEmail)+'</p>'+
    '<h4>Qué se guarda</h4><p>Tu nombre (si lo pones), tus hábitos, los días que los marcas, tus notas, tu ánimo y tus metas.</p>'+
    '<h4>Dónde</h4><p>Esta versión de pruebas lo guarda todo solo en este móvil. No se envía a ningún servidor.</p>'+
    '<h4>Tu ánimo y tus notas</h4><p>Pueden decir mucho de ti. Por eso no salen del móvil salvo que descargues una copia.</p>'+
    '<h4>Tus derechos</h4><p>Puedes descargar tus datos y borrarlos desde Tú. Para cualquier otra petición escribe a '+esc(CFG.ownerEmail)+'. También puedes reclamar ante la AEPD (aepd.es).</p></div>'}),$('sheet').classList.contains('on'));
}
function doWipe(){DB=freshDB();S.del(KEY);PREF.set('tmr',null);GV=null;VD=T();closeSheet();started=false;toast('Datos borrados');showWelcome()}

/* ═════ COPIAS ═════ */
function download(obj,name){
  try{const b=new Blob([JSON.stringify(obj)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),4000)}
  catch(e){toast('No se pudo descargar')}
}
function exportData(){download({app:'kotsu',v:1,exported:new Date().toISOString(),data:DB},'kotsu-'+T()+'.json')}
let IMP=null;
function openImport(push){
  openSheet(()=>({title:'Importar una copia',body:'<div class="pad stack">'+
    '<p class="sb l2" style="padding:0 6px">Elige una copia de Kotsu, una copia de NEXA (Datos → Exportar) o un archivo de hoja de ruta para Metas.</p>'+
    '<label class="btn pri" for="impFile">'+ic('down',18)+'Elegir archivo</label><input id="impFile" type="file" accept=".json,application/json" hidden onchange="impFile(this)">'+
    '<p class="msg" id="impMsg"></p></div>'}),push);
}
function impFile(inp){
  const f=inp.files&&inp.files[0];inp.value='';if(!f)return;
  const r=new FileReader();r.onload=()=>impCheck(String(r.result||''));r.onerror=()=>{const m=$('impMsg');if(m)m.textContent='No se pudo leer el archivo.'};r.readAsText(f);
}
/* NEXA → Kotsu. En NEXA los días van de lunes (0) a domingo (6) y los check-ins son «idHábito_AAAA_MM_DD». */
const NX_AREA={'Mente':'mente','Cuerpo':'cuerpo','Crecimiento':'aprender','Descanso':'descanso','Canto':'arte','Artes Marciales':'dojo','Otros':'otros'};
const NX_EMO={'🌅':'sun','🧘':'lotus','💪':'dumbbell','🎓':'cap','🎯':'target','📚':'book','📖':'book','📡':'chat','🎵':'note','🎶':'note','🥋':'belt','⚔️':'sword','🗡️':'sword','🏐':'walk','⚽':'walk','🏃':'walk','🌙':'moon','😴':'bed','💧':'drop','✍️':'pen','📝':'pen','❤️':'heart','🌱':'leaf','☕':'coffee','💰':'money','🏠':'home','📵':'phone','🧠':'lotus','⭐':'star'};
function fromNexa(d){
  const ids={},habits=[],log={},notes={},moods={};
  (d.habits||[]).forEach(h=>{
    if(!h||!h.id||!h.name)return;const id=safeId(h.id);ids[h.id]=id;
    const days=h.freq==='daily'||!Array.isArray(h.days)?ALLDAYS.slice():[...new Set(h.days.map(Number).filter(n=>n>=0&&n<=6).map(n=>(n+1)%7))];
    const a=NX_AREA[h.cat]||'otros';
    habits.push(cleanHabit({id,n:h.name,ic:NX_EMO[h.emoji]||AREAS[a].ic,a,days:days.length?days:ALLDAYS.slice(),at:h.ts||'',mode:h.mode==='timer'?'timer':'check',min:h.dur||10,on:true,app:guessApp(h.name,a)}));
    if(isObj(h.notes))Object.keys(h.notes).forEach(k=>{const m=/^(\d{4})_(\d{2})_(\d{2})$/.exec(k),n=h.notes[k];if(!m||!isObj(n))return;const dd=m[1]+'-'+m[2]+'-'+m[3];
      if(n.text){notes[dd]=notes[dd]||{};notes[dd][id]=clean(n.text,600)}
      if(+n.mood>=1&&+n.mood<=10)(moods[dd]=moods[dd]||[]).push(+n.mood)});
  });
  const byId=Object.fromEntries((d.habits||[]).filter(h=>h&&h.id).map(h=>[h.id,h]));
  Object.keys(d.checks||{}).forEach(k=>{if(d.checks[k]!==true)return;const m=/^(.+)_(\d{4})_(\d{2})_(\d{2})$/.exec(k);if(!m||!ids[m[1]])return;
    const dd=m[2]+'-'+m[3]+'-'+m[4],h=byId[m[1]],t=h&&isObj(h.ca)?h.ca[m[2]+'_'+m[3]+'_'+m[4]]:null;(log[dd]=log[dd]||{})[ids[m[1]]]=isTime(t)?t:1});
  const mood={};Object.keys(moods).forEach(dd=>{mood[dd]={v:Math.max(1,Math.min(5,Math.round(avg(moods[dd])/2))),t:''}});
  return{habits:habits.filter(Boolean),log,notes,mood};
}
function impCheck(txt){
  const msg=m=>{const e=$('impMsg');if(e)e.textContent=m};
  let o;try{o=JSON.parse(String(txt).trim())}catch(e){return msg('Ese archivo no es una copia válida.')}
  if(!isObj(o))return msg('Ese archivo no es una copia válida.');
  let kind=null,P=null;
  if(o.app==='kotsu'&&isObj(o.data)){kind='kotsu';P=mergeDefaults(o.data)}
  else if(o.app==='kotsu-metas'&&Array.isArray(o.goals)){kind='metas';P=mergeDefaults({goals:o.goals})}
  else{const d=isObj(o.data)?o.data:o;if((o.app==='nexa-habits'||!o.app)&&Array.isArray(d.habits)&&isObj(d.checks)){kind='nexa';P=fromNexa(d)}}
  if(!kind)return msg('No es una copia de Kotsu ni de NEXA.');
  IMP={kind,P};
  const cnt=(n,l)=>n?'<div class="cell static"><div class="cb" style="padding-left:2px"><span class="tt bd">'+l+'</span><span class="val num">'+n+'</span></div></div>':'';
  const nLog=x=>Object.keys(x.log||{}).reduce((a,d)=>a+Object.keys(x.log[d]).length,0),nNotes=x=>Object.keys(x.notes||{}).reduce((a,d)=>a+Object.keys(x.notes[d]).length,0);
  const T_={kotsu:'Copia de Kotsu',nexa:'Copia de NEXA',metas:'Hoja de ruta'}[kind];
  openSheet(()=>({title:'Revisar copia',body:'<div class="pad stack">'+
    '<div class="card row" style="padding:14px 16px;gap:12px;background:var(--sheet2)"><span class="ic soft" style="width:38px;height:38px;border-radius:11px;display:grid;place-items:center">'+ic(kind==='metas'?'mountain':'up',20)+'</span><div class="grow"><p class="hl">'+T_+'</p><p class="fn l2">'+(o.exported||o.exportedAt?'Del '+fmtDY(String(o.exported||o.exportedAt).slice(0,10)):'')+'</p></div></div>'+
    '<div class="group">'+cnt((P.habits||[]).length,'Hábitos')+cnt(nLog(P),'Hechos')+cnt(nNotes(P),'Notas')+cnt(Object.keys(P.mood||{}).length,'Días con ánimo')+cnt((P.goals||[]).length,'Metas')+'</div>'+
    (kind==='nexa'?'<p class="fn l2" style="padding:0 6px">Se traen tus hábitos con sus días y horas, todo lo que marcaste y tus notas. El ánimo de NEXA (de 1 a 10 por hábito) pasa a ánimo del día, de 1 a 5. Se sustituyen tus hábitos de Kotsu; tus metas se quedan.</p>':'')+
    (kind==='kotsu'?'<p class="fn l2" style="padding:0 6px">Se sustituyen los datos de Kotsu de este móvil.</p>':'')+
    (kind==='metas'?'<p class="fn l2" style="padding:0 6px">Las metas se añaden a las que ya tienes.</p>':'')+
    (kind!=='metas'&&!isPlus()&&(P.habits||[]).filter(x=>x.on!==false).length>FREE_HABITS?'<div class="note"><span>Traes más de '+FREE_HABITS+' hábitos: se importan todos, pero para añadir más necesitarás Plus.</span></div>':'')+
    '<button class="btn pri" onclick="impApply()">Importar</button><button class="btn sec" onclick="backSheet()">Cancelar</button></div>'}),true);
}
function impApply(){
  const o=IMP;if(!o)return;const P=o.P;
  if(o.kind==='kotsu'){const keepP=DB.profile;DB=P;if(!DB.profile.done&&keepP.done)DB.profile=keepP}
  else if(o.kind==='metas'){DB.goals=(DB.goals||[]).concat(P.goals.map(g=>Object.assign(g,{id:uid()})))}
  else{
    Object.assign(DB,{habits:P.habits,log:P.log,notes:P.notes,mood:P.mood,via:{}});
    const first=Object.keys(P.log).sort()[0];if(first&&(!DB.cfg.start||first<DB.cfg.start))DB.cfg.start=first;
    if(!DB.profile.done){const c={};P.habits.forEach(x=>{if(x.a!=='otros')c[x.a]=(c[x.a]||0)+1});
      DB.profile=Object.assign({},DB.profile,{areas:Object.keys(c).sort((a,b)=>c[b]-c[a]).slice(0,3),moodOn:true,done:1})}
  }
  save();closeSheet();toast(o.kind==='metas'?'Hoja de ruta importada':'Copia importada');
  if(!started){S.set(KEY+'_mode','local');if(DB.profile.done||DB.habits.length){DB.profile.done=1;if(!DB.cfg.start)DB.cfg.start=T();save();startApp()}else{started=true;openOnb()}}
  else{if(o.kind==='metas')go('metas');else render()}
}

/* ═════ PLUS ═════ */
let PLUSP='y';
function openPlus(why){
  const lead={habits:'Gratis puedes tener '+FREE_HABITS+' hábitos activos.',goals:'Gratis puedes tener una meta en marcha.',year:'El resumen del año es de Plus.'}[why];
  openSheet(()=>({title:'',body:'<div style="display:flex;flex-direction:column;align-items:center;padding:0 20px">'+dkStage('cheer',2)+
    '<div class="row" style="gap:8px;margin-top:14px"><span class="brand" style="font-size:22px">Kotsu</span><span class="pill plus">PLUS</span></div><h2 class="t1 center" style="margin-top:6px">Sin límites</h2>'+
    (lead?'<p class="sb l2 center" style="margin-top:4px">'+lead+'</p>':'')+'</div>'+
    '<div class="stack" style="padding:18px 28px 0;gap:14px">'+[['list','Hábitos sin límite','Todos los que quieras, también los de días sueltos.'],['mountain','Metas sin límite','Varias hojas de ruta a la vez, cada una con sus etapas.'],['cal','Tu año entero','Calendario completo y resumen mes a mes con tu ánimo.'],['pen','Todas tus notas','Sin límite de fechas, y copias en iCloud con la app de iPhone.']].map(([i,t,s])=>
      '<div class="row" style="gap:13px;align-items:flex-start"><span class="ic soft" style="width:32px;height:32px;border-radius:9px;display:grid;place-items:center">'+ic(i,17)+'</span><div><p class="hl">'+t+'</p><p class="fn l2">'+s+'</p></div></div>').join('')+'</div>'+
    (isPlus()?'<div class="pad stack" style="margin-top:22px"><div class="note"><span>Plus está activo en modo de pruebas. No se ha cobrado nada.</span></div><button class="btn sec danger" onclick="PREF.set(\'plus\',false);closeSheet();render();toast(\'Plus desactivado\')">Desactivar Plus</button></div>'
    :'<div class="pad stack" style="margin-top:22px;gap:8px">'+
      [['y','Anual','19,99 € al año','1,67 € al mes','7 días gratis'],['m','Mensual','2,99 € al mes','','']].map(([k,t,p,s,b])=>'<button class="card row" style="padding:12px 14px 12px 16px;text-align:left;width:100%;background:var(--sheet2)'+(PLUSP===k?';box-shadow:inset 0 0 0 2px var(--ink);background:var(--tint-soft)':'')+'" onclick="PLUSP=\''+k+'\';drawSheet()">'+
        '<span style="width:24px;height:24px;border-radius:50%;display:grid;place-items:center;'+(PLUSP===k?'background:var(--ink);color:var(--bg)':'box-shadow:inset 0 0 0 1.5px var(--fill)')+'">'+(PLUSP===k?ic('check',13,3.2):'')+'</span>'+
        '<span class="grow"><span class="hl" style="display:block">'+t+'</span><span class="fn num"><span class="semi">'+p+'</span><span class="c1 l3">'+(s?' · '+s:'')+'</span></span></span>'+(b?'<span class="pill plus">'+b+'</span>':'')+'</button>').join('')+
      '<button class="btn pri" style="margin-top:6px" onclick="PREF.set(\'plus\',true);closeSheet();render();toast(\'Plus activado (simulado, sin cobro)\')">'+(PLUSP==='y'?'Empezar la prueba gratis':'Suscribirme')+'</button>'+
      '<p class="c1 l2 center balance">'+(PLUSP==='y'?'7 días gratis; después, 19,99 € al año.':'2,99 € al mes.')+' Se renueva salvo que canceles al menos 24 h antes.</p>'+
      '<p class="c1 l2 center">Versión de pruebas: no se cobra nada.</p></div>')}),$('sheet').classList.contains('on'));
}

/* ═════ BIENVENIDA Y CONFIGURACIÓN ═════ */
let started=false;
function showWelcome(){
  $('tabbar').hidden=true;$('btnMe').hidden=true;$('btnTheme').hidden=true;$('acc').hidden=true;
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('on'));
  $('welcome').innerHTML='<div class="fullin" style="justify-content:space-between">'+
    '<div style="display:flex;flex-direction:column;align-items:center;padding-top:8vh">'+dkStage('rei',3.6)+
    '<div class="brand" style="font-size:22px;margin-top:30px;color:var(--label2)">Kotsu</div>'+
    '<h1 class="t1 center balance" style="margin-top:12px;max-width:330px">Poco a poco, cada día</h1>'+
    '<p class="sb l2 center balance" style="margin-top:10px;max-width:316px">En japonés, <i>kotsu-kotsu</i> es avanzar sin prisa y sin parar. Tus hábitos, tu ánimo y tus metas, en un sitio.</p></div>'+
    '<div class="foot"><button class="btn pri" onclick="startLocal()">Empezar</button><button class="btn tx" onclick="openImport()">Tengo una copia de NEXA</button>'+
    '<p class="c1 l2 center">Versión de pruebas: tus datos se guardan en este móvil.</p>'+
    '<p class="c1 l3 center balance" style="margin-top:4px">Al continuar aceptas la <button class="semi l2" onclick="openPrivacy()">política de privacidad</button>.</p></div></div>';
  $('welcome').classList.add('on');
}
function startLocal(){S.set(KEY+'_mode','local');startApp()}
const optBtn=(o,on,js,icn)=>'<button class="opt'+(on?' on':'')+'" onclick="'+js+'" aria-pressed="'+on+'">'+(icn?'<span class="gi">'+ic(icn,22)+'</span>':'')+
  '<span class="grow"><span class="hl" style="display:block">'+esc(o.n)+'</span>'+(o.s?'<span class="fn l2" style="display:block">'+esc(o.s)+'</span>':'')+'</span><span class="ck">'+(on?ic('check',14,3):'')+'</span></button>';
let ONB=null;
const ONB_ST=['areas','habits','mood','ready'];
function openOnb(){
  const p=DB.profile;
  ONB={i:0,areas:goalsAreas().slice(),pick:[],own:[],nt:'',mood:p.moodOn!==false};
  renderOnb();$('welcome').classList.remove('on');$('onb').classList.add('on');
}
const onbSugg=()=>SUGG.filter(s=>ONB.areas.includes(s.a));
const onbTotal=()=>ONB.pick.length+ONB.own.length;
function onbGo(dir){
  const st=ONB_ST[ONB.i];
  if(dir>0&&st==='areas'){if(!ONB.areas.length)return toast('Elige al menos un área');
    if(!ONB.pick.length){ONB.pick=[];ONB.areas.forEach(a=>{const s=SUGG.find(x=>x.a===a&&!ONB.pick.includes(x.n));if(s)ONB.pick.push(s.n)})}
    ONB.pick=ONB.pick.filter(n=>onbSugg().some(s=>s.n===n))}
  if(dir>0&&st==='habits'){if(clean(ONB.nt))onbOwn();if(!onbTotal())return toast('Elige al menos un hábito')}
  if(dir>0&&st==='ready')return finishOnb();
  if(dir<0&&ONB.i===0){$('onb').classList.remove('on');if(!DB.profile.done){started=false;S.del(KEY+'_mode');showWelcome()}return}
  ONB.i+=dir;renderOnb();$('onb').scrollTop=0;
}
function onbArea(k){const i=ONB.areas.indexOf(k);if(i>=0)ONB.areas.splice(i,1);else{if(ONB.areas.length>=3)return toast('Hasta tres áreas');ONB.areas.push(k)}renderOnb()}
function onbPick(n){const i=ONB.pick.indexOf(n);if(i>=0)ONB.pick.splice(i,1);else{if(onbTotal()>=FREE_HABITS&&!isPlus())return toast('Para empezar, hasta '+FREE_HABITS);ONB.pick.push(n)}renderOnb()}
function onbOwn(){const n=clean(ONB.nt,60);if(!n)return;if(onbTotal()>=FREE_HABITS&&!isPlus())return toast('Para empezar, hasta '+FREE_HABITS);ONB.own.push(n);ONB.nt='';renderOnb()}
function onbHabits(){
  return ONB.pick.map(n=>{const s=SUGG.find(x=>x.n===n);return{n:s.n,ic:s.ic,a:s.a,mode:s.mode||'check',min:s.min||10,at:s.at||'',days:(s.days||ALLDAYS).slice(),app:guessApp(s.n,s.a)}})
    .concat(ONB.own.map(n=>({n,ic:'star',a:ONB.areas[0]||'otros',mode:'check',min:10,at:'',days:ALLDAYS.slice()})));
}
function renderOnb(){
  const st=ONB_ST[ONB.i];let h='';
  const head='<div class="fnav"><button class="ibtn glass" onclick="onbGo(-1)" aria-label="Atrás">'+ic('chevL',22,2.2)+'</button><div class="dots" style="width:130px" aria-label="Paso '+(ONB.i+1)+' de 4">'+ONB_ST.map((_,i)=>'<i class="'+(i<=ONB.i?'on':'')+'"></i>').join('')+'</div><div style="width:44px"></div></div>';
  if(st==='areas')h='<h1 class="lt balance" style="margin-top:24px">¿Qué quieres cuidar?</h1><p class="sb l2" style="margin-top:8px">Elige hasta tres. Te proponemos hábitos pequeños para cada una.</p><div class="stack" style="margin-top:24px;gap:10px">'+
    AREA_ORDER.filter(k=>k!=='otros').map(k=>optBtn(AREAS[k],ONB.areas.includes(k),"onbArea('"+k+"')",AREAS[k].ic)).join('')+'</div>';
  if(st==='habits'){
    h='<h1 class="lt balance" style="margin-top:24px">Empieza con pocos</h1><p class="sb l2" style="margin-top:8px">Mejor tres que hagas casi siempre que diez que abandones. Días y horas se cambian luego.</p>';
    ONB.areas.forEach(a=>{const L=SUGG.filter(s=>s.a===a);
      h+='<p class="ghead" style="padding:22px 16px 8px">'+AREAS[a].n+'</p><div class="stack" style="gap:8px">'+L.map(s=>optBtn({n:s.n,s:[s.mode==='timer'?s.min+' min':'',s.days?freqTxt(s.days):'Cada día',s.at||''].filter(Boolean).join(' · ')},ONB.pick.includes(s.n),"onbPick('"+s.n.replace(/'/g,'')+"')",s.ic)).join('')+'</div>'});
    h+='<p class="ghead" style="padding:22px 16px 8px">Los tuyos</p><div class="stack" style="gap:8px">'+ONB.own.map((n,i)=>optBtn({n,s:'Cada día'},true,"ONB.own.splice("+i+",1);renderOnb()",'star')).join('')+
      '<div class="row"><div class="field grow"><input id="onbN" maxlength="60" placeholder="Otro hábito" value="'+esc(ONB.nt)+'" oninput="ONB.nt=this.value" onkeydown="if(event.key===\'Enter\'){event.preventDefault();onbOwn()}" aria-label="Otro hábito"></div><button class="btn sec" style="width:54px;height:50px;border-radius:14px" onclick="onbOwn()" aria-label="Añadir">'+ic('plus',20,2.4)+'</button></div></div>'+
      '<p class="fn l2 center" style="margin-top:14px">'+onbTotal()+(isPlus()?'':' de '+FREE_HABITS)+' elegidos</p>';
  }
  if(st==='mood')h='<h1 class="lt balance" style="margin-top:24px">¿Apuntas cómo te sientes?</h1><p class="sb l2" style="margin-top:8px">Un toque al final del día, de 1 a 5. Con el tiempo verás si tus hábitos te sientan bien.</p><div class="stack" style="margin-top:24px;gap:10px">'+
    optBtn({n:'Sí, cada día',s:'Aparece en Hoy a partir de las seis de la tarde'},ONB.mood,"ONB.mood=true;renderOnb()",'smile')+optBtn({n:'Ahora no',s:'Puedes activarlo cuando quieras en Tú'},!ONB.mood,"ONB.mood=false;renderOnb()",'x')+'</div>';
  if(st==='ready'){const L=onbHabits().sort(byTime);
    h='<div class="row" style="align-items:flex-end;margin-top:16px"><div class="grow" style="padding-bottom:6px"><h1 class="lt balance">Tu día está listo</h1><p class="sb l2 balance" style="margin-top:8px">'+plural(L.length,'hábito')+'. Marca cada uno al hacerlo; los de tiempo tienen su temporizador.</p></div>'+dkStage('walk',2)+'</div>'+
      MOMENTS.map(([k,n])=>{const M=L.filter(x=>momentOf(x.at)===k);return M.length?'<p class="ghead" style="padding:18px 16px 7px">'+n+'</p><div class="group">'+M.map(x=>'<div class="cell static">'+hico(x)+'<div class="cb"><div class="tt"><p class="bd ell">'+esc(x.n)+'</p><p class="fn l2">'+[x.at,x.mode==='timer'?x.min+' min':'',freqTxt(x.days)].filter(Boolean).join(' · ')+'</p></div></div></div>').join('')+'</div>':''}).join('')+
      '<p class="fn l2" style="padding:14px 16px 0">Cuando quieras, crea una meta en Metas y une estos hábitos a ella.</p>';
  }
  $('onb').innerHTML='<div class="fullin">'+head+h+'<div class="foot"><button class="btn pri" onclick="onbGo(1)">'+(st==='ready'?'Empezar':'Continuar')+'</button></div></div>';
}
function finishOnb(){
  DB.profile=Object.assign({},DB.profile,{areas:ONB.areas.slice(),moodOn:ONB.mood,done:1});
  if(!DB.habits.length)DB.habits=onbHabits().map(x=>cleanHabit(Object.assign(x,{id:uid(),on:true,since:T()})));
  if(!DB.cfg.start)DB.cfg.start=T();
  save();$('onb').classList.remove('on');showApp();go('hoy');
}

/* ═════ ARRANQUE ═════ */
function showApp(){$('welcome').classList.remove('on');$('tabbar').hidden=false;$('btnMe').hidden=false;$('btnTheme').hidden=false;applyTheme()}
function startApp(){
  started=true;load();applyLook();
  if(!(DB.profile&&DB.profile.done)){openOnb();return}
  showApp();VD=T();syncSisters();go('hoy');
  const t=PREF.get('tmr',null);
  if(t&&t.d===T()&&habitById(t.id)){
    Object.assign(TM,{on:true,min:true,id:t.id,d:t.d,total:t.total,left:t.left,endAt:t.endAt,run:t.run,ph:'run',note:''});
    tmLoop();render();
  }else PREF.set('tmr',null);
}
function boot(){
  applyTheme();
  if('serviceWorker' in navigator&&(location.protocol==='https:'||location.hostname==='localhost'))navigator.serviceWorker.register('sw.js').catch(()=>{});
  document.addEventListener('visibilitychange',()=>{
    if(!started||document.visibilityState!=='visible')return;
    if(TM.on){if(!TM.min)keepAwake(true);tmTick()}
    if(syncSisters()||T()!==curDate)render();
  });
  if(S.get(KEY+'_mode')==='local')startApp();else showWelcome();
}
boot();
