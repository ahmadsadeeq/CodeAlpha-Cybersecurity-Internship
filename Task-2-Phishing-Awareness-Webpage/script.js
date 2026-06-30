
const modules=document.querySelectorAll('.module');
let current=0;

const answers=[
'Urgent request for credentials',
'Hover and verify URL',
'Manipulating people to reveal information',
'https://bank-security-login.xyz',
'Multi-Factor Authentication'
];

function startCourse(){
document.querySelector('.container').scrollIntoView({behavior:'smooth'});
}

function show(i){
modules.forEach(m=>m.classList.remove('active'));
modules[i].classList.add('active');
document.getElementById('progress').style.width=((i+1)/modules.length*100)+'%';
}

function nextModule(){if(current<modules.length-1){current++;show(current);}}
function prevModule(){if(current>0){current--;show(current);}}

function finishQuiz(){
let score=0;
for(let i=1;i<=5;i++){
const a=document.querySelector('input[name=q'+i+']:checked');
if(a && a.value==='1') score++;
}
let html='<h3>Score: '+score+'/5 ('+(score*20)+'%)</h3><h4>Correct Answers</h4><ol>';
answers.forEach(a=>html+='<li>'+a+'</li>');
html+='</ol>';
document.getElementById('results').innerHTML=html;
current=7;
show(current);
}

function generateCertificate(){
const name=document.getElementById('name').value || 'Participant';
document.getElementById('certificate').style.display='block';
document.getElementById('certificate').innerHTML=`
<h2>Certificate of Completion</h2>
<p>This certifies that</p>
<h1>${name}</h1>
<p>has successfully completed the</p>
<h3>Phishing Awareness Training Program</h3>
<p>Date: ${new Date().toLocaleDateString()}</p>`;
}

show(0);
