"use client"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Mail, Linkedin, ChevronDown } from "lucide-react"

type Language = "pt" | "en"

const content = {
  pt: {
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      experience: "Experiência",
      education: "Formação",
      certifications: "Certificações",
      contact: "Contato",
    },
    hero: {
      name: "Ícaro Gonçalves",
      title: "Analista de Sistemas Júnior | Backend & Full-Stack Developer",
      tagline: "Engenharia de software com propósito e performance.",
      description:
        "Desenvolvedor backend com experiência em Java 8, 17, 21 e Spring Boot 3, atuando na criação e evolução de sistemas fiscais e corporativos de alta disponibilidade para o setor público. Focado em soluções escaláveis, arquitetura limpa e boas práticas de engenharia.",
      cta1: "Ver Habilidades",
      cta2: "Entrar em Contato",
    },
    about: {
      title: "Sobre Mim",
      content:
        "Sou desenvolvedor backend e full-stack com experiência em APIs REST, mensageria com Apache Kafka e arquitetura modular de microsserviços. Trabalho com Java 21 / Spring Boot 3 / Angular 18, pipelines CI/CD com Docker, Jenkins e Argo CD, e monitoramento de qualidade via SonarQube. Atuo em squads ágeis (Scrum), participando de todo o ciclo de desenvolvimento — da análise à entrega — com foco em código limpo e escalabilidade.",
    },
    skills: {
      title: "Habilidades Técnicas",
      categories: {
        languages: "Linguagens",
        frameworks: "Frameworks",
        databases: "Bancos de Dados",
        devops: "DevOps e Ferramentas",
        messaging: "Mensageria e Busca",
        monitoring: "Monitoramento e Qualidade",
        methodologies: "Metodologias",
      },
      items: {
        languages: ["Java 21", "TypeScript", "SQL", "PL/SQL", "VB6 (legado)"],
        frameworks: [
          "Spring Boot 3",
          "Spring Data JPA",
          "Spring Security 6",
          "JUnit 5",
          "Mockito",
          "Angular 18",
          "Angular Material 18",
        ],
        databases: ["PostgreSQL 16", "Oracle 19c", "MySQL 8"],
        devops: ["Docker", "Jenkins", "Git", "Maven", "Argo CD", "Helm", "Kubernetes 1.30"],
        messaging: ["Apache Kafka 3.7", "Elasticsearch 8", "Kibana"],
        monitoring: ["SonarQube", "Prometheus", "Grafana"],
        methodologies: ["Scrum", "Kanban", "CI/CD", "ITIL"],
      },
    },
    experience: {
      title: "Experiência Profissional",
      role: "Analista de Sistemas Júnior",
      company: "Fundação de Amparo e Desenvolvimento da Pesquisa (SEFA)",
      period: "Fev 2024 – Atual",
      responsibilities: [
        "Desenvolvimento de APIs REST com Java 8+ , Spring Boot 3",
        "Integração com Apache Kafka e monitoramento via Grafana",
        "Deploy contínuo com Docker, Jenkins e Argo CD",
        "Implementação de testes unitários e integração contínua",
      ],
      projectsTitle: "Projetos de Destaque",
      projects: [
        {
          name: "Sistema Sua Casa",
          description: "Emissão digital de comprovantes oficiais",
        },
        {
          name: "DO-e/SEFA",
          description: "Refatoração de API modular para consultas de documentos",
        },
        {
          name: "Plataforma de Crédito Fiscal",
          description: "API de deduções e transferências com Kafka + MinIO",
        },
      ],
    },
    education: {
      title: "Formação Acadêmica",
      degree: "Bacharelado em Sistemas de Informação",
      institution: "Universidade Federal Rural da Amazônia",
      period: "2019 – 2025",
    },
    certifications: {
      title: "Certificações",
      items: [
        "Java — Udemy",
        "Especialista Spring REST — Algaworks",
        "Java e Orientação a Objetos — Alura",
        "ITIL v3 Fundamentos",
        "Comunicação Empática e Assertiva",
      ],
    },
    contact: {
      title: "Contato",
      email: "icarolima1348@gmail.com",
      linkedin: "linkedin.com/in/icaro-goncalves",
      location: "Timbó – Santa Catarina",
      closing: "Aberto a novos desafios e colaborações. Comprometido em criar soluções confiáveis e impactantes.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
      contact: "Contact",
    },
    hero: {
      name: "Ícaro Gonçalves",
      title: "Junior Systems Analyst | Backend & Full-Stack Developer",
      tagline: "Engineering software with purpose and performance.",
      description:
        "Backend developer experienced in Java 21 and Spring Boot 3, building and maintaining high-availability fiscal and corporate systems for the public sector. Focused on scalable solutions, clean architecture, and software engineering best practices.",
      cta1: "View Skills",
      cta2: "Contact Me",
    },
    about: {
      title: "About Me",
      content:
        "I'm a backend and full-stack developer with experience in REST APIs, Apache Kafka message streaming, and modular microservice architecture. I work with Java 21 / Spring Boot 3 / Angular 18, CI/CD pipelines using Docker, Jenkins, and Argo CD, and maintain code quality with SonarQube. I collaborate in agile squads (Scrum) across the entire development lifecycle, focusing on clean code and scalability.",
    },
    skills: {
      title: "Technical Skills",
      categories: {
        languages: "Languages",
        frameworks: "Frameworks",
        databases: "Databases",
        devops: "DevOps & Tools",
        messaging: "Messaging & Search",
        monitoring: "Monitoring & Quality",
        methodologies: "Methodologies",
      },
      items: {
        languages: ["Java 21", "TypeScript", "SQL", "PL/SQL", "VB6 (legacy)"],
        frameworks: [
          "Spring Boot 3",
          "Spring Data JPA",
          "Spring Security 6",
          "JUnit 5",
          "Mockito",
          "Angular 18",
          "Angular Material 18",
        ],
        databases: ["PostgreSQL 16", "Oracle 19c", "MySQL 8"],
        devops: ["Docker", "Jenkins", "Git", "Maven", "Argo CD", "Helm", "Kubernetes 1.30"],
        messaging: ["Apache Kafka 3.7", "Elasticsearch 8", "Kibana"],
        monitoring: ["SonarQube", "Prometheus", "Grafana"],
        methodologies: ["Scrum", "Kanban", "CI/CD", "ITIL"],
      },
    },
    experience: {
      title: "Professional Experience",
      role: "Junior Systems Analyst",
      company: "Fundação de Amparo e Desenvolvimento da Pesquisa (SEFA)",
      period: "Feb 2024 – Present",
      responsibilities: [
        "Development of REST APIs with Java 21 + Spring Boot 3",
        "Kafka-based integration and monitoring via Grafana",
        "Continuous deployment with Docker, Jenkins, and Argo CD",
        "Unit testing and CI integration using JUnit 5",
      ],
      projectsTitle: "Key Projects",
      projects: [
        {
          name: "Sistema Sua Casa / Sua Casa System",
          description: "Digital issuance of official receipts",
        },
        {
          name: "DO-e/SEFA",
          description: "Modular API refactor for document searches",
        },
        {
          name: "Tax Credit Platform",
          description: "Deductions and transfers API with Kafka + MinIO",
        },
      ],
    },
    education: {
      title: "Education",
      degree: "Bachelor's Degree in Information Systems",
      institution: "Universidade Federal Rural da Amazônia",
      period: "2019 – 2025",
    },
    certifications: {
      title: "Certifications",
      items: [
        "Java — Udemy",
        "Spring REST Specialist — Algaworks",
        "Java and Object-Oriented Programming — Alura",
        "ITIL v3 Foundation",
        "Empathic & Assertive Communication",
      ],
    },
    contact: {
      title: "Contact",
      email: "icarolima1348@gmail.com",
      linkedin: "linkedin.com/in/icaro-goncalves",
      location: "Timbó – Santa Catarina",
      closing:
        "Open to new challenges and collaborations. Dedicated to building reliable and impactful software solutions.",
    },
  },
}

export default function Portfolio() {
  const [lang, setLang] = useState<Language>("pt")
  const t = content[lang]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-violet to-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-navy/80 backdrop-blur-md">
        <nav className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold tracking-tight">ÍG</div>

          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {t.nav.skills}
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {t.nav.experience}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {t.nav.contact}
            </button>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="border-white/20 bg-white/5 text-white hover:bg-white/10"
          >
            <Globe className="mr-2 h-4 w-4" />
            {lang === "pt" ? "🇧🇷 PT" : "🇬🇧 EN"}
          </Button>
        </nav>
      </header>

      
  {/* Hero Section */}
<section className="container mx-auto px-6 pt-32 pb-20">
  <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
    {/* Lado esquerdo: texto */}
    <div>
      <div className="mb-6 inline-block rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-sm text-cyan">
        {lang === "pt" ? "Disponível para novos projetos" : "Available for new projects"}
      </div>

      <h1 className="mb-4 text-balance text-5xl font-bold leading-tight tracking-tight md:text-7xl">
        {t.hero.name}
      </h1>

      <p className="mb-6 text-balance text-xl text-slate-300 md:text-2xl">{t.hero.title}</p>

      <p className="mb-4 text-pretty text-lg italic text-cyan">{t.hero.tagline}</p>

      <p className="mb-10 max-w-3xl text-pretty text-lg leading-relaxed text-slate-300">
        {t.hero.description}
      </p>

      <div className="flex flex-wrap gap-4">
        <Button size="lg" onClick={() => scrollToSection("skills")} className="bg-cyan text-navy hover:bg-cyan/90">
          {t.hero.cta1}
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => scrollToSection("contact")}
          className="border-white/20 bg-white/5 text-white hover:bg-white/10"
        >
          {t.hero.cta2}
        </Button>
      </div>
    </div>

    {/* Lado direito: foto de perfil */}
    <div className="flex justify-center md:justify-end">
      <Avatar className="size-64 border-4 border-cyan-500 shadow-lg shadow-cyan-500/30">
        <AvatarImage src="/icaro.jpg" alt="Ícaro Gonçalves" />
        <AvatarFallback className="text-2xl font-semibold">IG</AvatarFallback>
      </Avatar>
    </div>
  </div>

  <div className="mt-16 flex justify-center">
    <ChevronDown className="h-8 w-8 animate-bounce text-slate-400" />
  </div>
</section>


      {/* About Section */}
      <section id="about" className="border-t border-white/10 bg-navy/30 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-balance text-3xl font-bold md:text-4xl">{t.about.title}</h2>
            <p className="text-pretty text-lg leading-relaxed text-slate-300">{t.about.content}</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-balance text-center text-3xl font-bold md:text-4xl">{t.skills.title}</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(t.skills.categories).map(([key, category]) => (
                <Card key={key} className="border-white/10 bg-white/5 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-semibold text-cyan">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {t.skills.items[key as keyof typeof t.skills.items].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="border-t border-white/10 bg-navy/30 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-balance text-3xl font-bold md:text-4xl">{t.experience.title}</h2>

            <div className="mb-8 border-l-2 border-cyan pl-6">
              <div className="mb-2 flex flex-wrap items-baseline gap-2">
                <h3 className="text-xl font-semibold">{t.experience.role}</h3>
                <span className="text-slate-400">—</span>
                <span className="text-slate-300">{t.experience.company}</span>
              </div>
              <p className="mb-4 text-sm text-cyan">{t.experience.period}</p>

              <ul className="mb-6 space-y-2 text-slate-300">
                {t.experience.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-cyan">•</span>
                    <span className="text-pretty">{resp}</span>
                  </li>
                ))}
              </ul>

              <h4 className="mb-4 font-semibold text-cyan">{t.experience.projectsTitle}</h4>
              <div className="space-y-3">
                {t.experience.projects.map((project, idx) => (
                  <div key={idx}>
                    <p className="font-medium">{project.name}</p>
                    <p className="text-sm text-slate-400">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
            {/* Education */}
            <div>
              <h2 className="mb-6 text-balance text-2xl font-bold md:text-3xl">{t.education.title}</h2>
              <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">{t.education.degree}</h3>
                  <p className="mb-1 text-slate-300">{t.education.institution}</p>
                  <p className="text-sm text-cyan">{t.education.period}</p>
                </CardContent>
              </Card>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="mb-6 text-balance text-2xl font-bold md:text-3xl">{t.certifications.title}</h2>
              <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    {t.certifications.items.map((cert, idx) => (
                      <li key={idx} className="flex gap-2 text-slate-300">
                        <span className="text-cyan">✓</span>
                        <span className="text-pretty">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-white/10 bg-navy/30 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-balance text-3xl font-bold md:text-4xl">{t.contact.title}</h2>

            <p className="mb-10 text-pretty text-lg leading-relaxed text-slate-300">{t.contact.closing}</p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={`mailto:${t.contact.email}`}
                className="flex items-center gap-2 text-cyan transition-colors hover:text-cyan/80"
              >
                <Mail className="h-5 w-5" />
                {t.contact.email}
              </a>

              <a
                href={`https://${t.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan transition-colors hover:text-cyan/80"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>

            <p className="mt-8 text-sm text-slate-400">{t.contact.location}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center text-sm text-slate-400">
          <p>© 2025 Ícaro Gonçalves. {lang === "pt" ? "Todos os direitos reservados." : "All rights reserved."}</p>
        </div>
      </footer>
    </div>
  )
}
