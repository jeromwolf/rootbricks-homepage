"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Smartphone,
  Activity,
  Radio,
  Phone,
  MapPin,
  CheckCircle,
  Layers,
  Zap,
  ArrowRight,
  TrendingUp,
  Terminal,
  Cpu,
  Database
} from "lucide-react";

// Data
const projects = [
  {
    title: "KB Kookmin Card AI Chatbot",
    desc: "Enterprise AI conversational agent serving 23M users, integrating complex financial data for real-time consultation.",
    tech: ["Java Spring", "Oracle", "MyBatis"],
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: "VoCom Voice Framework",
    desc: "High-performance distributed voice recognition framework, optimized for stability in large-scale call centers.",
    tech: ["C++", "Windows", "Voice Rec"],
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: "Mobility Platform",
    desc: "Next-generation mobility platform featuring real-time GPS tracking, payment gateway integration, and dynamic point systems.",
    tech: ["PHP", "MySQL", "Firebase"],
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    title: "Olive Healthcare",
    desc: "Cross-border e-commerce platform specialized for healthcare, featuring secure PayPal integration and global logistics tracking.",
    tech: ["PHP", "MySQL", "PayPal"],
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: "Smart Monitoring",
    desc: "Industrial monitoring system utilizing FFT frequency analysis and computer vision for real-time anomaly detection.",
    tech: ["OpenCV", "Bluetooth", "FFT"],
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Radar Computer",
    desc: "Mission-critical radar data processing unit, handling high-throughput TCP/IP streams for real-time visualization.",
    tech: ["C++", "TCP/IP", "Real-time"],
    icon: <Radio className="w-6 h-6" />
  }
];

const timeline = [
  {
    period: "2024 — PRESENT",
    role: "AI Agent & RAG Architecture",
    desc: "Spearheading research in Large Language Models (LLM) and Retrieval-Augmented Generation (RAG). Developing autonomous AI agents and studying Palantir's ontology-based operating systems."
  },
  {
    period: "2017 — 2023",
    role: "CEO, Root Bricks",
    desc: "Founded Root Bricks to bridge data and knowledge. Successfully delivered the KB Kookmin Card AI Chatbot for 23 million users and developed the 'Root Bricks' knowledge graph platform."
  },
  {
    period: "2015 — 2016",
    role: "Platform Architect",
    desc: "Designed and implemented scalable mobility platforms and O2O services, integrating complex payment gateways and real-time GPS tracking systems."
  },
  {
    period: "2011 — 2014",
    role: "Lead, Voice Framework Division",
    desc: "Led the development of 'VoCom', a high-performance voice recognition framework. Optimized C++ engines for Windows-based ARS and embedded voice solutions."
  },
  {
    period: "2005 — 2010",
    role: "Embedded System Specialist",
    desc: "Developed core system software for Windows CE devices, including VoIP phones and industrial PDAs. Mastered low-level hardware control and real-time processing."
  },
  {
    period: "2001 — 2005",
    role: "KT Telematics R&D",
    desc: "Early pioneer in Location Based Services (LBS). Developed key components for 'KTMap' and VoiceXML-based telematics services."
  }
];

const Typewriter = ({ text, delay = 50 }: { text: string, delay?: number }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">

      {/* Header / Nav Placeholder */}
      <header className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div
          className="font-bold text-xl tracking-tight flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-4 h-4 bg-black rounded-full" />
          ROOT BRICKS
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
          <a href="#activity" className="hover:text-black transition-colors">AI Solutions</a>
          <a href="#projects" className="hover:text-black transition-colors">Deployed Systems</a>
          <a href="#history" className="hover:text-black transition-colors">History</a>
        </nav>
      </header>

      {/* Hero Section - Clean White & Typing Effect */}
      <section className="relative h-[80vh] flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="mb-8 w-12 h-1 bg-black" />

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-12 leading-[1.1]">
            <Typewriter text="AI 기반 운영 및 의사결정을 실행하세요." delay={80} />
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-4 h-16 md:h-24 bg-black ml-2 align-middle"
            />
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl leading-relaxed mb-12">
            데이터를 연결하고 지식을 설계하여<br className="hidden md:block" />
            비즈니스의 본질적인 가치를 발견합니다.
          </p>


        </motion.div>
      </section>

      {/* Core Services - What We Do */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-lg mb-6">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">AI Agent Development</h3>
              <p className="text-gray-500 leading-relaxed">
                단순한 챗봇을 넘어, <strong>Palantir 스타일의 온톨로지</strong>를 기반으로 스스로 판단하고 행동하는 <strong>A2A(Agent-to-Agent) 시스템</strong>을 구축합니다. 금융 분석부터 업무 자동화까지, 실질적인 가치를 창출합니다.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-lg mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">RAG & Knowledge Graph</h3>
              <p className="text-gray-500 leading-relaxed">
                기업의 파편화된 데이터를 <strong>지식 그래프(Knowledge Graph)</strong>로 구조화하고, <strong>RAG(검색 증강 생성)</strong> 기술을 통해 LLM이 정확하고 신뢰할 수 있는 답변을 하도록 설계합니다.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-lg mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">System Integration</h3>
              <p className="text-gray-500 leading-relaxed">
                20년 이상의 <strong>임베디드 및 대규모 서버 개발 경험</strong>을 바탕으로, 최신 AI 기술을 기존 레거시 시스템에 완벽하게 통합(Integration)합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Activity (Minimal List) */}
      <section id="activity" className="py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">
              AI Solutions
            </h2>
            <span className="text-xs font-mono text-gray-400">SYNCED WITH GITHUB</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Flux Ontology Platform",
                desc: <span>SME-focused Ontology Palantir Solution. <span className="text-amber-600 font-bold animate-pulse">● Work in Progress</span></span>,
                stat: "Ontology / Palantir",
                link: "https://github.com/jeromwolf/flux-ontology"
              },
              {
                title: "Open WebUI RAG System",
                desc: "sLLM based RAG System using GPT-OSS:20B model.",
                stat: "sLLM / RAG",
                link: "https://github.com/jeromwolf/open-webui-rag"
              },
              {
                title: "A2A Sentiment Analysis",
                desc: "AI-powered stock investment solution. Multi-agent system analyzes market sentiment to generate expert-level reports.",
                stat: "Stock / Finance",
                link: "https://github.com/jeromwolf/A2A_sentiment_analysis"
              },
              {
                title: "NRC ADAMS Search MCP",
                desc: "NRC ADAMS document search & analysis server for Claude Desktop.",
                stat: "MCP Server",
                link: "https://github.com/jeromwolf/eve-mcp"
              },
              {
                title: "FDE Curriculum",
                desc: <span>Federal curriculum design and planning. <span className="text-amber-600 font-bold animate-pulse">● Work in Progress</span></span>,
                stat: "Education",
                link: "https://fde-academy.ai.kr/"
              },
              {
                title: "AI Education Simulator",
                desc: "Ontology-based AI education simulation platform.",
                stat: "Simulation",
                link: "https://ontology.kss.ai.kr/"
              }
            ].map((item, i) => (
              <div
                key={item.title}
                className="group cursor-pointer"
                onClick={() => window.open(item.link, '_blank')}
              >
                <div className="h-px w-full bg-gray-200 mb-6 group-hover:bg-black transition-colors" />
                <h3 className="text-xl font-medium text-black mb-2 group-hover:translate-x-2 transition-transform">{item.title}</h3>
                <p className="text-gray-500 mb-4 text-sm leading-relaxed h-12">{item.desc}</p>
                <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">{item.stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects (Clean Grid) */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="mb-20">
            <h2 className="text-4xl font-medium text-black mb-4">Deployed Systems</h2>
            <p className="text-gray-500">Enterprise-grade solutions delivered.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group"
              >
                <div className="mb-6 text-black group-hover:scale-110 transition-transform origin-left duration-300">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed h-12">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-gray-400 border border-gray-200 px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline (Minimal) */}
      <section id="history" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-20 text-center">
            Operational History
          </h2>
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-12 group">
                <div className="md:w-48 text-sm font-mono text-gray-400 pt-1">
                  {item.period}
                </div>
                <div className="flex-1 pb-12 border-b border-gray-100 group-last:border-0">
                  <h3 className="text-2xl font-medium text-black mb-2">{item.role}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 text-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:jeromwolf@gmail.com"
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
          >
            jeromwolf@gmail.com
          </a>
          <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Root Bricks Inc.
          </p>
        </div>
      </footer>

    </main>
  );
}
