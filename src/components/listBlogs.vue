<template>
  <div id="showBlogs" v-theme:column="'narrow'">
    <h1>List Blogs</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2 v-rainbow>{{blog.title}}</h2>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'
export default {

  data(){
    return{
      blogs:[],
      search:''
    }
  },
  methods:{

  },
  mounted(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      this.blogs = data.body.slice(0,10);
    });
  },
  computed:{

  },
  mixins:[searchMixin]
}
</script>

<style>
#showBlogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
