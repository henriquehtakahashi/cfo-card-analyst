const APP_KEY="cfo-card-analyst-state-v1";
const DB_NAME="cfo-card-analyst-files";
const DB_VERSION=1;

const CATEGORIES=[
  "Alimentação","Veículos e Transporte","Saúde","Assinaturas e Serviços",
  "Parcelados / Bens / Seguros","Família e Filhos","Lazer e Viagens",
  "Compras Pessoais","Educação e Desenvolvimento","Pets","Financeiro",
  "Moradia e Casa"
];

const TREE={
  "Alimentação":["Supermercado","Atacado","Restaurantes","Delivery","Padaria e café","Conveniência","Hortifruti e açougue"],
  "Veículos e Transporte":["Combustível","Pedágio / Sem Parar","Estacionamento","Manutenção","Seguro / documentação","Lavagem","Aplicativos de transporte","Acessórios / peças"],
  "Saúde":["Farmácia","Consultas","Exames","Medicamentos recorrentes","Medicamentos pontuais","Equipamentos de saúde","Ótica"],
  "Assinaturas e Serviços":["Streaming","Telefonia","Produtividade","Armazenamento em nuvem","Clubes e benefícios"],
  "Parcelados / Bens / Seguros":["Eletrônicos","Vestuário parcelado","Seguro","Automotivo parcelado","Outros parcelados"],
  "Família e Filhos":["Escola","Material escolar","Presentes","Festas","Lazer infantil","Atividades extracurriculares"],
  "Lazer e Viagens":["Restaurantes de lazer","Hotéis / passagens","Parques / eventos","Férias","Experiências familiares"],
  "Compras Pessoais":["Marketplace","Vestuário","Cuidados pessoais","Eletrônicos","Hobby","Outras compras"],
  "Educação e Desenvolvimento":["Cursos","Livros","Aplicativos educacionais","Material de estudo","Idiomas"],
  "Pets":["Alimentação pet","Veterinário","Medicamentos","Banho e tosa","Acessórios"],
  "Financeiro":["Juros","IOF","Tarifas","Seguros","Anuidade"],
  "Moradia e Casa":["Supermercado doméstico","Utilidades","Manutenção","Construção e decoração","Serviços domésticos"]
};

const DEFAULT_RULES=[
  // Veículos e transporte
  {pattern:"SEM PARAR",category:"Veículos e Transporte",subcategory:"Pedágio / Sem Parar",type:"Semi-obrigatório",confidence:0.99},
  {pattern:"AUTO POSTO",category:"Veículos e Transporte",subcategory:"Combustível",type:"Recorrente",confidence:0.98},
  {pattern:"POSTO",category:"Veículos e Transporte",subcategory:"Combustível",type:"Recorrente",confidence:0.86},
  {pattern:"MARLUB",category:"Veículos e Transporte",subcategory:"Manutenção",type:"Parcelado",confidence:0.99},
  {pattern:"ALLPARK",category:"Veículos e Transporte",subcategory:"Estacionamento",type:"Variável",confidence:0.99},
  {pattern:"ESTACIONAMENTO",category:"Veículos e Transporte",subcategory:"Estacionamento",type:"Variável",confidence:0.95},
  {pattern:"LAVA RAPIDO",category:"Veículos e Transporte",subcategory:"Lavagem",type:"Variável",confidence:0.97},
  {pattern:"BOITUVA COMERCIO",category:"Veículos e Transporte",subcategory:"Combustível",type:"Variável",confidence:0.78},
  {pattern:"UBER",category:"Veículos e Transporte",subcategory:"Aplicativos de transporte",type:"Variável",confidence:0.96},
  {pattern:"99APP",category:"Veículos e Transporte",subcategory:"Aplicativos de transporte",type:"Variável",confidence:0.96},

  // Alimentação
  {pattern:"IFOOD",category:"Alimentação",subcategory:"Delivery",type:"Variável",confidence:0.99},
  {pattern:"IFD",category:"Alimentação",subcategory:"Delivery",type:"Variável",confidence:0.96},
  {pattern:"RAPPI",category:"Alimentação",subcategory:"Delivery",type:"Variável",confidence:0.98},
  {pattern:"PADARIA",category:"Alimentação",subcategory:"Padaria e café",type:"Variável",confidence:0.97},
  {pattern:"CAFE",category:"Alimentação",subcategory:"Padaria e café",type:"Variável",confidence:0.82},
  {pattern:"RESTAURANTE",category:"Alimentação",subcategory:"Restaurantes",type:"Variável",confidence:0.97},
  {pattern:"GRILL",category:"Alimentação",subcategory:"Restaurantes",type:"Variável",confidence:0.94},
  {pattern:"PIZZ",category:"Alimentação",subcategory:"Restaurantes",type:"Variável",confidence:0.95},
  {pattern:"HAMBUR",category:"Alimentação",subcategory:"Restaurantes",type:"Variável",confidence:0.94},
  {pattern:"SUSHI",category:"Alimentação",subcategory:"Restaurantes",type:"Variável",confidence:0.95},
  {pattern:"ATACADAO",category:"Alimentação",subcategory:"Atacado",type:"Variável",confidence:0.99},
  {pattern:"ASSAI",category:"Alimentação",subcategory:"Atacado",type:"Variável",confidence:0.98},
  {pattern:"CARREFOUR",category:"Alimentação",subcategory:"Supermercado",type:"Variável",confidence:0.96},
  {pattern:"SUPERMERCADO",category:"Alimentação",subcategory:"Supermercado",type:"Variável",confidence:0.97},
  {pattern:"MERCADO",category:"Alimentação",subcategory:"Supermercado",type:"Variável",confidence:0.72},
  {pattern:"HORTIFRUTI",category:"Alimentação",subcategory:"Hortifruti e açougue",type:"Variável",confidence:0.97},
  {pattern:"ACOUGUE",category:"Alimentação",subcategory:"Hortifruti e açougue",type:"Variável",confidence:0.97},

  // Saúde
  {pattern:"RD SAUDE",category:"Saúde",subcategory:"Farmácia",type:"Variável",confidence:0.99},
  {pattern:"RAIA",category:"Saúde",subcategory:"Farmácia",type:"Variável",confidence:0.99},
  {pattern:"DROGARIA",category:"Saúde",subcategory:"Farmácia",type:"Variável",confidence:0.98},
  {pattern:"DROGA",category:"Saúde",subcategory:"Farmácia",type:"Variável",confidence:0.88},
  {pattern:"FARMACIA",category:"Saúde",subcategory:"Farmácia",type:"Variável",confidence:0.98},
  {pattern:"GRANDVISION",category:"Saúde",subcategory:"Ótica",type:"Parcelado",confidence:0.99},
  {pattern:"OTICA",category:"Saúde",subcategory:"Ótica",type:"Variável",confidence:0.97},
  {pattern:"SUPERSAUDAVEIS",category:"Saúde",subcategory:"Medicamentos recorrentes",type:"Parcelado",confidence:0.82},
  {pattern:"LABORATORIO",category:"Saúde",subcategory:"Exames",type:"Variável",confidence:0.95},
  {pattern:"CLINICA",category:"Saúde",subcategory:"Consultas",type:"Variável",confidence:0.87},

  // Assinaturas e serviços
  {pattern:"APPLE",category:"Assinaturas e Serviços",subcategory:"Produtividade",type:"Recorrente",confidence:0.94},
  {pattern:"NETFLIX",category:"Assinaturas e Serviços",subcategory:"Streaming",type:"Recorrente",confidence:0.99},
  {pattern:"GLOBOPLAY",category:"Assinaturas e Serviços",subcategory:"Streaming",type:"Recorrente",confidence:0.99},
  {pattern:"SPOTIFY",category:"Assinaturas e Serviços",subcategory:"Streaming",type:"Recorrente",confidence:0.99},
  {pattern:"YOUTUBE",category:"Assinaturas e Serviços",subcategory:"Streaming",type:"Recorrente",confidence:0.92},
  {pattern:"CLARO",category:"Assinaturas e Serviços",subcategory:"Telefonia",type:"Recorrente",confidence:0.96},
  {pattern:"CARTOLA",category:"Assinaturas e Serviços",subcategory:"Clubes e benefícios",type:"Recorrente",confidence:0.99},
  {pattern:"MELI+",category:"Assinaturas e Serviços",subcategory:"Clubes e benefícios",type:"Recorrente",confidence:0.96},
  {pattern:"MELI MAIS",category:"Assinaturas e Serviços",subcategory:"Clubes e benefícios",type:"Recorrente",confidence:0.96},
  {pattern:"GOODNOTES",category:"Assinaturas e Serviços",subcategory:"Produtividade",type:"Recorrente",confidence:0.99},
  {pattern:"OPENAI",category:"Assinaturas e Serviços",subcategory:"Produtividade",type:"Recorrente",confidence:0.99},
  {pattern:"CHATGPT",category:"Assinaturas e Serviços",subcategory:"Produtividade",type:"Recorrente",confidence:0.99},
  {pattern:"ICLOUD",category:"Assinaturas e Serviços",subcategory:"Armazenamento em nuvem",type:"Recorrente",confidence:0.99},

  // Família, lazer e viagens
  {pattern:"ANIMALIA",category:"Lazer e Viagens",subcategory:"Parques / eventos",type:"Pontual",confidence:0.99},
  {pattern:"HOTEL",category:"Lazer e Viagens",subcategory:"Hotéis / passagens",type:"Pontual",confidence:0.96},
  {pattern:"POUSADA",category:"Lazer e Viagens",subcategory:"Hotéis / passagens",type:"Pontual",confidence:0.96},
  {pattern:"AIRBNB",category:"Lazer e Viagens",subcategory:"Hotéis / passagens",type:"Pontual",confidence:0.99},
  {pattern:"BOOKING",category:"Lazer e Viagens",subcategory:"Hotéis / passagens",type:"Pontual",confidence:0.99},
  {pattern:"PARQUE",category:"Lazer e Viagens",subcategory:"Parques / eventos",type:"Pontual",confidence:0.94},
  {pattern:"ESCOLA",category:"Família e Filhos",subcategory:"Escola",type:"Obrigatório",confidence:0.95},
  {pattern:"COLEGIO",category:"Família e Filhos",subcategory:"Escola",type:"Obrigatório",confidence:0.96},
  {pattern:"BRINQUED",category:"Família e Filhos",subcategory:"Presentes",type:"Variável",confidence:0.82},

  // Compras pessoais e bens
  {pattern:"MERCADOLIVRE",category:"Compras Pessoais",subcategory:"Marketplace",type:"Variável",confidence:0.82},
  {pattern:"MERCADO LIVRE",category:"Compras Pessoais",subcategory:"Marketplace",type:"Variável",confidence:0.82},
  {pattern:"AMAZON",category:"Compras Pessoais",subcategory:"Marketplace",type:"Variável",confidence:0.78},
  {pattern:"SHOP2GETHER",category:"Parcelados / Bens / Seguros",subcategory:"Vestuário parcelado",type:"Parcelado",confidence:0.98},
  {pattern:"SESTINI",category:"Parcelados / Bens / Seguros",subcategory:"Outros parcelados",type:"Parcelado",confidence:0.92},
  {pattern:"DELL",category:"Parcelados / Bens / Seguros",subcategory:"Eletrônicos",type:"Parcelado",confidence:0.99},
  {pattern:"EDIFIER",category:"Parcelados / Bens / Seguros",subcategory:"Eletrônicos",type:"Parcelado",confidence:0.99},
  {pattern:"MAGALU",category:"Compras Pessoais",subcategory:"Eletrônicos",type:"Variável",confidence:0.78},
  {pattern:"RENNER",category:"Compras Pessoais",subcategory:"Vestuário",type:"Variável",confidence:0.94},
  {pattern:"RIACHUELO",category:"Compras Pessoais",subcategory:"Vestuário",type:"Variável",confidence:0.94},

  // Moradia
  {pattern:"LEROY",category:"Moradia e Casa",subcategory:"Construção e decoração",type:"Variável",confidence:0.97},
  {pattern:"TELHANORTE",category:"Moradia e Casa",subcategory:"Construção e decoração",type:"Variável",confidence:0.97},
  {pattern:"TOKSTOK",category:"Moradia e Casa",subcategory:"Construção e decoração",type:"Variável",confidence:0.94},
  {pattern:"CASA",category:"Moradia e Casa",subcategory:"Construção e decoração",type:"Variável",confidence:0.55},

  // Educação
  {pattern:"UDEMY",category:"Educação e Desenvolvimento",subcategory:"Cursos",type:"Variável",confidence:0.99},
  {pattern:"CURSO",category:"Educação e Desenvolvimento",subcategory:"Cursos",type:"Variável",confidence:0.92},
  {pattern:"LIVRARIA",category:"Educação e Desenvolvimento",subcategory:"Livros",type:"Variável",confidence:0.96},
  {pattern:"CULTURA INGLESA",category:"Educação e Desenvolvimento",subcategory:"Idiomas",type:"Recorrente",confidence:0.99},

  // Pets
  {pattern:"PETZ",category:"Pets",subcategory:"Alimentação pet",type:"Variável",confidence:0.98},
  {pattern:"PETLOVE",category:"Pets",subcategory:"Alimentação pet",type:"Variável",confidence:0.98},
  {pattern:"VETERIN",category:"Pets",subcategory:"Veterinário",type:"Variável",confidence:0.96},
  {pattern:"PET SHOP",category:"Pets",subcategory:"Alimentação pet",type:"Variável",confidence:0.94},

  // Financeiro
  {pattern:"YELUM",category:"Financeiro",subcategory:"Seguros",type:"Recorrente",confidence:0.99},
  {pattern:"SEGURO",category:"Financeiro",subcategory:"Seguros",type:"Recorrente",confidence:0.90},
  {pattern:"IOF",category:"Financeiro",subcategory:"IOF",type:"Obrigatório",confidence:0.99},
  {pattern:"JUROS",category:"Financeiro",subcategory:"Juros",type:"Obrigatório",confidence:0.99},
  {pattern:"ANUIDADE",category:"Financeiro",subcategory:"Anuidade",type:"Recorrente",confidence:0.99}
];

const SEED=[
  {
    id:"2026-01",month:"2026-01",dueDate:"2026-01-16",total:1000,adjustedTotal:900,
    nextCommitment:100,futureTotal:300,pointInTime:100,
    context:"Dados demonstrativos. Importe seu backup privado para carregar o histórico real.",
    categories:{
      "Alimentação":350,"Saúde":100,"Veículos e Transporte":200,
      "Assinaturas e Serviços":100,"Parcelados / Bens / Seguros":100,
      "Compras Pessoais":50
    },
    vehicleBreakdown:{"Pedágio / Sem Parar":120,"Combustível":50,"Manutenção":30,"Estacionamento":0},
    transactions:[],fileId:null,isEstimate:true
  }
];


function migrateState(input){
  const data=input||defaultState();
  data.statements=(data.statements||[]).map(statement=>{
    statement.categories=statement.categories||{};

    const legacyReview=Number(statement.categories["Revisão necessária"]||0);
    const legacyOther=Number(statement.categories["Outros / Não classificados"]||0);
    const legacyGrouped=Number(statement.categories["Compras / Educação / Diversos"]||0);
    const migrated=legacyReview+legacyOther+legacyGrouped;

    delete statement.categories["Revisão necessária"];
    delete statement.categories["Outros / Não classificados"];
    delete statement.categories["Compras / Educação / Diversos"];

    if(migrated>0){
      statement.categories["Compras Pessoais"]=Number(statement.categories["Compras Pessoais"]||0)+migrated;
      const note="Valores antigos sem abertura por transação foram classificados provisoriamente em Compras Pessoais. Reanexe o PDF para maior precisão.";
      if(!(statement.context||"").includes(note)) statement.context=(statement.context?statement.context+" ":"")+note;
    }

    statement.transactions=(statement.transactions||[]).map(t=>{
      if(["Revisão necessária","Outros / Não classificados","Compras / Educação / Diversos"].includes(t.category)){
        const suggestion=classify(t.merchant||"");
        t.category=suggestion.category;
        t.subcategory=suggestion.subcategory;
        t.type=t.type||suggestion.type;
        t.confidence=suggestion.confidence;
        t.needsReview=suggestion.needsReview;
      }
      return t;
    });
    return statement;
  });

  const learned=(data.rules||[]).filter(rule=>rule && rule.pattern);
  const merged=[...learned];
  DEFAULT_RULES.forEach(rule=>{
    if(!merged.some(existing=>normalizeMerchant(existing.pattern)===normalizeMerchant(rule.pattern))){
      merged.push(rule);
    }
  });
  data.rules=merged;
  data.version=4;
  return data;
}

function defaultState(){
  return {
    version:4,statements:SEED,rules:DEFAULT_RULES,
    goals:{foodMin:3000,foodMax:3500,vehiclesMin:1200,vehiclesMax:1500,
      semPararMin:800,semPararMax:900,subscriptionsMax:800,
      healthMin:700,healthMax:1000,diverseMin:1000,diverseMax:1500,
      adjustedTargetMin:11000,adjustedTargetMax:12000,containmentWithoutInstallments:6500}
  }
}
let state=loadState();
let currentReview=null;

function loadState(){
  try{
    const raw=localStorage.getItem(APP_KEY);
    return migrateState(raw?JSON.parse(raw):defaultState());
  }catch(e){return defaultState()}
}
function saveState(){localStorage.setItem(APP_KEY,JSON.stringify(state))}
function money(v){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(Number(v||0))}
function monthLabel(m){const [y,mo]=m.split("-");return new Date(+y,+mo-1,1).toLocaleDateString("pt-BR",{month:"short",year:"2-digit"}).replace(".","")}
function dateBR(v){if(!v)return"—";const [y,m,d]=v.split("-");return `${d}/${m}/${y}`}
function avg(a){return a.length?a.reduce((x,y)=>x+y,0)/a.length:0}
function median(a){const v=[...a].sort((x,y)=>x-y);if(!v.length)return 0;return v.length%2?v[(v.length-1)/2]:(v[v.length/2-1]+v[v.length/2])/2}
function std(a){if(a.length<2)return 0;const m=avg(a);return Math.sqrt(a.reduce((s,v)=>s+(v-m)**2,0)/(a.length-1))}
function pct(a,b){return b?(a/b)*100:0}
function sortedStatements(){return [...state.statements].sort((a,b)=>a.month.localeCompare(b.month))}
function latest(){return sortedStatements().at(-1)}
function esc(v){return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}

const titles={
  dashboard:["Visão geral","Histórico do cartão com leitura gerencial."],
  statements:["Faturas","Mês a mês, bruto, ajustado e compromissos futuros."],
  upload:["Adicionar fatura","Armazene o PDF e revise os lançamentos localmente."],
  tree:["Árvore de gastos","Categorias, subcategorias e participação no mês."],
  trends:["Tendências","Médias, volatilidade e evolução das categorias."],
  installments:["Parcelados","Comprometimento futuro e visão de caixa."],
  rules:["Regras","Classificação reutilizável por estabelecimento."],
  backup:["Backup","Proteja seu histórico local."]
};

function go(view){
  document.querySelectorAll(".view").forEach(x=>x.classList.remove("active"));
  document.querySelector(`#view-${view}`).classList.add("active");
  document.querySelectorAll(".nav").forEach(x=>x.classList.toggle("active",x.dataset.view===view));
  document.querySelector("#title").textContent=titles[view][0];
  document.querySelector("#subtitle").textContent=titles[view][1];
}
document.querySelectorAll(".nav").forEach(b=>b.onclick=()=>go(b.dataset.view));
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>go(b.dataset.go));

function renderAll(){renderDashboard();renderStatements();renderTreeFilter();renderTree();renderTrends();renderInstallments();renderRules()}

function renderDashboard(){
  const list=sortedStatements(), last=list.at(-1), prev=list.at(-2), adjusted=list.map(s=>s.adjustedTotal);
  const variation=prev?pct(last.adjustedTotal-prev.adjustedTotal,prev.adjustedTotal):0;
  const risk=last.adjustedTotal<=12000?"Saudável":last.adjustedTotal<=14000?"Atenção":last.adjustedTotal<=16000?"Alto":"Crítico";
  const riskClass=risk==="Saudável"?"good":risk==="Atenção"?"warn":"bad";
  const kpis=[
    ["Fatura bruta",money(last.total),monthLabel(last.month),""],
    ["Fatura ajustada",money(last.adjustedTotal),`${variation>=0?"+":""}${variation.toFixed(1)}% vs mês anterior`,variation>10?"bad":variation>0?"warn":"good"],
    ["Média ajustada",money(avg(adjusted)),"Histórico disponível",""],
    ["Mediana",money(median(adjusted)),"Reduz efeito de outliers",""],
    ["Desvio padrão",money(std(adjusted)),"Volatilidade do histórico",std(adjusted)>2000?"warn":""],
    ["Pontuais excluídos",money(last.pointInTime||0),"Mantidos no caixa bruto",""],
    ["Sugestões a confirmar",
      `${(last.transactions||[]).filter(t=>t.needsReview).length}`,
      "Itens classificados com baixa confiança",
      (last.transactions||[]).some(t=>t.needsReview)?"warn":"good"],
    ["Próxima fatura",money(last.nextCommitment),"Compromisso já contratado","warn"],
    ["Parcelado futuro",money(last.futureTotal),"Saldo para meses seguintes",""],
    ["Grau de risco",risk,"Com base na fatura ajustada",riskClass],
    ["Contenção sem parcelas",money(state.goals.containmentWithoutInstallments),"Premissa de pior caso saudável","good"]
  ];
  document.querySelector("#kpis").innerHTML=kpis.map(k=>`<div class="kpi ${k[3]}"><div class="label">${k[0]}</div><div class="value">${k[1]}</div><div class="hint">${k[2]}</div></div>`).join("");

  const max=Math.max(...list.flatMap(s=>[s.total,s.adjustedTotal]));
  document.querySelector("#monthly-chart").innerHTML=`
    <div class="legend"><span class="gross">Bruta</span><span class="adjusted">Ajustada</span></div>
    <div class="chart">${list.map(s=>`
      <div class="month-bars">
        <div class="bar gross" style="height:${Math.max(5,s.total/max*180)}px" title="${money(s.total)}"></div>
        <div class="bar adjusted" style="height:${Math.max(5,s.adjustedTotal/max*180)}px" title="${money(s.adjustedTotal)}"></div>
        <div class="month-label">${monthLabel(s.month)}</div>
      </div>`).join("")}</div>`;

  const food=last.categories["Alimentação"]||0;
  document.querySelector("#diagnosis").innerHTML=`
    <div class="box"><strong>Leitura geral: ${risk}</strong>Fatura ajustada em ${money(last.adjustedTotal)}.</div>
    <div class="box"><strong>Alimentação: ${food<=state.goals.foodMax?"dentro do alvo":"acima do alvo"}</strong>${money(food)} versus meta de ${money(state.goals.foodMin)} a ${money(state.goals.foodMax)}.</div>
    <div class="box"><strong>Parcelados: ${last.nextCommitment<=2000?"controlado":"pressão elevada"}</strong>Próximo mês já começa com ${money(last.nextCommitment)}.</div>
    <div class="box"><strong>Disciplina financeira</strong>Os meses iniciais foram registrados sem saldo financiado.</div>`;

  const totalCat=Object.values(last.categories).reduce((a,b)=>a+b,0);
  document.querySelector("#category-bars").innerHTML=Object.entries(last.categories).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`
    <div class="cat-row"><div class="cat-head"><span>${k}</span><strong>${money(v)} · ${pct(v,totalCat).toFixed(0)}%</strong></div>
    <div class="progress"><span style="width:${pct(v,totalCat)}%"></span></div></div>`).join("");

  const vehicles=list.slice(-3), subs=["Pedágio / Sem Parar","Combustível","Manutenção","Estacionamento"];
  document.querySelector("#vehicle-table").innerHTML=`
    <div class="vehicle-table">
      <div class="vehicle-row header"><span>Subgrupo</span>${vehicles.map(s=>`<span>${monthLabel(s.month)}</span>`).join("")}</div>
      ${subs.map(sub=>`<div class="vehicle-row"><span>${sub}</span>${vehicles.map(s=>`<span>${money((s.vehicleBreakdown||{})[sub]||0)}</span>`).join("")}</div>`).join("")}
      <div class="vehicle-row"><strong>Total</strong>${vehicles.map(s=>`<strong>${money(s.categories["Veículos e Transporte"]||0)}</strong>`).join("")}</div>
    </div>`;
}

function renderStatements(){
  const list=[...sortedStatements()].reverse();
  document.querySelector("#statements-list").innerHTML=list.map(s=>`
    <article class="statement-card">
      <div><div class="month">${monthLabel(s.month)}</div><div class="muted">Venc. ${dateBR(s.dueDate)} ${s.isEstimate?`· <span class="badge">estimativa inicial</span>`:""}</div></div>
      <div class="metric-mini"><span class="muted">Bruta</span><strong>${money(s.total)}</strong></div>
      <div class="metric-mini"><span class="muted">Ajustada</span><strong>${money(s.adjustedTotal)}</strong></div>
      <div class="metric-mini"><span class="muted">Pontuais</span><strong>${money(s.pointInTime||0)}</strong></div>
      <div class="metric-mini"><span class="muted">Próximo mês</span><strong>${money(s.nextCommitment)}</strong></div>
      <button class="secondary" onclick="openStatement('${s.id}')">Abrir</button>
    </article>`).join("");
}

window.openStatement=function(id){
  const s=state.statements.find(x=>x.id===id);
  document.querySelector("#dialog-title").textContent=`Fatura ${monthLabel(s.month)}`;
  document.querySelector("#dialog-subtitle").textContent=`Vencimento ${dateBR(s.dueDate)}`;
  document.querySelector("#dialog-content").innerHTML=`
    <div class="summary-grid">
      <div class="summary-item"><span>Total bruto</span><strong>${money(s.total)}</strong></div>
      <div class="summary-item"><span>Total ajustado</span><strong>${money(s.adjustedTotal)}</strong></div>
      <div class="summary-item"><span>Pontuais</span><strong>${money(s.pointInTime||0)}</strong></div>
      <div class="summary-item"><span>Parcelado futuro</span><strong>${money(s.futureTotal)}</strong></div>
    </div>
    <h3>Contexto</h3><p>${s.context||"Sem observações."}</p>
    <h3>Categorias</h3>
    <div class="table-wrap"><table><thead><tr><th>Categoria</th><th>Valor</th><th>% ajustado</th></tr></thead>
    <tbody>${Object.entries(s.categories).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`<tr><td>${k}</td><td>${money(v)}</td><td>${pct(v,s.adjustedTotal).toFixed(1)}%</td></tr>`).join("")}</tbody></table></div>
    <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap">
      ${s.fileId?`<button class="primary" onclick="openPdf('${s.fileId}')">Abrir PDF armazenado</button>`:"<span class='badge'>PDF não anexado</span>"}
      <button class="secondary" onclick="deleteStatement('${s.id}')">Excluir mês</button>
    </div>`;
  document.querySelector("#statement-dialog").showModal();
}
document.querySelector("#close-dialog").onclick=()=>document.querySelector("#statement-dialog").close();

window.deleteStatement=function(id){
  if(!confirm("Excluir esta fatura do histórico local?"))return;
  state.statements=state.statements.filter(s=>s.id!==id);
  saveState();renderAll();document.querySelector("#statement-dialog").close();
}

function renderTreeFilter(){
  const sel=document.querySelector("#tree-month-filter"), cur=sel.value;
  sel.innerHTML=sortedStatements().map(s=>`<option value="${s.id}">${monthLabel(s.month)}</option>`).join("");
  sel.value=cur&&state.statements.some(s=>s.id===cur)?cur:latest().id;
  sel.onchange=renderTree;
}
function renderTree(){
  const id=document.querySelector("#tree-month-filter").value||latest().id;
  const s=state.statements.find(x=>x.id===id);if(!s)return;
  document.querySelector("#cost-tree").innerHTML=Object.entries(s.categories).sort((a,b)=>b[1]-a[1]).map(([cat,val])=>{
    const tx=(s.transactions||[]).filter(t=>t.category===cat), childTotals={};
    tx.forEach(t=>childTotals[t.subcategory||"Sem detalhamento"]=(childTotals[t.subcategory||"Sem detalhamento"]||0)+Number(t.amount));
    return `<div class="tree-node" onclick="this.classList.toggle('open')">
      <div class="tree-head"><strong>${cat}</strong><span>${money(val)}</span><span class="badge">${pct(val,s.adjustedTotal).toFixed(1)}%</span></div>
      <div class="tree-body">${(TREE[cat]||["Sem detalhamento"]).map(ch=>`<div class="subrow"><span>${ch}</span><span>${money(childTotals[ch]||0)}</span><span class="badge">${childTotals[ch]?"calculado":"sem detalhe"}</span></div>`).join("")}</div>
    </div>`;
  }).join("");
}

function renderTrends(){
  const list=sortedStatements(), cats=[...new Set(list.flatMap(s=>Object.keys(s.categories)))];
  const rows=cats.map(cat=>{
    const values=list.map(s=>s.categories[cat]||0), first=values[0], last=values.at(-1), change=first?pct(last-first,first):0;
    const trend=change>15?"Alta":change<-15?"Queda":std(values)>avg(values)*.25?"Volátil":"Estável";
    return {cat,values,mean:avg(values),med:median(values),sd:std(values),trend};
  }).sort((a,b)=>b.mean-a.mean);
  document.querySelector("#trends-panel").innerHTML=`
    <div class="table-wrap"><table><thead><tr><th>Categoria</th>${list.map(s=>`<th>${monthLabel(s.month)}</th>`).join("")}<th>Média</th><th>Mediana</th><th>Desvio</th><th>Tendência</th></tr></thead>
    <tbody>${rows.map(r=>`<tr><td><strong>${r.cat}</strong></td>${r.values.map(v=>`<td>${money(v)}</td>`).join("")}<td>${money(r.mean)}</td><td>${money(r.med)}</td><td>${money(r.sd)}</td><td><span class="badge">${r.trend}</span></td></tr>`).join("")}</tbody></table></div>`;
}

function renderInstallments(){
  const list=[...sortedStatements()].reverse();
  document.querySelector("#installments-panel").innerHTML=`
    <article class="panel"><div class="table-wrap"><table><thead><tr><th>Mês</th><th>Próxima fatura comprometida</th><th>Total futuro</th><th>Status</th></tr></thead>
    <tbody>${list.map(s=>`<tr><td>${monthLabel(s.month)}</td><td>${money(s.nextCommitment)}</td><td>${money(s.futureTotal)}</td><td><span class="badge">${s.nextCommitment>2000?"Atenção":"Controlado"}</span></td></tr>`).join("")}</tbody></table></div>
    <div class="notice warning" style="margin-top:16px"><strong>Regra:</strong> evite novos parcelamentos relevantes enquanto o compromisso do próximo mês estiver acima de R$ 2.000.</div></article>`;
}
function renderRules(){
  document.querySelector("#rules-list").innerHTML=state.rules.map((r,i)=>`
    <div class="rule-card"><div><strong>${r.pattern}</strong><div class="muted">Padrão do estabelecimento</div></div>
    <div>${r.category} → ${r.subcategory}<div class="muted">${r.type}</div></div>
    <button class="danger" onclick="removeRule(${i})">Excluir</button></div>`).join("");
}
window.removeRule=function(i){state.rules.splice(i,1);saveState();renderRules()}

function normalize(s){return String(s||"").replace(/\s+/g," ").trim()}
function normalizeMerchant(s){
  return normalize(s).toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .replace(/[^A-Z0-9+ ]/g," ").replace(/\s+/g," ").trim();
}
function parseBR(s){return Number(String(s||"").replace(/\s/g,"").replace(/\./g,"").replace(",",".").replace(/[^\d.-]/g,""))||0}
function findMoney(text,re){const m=text.match(re);return m?parseBR(m[1]):0}
function classify(merchant){
  const n=normalizeMerchant(merchant);
  const sorted=[...(state?.rules||DEFAULT_RULES)].sort((a,b)=>normalizeMerchant(b.pattern).length-normalizeMerchant(a.pattern).length);
  const rule=sorted.find(r=>n.includes(normalizeMerchant(r.pattern)));
  if(rule){
    const confidence=Number(rule.confidence||0.90);
    return {
      category:rule.category,subcategory:rule.subcategory,type:rule.type,
      confidence,needsReview:confidence<0.70,source:"regra"
    };
  }

  // Heurísticas amplas: sempre sugerem uma categoria real.
  if(/PANIFIC|CONFEIT|BOLOS|DOCES|SORVET/.test(n))
    return {category:"Alimentação",subcategory:"Padaria e café",type:"Variável",confidence:0.78,needsReview:false,source:"heurística"};
  if(/BAR |BAR$|BOTECO|CHOPERIA|LANCHONETE|BURGER|STEAK|CANTINA/.test(n))
    return {category:"Alimentação",subcategory:"Restaurantes",type:"Variável",confidence:0.76,needsReview:false,source:"heurística"};
  if(/MERCADINHO|EMPORIO|MERCEARIA|CONVENIENCIA/.test(n))
    return {category:"Alimentação",subcategory:"Conveniência",type:"Variável",confidence:0.72,needsReview:false,source:"heurística"};
  if(/COMBUST|GASOLINA|ETANOL/.test(n))
    return {category:"Veículos e Transporte",subcategory:"Combustível",type:"Recorrente",confidence:0.84,needsReview:false,source:"heurística"};
  if(/OFICINA|AUTOMOTIV|PNEU|AUTO PECAS|BORRACHARIA/.test(n))
    return {category:"Veículos e Transporte",subcategory:"Manutenção",type:"Variável",confidence:0.83,needsReview:false,source:"heurística"};
  if(/MEDIC|HOSPITAL|ODONTO|DENTAL|PSICO|FISIO/.test(n))
    return {category:"Saúde",subcategory:"Consultas",type:"Variável",confidence:0.76,needsReview:false,source:"heurística"};
  if(/ACADEMIA|GYM|FITNESS/.test(n))
    return {category:"Saúde",subcategory:"Consultas",type:"Recorrente",confidence:0.66,needsReview:true,source:"heurística"};
  if(/LIVRO|PAPELARIA|IDIOMAS|INGLES|ENGLISH/.test(n))
    return {category:"Educação e Desenvolvimento",subcategory:"Material de estudo",type:"Variável",confidence:0.72,needsReview:false,source:"heurística"};
  if(/VET|PET|RACAO/.test(n))
    return {category:"Pets",subcategory:"Alimentação pet",type:"Variável",confidence:0.76,needsReview:false,source:"heurística"};
  if(/MOVEIS|DECOR|MATERIAL DE CONSTRUCAO|FERRAGEM|ELETRICA|HIDRAULICA/.test(n))
    return {category:"Moradia e Casa",subcategory:"Construção e decoração",type:"Variável",confidence:0.78,needsReview:false,source:"heurística"};
  if(/CIA AEREA|LATAM|AZUL|GOL LINHAS|PASSAGEM|TURISMO|VIAGEM/.test(n))
    return {category:"Lazer e Viagens",subcategory:"Hotéis / passagens",type:"Pontual",confidence:0.84,needsReview:false,source:"heurística"};
  if(/ROUPAS|MODA|CALCADOS|SAPAT|TENIS|COSMET|PERFUM/.test(n))
    return {category:"Compras Pessoais",subcategory:"Vestuário",type:"Variável",confidence:0.74,needsReview:false,source:"heurística"};

  // Em vez de categoria genérica, usa Compras Pessoais como melhor estimativa.
  return {category:"Compras Pessoais",subcategory:"Outras compras",type:"Variável",confidence:0.45,needsReview:true,source:"estimativa"};
}
function parseStatementText(text,fileName){
  const dueMatch=text.match(/Vencimento:\s*(\d{2}\/\d{2}\/\d{4})/i)||text.match(/Com vencimento em:\s*(\d{2}\/\d{2}\/\d{4})/i);
  let dueDate="";if(dueMatch){const[d,m,y]=dueMatch[1].split("/");dueDate=`${y}-${m}-${d}`}
  const total=findMoney(text,/Total desta fatura\s*([\d.\s]+,\d{2})/i)||findMoney(text,/O total da sua fatura é:\s*([\d.\s]+,\d{2})/i);
  const next=findMoney(text,/Próxima fatura\s*([\d.\s]+,\d{2})/i);
  const future=findMoney(text,/Total para próximas faturas\s*([\d.\s]+,\d{2})/i);
  const month=dueDate?dueDate.slice(0,7):new Date().toISOString().slice(0,7);
  const tx=[],re=/(\d{2}\/\d{2})\s+([A-Z0-9À-Ü*_.\-\/\s]{3,80}?)\s+(-?\s*[\d.]+,\d{2})(?=\s|$)/gim;
  let m;const ignored=/TOTAL|PAGAMENTO|LIMITE|JUROS|IOF|PARCELAS FIXAS|VALOR TOTAL|SALDO FINANCIADO/i;
  while((m=re.exec(text))!==null){
    const merchant=normalize(m[2]);if(ignored.test(merchant))continue;
    const amount=parseBR(m[3]);if(!amount||Math.abs(amount)>100000)continue;
    const c=classify(merchant);
    tx.push({id:crypto.randomUUID(),date:m[1],merchant,amount,category:c.category,subcategory:c.subcategory,type:c.type,confidence:c.confidence,needsReview:c.needsReview,autoCategory:c.category,autoSubcategory:c.subcategory,excluded:false});
  }
  const unique=[],seen=new Set();tx.forEach(t=>{const k=`${t.date}|${t.merchant}|${t.amount}`;if(!seen.has(k)){seen.add(k);unique.push(t)}});
  return {id:month,month,dueDate,total,adjustedTotal:total,nextCommitment:next,futureTotal:future,context:"",transactions:unique,fileName};
}

async function extractPdf(file){
  if(!window.pdfjsLib)throw new Error("Biblioteca PDF não carregada.");
  pdfjsLib.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  const pdf=await pdfjsLib.getDocument({data:await file.arrayBuffer()}).promise;
  let text="";
  for(let p=1;p<=pdf.numPages;p++){const page=await pdf.getPage(p);const c=await page.getTextContent();text+=c.items.map(i=>i.str+(i.hasEOL?"\n":" ")).join("")+"\n"}
  return text;
}

document.querySelector("#pdf-input").onchange=async e=>{
  const file=e.target.files[0];if(!file)return;
  const status=document.querySelector("#upload-status");
  try{
    const fileId=crypto.randomUUID();
    status.textContent="Armazenando o PDF localmente...";
    await savePdf(fileId,file);
    let parsed;
    try{
      status.textContent="Lendo e interpretando o PDF...";
      parsed=parseStatementText(await extractPdf(file),file.name);
      status.textContent=`Leitura concluída: ${parsed.transactions.length} lançamentos candidatos. Revise antes de consolidar.`;
    }catch(err){
      console.warn(err);
      parsed={id:new Date().toISOString().slice(0,7),month:new Date().toISOString().slice(0,7),dueDate:"",total:0,adjustedTotal:0,nextCommitment:0,futureTotal:0,context:"",transactions:[],fileName:file.name};
      status.textContent="PDF armazenado. A extração automática não funcionou; preencha os dados manualmente.";
    }
    parsed.fileId=fileId;currentReview=parsed;fillReview();
  }catch(err){status.textContent=`Erro: ${err.message}`}
};

function fillReview(){
  const p=currentReview;
  document.querySelector("#statement-form").classList.remove("hidden");
  document.querySelector("#statement-month").value=p.month||"";
  document.querySelector("#due-date").value=p.dueDate||"";
  document.querySelector("#total-amount").value=p.total||"";
  document.querySelector("#adjusted-total").value=p.adjustedTotal||p.total||"";
  document.querySelector("#next-commitment").value=p.nextCommitment||0;
  document.querySelector("#future-total").value=p.futureTotal||0;
  document.querySelector("#month-context").value=p.context||"";
  renderReview();
}
function catOptions(sel){return CATEGORIES.map(c=>`<option ${c===sel?"selected":""}>${c}</option>`).join("")}
function renderReview(){
  const pending=(currentReview.transactions||[]).filter(t=>t.needsReview);
  const pendingValue=pending.reduce((sum,t)=>sum+Number(t.amount||0),0);
  const alert=document.querySelector("#review-alert");
  alert.innerHTML=pending.length
    ? `<div class="notice warning"><strong>Classificações sugeridas com baixa confiança:</strong> ${pending.length} lançamento(s), total de ${money(pendingValue)}. Eles já estão dentro de categorias reais; revise somente se desejar.</div>`
    : `<div class="notice"><strong>Classificação automática concluída:</strong> todos os lançamentos receberam categoria com boa confiança.</div>`;
  document.querySelector("#review-transactions").innerHTML=(currentReview.transactions||[]).map((t,i)=>`
    <tr>
      <td><input class="tx-date" value="${t.date||""}"></td>
      <td><input class="tx-merchant" value="${esc(t.merchant||"")}"><div class="muted">${t.needsReview?"Sugestão — confirmar se necessário":"Classificação automática"}</div></td>
      <td><input class="tx-amount" type="number" step="0.01" value="${Number(t.amount||0).toFixed(2)}"></td>
      <td><select class="tx-category">${catOptions(t.category)}</select></td>
      <td><select class="tx-type">${["Recorrente","Variável","Pontual","Parcelado","Obrigatório","Semi-obrigatório","Extraordinário"].map(x=>`<option ${x===t.type?"selected":""}>${x}</option>`).join("")}</select></td>
      <td style="text-align:center"><input class="tx-excluded" type="checkbox" ${t.excluded?"checked":""}></td>
      <td><button type="button" class="danger" onclick="removeReviewTx(${i})">×</button></td>
    </tr>`).join("");
}
function syncReview(){
  document.querySelectorAll("#review-transactions tr").forEach((row,i)=>{
    const t=currentReview.transactions[i];
    t.date=row.querySelector(".tx-date").value;t.merchant=row.querySelector(".tx-merchant").value;
    t.amount=Number(row.querySelector(".tx-amount").value||0);t.category=row.querySelector(".tx-category").value;
    t.type=row.querySelector(".tx-type").value;t.excluded=row.querySelector(".tx-excluded").checked;
    const suggested=classify(t.merchant);
    if(!t.subcategory || t.category!==t.autoCategory){
      t.subcategory=t.category===suggested.category?suggested.subcategory:(TREE[t.category]?.[0]||"Outras compras");
    }
    if(t.category!==t.autoCategory) t.needsReview=false;
  })
}
window.removeReviewTx=function(i){syncReview();currentReview.transactions.splice(i,1);renderReview()}
document.querySelector("#add-transaction").onclick=()=>{syncReview();currentReview.transactions.push({id:crypto.randomUUID(),date:"",merchant:"Novo lançamento",amount:0,category:"Compras Pessoais",subcategory:"Outras compras",type:"Variável",confidence:0.40,needsReview:true,autoCategory:"Compras Pessoais",excluded:false});renderReview()}
document.querySelector("#cancel-review").onclick=()=>{currentReview=null;document.querySelector("#statement-form").classList.add("hidden");document.querySelector("#pdf-input").value="";document.querySelector("#upload-status").textContent=""}

document.querySelector("#statement-form").onsubmit=e=>{
  e.preventDefault();syncReview();
  const lowConfidence=currentReview.transactions.filter(t=>t.needsReview);
  if(lowConfidence.length){
    const lowValue=lowConfidence.reduce((sum,t)=>sum+Number(t.amount||0),0);
    if(!confirm(`O app fez a melhor classificação possível, mas ${lowConfidence.length} lançamento(s), total de ${money(lowValue)}, têm baixa confiança. Deseja consolidar com essas sugestões?`)) return;
  }
  learnFromCorrections(currentReview.transactions);
  const month=document.querySelector("#statement-month").value;if(!month)return alert("Informe o mês.");
  const categories={};let pointInTime=0;
  currentReview.transactions.forEach(t=>{if(t.excluded)pointInTime+=Number(t.amount||0);else categories[t.category]=(categories[t.category]||0)+Number(t.amount||0)});
  const total=Number(document.querySelector("#total-amount").value||0);
  const statement={
    id:month,month,dueDate:document.querySelector("#due-date").value,total,
    adjustedTotal:Number(document.querySelector("#adjusted-total").value||0)||total-pointInTime,
    nextCommitment:Number(document.querySelector("#next-commitment").value||0),
    futureTotal:Number(document.querySelector("#future-total").value||0),pointInTime,
    context:document.querySelector("#month-context").value,
    categories:Object.keys(categories).length?categories:{"Compras Pessoais":total-pointInTime},
    vehicleBreakdown:buildVehicle(currentReview.transactions),transactions:currentReview.transactions,
    fileId:currentReview.fileId,isEstimate:false
  };
  const idx=state.statements.findIndex(s=>s.id===month);
  if(idx>=0){if(!confirm("Já existe uma fatura neste mês. Substituir?"))return;state.statements[idx]=statement}else state.statements.push(statement);
  saveState();currentReview=null;document.querySelector("#statement-form").classList.add("hidden");
  document.querySelector("#pdf-input").value="";document.querySelector("#upload-status").textContent="Fatura consolidada com sucesso.";
  renderAll();go("statements");
}
function learnFromCorrections(transactions){
  transactions.forEach(t=>{
    const merchant=normalizeMerchant(t.merchant);
    if(!merchant || merchant==="NOVO LANCAMENTO") return;
    const automatic=classify(t.merchant);
    const changed=t.category!==automatic.category || (t.subcategory && t.subcategory!==automatic.subcategory);
    if(changed){
      const existing=state.rules.find(r=>normalizeMerchant(r.pattern)===merchant);
      const learned={
        pattern:merchant,category:t.category,
        subcategory:t.subcategory||(TREE[t.category]?.[0]||"Outras compras"),
        type:t.type,confidence:0.99,userLearned:true
      };
      if(existing) Object.assign(existing,learned);
      else state.rules.unshift(learned);
    }
  });
}

function buildVehicle(tx){
  const out={"Pedágio / Sem Parar":0,"Combustível":0,"Manutenção":0,"Estacionamento":0};
  tx.filter(t=>t.category==="Veículos e Transporte"&&!t.excluded).forEach(t=>{const sub=t.subcategory||classify(t.merchant).subcategory;if(out[sub]!==undefined)out[sub]+=Number(t.amount||0)});
  return out;
}

function openDb(){
  return new Promise((resolve,reject)=>{
    const req=indexedDB.open(DB_NAME,DB_VERSION);
    req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains("files"))db.createObjectStore("files",{keyPath:"id"})};
    req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);
  })
}
async function savePdf(id,file){
  const db=await openDb();return new Promise((resolve,reject)=>{
    const tx=db.transaction("files","readwrite");tx.objectStore("files").put({id,name:file.name,type:file.type,blob:file,createdAt:new Date().toISOString()});
    tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);
  })
}
window.openPdf=async function(id){
  const db=await openDb();const item=await new Promise((resolve,reject)=>{
    const tx=db.transaction("files","readonly"),req=tx.objectStore("files").get(id);
    req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);
  });
  if(!item)return alert("PDF não encontrado.");
  const url=URL.createObjectURL(item.blob);window.open(url,"_blank");setTimeout(()=>URL.revokeObjectURL(url),60000);
}

document.querySelector("#export-backup").onclick=()=>{
  const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}),a=document.createElement("a");
  a.href=URL.createObjectURL(blob);a.download=`cfo-card-backup-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href);
}
document.querySelector("#import-backup").onchange=async e=>{
  const f=e.target.files[0];if(!f)return;
  try{const data=JSON.parse(await f.text());if(!data.statements||!data.rules)throw new Error("Backup inválido.");state=migrateState(data);saveState();renderAll();alert("Backup restaurado. A classificação automática e as regras aprendidas foram atualizadas.")}catch(err){alert(err.message)}
  e.target.value="";
}
document.querySelector("#clear-data").onclick=async()=>{
  if(!confirm("Apagar histórico estruturado e PDFs locais?"))return;
  localStorage.removeItem(APP_KEY);const db=await openDb();
  await new Promise((resolve,reject)=>{const tx=db.transaction("files","readwrite");tx.objectStore("files").clear();tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)});
  state=defaultState();saveState();renderAll();alert("Dados redefinidos para a carga inicial.");
}

renderAll();
