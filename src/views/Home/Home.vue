<template>
  <div>
    <div class="home">
      <div class="bg-container">
        <div class="banner">
          <div class="content">
            <h1>Avancemos juntos</h1>
          </div>
          <div>
            <h2>Para decano vota por el N°1</h2>
            <div class="square">
              <div class="marca">
                <img width="100px" src="./x-512.png" alt="" />
              </div>
              <div class="numero">
                <h3 class="n1">1</h3>
              </div>
            </div>
            <h2>Para asociados vota por el N°2</h2>
            <div class="square">
              <div class="marca">
                <img width="100px" src="./x-512.png" alt="" />
              </div>
              <div class="numero">
                <h3 class="n1">2</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <section class="description-media">
      <div class="video">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
          amet maiores culpa aut unde incidunt adipisci, distinctio qui
          inventore dolorem quas fugit laboriosam cupiditate tempore eius
          possimus accusantium assumenda laudantium.
        </p>
      </div>
      <div class="description">
        <p>
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

.content {
  width: 60%;
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
}

.video {
  padding: 80px 45px;

  p {
    line-height: 18px;
  }
}

.square {
  height: 100px;
  width: 100px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  // font-size: 50px;
  position: relative;
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

h2 {
  color: #fff;
}

.marca {
  z-index: 3;
  font-size: 77px;
  position: absolute;
  top: 5px;
  color: red;
}

@media (max-width: 770px) {
  .banner {
    height: 114%;
  }
}

@media (max-width: 750px) {
  .content {
    h1 {
      font-size: 2rem;
    }
  }

  .square {
    height: 70px;
    width: 70%;

    img {
      width: 70px;
    }
  }
}

@media (max-width: 450px) {
  .content {
    h1 {
      font-size: 1.6rem;
    }
  }
}
</style>
