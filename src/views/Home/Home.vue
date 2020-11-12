<template>
  <div>
    <div class="home">
      <div class="bg-container">
        <div class="banner">
          <div class="wrap-vote">
            <div class="content">
              <h1>Avancemos juntos</h1>
            </div>
            <div class="vote-box">
              <h2>Este 12 de noviembre Vota por:</h2>
              <!-- <div class="wrap">
                <div class="container-vote">
                  <div class="name-candidate">
                    <h3>Dr. David Santos Mauricio Sanchez</h3>
                  </div>
                  <img src="../Candidates/c11.jpg" class="candidate" alt="" />
                </div>
              </div> -->
              <div class="wrap">
                <div class="container-vote">
                  <div class="name-candidate">
                    <h3>Prof. Jorge Leoncio Guerra Guerra</h3>
                  </div>
                  <img
                    src="../Candidates/candidato2.jpg"
                    class="candidate"
                    alt=""
                  />
                </div>
              </div>
              <div class="wrap">
                <div class="container-vote">
                  <div class="name-candidate">
                    <h3>Prof. Jaime Ruben Pariona Quispe</h3>
                  </div>
                  <img
                    src="../Candidates/candidato3.jpg"
                    class="candidate"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <!-- <ul>
              <li>
                <a
                  href="https://www.facebook.com/MauricioParaFISI"
                  target="_blank"
                  ><i class="fab fa-facebook fa-2x"> </i
                ></a>
              </li>
            </ul> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <section class="description-media">
      <div class="video">
        <div class="fb-video">
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FMauricioParaFISI%2Fvideos%2F640769266557021%2F&show_text=0&width=560"
            style="border: none; overflow: hidden"
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
      <div class="description">
        <p>
          Gracias por apoyarnos en la votación por el decanato. Te pedimos que este 12 de noviembre votes por nuestros
          representantes de para asociados. Contamos contigo. Informate y vota conciente.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
          amet maiores culpa aut unde incidunt adipisci, distinctio qui
          inventore dolorem quas fugit laboriosam cupiditate tempore eius
          possimus accusantium assumenda laudantium.
        </p>
      </div>
    </section> -->
  </div>
</template>

<script>
import "@/assets/styles/main.scss";

export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  background-image: url("FISI-background.jpg");
  background-size: cover;
  background-position: top;
}

.bg-container {
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
}

.banner {
  height: 117%;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wrap {
  background-color: #fff;
}

.wrap-vote {
  h2 {
    color: #fff;
  }
}

.vote-box {
  position: absolute;
  top: 0px;
  right: 10px;

  h2 {
    font-size: 2rem;
    background: #4183c4;
    padding-left: 10px;
  }
}

.wrap-vote {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 67%;
  position: relative;
}

.content {
  width: 30%;
  h1 {
    color: #fff;
    font-size: 3rem;
    font-weight: bold;
  }
}

.description-media {
  background: #fff;
  display: flex;
}

.description {
  background: rgba(0, 255, 255, 0.6);
  padding: 80px 45px;
  width: 50%;
}

.video {
  padding: 80px 45px;
  width: 50%;

  p {
    line-height: 18px;
  }
}

.fb-video {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}
.fb-video iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}

.square {
  height: 100px;
  width: 100px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0px 10px;
}

.numero {
  position: relative;
  .n1 {
    color: #000;
    position: absolute;
    top: -30px;
    right: -13px;
    z-index: 1;
    font-size: 60px;
  }
}

.container-vote {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
}

.name-candidate {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  text-align: center;
  padding: 10px;
}

.candidate {
  width: 100px;
  height: 130px;
}

.fab {
  color: #fff;
}

h3 {
  font-weight: bold;
  background: #fff;
  font-size: 1.5rem;
}

.marca {
  z-index: 3;
  font-size: 77px;
  position: absolute;
  top: 5px;
  // color: red;
}

@media (max-width: 984px) {
  .name-candidate {
    font-size: 14px;
    // padding: 10px;
  }

  .content {
    h1 {
      font-size: 1.8rem;
      padding: 20px 0px;
    }
  }
}

@media (max-width: 770px) {
  .banner {
    height: 114%;
  }
}

@media (max-width: 880px) {
  .container-vote {
    margin-bottom: 13px;
  }

  .vote-box {
    top: 17px;

    h2 {
      font-size: 1.3rem;
    }
  }

  // .wrap-vote {
  //   align-items: flex-start;
  // }

  .name-candidate {
    h3 {
      font-size: 1.2rem;
    }
  }

  .candidate {
    width: 78px;
    height: 80px;
  }

  .vote-box {
    h2 {
      font-size: 1.2rem;
    }
  }
}

@media (max-width: 650px) {
  .content {
    h1 {
      font-size: 1.6rem;
    }
  }

  .wrap-vote {
    display: block;
  }

  .vote-box {
    top: 130px;
  }
}
</style>
