const questions = [
  {q: "Em cefalometria, um ANB negativo indica:",
   choices:["Classe II esquelética","Classe III esquelética","Classe I equilibrada","Rotação mandibular anterior"],
   answer:1, explain:"ANB negativo → prognatismo mandibular relativo → Classe III."},

  {q: "Segundo a teoria da matriz funcional de Moss, o principal fator de crescimento facial é:",
   choices:["Genética condilar","Cartilagem nasal","Função dos tecidos moles","Remodelação perióstica"],
   answer:2, explain:"Moss defendia que o crescimento é comandado pelos tecidos moles (matriz funcional)."},  

  {q: "A análise de Ricketts utiliza o ângulo facial (FH–Nasion–Pogônio). Valor médio:",
   choices:["72°","78°","85°","92°"],
   answer:2, explain:"Ângulo facial de Ricketts ≈ 85° ± 3."},

  {q: "O ponto cefalométrico Gn (Gnátio) é definido como:",
   choices:["Mais póstero-inferior da sínfise","Mais ântero-inferior do mento","Mais superior do mento","Mais medial do mento"],
   answer:1, explain:"Gnátio = ponto mais ântero-inferior da sínfise mandibular."},

  {q: "No cefalograma, a distância linear 1-NA avalia:",
   choices:["Protrusão dos incisivos inferiores","Protrusão dos incisivos superiores","Ângulo goníaco","Altura facial anterior"],
   answer:1, explain:"1-NA avalia protrusão dos incisivos superiores."},

  {q: "O índice de Moyers é usado para:",
   choices:["Predição do espaço para caninos e pré-molares","Avaliar discrepância de Bolton","Estimar overjet","Medir ANB"],
   answer:0, explain:"Moyers → análise preditiva para caninos+pré-molares."},

  {q: "O ângulo goníaco é formado por:",
   choices:["SN com Pogônio","Nasion com Orbitário","Plano mandibular e ramo mandibular","Plano palatino com eixo do incisivo"],
   answer:2, explain:"Ângulo goníaco = intersecção do plano mandibular com o ramo."},

  {q: "A curva de Wilson representa:",
   choices:["Curvatura anteroposterior da arcada","Curvatura transversal do plano oclusal","Curvatura da base craniana","Curvatura do plano palatino"],
   answer:1, explain:"Curva de Wilson = curvatura mediolateral."},

  {q: "Qual característica não é típica da má oclusão Classe II divisão 1?",
   choices:["Overjet aumentado","Incisivos superiores protruídos","Sobremordida profunda","Incisivos superiores retroinclinados"],
   answer:3, explain:"Divisão 1 = incisivos superiores protruídos, não retroinclinados."},

  {q: "A discrepância de Bolton anterior considera os dentes:",
   choices:["Canino a canino","Primeiro molar a primeiro molar","Segundo molar a segundo molar","Incisivos apenas"],
   answer:0, explain:"Índice anterior de Bolton envolve canino a canino."},

  {q: "O plano mandibular SN-GoGn é útil para avaliar:",
   choices:["Padrão vertical","Classe esquelética","Inclinação incisal","Rotação condilar"],
   answer:0, explain:"SN-GoGn indica padrão vertical (hiper ou hipodivergente)."},  

  {q: "O aparelho de Herbst atua principalmente em:",
   choices:["Mordida aberta","Classe II esquelética","Classe III esquelética","Expansão transversal"],
   answer:1, explain:"Herbst = avanço mandibular → Classe II esquelética."},

  {q: "O ponto Sella está localizado em:",
   choices:["Sutura esfeno-occipital","Centro da sela turca","Espinha nasal anterior","Ponto mais inferior do forame magno"],
   answer:1, explain:"Sella = centro da sela turca."},

  {q: "O índice de Pont relaciona:",
   choices:["Perímetro do arco e massa dentária","Largura dos incisivos superiores e largura intercanina/intermolar","ANB e SNA","Altura facial e idade óssea"],
   answer:1, explain:"Pont → largura dos incisivos superiores × largura intercanina/intermolar."},

  {q: "O ponto Ba (Básio) é usado para:",
   choices:["Plano facial total","Plano craniano basilar","Plano de Frankfurt","Ângulo ANB"],
   answer:1, explain:"Ba = ponto basilar da base craniana."},

  {q: "Qual não é considerado sinal de prognatismo mandibular?",
   choices:["ANB negativo","SNA aumentado","SNB aumentado","Perfil côncavo"],
   answer:1, explain:"SNA aumentado indica protrusão maxilar, não prognatismo mandibular."},

  {q: "A análise de McNamara avalia especialmente:",
   choices:["Idade dentária","Comprimento maxilar e mandibular","Espaço de Nance","Inclinação incisal"],
   answer:1, explain:"McNamara avalia comprimento efetivo da maxila e mandíbula."},

  {q: "O plano oclusal funcional de Downs é traçado de:",
   choices:["Cúspide do primeiro molar sup ao incisivo central sup","Cúspide do primeiro molar inf ao incisivo inf","Incisivos sup a mento","SN a Pogônio"],
   answer:0, explain:"Plano oclusal = molar superior até incisivo superior."},

  {q: "O crescimento intramembranoso é característico de:",
   choices:["Mandíbula corpo","Maxila","Côndilo mandibular","Base craniana"],
   answer:1, explain:"Maxila cresce por ossificação intramembranosa."},

  {q: "O índice de Carey mede:",
   choices:["Discrepância entre massa dentária e perímetro de arco","Proporção de dentes anteriores","Rotação mandibular","Inclinação do plano palatino"],
   answer:0, explain:"Carey = diferença entre perímetro e massa dentária."},

  {q: "O aparelho extrabucal de tração alta é indicado para:",
   choices:["Reduzir padrão vertical","Estimular crescimento maxilar","Corrigir mordida aberta","Avançar mandíbula"],
   answer:0, explain:"Tração alta → controle vertical da maxila."},

  {q: "Em casos de Classe III por deficiência maxilar, o aparelho mais indicado é:",
   choices:["Bionator","Mentoneira","Protração maxilar com máscara facial","Arco lingual"],
   answer:2, explain:"Máscara facial → avanço maxilar em Classe III por deficiência."},

  {q: "A proporção normal de Bolton total é próxima de:",
   choices:["77,2%","91,3%","100%","70%"],
   answer:1, explain:"Índice total de Bolton = 91,3%."},

  {q: "O plano palatino é definido por quais pontos?",
   choices:["ENA–ENP","ENA–A","N–ANS","SN"],
   answer:0, explain:"Plano palatino = espinha nasal anterior a posterior."},

  {q: "A hipodivergência esquelética é caracterizada por:",
   choices:["Plano mandibular baixo e mordida profunda","Plano mandibular alto e mordida aberta","ANB negativo","Face longa"],
   answer:0, explain:"Hipodivergente = plano mandibular baixo, mordida profunda."},

  {q: "A análise de Tweed utiliza principalmente:",
   choices:["Índices cefalométricos verticais","Triângulo de Tweed com IMPA, FMA e FMIA","Relação de Bolton","Curva de Spee"],
   answer:1, explain:"Tweed → triângulo com IMPA, FMA e FMIA."},

  {q: "O aparelho de Frankel tipo III é usado em:",
   choices:["Classe II divisão 1","Classe II divisão 2","Classe III esquelética","Mordida aberta posterior"],
   answer:2, explain:"Frankel III → tratamento de Classe III esquelética."},

  {q: "O ponto Nasion é:",
   choices:["Mais posterior do septo nasal","Intersecção da sutura frontonasal","Mais inferior da margem orbital","Mais inferior do mento"],
   answer:1, explain:"Nasion = junção da sutura frontonasal com plano médio."},

  {q: "A análise de Björk utiliza indicadores de crescimento, EXCETO:",
   choices:["Inclinação da sínfise","Rotação condilar","Altura posterior da face","Discrepância de Bolton"],
   answer:3, explain:"Discrepância de Bolton não faz parte da análise de Björk."},

  {q: "O aparelho de Bionator atua principalmente em:",
   choices:["Avanço mandibular Classe II","Expansão rápida da maxila","Correção de mordida aberta","Contenção pós-tratamento"],
   answer:0, explain:"Bionator = avanço mandibular → Classe II."},

  {q: "Na má oclusão Classe II div. 2, o perfil é geralmente:",
   choices:["Convexo","Côncavo","Reto","Assimétrico"],
   answer:0, explain:"Classe II div. 2 mantém perfil convexo."},

  {q: "A curva de Spee acentuada está associada a:",
   choices:["Mordida aberta","Sobremordida profunda","Classe III","Apinhamento mínimo"],
   answer:1, explain:"Curva de Spee acentuada → sobremordida profunda."},

  {q: "O índice de Peck & Peck é usado para avaliar:",
   choices:["Proporção de incisivos inferiores","Proporção de incisivos superiores","Proporção canino-molar","Ângulo goníaco"],
   answer:0, explain:"Peck & Peck → largura M-D/L-B dos incisivos inferiores."},

  {q: "O crescimento condilar contribui para:",
   choices:["Projeção maxilar","Comprimento mandibular","Altura nasal","Espessura alveolar"],
   answer:1, explain:"Crescimento condilar = comprimento mandibular."},

  {q: "O exame mais indicado para avaliar anquilose alveolodentária é:",
   choices:["Panorâmica","Tomografia computadorizada","Periapical","Telerradiografia"],
   answer:1, explain:"Tomografia evidencia ausência de espaço periodontal."},

  {q: "A relação de Andrews dos 6 chaves de oclusão não inclui:",
   choices:["Relação molar","Inclinação axial","Curva de Spee","Ângulo ANB"],
   answer:3, explain:"As 6 chaves de Andrews não incluem ângulos cefalométricos."},

  {q: "Em ortodontia, a linha de referência que passa por Porion e Orbitário é:",
   choices:["Plano de Frankfurt","Plano SN","Plano mandibular","Plano palatino"],
   answer:0, explain:"Porion–Orbitário = plano de Frankfurt."},

  {q: "A proporção correta entre altura facial anterior inferior e total, segundo Ricketts:",
   choices:["25%","40%","55%","70%"],
   answer:2, explain:"AFAI ≈ 55% da altura facial total."}
];

// renderização
const form = document.getElementById("quizForm");
questions.forEach((item, idx) => {
  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = `<strong>${idx+1}.</strong> ${item.q}`;
  
  const choicesDiv = document.createElement("div");
  choicesDiv.className = "choices";
  item.choices.forEach((c,i) => {
    const label = document.createElement("label");
    label.className = "choice";
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "q"+idx;
    input.value = i;
    label.appendChild(input);
    label.append(" " + String.fromCharCode(65+i) + ") " + c);
    choicesDiv.appendChild(label);
  });
  div.appendChild(choicesDiv);
  form.appendChild(div);
});

document.getElementById("checkBtn").onclick = () => {
  let score = 0;
  document.querySelectorAll(".choice").forEach(el => el.classList.remove("correct","incorrect"));
  questions.forEach((item, idx) => {
    const selected = document.querySelector(`input[name=q${idx}]:checked`);
    if(selected){
      if(+selected.value === item.answer){
        score++;
        selected.parentElement.classList.add("correct");
      } else {
        selected.parentElement.classList.add("incorrect");
        document.querySelector(`input[name=q${idx}][value='${item.answer}']`).parentElement.classList.add("correct");
      }
    } else {
      document.querySelector(`input[name=q${idx}][value='${item.answer}']`).parentElement.classList.add("correct");
    }
  });
  const pct = Math.round((score/questions.length)*100);
  const resultado = document.getElementById("resultado");
  resultado.style.display = "block";
  resultado.innerHTML = `<strong>Resultado:</strong> ${score} / ${questions.length} (${pct}%)<br><br>`;
  resultado.innerHTML += "<details open><summary><b>Gabarito e explicações</b></summary><ol>" +
    questions.map((q,i)=>`<li><b>${String.fromCharCode(65+q.answer)}</b> — ${q.explain}</li>`).join("") +
    "</ol></details>";
};

document.getElementById("resetBtn").onclick = () => {
  document.querySelectorAll("input[type=radio]").forEach(r=>r.checked=false);
  document.querySelectorAll(".choice").forEach(el => el.classList.remove("correct","incorrect"));
  document.getElementById("resultado").style.display="none";
};
