
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const compradores = [
    "João de São Paulo", "Mariana de BH", "Carlos do Rio",
    "Ana de Salvador", "Lucas de Curitiba", "Fernanda de Fortaleza"
  ];
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((prev) => Math.max(prev - 1, 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const comprador = compradores[Math.floor(Math.random() * compradores.length)];
      setPopup(`${comprador} acabou de adquirir o guia.`);
      setTimeout(() => setPopup(null), 5000);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="bg-yellow-100 text-yellow-800 text-center p-4 font-bold">
        ⏳ Esta oferta expira em {formatTime(timeLeft)} minutos.
      </div>

      <header className="bg-gray-900 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Pequeno, mas quer vender como os grandes?</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Descubra como automatizar marketing, atendimento e vendas usando inteligência artificial – sem precisar entender nada de tecnologia.
        </p>
        <a href="https://pay.hotmart.com/link-temporario" className="bg-orange-500 hover:bg-orange-600 transition px-6 py-4 rounded-xl text-white font-bold text-lg shadow-md">
          QUERO ACESSAR O GUIA AGORA
        </a>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4 space-y-12">
        <section className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Por que esse guia é diferente?</h2>
          <p className="text-lg text-gray-700">Com 242 páginas práticas, este e-book vai direto ao ponto. Você aprenderá como usar IA para automatizar tarefas repetitivas, criar campanhas, responder clientes, gerar conteúdo e muito mais.</p>
        </section>

        <section className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Você vai aprender a:</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li>Criar conteúdos com IA em minutos</li>
            <li>Automatizar atendimento no WhatsApp e Instagram</li>
            <li>Montar campanhas de marketing com IA</li>
            <li>Economizar tempo e escalar suas vendas</li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Oferta por tempo limitado</h2>
          <p className="text-lg text-gray-700">De <s>R$197</s> por apenas <strong className="text-orange-500">R$27</strong> para os 100 primeiros. Depois, o preço volta ao normal. Aproveite agora.</p>
          <a href="https://pay.hotmart.com/link-temporario" className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 transition px-6 py-4 rounded-xl text-white font-bold text-lg shadow-md">
            GARANTIR MEU GUIA
          </a>
        </section>

        <section className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Garantia incondicional de 7 dias</h2>
          <p className="text-lg text-gray-700">Se você não ficar satisfeito com o conteúdo, devolvemos 100% do seu dinheiro. Sem perguntas.</p>
        </section>

        <section className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Dúvidas Frequentes</h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p><strong>Preciso saber mexer em tecnologia?</strong><br/>Não. O guia é feito pra iniciantes. Basta seguir o passo a passo.</p>
            <p><strong>Quando recebo o guia?</strong><br/>Imediatamente após a confirmação do pagamento.</p>
            <p><strong>O conteúdo é atualizado?</strong><br/>Sim. Você terá acesso às atualizações futuras sem custo extra.</p>
          </div>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 py-8">
        &copy; 2025 - Todos os direitos reservados.
      </footer>

      {popup && (
        <div className="fixed bottom-6 left-6 bg-gray-900 text-white py-3 px-6 rounded-xl shadow-xl text-sm">
          {popup}
        </div>
      )}
    </div>
  );
}
