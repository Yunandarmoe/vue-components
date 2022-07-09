Vue.component('post', {
  //template: `
  //<div>
  //  <h1><slot name="title">Post Title</slot></h1>
  //  <p><slot name="content">Post Content</slot></p>
  //</div>
  //` ep 3
  // ep 4 below
  template: `
  <div>
    <h1>{{ name }}</h1>
    <p>{{ content }}</p>
  </div>
  `,
  //props: [
  //  'name', 
  //  'content'
  //]
  props: {
    name: {
      type: String,
      //required: true,
      default: "This is default title" // when name not include in html file
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
      {title: "Post Three", content: "Post Three Content"},
    ]
  }
})