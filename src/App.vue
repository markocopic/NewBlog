<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import NavHeader from './components/navHeader.vue'
export default {
   components:{
     'add-blog':addBlog,
     'show-blogs':showBlogs,
     'nav-header':NavHeader
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
