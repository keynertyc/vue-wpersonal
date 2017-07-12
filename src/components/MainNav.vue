<template>
  <div class="">
    <nav id="mainNav" class="navbar navbar-default navbar-fixed-top" data-spy="affix" data-offset-top="100">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
          </button>
          <a class="navbar-brand page-scroll" href="#page-top">#KEYNERTYC</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a class="page-scroll" href="#about">{{ $t("message.about") }}</a>
            </li>
            <li>
              <a class="page-scroll" href="#portfolio">{{ $t("message.skills") }}</a>
            </li>
            <li>
              <a class="page-scroll" href="#contact">{{ $t("message.contact") }}</a>
            </li>
            <li>
              <a href="javascript:void();" style="cursor: pointer;" @click="changeLanguage"><h3 style="margin: 0;"><span v-bind:class="[flagIconClass, flagLanguageIconClass]"></span></h3></a>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
import i18n from '@/i18n';

export default {
  data() {
    return {
      flagIconClass: 'flag-icon',
      flagLanguageIconClass: 'flag-icon-es',
    };
  },
  created() {
    if (i18n.locale === 'es') {
      this.flagLanguageIconClass = 'flag-icon-us';
    } else {
      this.flagLanguageIconClass = 'flag-icon-es';
    }
  },
  methods: {
    changeLanguage() {
      if (i18n.locale === 'en') {
        i18n.locale = 'es';
        this.flagLanguageIconClass = 'flag-icon-us';
      } else {
        i18n.locale = 'en';
        this.flagLanguageIconClass = 'flag-icon-es';
      }
    },
  },
};
</script>

<style>
</style>
