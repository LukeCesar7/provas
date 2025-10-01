const questions = [
  {q: "Qual tipo de ossificação predomina na formação da maxila?",
   choices:["Endocondral","Intramembranosa","Mista com predomínio endocondral","Perióstica"],
   answer:1, explain:"A maxila se forma predominantemente por ossificação intramembranosa."},

  {q: "A teoria que estuda como sinais ambientais modulam a expressão genética no crescimento craniofacial chama-se:",
   choices:["Homeostase craniana","Epigenética","Embriologia diferencial","Neoformação"],
   answer:1, explain:"Epigenética refere-se à modulação gênica por fatores ambientais."},

  {q: "Aos 12 anos, a maxila já atingiu aproximadamente:",
   choices:["50% do seu crescimento final","75% do seu crescimento final","95–98% do seu crescimento final","100% do seu crescimento final"],
   answer:2, explain:"Ao redor de 12 anos a maxila está muito próxima do tamanho final (~95–98%)."},

  {q: "Qual dos mecanismos NÃO é considerado base do crescimento ósseo?",
   choices:["Remodelação","Deslizamento","Deslocamento","Calcificação direta"],
   answer:3, explain:"Os mecanismos básicos são remodelação, deslizamento e deslocamento; calcificação direta não."},

  {q: "A erupção do primeiro dente decíduo normalmente ocorre por volta de:",
   choices:["1 mês","6 meses","18 meses","3 anos"],
   answer:1, explain:"Primeiro dente decíduo erupciona em média aos 6 meses."},

  {q: "O espaço de Nance (leeway space) mandibular por hemiarco é em média:",
   choices:["0,5 mm","1,7 mm","3,4 mm","5,0 mm"],
   answer:1, explain:"Mandíbula: cerca de 1,7 mm por hemiarco (3,4 mm no total)."},  

  {q: "Na dentição decídua a presença de grandes diastemas generalizados é característica de qual tipo de arco segundo Baume?",
   choices:["Tipo I","Tipo II","Tipo III","Não se relaciona com Baume"],
   answer:0, explain:"Arco Tipo I de Baume contém espaços primatas e diastemas generalizados."},

  {q: "Qual é a definição correta de overjet (sobressaliência)?",
   choices:["Distância vertical entre incisivos superiores e inferiores","Distância horizontal entre incisivo inferior e superior","Distância entre caninos","Grau de rotação incisal"],
   answer:1, explain:"Overjet = distância horizontal entre incisivos superiores e inferiores."},

  {q: "A curva de Spee deveria aparecer idealmente como:",
   choices:["Muito acentuada","Plana ou suave","Inexistente somente em crianças","Em formato em S"],
   answer:1, explain:"Curva de Spee deve ser plana ou suave."},

  {q: "Na classificação de Angle, a relação molar onde a cúspide mesiovestibular do 1º molar superior oclui no sulco mesiovestibular do 1º molar inferior é:",
   choices:["Classe I","Classe II","Classe III","Classe IV"],
   answer:0, explain:"Essa é a Classe I de Angle."},

  {q: "Em um paciente com SNA aumentado e SNB diminuído, a relação ANB provavelmente será:",
   choices:["Negativa","Zero","Aumentada (positivo)","Indeterminada"],
   answer:2, explain:"SNA↑ e SNB↓ → ANB positivo aumentado."},

  {q: "Qual fecho labial em repouso indica selamento labial passivo adequado?",
   choices:["Lábios sempre abertos","Selamento labial passivo presente","Selamento só durante esforço","Selamento apenas durante fala"],
   answer:1, explain:"O selamento labial passivo é normal."},

  {q: "O ângulo nasolabial considerado “normal” é próximo de:",
   choices:["60°","90°","110°","140°"],
   answer:1, explain:"Valor de referência próximo a 90°."},

  {q: "A perda precoce de dentes decíduos pode causar todos, EXCETO:",
   choices:["Migração dentária","Aumento do perímetro do arco","Interposição lingual","Alterações fonéticas"],
   answer:1, explain:"Ela reduz, não aumenta, o perímetro do arco."},

  {q: "Qual aparelho é indicado quando há perda precoce de múltiplos dentes posteriores e risco de inclinação lingual dos incisivos?",
   choices:["Banda-alça","Coroa-alça","Arco lingual de Nance","Placa de Hawley"],
   answer:2, explain:"O arco lingual é indicado nesses casos."},

  {q: "Em relação aos côndilos mandibulares, por que há componente endocondral de crescimento?",
   choices:["Não recebem forças musculares","Suportam pressão muscular e crescem em direção à ATM","Porque a maxila cresce mais rápido","Apenas por herança genética"],
   answer:1, explain:"O crescimento condilar é endocondral e responde à função."},

  {q: "A fase denominada “patinho feio” ocorre em qual período?",
   choices:["Intertransitório (8–10 anos)","1º transitório (6–8 anos)","2º transitório (10–12 anos)","Adolescência"],
   answer:1, explain:"Patinho feio é no 1º período transitório (6–8 anos)."},  

  {q: "Qual achado sugere necessidade de expansão de arcada ao invés de extrações seriadas?",
   choices:["Massa dentária genética","Apinhamento ambiental com arcos atrésicos","Anquilose","Supranumerários"],
   answer:1, explain:"Apinhamento ambiental pode ser resolvido com expansão."},

  {q: "Sobre anquilose dentária, marque a correta:",
   choices:["Movimenta-se normalmente","União entre cemento e osso, sem movimentação","Sempre causa perda do dente","É tratada com aparelho removível simples"],
   answer:1, explain:"Anquilose = fusão cemento-osso, impede movimento ortodôntico."},

  {q: "A análise de modelos para discrepância (DM = EP − ER) com resultado negativo indica:",
   choices:["Sobra de espaço","Sem discrepância","Falta de espaço","Indicação cirúrgica"],
   answer:2, explain:"DM negativo = falta de espaço (apinhamento)."},

  {q: "Qual classificação descreve deslocamento dentário individual por rotação?",
   choices:["Giroversão","Mesioversão","Axiversão","Supraversão"],
   answer:0, explain:"Giroversão = rotação do dente em torno do eixo."},

  {q: "A relação distal dos segundos molares decíduos com plano terminal reto evolui para:",
   choices:["Classe II","Classe III","Classe I ou topo a topo","Molar invertido"],
   answer:2, explain:"Geralmente evolui para Classe I ou topo a topo."},

  {q: "Em cefalometria, qual ângulo indica posição sagital do ponto A em relação à base craniana?",
   choices:["SNB","SNA","ANB","FMA"],
   answer:1, explain:"SNA indica posição do ponto A (maxila)."},  

  {q: "Para avaliação frontal da simetria facial, usa-se linha que passa por:",
   choices:["Glabela perpendicular ao plano infraorbitário","Nasion paralelo a Frankfurt","Menton paralelo ao sagital","Tragus ao pogônio"],
   answer:0, explain:"Linha pela glabela perpendicular ao infraorbitário."},

  {q: "Indicação típica de um mantenedor removível funcional em crianças:",
   choices:["Substituir molares permanentes","Perda de dentes anteriores em pacientes cooperadores","Tratamento de anquilose","Controle de mordida profunda"],
   answer:1, explain:"Indicado para perdas anteriores e estética/fala."},

  {q: "Curva de Spee muito acentuada está associada a:",
   choices:["Mordida aberta","Apinhamento e sobremordida profunda","Diastemas","Rotação dentária"],
   answer:1, explain:"Relaciona-se a sobremordida profunda/apinhamento."},

  {q: "Sobre formação dos germes dentais decíduos:",
   choices:["Iniciam após nascimento","Iniciam nas 6 primeiras semanas intrauterinas","Iniciam aos 6 meses de vida","Somente no período fetal tardio"],
   answer:1, explain:"Formação começa por volta da 6ª semana intrauterina."},

  {q: "Objetivo principal das extrações seriadas na dentição mista:",
   choices:["Ampliar arco por expansão","Reduzir massa dentária genética","Estimular erupção dos pré-molares","Evitar aparelhos fixos"],
   answer:1, explain:"Extrações seriadas reduzem massa dentária genética."},

  {q: "A classificação de Lischer é usada para:",
   choices:["Más oclusões esqueléticas","Más posições dentárias individuais","Crescimento craniofacial pré-natal","Ângulos cefalométricos"],
   answer:1, explain:"Lischer = más posições dentárias (giroversão, etc.)."},

  {q: "Espaços primatas na dentição decídua tendem a:",
   choices:["Piora da oclusão permanente","Favorecer alinhamento permanente","Causar apinhamento","Exigir extrações"],
   answer:1, explain:"Espaços primatas favorecem alinhamento."},

  {q: "Ângulo nasolabial maior que 110° é descrito como:",
   choices:["Fechado","Normal","Aberto","Invertido"],
   answer:2, explain:">110° = aberto."},

  {q: "Mordida em topo (edge-to-edge) ocorre quando:",
   choices:["Sobremordida excessiva","Dentes incisal/incisal em topo","Maxilar retraído","Somente em dentição decídua"],
   answer:1, explain:"Edge-to-edge = contato incisal sem sobreposição."},

  {q: "A tomografia computadorizada em ortodontia é indicada para:",
   choices:["Cáries interproximais","Dentes inclusos e análise óssea","Modelos de estudo","Medir overbite"],
   answer:1, explain:"Indicada para inclusos e qualidade óssea (mini-implantes)."},  

  {q: "Em crescimento craniofacial pré-natal, semanas críticas para formação facial:",
   choices:["1ª–3ª","4ª–8ª","12ª–20ª","Último trimestre"],
   answer:1, explain:"Formação crítica da face = 4ª a 8ª semanas."},

  {q: "Avaliação do sulco mentolabial informa principalmente sobre:",
   choices:["Incisivos superiores","Incisivos inferiores","Arco zigomático","Rima labial"],
   answer:1, explain:"Reflete posição dos incisivos inferiores."},

  {q: "Objetivo da ortopedia funcional dos maxilares:",
   choices:["Mover dentes individualmente","Atuar sobre crescimento das bases ósseas","Extrair dentes","Somente estética"],
   answer:1, explain:"OFM atua sobre crescimento das bases ósseas."},

  {q: "Quando há degrau distal nos segundos molares decíduos, evolução mais provável:",
   choices:["Classe I","Classe II","Classe III","Topo a topo"],
   answer:1, explain:"Degrau distal evolui para Classe II."},

  {q: "Apinhamento definitivo genético: conduta mais indicada:",
   choices:["Esperar correção","Extrações seriadas","Expansão sem considerar genética","Só aparelho removível"],
   answer:1, explain:"Apinhamento genético → extrações seriadas."},

  {q: "Para traçado cefalométrico, qual não é essencial?",
   choices:["Radiografia nítida","Papel ultraphan","Exame de sangue","Régua/esquadro"],
   answer:2, explain:"Exame de sangue não é necessário."},

  {q: "A apófise condilar é importante porque:",
   choices:["Não cresce","Cresce por ossificação endocondral","Só auxilia na mastigação","Cresce apenas por intramembranosa"],
   answer:1, explain:"É sítio de ossificação endocondral, crescimento mandibular."}
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
