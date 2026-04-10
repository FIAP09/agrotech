const membros = [
  {
    nome: "Hugo",
    img: "/assets/img/hugo.jpg",
    alt: "Foto de Hugo",
    href: "https://www.instagram.com/hugo.linhares_/",
    texto: (
      <>
        Desenvolvedor backend com 3 anos de experiência, especializado na criação de sites.
      </>
    ),
  },
  {
    nome: "Ramon",
    img: "/assets/img/ramon.jpg",
    alt: "Foto de Ramon",
    href: "https://www.instagram.com/ramonmtr",
    texto: <>Programador Java e Python desde os 18 anos, iniciando no desenvolvimento HTML, CSS e JavaScript.</>,
  },
  {
    nome: "Audibert",
    img: "/assets/img/audibert.jpg",
    alt: "Foto de Audibert",
    href: null,
    texto: (
      <>
        Desenvolvedor apaixonado por tecnologia. Experiência com JavaScript e Python, além de atuar em projetos com React e Node.js. Canal no{" "}
        <a href="https://www.youtube.com/@audibert" target="_blank" rel="noreferrer">
          YouTube
        </a>
        .
      </>
    ),
  },
  {
    nome: "Thiago",
    img: "/assets/img/thiago.jpeg",
    alt: "Foto de Thiago",
    href: "https://www.instagram.com/thsaccomani",
    texto: <>Bacharel em Direito. Atualmente, em transição para a área de Tecnologia da Informação.</>,
  },
];



export default function SobreNos() {
  return (
    <>
      <section className="Blank" style={{ height: 50 }} />

      <section className="sobre">
        <h2>Sobre Nós</h2>
        <p>
          O Grupo 09 da FIAP desenvolveu este projeto com o objetivo de demonstrar como as tecnologias emergentes estão
          transformando o agronegócio brasileiro e contribuindo para o combate à fome. Acreditamos que inovação e
          sustentabilidade são pilares essenciais para promover um desenvolvimento agrícola mais eficiente e inclusivo.
        </p>

        <div className="missao">
          <h3>Nossa Missão</h3>
          <p>
            Fomentar o uso de tecnologias inovadoras no agronegócio, com foco em aumentar a produtividade, otimizar
            recursos, reduzir desperdícios e garantir a segurança alimentar em todo o Brasil.
          </p>
        </div>

        <div className="visao">
          <h3>Nossa Visão</h3>
          <p>
            Consolidar-se como referência em soluções tecnológicas aplicadas ao agronegócio, contribuindo para a
            construção de um futuro sustentável, ético e livre da fome.
          </p>
        </div>
      </section>

      <section className="membros">
        <h2>Membros do Grupo</h2>

        <div className="cards">
          {membros.map((m) => {
            const card = (
              <div className="card" key={m.nome}>
                <img src={m.img} alt={m.alt} />
                <h3>{m.nome}</h3>
                <p>{m.texto}</p>
              </div>
            );

            return m.href ? (
              <a
                key={m.nome}
                href={m.href}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {card}
              </a>
            ) : (
              card
            );
          })}
        </div>
      </section>
    </>
  );
}
