export default {
  computed: {
    filteredBlogs(){
      return this.blogs.filter((blog)=>{

        return blog.blog_name.match(this.search);
      });
    }
  }
}
