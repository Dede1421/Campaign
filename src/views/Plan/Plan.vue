<template>
  <div class="container-plan">
    <h1>Plan de Desarrollo</h1>
    <p>
      Con el fin de hacer que la FISI sea una Facultad modelo, de vanguardia y
      de referencia en su organización, gestión y en el área (sistemas,
      informática o computación), se plantean diez (10) ejes de desarrollo (ED):
    </p>
    <div class="proposals-grid">
      <div
        v-on:click="selectProposal(1)"
        class="proposal"
        :class="[selectedProposal === 1 ? 'bgBlue' : '']"
      >
        <ol v-if="selectedProposal === 1">
          <li>
            1.Diseñar e implementar un Modelo de Gobierno Digital para la FISI
            que optimice y automatice los procesos y servicios (24x7).
          </li>
          <li>
            2.Gobierno con gestión participativa, trasparente y con balances
            semestrales.
          </li>
          <li>
            3. Gestión por resultados a corto, mediano y largo plazo con
            evaluación 360° y con mejora continua.
          </li>
        </ol>
        <h2 v-else>ED1: Gobierno y Gestión</h2>
      </div>
      <div
        v-on:click="selectProposal(2)"
        class="proposal pro2"
        :class="[selectedProposal === 2 ? 'bgWhite' : '']"
      >
        <ol v-if="selectedProposal === 2">
          <li>
            1.FISI Smart Eco Amigable (Infraestructura inteligente,
            digitalizada, ecológica e inclusiva).
          </li>
          <li>
            2.Implementación y equipamiento de Laboratorios especializados para
            la enseñanza formativa y para investigación.
          </li>
          <li>
            3. Servicios modernos confortables y armonioso (patio de comidas,
            amplia señal de WIFI, baños inteligentes, zona de esparcimiento,
            gimnasio)
          </li>
        </ol>
        <h2 v-else>ED2: Infraestructura, Tecnologías y Servicios</h2>
      </div>
      <div
        v-on:click="selectProposal(3)"
        class="proposal pro2"
        :class="[selectedProposal === 3 ? 'bgWhite' : '']"
      >
        <ol v-if="selectedProposal === 3">
          <li>
            1. Programas de estudios de Pre y Pos grado modernos, con doble
            grado y acreditados internacionalmente, con cursos integrados.
          </li>
          <li>
            2. Programas de intercambio de estudios e investigación para alumnos
            y profesores con apoyo financiero y asesoría.
          </li>
          <li>
            3. Modelo de enseñanza-aprendizaje basado en tecnologías,
            investigación y prácticas en empresa nacionales e internacionales
            para la formación de profesionales de excelencia y emprendedores.
          </li>
        </ol>
        <h2 v-else>ED3: Académico</h2>
      </div>
      <div
        v-on:click="selectProposal(4)"
        class="proposal"
        :class="[selectedProposal === 4 ? 'bgBlue' : '']"
      >
        <ol v-if="selectedProposal === 4">
          <li>
            1. Laboratorios especializados y certificados por CONCYTEC para la
            investigación, desarrollo e innovación.
          </li>
          <li>
            2. Sistema de investigación y desarrollo para la producción
            científica y la formación de nuevos investigadores (plataforma de
            gestión de proyectos, tesis, asesorías, traducciones)
          </li>
          <li>
            3. Inserción en comunidades de investigadores internacionales y
            nacionales a través de la participación en proyectos de
            investigación e intercambios técnico-científicos.
          </li>
        </ol>
        <h2 v-else>ED4: Investigación</h2>
      </div>
      <div
        v-on:click="selectProposal(5)"
        class="proposal"
        :class="[selectedProposal === 5 ? 'bgBlue' : '']"
      >
        <ol v-if="selectedProposal === 5">
          <li>
            1. Implementación de laboratorios especializados y certificados por
            CONCYTEC para la investigación, desarrollo e innovación, con
            mobiliario adecuado para los integrantes de los Grupos de
            Investigación (GI).
          </li>
          <li>
            2. Diseñar e implementar una fábrica de software innovadora para
            crear productos de software innovadores y de alta calidad para las
            empresas que complemente los resultados de las investigaciones.
          </li>
          <li>
            3. Crear equipos de consultoría, asesoría, soporte y mantenimiento
            en tecnología.
          </li>
        </ol>
        <h2 v-else>ED5: Innovación y Emprendimiento</h2>
      </div>
      <div
        v-on:click="selectProposal(6)"
        class="proposal pro2"
        :class="[selectedProposal === 6 ? 'bgWhite' : '']"
      >
        <ol v-if="selectedProposal === 6">
          <li>
            1. Modernización de la infraestructura (oficina, aulas bien
            acondicionadas, aulas virtuales con suite Google for education) y
            mejora de la calidad de los servicios (servicios virtuales 24x7),
            eficientes y monitoreados.
          </li>
          <li>
            2. Programas académicos con reconocimiento internacional,
            participación de profesores visitantes de Europa, Usa y Asia, y
            sistema de apoyo para la graduación a tiempo.
          </li>
          <li>
            3. Programas con doble grado internacional y movilización de
            estudiantes y docentes.
          </li>
        </ol>
        <h2 v-else>ED6: Posgrado</h2>
      </div>
      <div
        v-on:click="selectProposal(7)"
        class="proposal pro2"
        :class="[selectedProposal === 7 ? 'bgWhite' : '']"
      >
        <ol v-if="selectedProposal === 7">
          <li>
            1. Implementar una Oficina de Cooperación FISI asociada a
            cooperación de la Universidad para la internacionalización y
            transformación de la FISI a un centro de referencia.
          </li>
          <li>
            2. Insertar los grupos de investigación a redes internacionales de
            investigación y desarrollo para su empoderamiento.
          </li>
          <li>
            3. Establecer en forma periódica la pasantía de profesores
            visitantes, la movilidad e intercambio nacional e internacional de
            alumnos y docentes.
          </li>
        </ol>
        <h2 v-else>ED7: Cooperación Nacional e Internacional</h2>
      </div>
      <div
        v-on:click="selectProposal(8)"
        class="proposal"
        :class="[selectedProposal === 8 ? 'bgBlue' : '']"
      >
        <ol v-if="selectedProposal === 8">
          <li>
            1. Oficina de Prácticas y Apoyo al Egresado, a través del cual se
            establecerá una red de contactos y empresas nacionales e
            internacionales para prácticas y el empoderamiento (competencias
            blandas) de estudiantes y egresados.
          </li>
          <li>
            2. Duplicar la participación de los estudiantes bolsistas en la
            gestión operativa, con mejores condiciones de prácticas,
            capacitación y alimentación, a fin de integrar la comunidad y crear
            conciencia de gestión y servicio.
          </li>
          <li>
            3. Apoyar en forma sistémica a los alumnos en los diversos concursos
            como Programación ACM y Huawei.
          </li>
        </ol>
        <h2 v-else>ED8: Estudiante y Egresado</h2>
      </div>
      <div
        v-on:click="selectProposal(9)"
        class="proposal"
        :class="[selectedProposal === 9 ? 'bgBlue' : '']"
      >
        <ol v-if="selectedProposal === 9">
          <li>
            1. Oficina de Bienestar y Desarrollo Docente, para apoyar al cambio
            de clase, la ratificación y la promoción docente, de forma
            transparente y justa.
          </li>
          <li>
            2. Reconocimiento y apoyo a los logros del docente (mejor docente
            del curso, del semestre, de la carrera, participación en congresos y
            publicaciones en revistas Scopus/WoS).
          </li>
          <li>
            3. Promover el arraigo profesional y laboral con pasantías y
            perfeccionamiento con estudios de doctorado en el país o en el
            exterior.
          </li>
        </ol>
        <h2 v-else>ED9: Docente</h2>
      </div>
      <div
        v-on:click="selectProposal(10)"
        class="proposal pro2"
        :class="[selectedProposal === 10 ? 'bgWhite' : '']"
      >
        <ol v-if="selectedProposal === 10">
          <li>
            1. CERCEUS 1000, oferta masiva de cursos, talleres, y campañas sobre
            el uso de las TIC para apoyar a los niños, padres de familias,
            universitarios, comunidades, empresas y gobierno.
          </li>
          <li>
            2. SERUMTI, voluntariado sostenible y masivo que motive la
            participación de los estudiantes en el servicio (cursos o desarrollo
            tecnológico) rural urbano marginal de TI.
          </li>
          <li>
            3. Desarrollar FST-FISI, Ferias de Soluciones Tecnológicas de la
            FISI para comunidades rurales y urbanas. Además, participar en
            ferias nacionales e internacionales de TI.
          </li>
        </ol>
        <h2 v-else>ED10: Extensión Cultural y Proyección Social</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Plan",
  data() {
    return {
      selectedProposal: null,
    };
  },
  methods: {
    selectProposal(item) {
      if (!this.selectedProposal) {
        this.selectedProposal = item;
        return;
      }

      if (this.selectedProposal === item) {
        this.selectedProposal = null;
        return;
      }

      if (this.selectedProposal !== item) {
        this.selectedProposal = item;
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container-plan {
  padding: 20px;
  // max-width: 960px;
  // width: 100%;
  // margin: auto;

  h1 {
    font-size: 2rem;
    padding: 10px 0px;
  }

  p {
    font-size: 1.1rem;
    // line-height: 30px;
    line-height: 1.5;
    letter-spacing: 0.04em;
  }

  .proposals-grid {
    padding: 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    // grid-row-gap: 20px;
    // grid-column-gap: 40px;
  }
}

.proposal {
  height: 220px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1a378e;
  h2 {
    font-size: 2rem;
    padding: 5px 0;
    color: #fff;
    font-weight: bold;
  }

  ol {
    text-align: left;
  }

  li {
    padding: 5px 0;
    font-size: 1rem;
    line-height: 18px;
    color: #fff;
    font-weight: bold;
  }

  &:hover {
    cursor: pointer;
    // background-color: #1a378e;
  }

  // &:hover h2 {
  //   color: #fff;
  // }
}

.pro2 {
  background-color: #fff;

  h2 {
    color: #1a378e;
  }
}

.bgBlue {
  background-color: #1a378e;
  padding: 0px 15px;
}

.bgWhite {
  padding: 0px 15px;

  li {
    color: #1a378e;
  }
}
</style>