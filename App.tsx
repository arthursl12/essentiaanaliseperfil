
import React, { useState, useEffect } from 'react';
import logo from './logo.png'; // Import the logo image
import { 
  CheckCircle, 
  Play, 
  FileText, 
  Lightbulb, 
  ChevronDown, 
  ShieldCheck, 
  Clock, 
  MessageSquare, 
  ArrowRight,
  User,
  Zap,
  XCircle,
  Award,
  HelpCircle,
  Instagram
} from 'lucide-react';
import wppPreto from './wpp preto.png';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Essentia Logo" className="h-8" />
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
        <a href="#problema" className="hover:text-indigo-600 transition-colors">O Problema</a>
        <a href="#entrega" className="hover:text-indigo-600 transition-colors">Diferenciais</a>
        <a href="#comparativo" className="hover:text-indigo-600 transition-colors">Comparativo</a>
        <a href="#faq" className="hover:text-indigo-600 transition-colors">FAQ</a>
      </div>
      <button className="invisible text-sm font-semibold text-indigo-600 border border-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-50 transition-colors">
        Login
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden bg-[#F9F9F9]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
          <Zap size={14} />
          <span>8 anos de experiência em design e tecnologia</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#2D2D2D]">
          Seu Instagram é um <span className="text-indigo-600">cartão de visitas de luxo</span> ou um labirinto de posts aleatórios?
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
          Pare de seguir dicas genéricas de internet. Receba um plano de ação estratégico e uma análise técnica em vídeo feita por especialistas, para transformar seu perfil em uma máquina de autoridade em até 48h.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <button className="gradient-button w-full sm:w-auto px-8 py-5 rounded-xl text-white font-bold text-lg shadow-xl flex items-center justify-center gap-3">
            QUERO MEU DIAGNÓSTICO PROFISSIONAL
            <span className="bg-white/20 px-2 py-0.5 rounded text-sm">R$ 247</span>
          </button>
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" />
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">
              +500
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="relative z-10 w-full max-w-md mx-auto">
          <div className="bg-white rounded-[2.5rem] p-4 shadow-2xl border border-gray-100">
            <div className="relative aspect-[9/19] bg-gray-900 rounded-[2rem] overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800" 
                 alt="Mockup Instagram" 
                 className="object-cover w-full h-full opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 mb-4">
                    <p className="text-white text-xs font-semibold uppercase tracking-widest mb-1">Diagnóstico Essentia</p>
                    <p className="text-white/80 text-[10px]">Análise técnica artesanal de perfil</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="absolute -left-12 bottom-20 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
              <Play size={20} fill="currentColor" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase">Audit</p>
              <p className="text-sm font-bold text-[#2D2D2D]">Vídeo-Auditoria</p>
            </div>
          </div>
          <div className="absolute -right-8 top-12 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
             <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
               <FileText size={20} />
             </div>
             <div>
               <p className="text-[10px] font-bold text-gray-400 uppercase">Strategic</p>
               <p className="text-sm font-bold text-[#2D2D2D]">Guia de Ação PDF</p>
             </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-200/30 blur-[100px] -z-10 rounded-full"></div>
      </div>
    </div>
  </section>
);

const PainSection = () => (
  <section id="problema" className="py-24 bg-white border-y border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1551288560-19259ad42f6d?auto=format&fit=crop&q=80&w=800" 
          alt="Amateur vs Professional" 
          className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#2D2D2D]">
          O mercado está inundado de 'Packs de R$ 17,00' que <span className="text-red-500">destroem sua autoridade</span>.
        </h2>
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
          <p>
            Posts genéricos do Canva deixam sua marca igual a de todo mundo. Se você posta e não recebe directs, ou se tem vergonha de enviar seu perfil para um cliente, o problema não é o algoritmo.
          </p>
          <p className="font-semibold text-[#2D2D2D]">
            É a falta de um olhar estratégico e personalizado.
          </p>
          <p>
            Nós não usamos IA para te dar respostas prontas. Analisamos seu negócio de forma artesanal. Unimos o rigor técnico com estética de alto padrão.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mt-8">
            <p className="text-sm italic font-medium text-amber-800">
              "Sabia que fotos de close atraem 38% mais atenção? Nosso diagnóstico traz dados técnicos reais, não apenas 'achismos'."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Deliverables = () => (
  <section id="entrega" className="py-24 bg-[#F9F9F9]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">O que você recebe no seu Checkout Express</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Tudo o que você precisa para profissionalizar seu Instagram sem precisar de reuniões intermináveis.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Play className="text-indigo-600" size={32} />,
            title: "Vídeo-Auditoria Personalizada",
            subtitle: "(15-20 min)",
            desc: "Gravamos nossa tela analisando seu posicionamento, estética e falhas de conversão. É como ter uma consultoria particular gravada para ver quando quiser.",
            color: "bg-indigo-50"
          },
          {
            icon: <FileText className="text-emerald-600" size={32} />,
            title: "Plano de Ação em PDF",
            subtitle: "Guia Prático",
            desc: "Um roteiro 'mão na massa' com os ajustes imediatos na sua Bio, Destaques e Linha Editorial para começar a vender em até 48h.",
            color: "bg-emerald-50"
          },
          {
            icon: <Lightbulb className="text-amber-500" size={32} />,
            title: "Curadoria de Temas",
            subtitle: "3 Temas Estratégicos",
            desc: "Sugestões de temas de conteúdo específicos para o seu nicho, focados em venda e construção de autoridade real.",
            color: "bg-amber-50"
          }
        ].map((card, idx) => (
          <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
              {card.icon}
            </div>
            <h3 className="text-xl font-bold mb-1 text-[#2D2D2D]">{card.title}</h3>
            <p className="text-xs font-bold text-gray-400 uppercase mb-4">{card.subtitle}</p>
            <p className="text-gray-600 leading-relaxed text-sm">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ComparisonTable = () => (
  <section id="comparativo" className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">Escolha a Estratégia, não apenas a Estética</h2>
        <p className="text-gray-600">Por que o Diagnóstico Premium é a escolha definitiva para quem busca lucro.</p>
      </div>
      <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-6 text-sm font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">Critério</th>
              <th className="p-6 text-sm font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">Packs R$ 17 - R$ 47</th>
              <th className="p-6 text-sm font-bold text-indigo-600 uppercase tracking-widest border-b border-gray-100 bg-indigo-50/50">Análise Premium Essentia</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { c: "Execução", p: "Você faz tudo: escolhe, edita e adapta.", e: "Nós fazemos a inteligência: você só aplica." },
              { c: "Exclusividade", p: "Milhares de pessoas usam o mesmo design.", e: "Estratégia 100% focada no seu nicho e @." },
              { c: "Estratégia", p: "Apenas artes 'bonitinhas' sem contexto.", e: "Foco em transformar seguidores em lucro." },
              { c: "Análise de Bio", p: "Inexistente.", e: "Ajuste técnico para transformar a Bio em venda." },
              { c: "Suporte", p: "Padrão ou ausente.", e: "Feedback humano e vídeo-auditoria específica." },
              { c: "Resultado", p: "Perfil 'amador esforçado'.", e: "Perfil com autoridade de especialista." },
            ].map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 text-sm font-bold text-[#2D2D2D]">{row.c}</td>
                <td className="p-6 text-sm text-gray-500 flex items-start gap-2">
                  <XCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
                  {row.p}
                </td>
                <td className="p-6 text-sm text-[#2D2D2D] bg-indigo-50/30 font-medium border-x border-indigo-100/50">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-indigo-600 mt-0.5 shrink-0" />
                    {row.e}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const AntiAIBanner = () => (
  <div className="max-w-4xl mx-auto px-4 mb-20">
    <div className="bg-indigo-50 border border-indigo-100 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
      <div className="absolute -right-8 -bottom-8 opacity-10">
        <Zap size={200} className="text-indigo-600" />
      </div>
      <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center text-indigo-600 shrink-0">
        <User size={40} />
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Por que não usamos ChatGPT?</h3>
        <p className="text-gray-600 leading-relaxed italic">
          "Inteligência artificial não entende o 'feeling' do seu mercado nem a sua essência. Nosso trabalho é artesanal, feito por especialistas que vivem de design e tecnologia há mais de 8 anos."
        </p>
      </div>
    </div>
  </div>
);

const PricingSection = () => (
  <section className="py-24 bg-[#F9F9F9] border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Diferenciais List */}
        <div className="lg:w-3/5">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-8">Diferenciais que garantem sua <span className="text-indigo-600">autoridade premium</span></h2>
          <div className="grid gap-6">
            {[
              { t: "Auditoria Humana em Vídeo", d: "Nada de relatórios automáticos. Você recebe um vídeo personalizado onde analisamos seu perfil em tempo real, ponto a ponto, citando seu nome e seu negócio." },
              { t: "Plano de Execução Prático (PDF)", d: "Um roteiro 'mão na massa' com os 3 ajustes prioritários na sua Bio, Destaques e Linha Editorial para começar a vender em até 48h." },
              { t: "Análise de Posicionamento Visual", d: "Avaliação técnica das suas cores, fontes e qualidade das imagens (QMN) para garantir que sua vitrine transmita autoridade e luxo." },
              { t: "Curadoria de Conteúdo Estratégico", d: "Sugestão de 3 temas de posts/reels específicos para o seu nicho, focados em conversão, não em curtidas vazias." },
              { t: "Entrega Flash em 48h Úteis", d: "Agilidade sem perder a qualidade. Seu diagnóstico chega direto no seu WhatsApp e e-mail prontinho para aplicar." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100">
                <CheckCircle size={24} className="text-indigo-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-[#2D2D2D] mb-1">{item.t}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Block */}
        <div className="lg:w-2/5 w-full sticky top-24">
          <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 text-center relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-[0.2em] uppercase">
              Oferta Exclusiva
            </div>
            
            <p className="text-gray-400 line-through text-2xl font-medium mt-4">R$ 497</p>
            <div className="flex items-center justify-center gap-1 mb-2">
              <span className="text-indigo-600 text-6xl font-extrabold tracking-tighter">R$ 247</span>
            </div>
            <p className="text-gray-500 text-sm mb-8 font-medium">Ou em até 12x no cartão de crédito</p>
            
            <button className="gradient-button w-full py-5 rounded-2xl text-white font-bold text-lg shadow-xl flex items-center justify-center gap-3 mb-6">
              GARANTIR MINHA ANÁLISE AGORA
              <ArrowRight size={20} />
            </button>

            <div className="flex flex-col items-center gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
               <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                 <ShieldCheck size={20} />
                 7 Dias de Garantia Incondicional
               </div>
               <p className="text-xs text-emerald-600/80 leading-relaxed">
                 "Se em 7 dias você não sentir que o plano é aplicável ao seu negócio, devolvemos 100% do seu investimento."
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    // --- Critical Questions (Fundo de Funil) ---
    { 
      q: "É um relatório automático feito por IA?", 
      a: "Absolutamente não. Cada análise começa do zero, feita manualmente pelos nossos especialistas, focada no seu @ específico e no seu nicho de atuação." 
    },
    { 
      q: "Preciso participar de alguma reunião?", 
      a: "Não. Todo o processo é 100% assíncrono para respeitar a sua rotina e a nossa. Você preenche o briefing e nós entregamos o resultado. Simples assim." 
    },
    { 
      q: "O que acontece se eu não gostar?", 
      a: "Oferecemos uma garantia incondicional de 7 dias. Se o diagnóstico não abrir seus olhos para novas oportunidades ou se você sentir que não agregou valor, devolvemos seu dinheiro sem burocracia." 
    },
    { 
      q: "Qual o prazo de entrega?", 
      a: "O prazo máximo é de 48 horas úteis após o preenchimento do seu briefing." 
    },
    // --- New Detailed Questions ---
    { 
      q: "Vocês precisam da minha senha do Instagram?", 
      a: "Não. Jamais solicitaremos sua senha. Precisamos apenas que o seu perfil seja público para que possamos realizar a auditoria técnica e estética completa de forma externa e segura." 
    },
    { 
      q: "Meu perfil é novo e tenho poucos seguidores. A análise serve para mim?", 
      a: "Sim, este é o melhor momento para contratar. Começar com a estratégia certa evita que você gaste tempo e dinheiro postando conteúdo que não atrai clientes. O foco do diagnóstico é construir autoridade, não importa o tamanho da conta." 
    },
    { 
      q: "Essa análise é o mesmo que a Gestão Mensal de Redes Sociais?", 
      a: "Não. Este é um serviço pontual de inteligência estratégica onde entregamos o 'mapa' e o plano de ação. A execução diária das postagens não faz parte deste pacote, mas você terá toda a clareza para fazê-las ou delegá-las." 
    },
    { 
      q: "Vocês analisam os meus concorrentes também?", 
      a: "Com certeza. Avaliamos o que perfis de referência no seu nicho estão fazendo de certo e, principalmente, onde estão as brechas para você se destacar e atrair o público deles com um posicionamento único." 
    },
    { 
      q: "Posso tirar dúvidas depois que receber o vídeo?", 
      a: "Sim. Valorizamos a sua aplicação. Após o envio do diagnóstico, você terá um canal de suporte assíncrono via WhatsApp para tirar dúvidas pontuais sobre como implementar as recomendações recebidas." 
    },
    { 
      q: "Por quanto tempo terei acesso ao vídeo da minha análise?", 
      a: "O link do seu vídeo (Loom ou Drive) ficará disponível por 6 meses. Você poderá assistir, pausar e revisar as instruções quantas vezes precisar durante o seu processo de implementação." 
    },
    { 
      q: "Vocês analisam qualquer nicho de mercado?", 
      a: "Sim. Nossa metodologia é baseada em fundamentos de design estratégico, análise de dados e psicologia do consumidor. Já auditamos perfis de profissionais da saúde, advocacia, estética, tecnologia e comércios locais." 
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-4">
            <HelpCircle size={24} />
          </div>
          <h2 className="text-3xl font-bold text-center text-[#2D2D2D]">Perguntas Frequentes</h2>
        </div>
        
        <div className="space-y-4 mb-12">
          {questions.map((item, idx) => (
            <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden bg-[#F9F9F9] hover:border-indigo-100 transition-colors">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white transition-colors gap-4"
              >
                <span className="font-bold text-[#2D2D2D] md:text-lg">{item.q}</span>
                <ChevronDown className={`text-indigo-600 shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="p-6 pt-0 text-gray-600 text-sm md:text-base leading-relaxed bg-white animate-in fade-in slide-in-from-top-2 duration-300">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center p-8 bg-indigo-50/50 rounded-3xl border border-dashed border-indigo-200">
          <p className="text-indigo-900 font-medium mb-4">Ainda tem alguma dúvida específica?</p>
          <p className="text-indigo-600 text-sm leading-relaxed mb-6">
            Clique no botão do WhatsApp no canto da tela e fale com nossa equipe (atendimento em horário comercial).
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-indigo-700 font-bold hover:underline"
          >
            <MessageSquare size={18} />
            Falar com suporte agora
          </a>
        </div>
      </div>
    </section>
  );
};

const Authority = () => (
  <section className="py-24 bg-indigo-900 text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
           <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Quem são as mentes por trás da <span className="text-indigo-400">Essentia</span></h2>
           <p className="text-lg text-indigo-100 mb-8 leading-relaxed">
             Unimos estética impecável com estratégia técnica para tirar seu negócio do anonimato digital.
           </p>
           <div className="space-y-6">
             <div className="flex gap-4 items-start bg-white/5 p-6 rounded-2xl border border-white/10">
               <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-indigo-400">
                 <img src="https://i.pravatar.cc/150?u=bhruna" alt="Bhruna" />
               </div>
               <div>
                 <h4 className="font-bold text-xl">Bhruna</h4>
                 <p className="text-indigo-300 text-sm mb-2">CEO & Especialista em Design e Copywriting</p>
                 <p className="text-indigo-100/70 text-sm italic">7 anos de vivência em design de social media e estratégias de conversão visual.</p>
               </div>
             </div>
             <div className="flex gap-4 items-start bg-white/5 p-6 rounded-2xl border border-white/10">
               <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-indigo-400">
                 <img src="https://i.pravatar.cc/150?u=arthur" alt="Arthur" />
               </div>
               <div>
                 <h4 className="font-bold text-xl">Arthur</h4>
                 <p className="text-indigo-300 text-sm mb-2">COO & Especialista em Dados e Tecnologia</p>
                 <p className="text-indigo-100/70 text-sm italic">8 anos trabalhando com análise de dados, tráfego pago e automação tecnológica.</p>
               </div>
             </div>
           </div>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/20 relative">
             <div className="absolute -top-6 -left-6 w-12 h-12 bg-indigo-400 rounded-full flex items-center justify-center text-indigo-900 font-bold">
               "
             </div>
             <p className="text-2xl font-light italic mb-8 leading-relaxed">
               "Nossa missão é transformar perfis amadores em marcas premium. Não acreditamos em volume de posts, acreditamos em impacto visual e clareza de mensagem."
             </p>
             <div className="flex items-center gap-4">
               <div className="h-px bg-indigo-400/30 flex-1"></div>
               <span className="uppercase text-[10px] tracking-widest font-bold text-indigo-300">Essentia Marketing Team</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="como-funciona" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">Processo Assíncrono: Rapidez e Foco</h2>
        <p className="text-gray-600">Sem reuniões, sem perda de tempo. Eficiência máxima.</p>
      </div>
      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
        <div className="grid md:grid-cols-3 gap-12 relative z-10">
          {[
            { step: "01", title: "Checkout & Briefing", desc: "Você faz o pagamento e preenche um briefing rápido de 2 minutos sobre seu negócio." },
            { step: "02", title: "Análise Técnica", desc: "Nós estudamos seu perfil, nicho e concorrência nos bastidores com ferramentas de dados." },
            { step: "03", title: "Entrega em 48h", desc: "Você recebe seu vídeo e seu PDF via WhatsApp e E-mail. Direto ao ponto." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 text-center">
              <div className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-6 shadow-lg shadow-indigo-200">
                {item.step}
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#2D2D2D]">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Essentia Marketing Logo" className="h-6" />
        </div>
        <div className="flex gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <a href="#" className="hover:text-indigo-600">Políticas de Privacidade</a>
          <a href="#" className="hover:text-indigo-600">Termos de Uso</a>
        </div>
        <div className="flex gap-4 items-center">
          <a href="https://www.instagram.com/essentia_socialmedia/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://wa.link/pq673l" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
            <img src={wppPreto} alt="WhatsApp" className="h-6" />
          </a>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <ShieldCheck size={18} className="text-emerald-500" />
          <span>Pagamento 100% Seguro</span>
        </div>
      </div>
      <p className="mt-8 text-center text-gray-400 text-[10px] uppercase tracking-widest">© 2024 Essentia Marketing Agency. Transformando negócios em autoridade.</p>
    </div>
  </footer>
);

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[60] md:hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button className="gradient-button w-full py-4 rounded-xl text-white font-bold text-sm shadow-2xl flex items-center justify-center gap-2">
        GARANTIR MINHA ANÁLISE AGORA (R$ 247)
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <Hero />
      <PainSection />
      <Deliverables />
      <Process />
      <Authority />
      <ComparisonTable />
      <AntiAIBanner />
      <PricingSection />
      <FAQ />
      <Footer />
      <FloatingCTA />
      
      {/* Floating Support Button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform z-[70] md:z-[70]"
      >
        <MessageSquare fill="currentColor" />
      </a>
    </div>
  );
}
