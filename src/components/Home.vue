<template>
  <div class="" id="home">
    <MainNav></MainNav>
    <MainHeader></MainHeader>
    <About></About>
    <Skills></Skills>
    <Resume></Resume>
    <Contact></Contact>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav';
import MainHeader from '@/components/MainHeader';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

export default {
  data() {
    return {
    };
  },
  components: {
    MainNav,
    MainHeader,
    About,
    Skills,
    Resume,
    Contact,
  },
};
</script>

<style>
  @media (min-width: 768px) {
    #home {
      height: 100%;
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    #home {
      height: 100%;
      width: auto;
    }
  }

  @media (min-width: 992px) {
    #home {
      height: 100%;
      width: auto;
    }
  }

  @media (min-width: 1200px) {
    #home {
      height: 100%;
      width: 100%;
    }
  }
</style>
