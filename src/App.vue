<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import NavHeader from './components/navHeader.vue'
import Footer from './components.Footer.vue'
export default {
   components:{
     'add-blog':addBlog,
     'show-blogs':showBlogs,
     'nav-header':NavHeader,
     'nav-footer':Footer
   },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>
