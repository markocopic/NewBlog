<template>
  <div id="showBlogs" v-theme:column="'wide'">
    <header class="w3-container w3-center w3-padding-32">
      <h1><b>G-log</b></h1>
      <p>Welcome to the blog of <span class="w3-tag">unknown</span></p>
    </header>
    <input type="text" v-model="search" placeholder="search blogs" id="input">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <center><img class="images" :src=blog.imgurl alt="Nature" style="max-width:50%; min-width:50%;"></center>
      <router-link v-bind:to="'/blog/' + blog.blog_id"><h2>{{blog.blog_name}}</h2></router-link>
      <p>{{blog.blog_text | skrati }} ...</p>
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
    axios.get('http://739k121.mars-e1.mars-hosting.com/zadatak/js/allBlogs.js').then(response => {
      //console.log(response.data.all);
      this.blogs = response.data.all;
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
#input{
  max-width: 50%;
  margin: 0 auto;
}
</style>
