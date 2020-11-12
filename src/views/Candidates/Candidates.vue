<template>
  <div class="container-candidates">
    <h1>Candidatos</h1>
    <!-- <h2>Candidato a Decano</h2> -->
    <div class="candidate">
      <div class="img-candidate">
        <img src="./c1.jpg" alt="David" />
      </div>
      <div class="description-candidate">
        <h2 class="vote voteWidth">Para Decano marca el N°1</h2>
        <h2>David Santos Mauricio Sánchez</h2>
        <p>
          Doctor en Ciencias en Ingeniería de Sistemas y Computación por la
          Universidad Federal de Rio de Janeiro, Brasil. Ha sido profesor de la
          Universidad Estadual Norte Fluminense de Brasil (1994-1998), y desde
          1998 es profesor en la Universidad Nacional Mayor de San Marcos.
          Investigador RENACYT - Monge II. Decano de la FISI (2006-2007),
          (Enero-Junio 2016), Director de Posgrado (2001-2003), Responsable y
          autor del proyecto de creación de la FISI.
          <a href="https://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=2286" target="_blank" class="see">Ver mas</a>
        </p>
      </div>
    </div>
    <div class="candidate">
      <div class="img-candidate">
        <img src="./jorge2012.jpg" alt="Jorge" />
      </div>
      <div class="description-candidate">
        <h2 class="vote voteWidth2">Candidato Asociado</h2>
        <h2>Jorge Leoncio Guerra Guerra</h2>
        <p>
          Magister en ciencias en ingeniería de Sistemas y computación,
          doctorando en Ingenieria de sistemas de la UNMSM, presidente de las
          Jornadas Peruanas de Computacion (JPC) en el 2008, ponente en CLEI
          2006, INSOVIÑA 2007, IEEE INTERCON 2008,CONEISC 2010, COREIS 2010 y
          2011, IEEE INTERCON 2013 y 2014, SIMBIG 2016, y ACM ITICSE 2016, 2017
          y 2018. Miembro del GI de internet de las cosas. Evaluador de
          proyectos para CONCYTEC e INNOVATE PERU. Evaluador de papers de
          journal para MDPI. Investigador RENACYT por UNMSM, Maria Rostworowski
          II. <a href="https://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=12581" target="_blank" class="see">Ver mas</a>
        </p>
      </div>
    </div>
    <div class="candidate">
      <div class="img-candidate">
        <img src="./candidato3.jpg" alt="Jaime" />
      </div>
      <div class="description-candidate">
        <h2 class="vote voteWidth2">Candidato Asociado</h2>
        <h2>Jaime Ruben Pariona Quispe</h2>
        <p>
          Magíster en Computación e Informática (c), Ingeniero de Sistemas y
          Licenciado en Computación, Universidad Nacional Mayor de San Marcos,
          Ingeniero Electrónico, Universidad Ricardo Palma. Investigador en la
          área de Ciencias de la Computación, especialidad de Teoría de
          Lenguajes, Sistemas Embebidos y Agentes de Software Inteligentes. Ha
          publicado artículos de Informática Médica en eventos internacionals
          como PAHCE 2010 y PAHCE 2014 (Pan American Health Care Exchanges) y en
          revistas nacionales. <a href="" class="see">Ver mas</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container-candidates {
  padding: 20px;
  // max-width: 960px;
  // width: 100%;
  // margin: auto;

  h1 {
    font-size: 2rem;
    padding: 20px 0px;
  }

  .candidate {
    display: flex;
    padding-bottom: 30px;

    .description-candidate {
      padding-left: 20px;
      max-width: 720px;
      width: 100%;

      p {
        font-style: italic;
        line-height: 1.5;
        letter-spacing: 0.04em;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
}

.img-candidate {
  width: 200px;

  img {
    width: 100%;
  }
}

h2 {
  font-weight: bold;
  padding: 10px 0px;
  font-size: 1.2rem;
}

.vote {
  // margin-left: 20px;
  color: #fff;
  background-color: #1a378e;
  font-weight: bold;
  font-size: 1.4rem;
  padding-left: 10px;
  // padding: 0px 4px;
}

.voteWidth {
  width: 42%;
}

.voteWidth2 {
  width: 45%;
}

//media queries@
@media (max-width: 984px) {
  .img-candidate {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .vote {
    font-size: 1.1rem;
  }
  h2 {
    font-size: 1rem;
  }
}

@media (max-width: 750px) {
  .container-candidates {
    .candidate {
      display: flex;
      flex-direction: column;
      align-items: center;

      .description-candidate {
        padding-left: 0px;
      }
    }

    .voteWidth {
      width: 100%;
      margin: 10px 0px;
    }

    .voteWidth2 {
      width: 100%;
      margin: 10px 0px;
    }
  }
}
</style>