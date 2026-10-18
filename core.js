/* Kotsu · lógica de la app: fechas, hábitos, rachas, constancia, ánimo y metas.
   No toca la interfaz. Está escrita para pasarse casi 1:1 a Swift en la app de iOS. */
'use strict';

/* ═════ FECHAS ═════ */
const WDL=['D','L','M','X','J','V','S'];
const MES3=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
const dstr=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const T=()=>dstr(new Date());
const shiftD=(s,n)=>{const d=new Date(s+'T00:00:00');d.setDate(d.getDate()+n);return dstr(d)};
const wdOf=s=>new Date(s+'T00:00:00').getDay();
const daysBetween=(a,b)=>Math.round((new Date(b+'T00:00:00')-new Date(a+'T00:00:00'))/864e5);
const mondayOf=d=>{const x=new Date(d+'T00:00:00');x.setDate(x.getDate()-((x.getDay()+6)%7));return dstr(x)};
const weekDates=w=>{const m=mondayOf(w||T());return Array.from({length:7},(_,i)=>shiftD(m,i))};
const fmtD=s=>{const d=new Date(s+'T00:00:00');return d.getDate()+' '+MES3[d.getMonth()]};
const fmtDY=s=>{const d=new Date(s+'T00:00:00');return d.getDate()+' '+MES3[d.getMonth()]+(d.getFullYear()!==new Date().getFullYear()?' '+d.getFullYear():'')};
const isDate=s=>typeof s==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(s);
const isTime=s=>typeof s==='string'&&/^([01]\d|2[0-3]):[0-5]\d$/.test(s);
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const ALLDAYS=[0,1,2,3,4,5,6];

/* ═════ ÁREAS Y SUGERENCIAS ═════ */
const AREAS={
  mente:{n:'Mente',s:'Calma, atención y claridad',ic:'lotus'},
  cuerpo:{n:'Cuerpo',s:'Moverte y sentirte bien',ic:'dumbbell'},
  aprender:{n:'Aprender',s:'Estudio, idiomas, proyectos',ic:'cap'},
  descanso:{n:'Descanso',s:'Dormir mejor y desconectar',ic:'moon'},
  arte:{n:'Arte y música',s:'Cantar, tocar, dibujar, escribir',ic:'note'},
  dojo:{n:'Artes marciales',s:'Tu práctica en el dojo y fuera',ic:'belt'},
  trabajo:{n:'Trabajo',s:'Foco y orden en el día',ic:'target'},
  otros:{n:'Otros',s:'Lo que no encaja en ninguna',ic:'star'}
};
const AREA_ORDER=Object.keys(AREAS);
/* mode: check (marcar) · timer (con tiempo, min minutos) */
const SUGG=[
  {n:'Meditar',a:'mente',ic:'lotus',mode:'timer',min:10,at:'08:00'},
  {n:'Leer',a:'mente',ic:'book',mode:'timer',min:20,at:'22:00'},
  {n:'Escribir el diario',a:'mente',ic:'pen',at:'22:30'},
  {n:'Tres cosas buenas del día',a:'mente',ic:'heart',at:'22:45'},
  {n:'Ejercicio',a:'cuerpo',ic:'dumbbell',mode:'timer',min:30,at:'09:00'},
  {n:'Caminar',a:'cuerpo',ic:'walk',mode:'timer',min:20,at:'18:00'},
  {n:'Estirar',a:'cuerpo',ic:'wind',mode:'timer',min:10,at:'08:30'},
  {n:'Beber agua',a:'cuerpo',ic:'drop'},
  {n:'Estudiar',a:'aprender',ic:'cap',mode:'timer',min:60,at:'10:00'},
  {n:'Idiomas',a:'aprender',ic:'chat',mode:'timer',min:15,at:'19:00'},
  {n:'Un paso del proyecto',a:'aprender',ic:'target',at:'11:00'},
  {n:'Despertar sin posponer',a:'descanso',ic:'sun',at:'07:30'},
  {n:'Pantallas fuera',a:'descanso',ic:'phone',at:'22:30'},
  {n:'A dormir antes de las 23:00',a:'descanso',ic:'bed',at:'23:00'},
  {n:'Cantar',a:'arte',ic:'note',mode:'timer',min:15,at:'17:00'},
  {n:'Tocar un instrumento',a:'arte',ic:'note',mode:'timer',min:20,at:'18:00'},
  {n:'Dibujar',a:'arte',ic:'pen',mode:'timer',min:15,at:'20:00'},
  {n:'Entrenar en el dojo',a:'dojo',ic:'belt',days:[1,3],at:'20:00'},
  {n:'Suburi',a:'dojo',ic:'sword',mode:'timer',min:10,at:'08:45'},
  {n:'Repasar técnicas',a:'dojo',ic:'book',days:[2,4,6],at:'19:00'},
  {n:'La tarea importante primero',a:'trabajo',ic:'target',days:[1,2,3,4,5],at:'09:30'},
  {n:'Cerrar el día',a:'trabajo',ic:'list',days:[1,2,3,4,5],at:'18:30'}
];
const MOMENTS=[['m','Mañana'],['t','Tarde'],['n','Noche'],['x','Cuando quieras']];
const momentOf=at=>!isTime(at)?'x':(at<'12:00'?'m':(at<'19:30'?'t':'n'));

/* ═════ HÁBITOS ═════ */
const activeHabits=()=>(DB.habits||[]).filter(h=>h.on!==false);
const habitById=id=>(DB.habits||[]).find(h=>h.id===id)||null;
const byTime=(a,b)=>(isTime(a.at)?a.at:'99')<(isTime(b.at)?b.at:'99')?-1:((isTime(a.at)?a.at:'99')>(isTime(b.at)?b.at:'99')?1:String(a.n).localeCompare(String(b.n)));
/* antes de que empezaras a usar la app no cuenta nada */
const schedOn=(h,d)=>h.on!==false&&(h.days||ALLDAYS).includes(wdOf(d))&&(!isDate(h.since)||d>=h.since)&&(!isDate(DB.cfg.start)||d>=DB.cfg.start);
const doneOn=(hid,d)=>!!(DB.log[d]&&DB.log[d][hid]);
const habitsOn=d=>activeHabits().filter(h=>schedOn(h,d)).sort(byTime);
function dayStat(d){
  const H=habitsOn(d),done=H.filter(h=>doneOn(h.id,d)).length;
  /* lo que marcaste aunque no tocara también cuenta, sin restar */
  const extra=Object.keys(DB.log[d]||{}).filter(id=>{const h=habitById(id);return h&&!schedOn(h,d)}).length;
  return{sch:H.length,done,extra,pct:H.length?done/H.length:(extra?1:null)};
}
const FULL=.8;   // día cumplido: al menos el 80 % de lo que tocaba
const dayKind=d=>{const s=dayStat(d);if(s.pct==null)return'rest';if(s.pct>=FULL)return'full';return s.done||s.extra?'part':'none'};
function setDone(hid,d,on){
  if(on){DB.log[d]=DB.log[d]||{};const n=new Date();DB.log[d][hid]=d===T()?String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0'):1}
  else if(DB.log[d]){delete DB.log[d][hid];if(!Object.keys(DB.log[d]).length)delete DB.log[d]}
}
const freqTxt=days=>{days=(days||ALLDAYS).slice();if(days.length===7)return'Todos los días';if(days.length===5&&![0,6].some(d=>days.includes(d)))return'De lunes a viernes';if(days.length===2&&days.includes(0)&&days.includes(6))return'Fines de semana';
  return days.sort((a,b)=>((a+6)%7)-((b+6)%7)).map(d=>WDL[d]).join(' · ')};

/* racha: días seguidos en los que tocaba y lo hiciste (los días que no toca no cortan) */
function streakOf(h){
  let d=T(),cur=0,best=0,run=0,started=false,guard=0;
  if(schedOn(h,d)&&!doneOn(h.id,d))d=shiftD(d,-1);   // hoy aún estás a tiempo
  const first=firstDay();
  while(d>=first&&guard++<1500){
    if(schedOn(h,d)){
      if(doneOn(h.id,d)){run++;if(!started)cur=run}
      else{if(!started){started=true}best=Math.max(best,run);run=0}
    }
    d=shiftD(d,-1);
  }
  best=Math.max(best,run);if(!started)cur=run;
  return{cur,best};
}
function rateOf(h,n){
  let s=0,k=0;for(let i=0;i<n;i++){const d=shiftD(T(),-i);if(i===0&&!doneOn(h.id,d))continue;if(schedOn(h,d)){s++;if(doneOn(h.id,d))k++}}
  return s?k/s:null;
}
function firstDay(){
  const L=Object.keys(DB.log||{}).filter(isDate).sort()[0],c=DB.cfg.start;
  return [L,c,T()].filter(Boolean).sort()[0];
}

/* ═════ CONSTANCIA Y CINTURÓN ═════
   Una semana es constante si haces al menos el 75 % de lo que tocaba. */
const WEEK_OK=.75;
function weekRate(w){
  let s=0,k=0;weekDates(w).forEach(d=>{if(d>T())return;const st=dayStat(d);s+=st.sch;k+=st.done});
  return s?k/s:null;
}
const BELT_STEPS=[['blanco','Blanco',0],['amarillo','Amarillo',4],['naranja','Naranja',12],['verde','Verde',24],['azul','Azul',40],['marrón','Marrón',60],['negro','Negro',90]];
function constancy(){
  const thisW=mondayOf(T()),first=mondayOf(firstDay());let n=0,streak=0,w=thisW,run=true;
  const ok=x=>{const r=weekRate(x);return r!=null&&r>=WEEK_OK};
  /* esta semana cuenta en cuanto la tienes asegurada; si no, empiezo a contar por la anterior */
  const thisOk=(()=>{let s=0,k=0;weekDates(thisW).forEach(d=>{const st=dayStat(d);s+=st.sch;if(d<=T())k+=st.done});return s&&k/s>=WEEK_OK})();
  const wOk=x=>x===thisW?thisOk:ok(x);
  for(let x=first;x<=thisW;x=shiftD(x,7)){if(wOk(x))n++}
  w=thisOk?thisW:shiftD(thisW,-7);
  while(w>=first&&wOk(w)){streak++;w=shiftD(w,-7)}
  let i=0;BELT_STEPS.forEach((b,k)=>{if(n>=b[2])i=k});
  const r=weekRate(thisW);
  return{n,streak,belt:BELT_STEPS[i],next:BELT_STEPS[i+1]||null,week:r};
}

/* ═════ ÁNIMO ═════ */
const MOODS=['Mal','Flojo','Normal','Bien','Genial'];
const moodOn=d=>{const m=DB.mood[d];return m&&m.v>=1&&m.v<=5?m.v:null};
const avg=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:null;
/* ¿te sientes mejor los días que cumples? */
function moodInsight(n){
  const hi=[],lo=[];
  for(let i=0;i<(n||60);i++){const d=shiftD(T(),-i),m=moodOn(d);if(!m)continue;const k=dayKind(d);if(k==='full')hi.push(m);else if(k==='part'||k==='none')lo.push(m)}
  if(hi.length<3||lo.length<3)return null;
  return{hi:avg(hi),lo:avg(lo)};
}

/* ═════ APPS HERMANAS ═════
   Tsuyo, Neiro y Kotsu viven en la misma dirección (tjpixel.github.io), así que en el mismo navegador
   Kotsu puede leer lo que guardan las otras dos y marcar solo el hábito. En iOS: App Group compartido. */
const SISTERS={
  tsuyo:{n:'Tsuyo',path:'/tsuyo/',verb:'Entrenar',did:'entrenado'},
  neiro:{n:'Neiro',path:'/neiro/',verb:'Practicar',did:'practicado'}
};
const sisterUrl=k=>location.origin+SISTERS[k].path;
function sisterDays(k){
  const out=new Set();
  try{
    if(k==='tsuyo'){
      for(let i=0;i<localStorage.length;i++){const key=localStorage.key(i);if(!/^tsuyo_v1(_|$)/.test(key)||/_(pref|mode)$/.test(key))continue;
        let o=null;try{o=JSON.parse(localStorage.getItem(key))}catch(e){}
        if(o&&o.sess&&typeof o.sess==='object')Object.keys(o.sess).forEach(d=>{const ex=o.sess[d]&&o.sess[d].ex;
          if(isDate(d)&&ex&&Object.values(ex).some(a=>Array.isArray(a)&&a.some(x=>x&&x.r)))out.add(d)})}
    }
    if(k==='neiro'){
      let o=null;try{o=JSON.parse(localStorage.getItem('neiro_v1')||'null')}catch(e){}
      if(o&&Array.isArray(o.ss))o.ss.forEach(s=>{if(s&&isDate(s.d)&&((+s.m||0)>=5||s.g))out.add(s.d)});
    }
  }catch(e){}
  return out;
}
/* qué hábito parece de cada app (al importar o al elegir una idea) */
function guessApp(n,a){
  n=String(n||'').toLowerCase();
  if(/cant|canto|voz|vocal/.test(n))return'neiro';
  if((a==='cuerpo'||!a)&&/ejercic|entren|gimnas|\bgym\b|pesas|fuerza/.test(n))return'tsuyo';
  return'';
}

/* ═════ METAS ═════
   meta: {id,t,why,hz,hab:[ids de hábitos],st:[etapas],done}
   etapa: {id,t,per,obj,s:'done'|'now'|'next',tk:[{id,t,ok,tag}]} */
const ST_N={done:'Hecha',now:'En curso',next:'Próxima'};
const goalTasks=g=>(g.st||[]).reduce((a,s)=>a.concat(s.tk||[]),[]);
function goalProgress(g){
  const tk=goalTasks(g),ok=tk.filter(t=>t.ok).length,stDone=(g.st||[]).filter(s=>s.s==='done').length;
  return{tk:tk.length,ok,st:(g.st||[]).length,stDone,pct:tk.length?ok/tk.length:((g.st||[]).length?stDone/g.st.length:0),now:(g.st||[]).find(s=>s.s==='now')||null};
}
