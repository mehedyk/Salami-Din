'use strict';
document.getElementById('yr').textContent = new Date().getFullYear();

/* ── LANGUAGE ── */
let lang = 'bn';
const TX = {
  bn: {
    lbl:'Eid ul Fitr', ttl:'Eid Mubarak', dua:'তাকাব্বালাল্লাহু মিন্না ওয়া মিনকুম',
    ask:'Bhai / Apa, apni ki amake — <em>Mehedi (Aunik)</em> ke — ektu salami diben? 🥺',
    asub:'Amar well-wisher ra-i shudhu diben... apni ki shei lucky list-e? 👀',
    nudge:'Na korben na... pore somossa hobe 😬',
    yes:'✓&nbsp;Dibo, inshallah', no:'✕&nbsp;Na, dibo na',
    infoTag:'bKash', copy:'Copy Number', copied:'Copied ✓',
    duaTxt:'JazakAllahu Khayran 🤲 — may this Eid bring you immeasurable joy. Ameen.',
    clbl:'Eid Card', dl:'↓ Download', gen:'Generate Eid Card',
    lgBtn:'EN', nOff:'🔇 Nasheed', nOn:'♪ Nasheed',
    noMsgs:[
      'Bhai seriously?? 😭',
      'Ei Eid-e?! Really? 💔',
      'Thik ache, porer baar 😔',
      'Aro dure ja bhai! 😅',
      'Ektu consider koro! 🥺',
      'Amio manush, feel kori 😢',
      'Ufff... thak 😤',
      'Last chance ekhono ache 👀',
      'Fine, tumi jeto na 😭',
      'Ja ja, Allah hafez 💔'
    ]
  },
  en: {
    lbl:'Eid ul Fitr', ttl:'Eid Mubarak', dua:'Taqabbalallahu Minna Wa Minkum',
    ask:'Dear well-wisher — would you send a little salami to <em>Mehedi (Aunik)</em>? 🥺',
    asub:'Only the truly generous ones do this... are you one of them? 👀',
    nudge:"Please don't say no... consequences await 😬",
    yes:"✓&nbsp;Yes, inshallah", no:"✕&nbsp;No, I won't",
    infoTag:'bKash', copy:'Copy Number', copied:'Copied ✓',
    duaTxt:'JazakAllahu Khayran 🤲 — may this Eid bring you immeasurable joy. Ameen.',
    clbl:'Eid Card', dl:'↓ Download', gen:'Generate Eid Card',
    lgBtn:'বাংলিশ', nOff:'🔇 Nasheed', nOn:'♪ Nasheed',
    noMsgs:[
      'Seriously though?? 😭',
      'On Eid day?! 💔',
      'Come on, reconsider! 🥺',
      'I can feel this 😢',
      'Still running? 😅',
      'My heart... 💔',
      'Fine, be that way 😤',
      'Last chance! 👀',
      'You really sure? 😭',
      'Allah hafez then 💔'
    ]
  }
};
const tx = () => TX[lang];

function applyLang() {
  const t = tx();
  document.getElementById('lbl').textContent     = t.lbl;
  document.getElementById('ttl').textContent     = t.ttl;
  document.getElementById('dua').textContent     = t.dua;
  document.getElementById('ask').innerHTML       = t.ask;
  document.getElementById('asub').textContent    = t.asub;
  if (!currentNudge) document.getElementById('nudge').textContent = t.nudge;
  document.getElementById('yesBtn').innerHTML    = t.yes;
  document.getElementById('noBtn').innerHTML     = t.no;
  document.getElementById('infoTag').textContent = t.infoTag;
  document.getElementById('cpBtn').textContent   = t.copy;
  document.getElementById('duaTxt').textContent  = t.duaTxt;
  document.getElementById('clbl').textContent    = t.clbl;
  document.getElementById('dlBtn').textContent   = t.dl;
  document.getElementById('genBtn').textContent  = t.gen;
  document.getElementById('lgBtn').textContent   = t.lgBtn;
  updateNBtn();
}
function toggleL() { lang = lang==='bn'?'en':'bn'; applyLang(); }

/* ── THEME ── */
let theme = 'midnight';
function toggleDD() {
  document.getElementById('tpBtn').classList.toggle('open');
  document.getElementById('dd').classList.toggle('open');
}
document.addEventListener('click', e => {
  const dp = document.querySelector('.dpicker');
  if (!dp.contains(e.target)) {
    document.getElementById('tpBtn').classList.remove('open');
    document.getElementById('dd').classList.remove('open');
  }
});
function setTheme(t, label, el) {
  theme = t;
  document.body.className = t;
  document.getElementById('tpLbl').textContent = label;
  document.getElementById('tpBtn').classList.remove('open');
  document.getElementById('dd').classList.remove('open');
  document.querySelectorAll('.dopt').forEach(o => o.classList.remove('on'));
  el.classList.add('on');
  initPts(); drawBg();
  if (nOn) switchN(t);
  if (cardMade) makeCard();
}

/* ── BACKGROUND CANVAS ── */
const cv = document.getElementById('bg');
const ctx = cv.getContext('2d');
let pts = [], raf = null;
function rsz() { cv.width = innerWidth; cv.height = innerHeight; initPts(); }
function initPts() {
  pts = [];
  const n = theme === 'village' ? 55 : 130;
  for (let i = 0; i < n; i++) pts.push({
    x: Math.random()*cv.width, y: Math.random()*cv.height,
    r: Math.random()*1.4+0.3, vy: Math.random()*0.18+0.02,
    ph: Math.random()*Math.PI*2, spd: Math.random()*0.025+0.005
  });
}
const BG = {
  midnight:{base:'#0b0f1e',pt:'200,184,112'},
  ivory:   {base:'#f5f0e6',pt:'30,70,35'},
  dusk:    {base:'#1e0e08',pt:'200,136,80'},
  village: {base:'#1a3a1a',pt:'232,184,32'}
};
function drawBg() {
  if (raf) cancelAnimationFrame(raf);
  const col = BG[theme] || BG.midnight;
  function frame() {
    const W=cv.width,H=cv.height;
    ctx.fillStyle=col.base; ctx.fillRect(0,0,W,H);
    if (theme==='village') {
      ctx.strokeStyle='rgba(232,184,32,0.07)'; ctx.lineWidth=1;
      const gs=48;
      for (let x=0;x<W+gs;x+=gs) for (let y=0;y<H+gs;y+=gs) {
        ctx.beginPath();
        ctx.moveTo(x,y-gs/2); ctx.lineTo(x+gs/2,y);
        ctx.lineTo(x,y+gs/2); ctx.lineTo(x-gs/2,y);
        ctx.closePath(); ctx.stroke();
      }
      pts.forEach(p => {
        p.ph+=p.spd; p.y+=p.vy;
        if (p.y>H+8){p.y=-8;p.x=Math.random()*W;}
        const a=0.3+Math.sin(p.ph)*0.4;
        ctx.fillStyle=`rgba(232,184,32,${a})`;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r*1.5,0,Math.PI*2); ctx.fill();
      });
    } else if (theme==='ivory') {
      [1,2,3].forEach(i => {
        const g=ctx.createRadialGradient(W*.5,H*.38,0,W*.5,H*.38,Math.min(W,H)*.25*i);
        g.addColorStop(0,'rgba(30,70,35,0.025)'); g.addColorStop(1,'rgba(30,70,35,0)');
        ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
      });
      pts.forEach(p => {
        p.ph+=p.spd; p.y+=p.vy*0.5;
        if(p.y>H+8){p.y=-8;p.x=Math.random()*W;}
        const a=0.06+Math.sin(p.ph)*0.05;
        ctx.fillStyle=`rgba(30,70,35,${a})`;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
      });
    } else {
      pts.forEach(p => {
        p.ph+=p.spd; p.y+=p.vy*0.4;
        if(p.y>H+8){p.y=-8;p.x=Math.random()*W;}
        const a=0.15+Math.sin(p.ph)*0.3;
        ctx.fillStyle=`rgba(${col.pt},${a})`;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
        if(p.r>1.1){
          ctx.strokeStyle=`rgba(${col.pt},${a*0.35})`; ctx.lineWidth=0.5;
          ctx.beginPath();
          ctx.moveTo(p.x-p.r*4,p.y); ctx.lineTo(p.x+p.r*4,p.y);
          ctx.moveTo(p.x,p.y-p.r*4); ctx.lineTo(p.x,p.y+p.r*4);
          ctx.stroke();
        }
      });
    }
    raf = requestAnimationFrame(frame);
  }
  frame();
}
window.addEventListener('resize', rsz);
rsz(); drawBg();

/* ── NO BUTTON — 10 escapes before disappearing ── */
let nCount=0, ySize=14, currentNudge='';
function flee(e) {
  if (e) e.stopPropagation();
  const btn = document.getElementById('noBtn');
  btn.classList.add('floating');
  const bw=btn.offsetWidth||140, bh=btn.offsetHeight||52;
  btn.style.left   = Math.max(10, Math.random()*(innerWidth-bw-10))+'px';
  btn.style.top    = Math.max(62, Math.random()*(innerHeight-bh-10))+'px';
  btn.style.right  = 'auto'; btn.style.bottom = 'auto';
  nCount++;
  if (ySize < 24) { ySize += 1.2; document.getElementById('yesBtn').style.fontSize = ySize+'px'; }
  currentNudge = tx().noMsgs[Math.min(nCount-1, tx().noMsgs.length-1)];
  document.getElementById('nudge').textContent = currentNudge;
  if (nCount >= 10) {
    btn.style.transition = 'opacity 0.5s, transform 0.5s';
    btn.style.opacity = '0'; btn.style.transform = 'scale(0.05) rotate(45deg)';
    btn.style.pointerEvents = 'none';
    setTimeout(()=>btn.style.display='none', 600);
  }
}

/* ── YES ── */
function onYes() {
  document.getElementById('yesBtn').disabled = true;
  document.getElementById('noBtn').style.display = 'none';
  document.getElementById('info').classList.add('show');
  burst();
  makeCard();
}

/* ── COPY ── */
function doCopy() {
  navigator.clipboard.writeText('01790467463').catch(()=>{});
  const b = document.getElementById('cpBtn');
  b.textContent = tx().copied;
  setTimeout(()=>b.textContent=tx().copy, 2200);
}

/* ── CONFETTI ── */
function burst() {
  const palettes = {
    midnight:['#d8c878','#c8a830','#e8e0cc','#a09060','#fff'],
    ivory:   ['#1e4623','#4a8a52','#d4a820','#8ab890','#f5f0e6'],
    dusk:    ['#e8a060','#b85c28','#d4885a','#f0e2cc','#c86030'],
    village: ['#e8b820','#c84820','#fce8a8','#1a3a1a','#a8d820']
  };
  const cols = palettes[theme];
  const chars = ['◆','●','▲','★','✦','◇','○'];
  for (let i=0;i<80;i++) {
    setTimeout(()=>{
      const el=document.createElement('div');
      el.className='cp';
      el.textContent=chars[Math.floor(Math.random()*chars.length)];
      el.style.left=Math.random()*100+'vw';
      el.style.color=cols[Math.floor(Math.random()*cols.length)];
      el.style.fontSize=(8+Math.random()*14)+'px';
      el.style.animationDuration=(1.2+Math.random()*2.2)+'s';
      el.style.animationDelay=Math.random()*0.4+'s';
      document.body.appendChild(el);
      setTimeout(()=>el.remove(),4000);
    },i*12);
  }
}

/* ── EID CARD ── */
let cardMade = false;
function makeCard() {
  cardMade = true;
  document.getElementById('cardWrap').classList.add('show');
  document.getElementById('genWrap').style.display = 'none';
  drawCard();
}
function drawCard() {
  const c=document.getElementById('ec');
  const x=c.getContext('2d');
  const W=c.width, H=c.height;
  const P = {
    midnight:{bg1:'#0b0f1e',bg2:'#131a30',acc:'#c8a830',sub:'#9ab0c8',txt:'#e8e0cc',muted:'#5a6070'},
    ivory:   {bg1:'#f5f0e6',bg2:'#eee8d5',acc:'#1e4623',sub:'#4a6a52',txt:'#1c2416',muted:'#8a9a88'},
    dusk:    {bg1:'#1e0e08',bg2:'#2e1810',acc:'#c8784a',sub:'#a86848',txt:'#f0e2cc',muted:'#5a4030'},
    village: {bg1:'#0e2a0e',bg2:'#1a3a1a',acc:'#e8b820',sub:'#a8c820',txt:'#fce8a8',muted:'#4a6a2a'}
  };
  const p=P[theme];
  const g=x.createLinearGradient(0,0,W,H);
  g.addColorStop(0,p.bg1); g.addColorStop(1,p.bg2);
  x.fillStyle=g; x.fillRect(0,0,W,H);
  x.strokeStyle=p.acc+'44'; x.lineWidth=1; x.strokeRect(10,10,W-20,H-20);
  x.strokeStyle=p.acc+'22'; x.lineWidth=0.6; x.strokeRect(16,16,W-32,H-32);
  [[20,20],[W-20,20],[20,H-20],[W-20,H-20]].forEach(([cx2,cy2])=>{
    x.fillStyle=p.acc+'88';
    x.beginPath(); x.moveTo(cx2,cy2-6); x.lineTo(cx2+6,cy2); x.lineTo(cx2,cy2+6); x.lineTo(cx2-6,cy2); x.closePath(); x.fill();
  });
  x.font='36px serif'; x.textAlign='center'; x.textBaseline='middle'; x.fillText('🌙',W/2-28,50);
  x.font='22px serif'; x.fillText('✦',W/2+28,50);
  x.fillStyle=p.acc; x.font='300 34px "Cormorant Garamond",serif';
  x.shadowColor=p.acc; x.shadowBlur=14; x.fillText('Eid Mubarak',W/2,100); x.shadowBlur=0;
  x.fillStyle=p.muted; x.font='italic 13px "Cormorant Garamond",serif';
  x.fillText('Taqabbalallahu Minna Wa Minkum',W/2,125);
  x.strokeStyle=p.acc+'40'; x.lineWidth=0.7;
  x.beginPath(); x.moveTo(60,142); x.lineTo(W-60,142); x.stroke();
  x.fillStyle=p.sub; x.font='300 14px "Cormorant Garamond",serif';
  x.fillText("With warmest wishes and du'a,",W/2,165);
  x.fillStyle=p.txt; x.font='600 21px "Cormorant Garamond",serif';
  x.fillText('Mehedi (Aunik)',W/2,193);
  x.fillStyle=p.muted; x.font='300 12px "DM Sans",sans-serif';
  x.fillText('EID UL FITR  '+new Date().getFullYear(),W/2,217);
  x.fillStyle=p.acc+'15'; x.fillRect(0,H-32,W,32);
  x.fillStyle=p.muted; x.font='11px "DM Sans",sans-serif';
  x.fillText('May Allah accept from us and from you  ·  Ameen',W/2,H-13);
}
function dlCard() {
  const a=document.createElement('a');
  a.download=`EidCard-Aunik-${theme}.png`;
  a.href=document.getElementById('ec').toDataURL(); a.click();
}

/* ── NASHEED ── */
let nOn = false;
function updateNBtn() {
  const b=document.getElementById('nsBtn');
  b.textContent=nOn?tx().nOn:tx().nOff;
  b.classList.toggle('lit',nOn);
}
function toggleN() { nOn=!nOn; updateNBtn(); nOn?switchN(theme):stopAll(); }
function stopAll() {
  ['midnight','ivory','dusk','village'].forEach(id=>{
    const a=document.getElementById('a-'+id);
    if(a){a.pause();a.currentTime=0;}
  });
}
function switchN(t) {
  stopAll(); if(!nOn) return;
  const a=document.getElementById('a-'+t);
  if(a){a.volume=0.38;a.play().catch(()=>{nOn=false;updateNBtn();});}
}

/* ── INIT ── */
applyLang();