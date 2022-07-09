Vue.component('create-post', {
  template: `
  <div>
    <input v-model="title" placeholder="Enter Post Title"> <br><br>
    <input v-model="content" placeholder="Enter Post Content"> <br><br>
    <button @click="createPost">create</button>
  </div>
  `,
  data() {
    return {
      title: "",
      content: ""
    }
  },
  methods: {
    createPost() {
      this.$emit("create", {
        title: this.title,
        content: this.content
      }),
      this.title = "",
      this.content = ""
    }
  }
})

Vue.component('post', {
  template: `
  <div>
    <h1>{{ name }}</h1>
    <p>{{ content }}</p>
  </div>
  `,
  props: {
    name: {
      type: String,
      default: "This is default title" 
    },
    content: String
  }
})


new Vue({
  el: "#app",
  data: {
    posts: [
      {title: "Post One", content: "Post One Content"},
      {title: "Post Two", content: "Post Two Content"},
    ]
  },
  methods: {
    insertPost(post) {
      if (post.title && post.content) {
        this.posts.push(post)
      }
    }
  }
})