<template>
  <div class="" id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Keyner W. Tupac Yupanqui Caballero | Software Developer',
    // all titles will be injected into this template
    titleTemplate: '%s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { name: 'author', content: 'Keyner TYC' },
      { name: 'description', content: 'Personal Website' },
      { name: 'keywords', content: 'keyner,keynertyc,systems engineer,engineer,systems,software developer,software,developer,ingeniero,ingeniero de sistemas,desarrollador web,programador web' },
      { name: 'audience', content: 'all' },
      { name: 'robots', content: 'follow,index' },
      { name: 'robots', content: 'all' },
      { name: 'Copyright', content: 'Keyner TYC' },
    ],
  },
};
</script>

<style>
  #app {
    height: 100%;
    width: 100%;
  }
</style>
