"use client";

import React, { useState, useEffect } from "react";
import {
  Star,
  Coffee,
  Music,
  Camera,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Flower2,
  Leaf,
  Sun,
} from "lucide-react";
import Image from "next/image";
import comecando from "./images/comecando.jpeg";
import favorita from "./images/favorita.jpeg";
import formatura from "./images/formatura.jpeg";
import naosei from "./images/naosei.jpeg";
import restaurante from "./images/restaurante.jpeg";
import nova from "./images/nova.jpeg";
import primeira from "./images/primeira.jpeg";
import primeiroboa from "./images/primeiroboa.jpeg";
import mencoes from "./images/mencoes.jpeg";

// Componente do Header
const Header = () => {
  return (
    <header className="relative text-center py-8 sm:py-12 mb-8 sm:mb-12 px-4">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-200/40 via-pink-200/40 to-red-200/40 blur-3xl"></div>
      <div className="relative">
        <div className="flex justify-center items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          <span className="text-rose-500 animate-pulse" style={{ fontSize: 32 }}>🌻</span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
            Feliz Aniversário 
          </h1>
          <span className="text-pink-500 animate-pulse" style={{ fontSize: 32 }}>🌻</span>
        </div>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl font-medium mb-4 px-4">
          Como flores em um jardim, você floresce a cada dia
        </p>
        <div className="flex justify-center gap-2">
          <div className="text-rose-400 animate-bounce text-2xl">🌹</div>
          <div className="text-pink-400 animate-bounce delay-200 text-xl">
            🌸
          </div>
          <div className="text-red-400 animate-bounce delay-400 text-lg">
            🌺
          </div>
        </div>
      </div>
    </header>
  );
};

// Componente da Foto Especial
const PhotoSection = () => {
  const photos = [
    {
      url: comecando,
      caption:
        "Começando a ir aos cultos",
    },
    {
      url: favorita,
      caption: "A minha favorita atualmente",
    },
    {
      url: formatura,
      caption: "Fui o padrinho de formatura 🥹",
    },
    {
      url: naosei,
      caption: "Essa não sei nem o que falar...😭",
    },
    {
      url: restaurante,
      caption: "Passeio em um restaurante",
    },
    {
      url: primeiroboa,
      caption: "Primeiro dia que nós reencontramos"
    },
    {
      url: primeira,
      caption: "Nossa primeira foto (que eu tenho rs)"
    },
    {
      url: nova,
      caption: "A mais recente"
    },
    {
      url: mencoes,
      caption: "Mencões honrosas"
    }
  ];

  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [fadeClass, setFadeClass] = useState("opacity-100");

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      changePhoto((currentPhoto + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentPhoto, isPlaying, photos.length]);

  const changePhoto = (newIndex: number) => {
    setFadeClass("opacity-0");
    setTimeout(() => {
      setCurrentPhoto(newIndex);
      setFadeClass("opacity-100");
    }, 150);
  };

  const nextPhoto = () => {
    changePhoto((currentPhoto + 1) % photos.length);
  };

  const prevPhoto = () => {
    changePhoto(currentPhoto === 0 ? photos.length - 1 : currentPhoto - 1);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex justify-center mb-8 sm:mb-12 px-4">
      <div className="bg-gradient-to-br from-white via-rose-50 to-pink-50 rounded-3xl shadow-2xl p-4 sm:p-8 border-2 border-rose-200 w-full max-w-md relative overflow-hidden">
        {/* Decorações florais de fundo */}
        <div className="absolute top-2 right-2 text-rose-300 opacity-30">
          <Flower2 size={40} />
        </div>
        <div className="absolute bottom-2 left-2 text-pink-300 opacity-30">
          <Leaf size={35} />
        </div>

        <div className="text-center mb-4 sm:mb-6 relative z-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <Camera className="text-rose-500" size={24} />
            Nosso Jardim de Memórias
            <div className="text-pink-500">🌸</div>
          </h2>
        </div>

        <div className="relative group">
          <div className="absolute -inset-3 bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative">
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-2">
              <Image
                src={photos[currentPhoto].url}
                alt="Nossos momentos especiais"
                className={`w-full max-w-80 h-64 sm:h-80 mx-auto object-cover rounded-xl shadow-xl border-4 border-white transition-all duration-300 group-hover:scale-105 ${fadeClass}`}
              />
            </div>

            {/* Controles do carrossel */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={prevPhoto}
                className="bg-white/90 hover:bg-white text-rose-600 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 border border-rose-200"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextPhoto}
                className="bg-white/90 hover:bg-white text-rose-600 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 border border-rose-200"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Indicadores de foto */}
        <div className="flex justify-center gap-2 mt-4">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => changePhoto(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentPhoto
                  ? "bg-rose-500 w-6"
                  : "bg-rose-300 hover:bg-rose-400"
              }`}
            />
          ))}
        </div>

        {/* Controle de play/pause */}
        <div className="flex justify-center mt-3">
          <button
            onClick={togglePlayPause}
            className="bg-rose-100 hover:bg-rose-200 text-rose-600 rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110 border border-rose-300"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
        </div>

        <p className="text-center text-gray-700 mt-4 font-medium text-sm sm:text-base relative z-10">
          {photos[currentPhoto].caption}
        </p>
      </div>
    </div>
  );
};

// Componente da Carta Principal
const LoveLetterCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 transform px-4 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="bg-gradient-to-br from-white via-rose-50 to-pink-50 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border-2 border-rose-200 max-w-4xl mx-auto relative overflow-hidden">
        {/* Decorações florais */}
        <div className="absolute top-4 left-4 text-rose-200 opacity-40">
          <Flower2 size={50} />
        </div>
        <div className="absolute top-4 right-4 text-pink-200 opacity-40">
          <Flower2 size={45} />
        </div>
        <div className="absolute bottom-4 left-6 text-red-200 opacity-40">
          <Leaf size={40} />
        </div>
        <div className="absolute bottom-4 right-6 text-rose-200 opacity-40">
          <Sun size={35} />
        </div>

        <div className="text-center mb-6 sm:mb-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center justify-center gap-2 sm:gap-3">
            <div className="text-rose-500 animate-pulse text-3xl">🌹</div>
            <span className="text-center">Cartinha nova rs</span>
            <div className="text-rose-500 animate-pulse text-3xl">🌹</div>
          </h2>
        </div>

        <div
          className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border-l-4 sm:border-l-8 border-rose-400 relative z-10"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <div className="text-right mb-4 sm:mb-6 text-gray-600 text-sm sm:text-base md:text-lg flex items-center justify-end gap-2">
            <div className="text-rose-400">🌸</div>
            {new Date().toLocaleDateString("pt-BR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

          <div className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed space-y-4 sm:space-y-6">
            <div className="text-xl sm:text-2xl font-bold text-rose-600 mb-4 sm:mb-6 flex items-center gap-2">
              Minha amizade mais valiosa,
              <div className="text-2xl">🌺</div>
            </div>

            <p>
              Após um ano da minha primeira cartinha, estou aqui mais uma vez.
              Podendo comemorar mais um ano de vida ao seu lado. Primeiramente
              queria te desejar tudo de bom na sua vida, muitas bençãos e saúde.
            </p>

            <p>
              Esse período de um ano foi um tanto que muito diferente do que eu
              pude imaginar. Aconteceram muitas boas, mas também ruins.
              Obviamente, não fico feliz por conta das coisas ruins, mas sei
              que, já que aconteceu, o mínimo que tenho que fazer é me esforçar
              cada vez mais.
            </p>

            <p>
              Espero poder passar mais um ano ao seu lado, recebendo seus
              ensinamentos, crescendo no propósito, ajudando sua célula, e
              finalmente poder começar a minha.
            </p>

            <p>
              Talvez para você seja só mais um ano, mas para mim esse vai ser um
              marco importante, porque vai ser dessa data que, no futuro, eu vou
              poder me lembrar do tanto que mudei…
            </p>

            <p>
              Os meus planos para nossa amizade nesse ano não são nada absurdos,
              na verdade, é uma coisa bem simples. Eu pretendo me tornar a
              melhor companhia possível para você, não estou dizendo que eu
              serei sua melhor companhia, mas vou agir como se eu fosse… É
              aquele negócio: “Posso não ser o melhor, mas na minha cabeça eu
              sou, e vou continuar me esforçando”.
            </p>

            <p>
              Sei que talvez seja demais o que estou pedindo, mas tudo que eu
              puder participar e você quiser companhia, pode contar comigo. Pode
              ser coisa besta, tipo ir em um restaurante novamente rs.
            </p>

            <p>
              Não vou prolongar nisso acima, sobre contar comigo, porque eu sei
              que ainda preciso me esforçar bastante para poder me considerar um
              grande amigo seu.
            </p>

            <p>
              Eu vou me esforçar para voltarmos a ter uma amizade boa que nem
              quando eu ia te buscar, por mais que provavelmente aquela época
              foi nossa amizade mais forte, eu sei que obviamente não vai ser
              igual, até porque acredito que nós dois tenhamos crescido nesse um
              ano.
            </p>

            <p>
              Mas resumidamente, é isso, muito obrigado por todas essas
              oportunidades de melhorar. Eu tenho noção de que toda vez que eu
              faço algo de errado, você tende a querer menos se aproximar de
              mim, e é por isso que eu quero mudar. Só te peço uma coisa,
              continue acreditando que eu posso mudar. Quando você disse isso
              para mim, foi o que mais me tocou a querer ser melhor. Muito
              obrigado, foram palavras muito importantes para mim…
            </p>

            <p>
              Eu tenho fé que algum dia você irá postar novamente algo falando
              que sou a melhor companhia (deixa eu sonhar rs).
            </p>

            <p>
              Saiba que você ainda é minha melhor amiga, e vou lutar para não te
              perder.
            </p>

            <div className="mt-8 sm:mt-10 pt-4 sm:pt-6 border-t-2 border-rose-100 flex items-end justify-between">
              <div className="flex gap-1">
                <div className="text-rose-400">🌹</div>
                <div className="text-pink-400">🌸</div>
                <div className="text-red-400">🌺</div>
                <div className="text-rose-400">🌻</div>
                <div className="text-pink-400">🌷</div>
              </div>
              <div className="text-right text-rose-600 font-bold text-lg sm:text-xl">
                Até a próxima cartinha (estou sem ideias de como inovar).
                <br />
                <div className="flex items-center justify-end gap-2 mt-2">
                  De: sua companhia esforçada
                  <div className="text-2xl">💐</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente de Elementos Decorativos
const DecorationElements = () => {
  return (
    <div className="flex justify-center gap-4 sm:gap-8 mt-8 sm:mt-12 mb-6 sm:mb-8 px-4">
      <div className="bg-gradient-to-br from-white to-rose-50 rounded-full p-4 sm:p-6 shadow-lg border-2 border-rose-200 hover:shadow-xl transition-all duration-300 hover:scale-110 relative overflow-hidden">
        <div className="absolute inset-0 bg-rose-100 opacity-20 rounded-full"></div>
        <Coffee className="text-rose-500 relative z-10" size={24} />
        <div className="absolute -top-1 -right-1 text-rose-300 text-lg">🌸</div>
      </div>
      <div className="bg-gradient-to-br from-white to-pink-50 rounded-full p-4 sm:p-6 shadow-lg border-2 border-pink-200 hover:shadow-xl transition-all duration-300 hover:scale-110 relative overflow-hidden">
        <div className="absolute inset-0 bg-pink-100 opacity-20 rounded-full"></div>
        <Music className="text-pink-500 relative z-10" size={24} />
        <div className="absolute -top-1 -right-1 text-pink-300 text-lg">🌺</div>
      </div>
      <div className="bg-gradient-to-br from-white to-red-50 rounded-full p-4 sm:p-6 shadow-lg border-2 border-red-200 hover:shadow-xl transition-all duration-300 hover:scale-110 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-100 opacity-20 rounded-full"></div>
        <Star
          className="text-red-500 relative z-10"
          size={24}
          fill="currentColor"
        />
        <div className="absolute -top-1 -right-1 text-red-300 text-lg">🌹</div>
      </div>
    </div>
  );
};

// Componente do Footer
const Footer = () => {
  return (
    <footer className="text-center py-8 sm:py-12 px-4">
      <div className="bg-gradient-to-br from-white via-rose-50 to-pink-50 rounded-3xl shadow-lg p-6 sm:p-8 max-w-2xl mx-auto border-2 border-rose-200 relative overflow-hidden">
        {/* Decorações florais */}
        <div className="absolute top-2 left-2 text-rose-200 opacity-40">
          <Flower2 size={30} />
        </div>
        <div className="absolute bottom-2 right-2 text-pink-200 opacity-40">
          <Leaf size={25} />
        </div>

        <div className="relative z-10">
          <div className="text-gray-700 text-base sm:text-lg font-medium mb-4 flex items-center justify-center gap-2">
            <div className="text-rose-400">🌸</div>
            &quot;Regues uma planta e ela te presenteará uma bela flor; Cultives uma
            amizade e terás um porto seguro; Promovas a bondade e alcançarás,
            como fruto, a mão de Deus.&quot;
            <div className="text-pink-400">🌸</div>
          </div>
          <p className="text-rose-500 font-bold">
            - Inspirado em nosso jardim de breguice
          </p>
          <div className="mt-6 flex justify-center">
            <div className="flex gap-2 text-2xl">
              <div className="animate-pulse">🌹</div>
              <div className="animate-pulse delay-200">🌸</div>
              <div className="animate-pulse delay-400">🌺</div>
              <div className="animate-pulse delay-600">🌻</div>
              <div className="animate-pulse delay-800">🌷</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Componente Principal
const LoveLetterSite = () => {
  const [flowers, setFlowers] = useState<
    { left: string; duration: string; delay: string; type: string }[]
  >([]);

  useEffect(() => {
    const flowerEmojis = ["🌸", "🌺", "🌻", "🌷", "🌹", "🌼"];
    setFlowers(
      [...Array(8)].map((_, i) => ({
        left: `${Math.random() * 100}%`,
        delay: `${i * 1.5}s`,
        duration: `${10 + Math.random() * 5}s`,
        type: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
      }))
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-100">
      {/* Elementos decorativos de fundo - tema floral */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 bg-rose-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-8 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 bg-pink-200 rounded-full opacity-40 animate-bounce delay-1000"></div>
        <div className="absolute bottom-16 sm:bottom-32 left-1/4 w-20 sm:w-40 h-20 sm:h-40 bg-red-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-1/3 w-10 sm:w-20 h-10 sm:h-20 bg-rose-300 rounded-full opacity-35 animate-bounce delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-radial from-pink-100 to-transparent rounded-full opacity-40"></div>

        {/* Flores decorativas fixas */}
        <div className="absolute top-1/4 left-1/6 text-6xl opacity-10 animate-sway">
          🌻
        </div>
        <div className="absolute top-3/4 right-1/6 text-5xl opacity-15 animate-sway delay-1000">
          🌷
        </div>
        <div className="absolute top-1/2 right-1/4 text-4xl opacity-12 animate-sway delay-2000">
          🌼
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-5xl opacity-10 animate-sway delay-3000">
          💐
        </div>
      </div>

      <div className="container mx-auto py-4 sm:py-8 relative z-20 max-w-6xl">
        <Header />
        <PhotoSection />
        <LoveLetterCard />
        <DecorationElements />
        <Footer />
      </div>

      {/* Floating flowers animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {flowers.map((flower, i) => (
          <div
            key={i}
            className="absolute text-3xl opacity-60 animate-float"
            style={{
              left: flower.left,
              animationDelay: flower.delay,
              animationDuration: flower.duration,
            }}
          >
            {flower.type}
          </div>
        ))}
      </div>

      {/* Custom CSS para animações */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes sway {
          0%,
          100% {
            transform: translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateX(-5px) rotate(-3deg);
          }
          50% {
            transform: translateX(3px) rotate(2deg);
          }
          75% {
            transform: translateX(-2px) rotate(-1deg);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-sway {
          animation: sway 4s ease-in-out infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        /* Melhorias para mobile */
        @media (max-width: 640px) {
          .container {
            padding-left: 0;
            padding-right: 0;
          }

          /* Evita zoom em inputs no iOS */
          input,
          select,
          textarea {
            font-size: 16px;
          }

          /* Melhora a legibilidade em telas pequenas */
          body {
            -webkit-text-size-adjust: 100%;
          }
        }

        @media print {
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LoveLetterSite;
