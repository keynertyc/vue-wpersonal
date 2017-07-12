<template>
  <div class="">
    <section class="no-padding" id="portfolio">
      <div class="container-fluid">
        <div class="row no-gutter popup-gallery">
          <div class="col-lg-4 col-sm-6" v-for="item in portfolio">
            <div class="portfolio-box" style="cursor: pointer;">
              <img :src="item.image" class="img-responsive" alt="">
              <div class="portfolio-box-caption">
                <div class="portfolio-box-caption-content">
                  <div class="project-category text-faded">
                    {{ item.title }}
                  </div>
                  <div class="project-name">
                    {{ item.description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolio: [
        {
          image: '/static/img/portfolio/1.jpg',
          title: 'Javascript',
          description: 'NodeJS, AdonisJS, VueJS, Meteor, SailsJS, JQuery',
        },
        {
          image: '/static/img/portfolio/2.jpg',
          title: 'PHP',
          description: 'Laravel, CakePHP',
        },
        {
          image: '/static/img/portfolio/3.jpg',
          title: 'Devops',
          description: 'Linux (CentOS, Debian), MacOS',
        },
        {
          image: '/static/img/portfolio/4.jpg',
          title: 'Cloud',
          description: 'AWS, Digital Ocean, Heroku, RackSpace',
        },
        {
          image: '/static/img/portfolio/5.jpg',
          title: 'Mobile',
          description: 'iOS, Android, Ionic, NativeScript',
        },
        {
          image: '/static/img/portfolio/6.jpg',
          title: 'Database',
          description: 'MySql, MongoDB, PostgreSQL',
        },
      ],
    };
  },
};
</script>

<style>
</style>
