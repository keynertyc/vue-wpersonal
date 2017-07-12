<template>
  <div class="" id="main-header">
    <header>
      <div class="header-content">
        <div class="header-content-inner">
          <h1 style="padding-top: 90px; font-size: 45px;">Keyner W.<br>Tupac Yupanqui Caballero</h1>
          <hr>
          <p>{{ $t("message.career") }}</p>
          <p><img src="/static/img/photo.jpg" class="img-thumbnail img-circle" alt="Keyner TYC" id="imgPhoto"></p>
          <a href="#about" class="btn btn-primary btn-xl page-scroll" style="text-transform: none;">const title = '{{ $t("message.profileTitle") }}'</a>
          <p><br>
            <a href="https://pe.linkedin.com/in/keynertyc" target="_blank" class="btn btn-social-icon btn-linkedin btn-lg">
              <span class="fa fa-linkedin"></span>
            </a>
            <a href="https://github.com/keynertyc" target="_blank" class="btn btn-social-icon btn-github btn-lg">
              <span class="fa fa-github"></span>
            </a>
            <a href="https://facebook.com/keynertyc" target="_blank" class="btn btn-social-icon btn-facebook btn-lg">
              <span class="fa fa-facebook"></span>
            </a>
            <a href="https://twitter.com/keynertyc" target="_blank" class="btn btn-social-icon btn-twitter btn-lg">
              <span class="fa fa-twitter"></span>
            </a>
          </p>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
  #main-header {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    #imgPhoto {
      width: 50%;
      opacity: 0.9;
    }
  }

  @media (min-width: 768px) {
    #imgPhoto {
      width: 25%;
      opacity: 0.9;
    }
  }

  @media (min-width: 992px) {
    #imgPhoto {
      width: 25%;
      opacity: 0.9;
    }
  }

  @media (min-width: 1200px) {
    #imgPhoto {
      width: 25%;
      opacity: 0.9;
    }
  }
</style>
