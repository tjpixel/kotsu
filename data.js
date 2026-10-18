/* Kotsu · datos. Local primero: todo se guarda en el móvil al instante.
   Las cuentas y la sincronización llegarán con la app de iOS. */
'use strict';

const CFG={
  owner:'Telmo Rivas',
  ownerEmail:'nexafit.dojo@gmail.com',
  version:'0.1 · pruebas'
};

/* ═════ ALMACÉN LOCAL (con respaldo en memoria) ═════ */
const S={
  ok:(()=>{try{localStorage.setItem('__t','1');localStorage.removeItem('__t');return true}catch(e){return false}})(),
  mem:{},
  get(k){if(this.ok){try{return localStorage.getItem(k)}catch(e){}}return this.mem[k]??null},
  set(k,v){if(this.ok){try{localStorage.setItem(k,v);return}catch(e){}}this.mem[k]=v},
  del(k){if(this.ok){try{localStorage.removeItem(k)}catch(e){}}delete this.mem[k]}
};
const KEY='kotsu_v1';
const esc=t=>String(t??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clean=(v,n)=>String(v??'').trim().slice(0,n||2000);

/* ajustes de este dispositivo */
const PREF={
  get(k,d){try{const v=JSON.parse(S.get(KEY+'_pref')||'{}');return k in v?v[k]:d}catch(e){return d}},
  set(k,val){let v={};try{v=JSON.parse(S.get(KEY+'_pref')||'{}')}catch(e){}v[k]=val;S.set(KEY+'_pref',JSON.stringify(v))}
};
/* Plus simulado: en la app de iOS lo decidirá la compra en la App Store */
const isPlus=()=>!!PREF.get('plus',false);
const FREE_HABITS=6,FREE_GOALS=1,FREE_WEEKS=18;

/* ═════ FORMATO DE DATOS ═════ */
function freshDB(){return{v:1,_ts:0,
  profile:{},             // name, areas, moodOn, done, deshi
  cfg:{start:null},
  habits:[],              // {id,n,ic,a,days,at,mode,min,on,since}
  log:{},                 // {'AAAA-MM-DD':{idHábito:'HH:MM'|1}}
  notes:{},               // {'AAAA-MM-DD':{idHábito:'texto'}}
  mood:{},                // {'AAAA-MM-DD':{v:1-5,t:'nota'}}
  goals:[]                // metas con etapas y tareas (ver core.js)
}}
const isObj=o=>o&&typeof o==='object'&&!Array.isArray(o);
const safeId=id=>String(id).replace(/[^\w-]/g,'').slice(0,40)||uid();
function cleanHabit(h){
  if(!isObj(h)||!h.id||!h.n)return null;
  const days=Array.isArray(h.days)?[...new Set(h.days.map(Number).filter(n=>n>=0&&n<=6))]:ALLDAYS.slice();
  return{id:safeId(h.id),n:clean(h.n,60),ic:IC[h.ic]?h.ic:'star',a:AREAS[h.a]?h.a:'otros',days:days.length?days:ALLDAYS.slice(),
    at:isTime(h.at)?h.at:'',mode:h.mode==='timer'?'timer':'check',min:Math.max(1,Math.min(240,parseInt(h.min)||10)),on:h.on!==false,since:isDate(h.since)?h.since:null};
}
function mergeDefaults(o){
  const f=freshDB();if(!isObj(o))return f;
  const dmap=(x,fn)=>{const r={};if(isObj(x))Object.keys(x).forEach(k=>{if(isDate(k)){const v=fn(x[k]);if(v!=null)r[k]=v}});return r};
  return Object.assign(f,{
    _ts:+o._ts||0,profile:isObj(o.profile)?o.profile:{},
    cfg:Object.assign(f.cfg,isObj(o.cfg)?o.cfg:{}),
    habits:(Array.isArray(o.habits)?o.habits:[]).map(cleanHabit).filter(Boolean),
    log:dmap(o.log,v=>isObj(v)&&Object.keys(v).length?v:null),
    notes:dmap(o.notes,v=>isObj(v)?v:null),
    mood:dmap(o.mood,v=>isObj(v)&&v.v>=1&&v.v<=5?{v:+v.v,t:clean(v.t,1000)}:null),
    goals:(Array.isArray(o.goals)?o.goals:[]).filter(g=>isObj(g)&&g.t).map(g=>({id:g.id||uid(),t:clean(g.t,80),why:clean(g.why,600),hz:clean(g.hz,60),done:!!g.done,
      hab:Array.isArray(g.hab)?g.hab.filter(x=>typeof x==='string'):[],
      st:(Array.isArray(g.st)?g.st:[]).filter(isObj).map(s=>({id:s.id||uid(),t:clean(s.t,80)||'Etapa',per:clean(s.per,60),obj:clean(s.obj,600),s:ST_N[s.s]?s.s:'next',
        tk:(Array.isArray(s.tk)?s.tk:[]).filter(isObj).map(t=>({id:t.id||uid(),t:clean(t.t,160),ok:!!t.ok,tag:clean(t.tag,24)}))}))}))
  });
}
let DB=freshDB();
function load(){let o=null;try{o=JSON.parse(S.get(KEY)||'null')}catch(e){}DB=mergeDefaults(o)}
function writeLocal(){try{S.set(KEY,JSON.stringify(DB))}catch(e){toast('No se pudo guardar')}}
function save(){DB._ts=Date.now();writeLocal()}
