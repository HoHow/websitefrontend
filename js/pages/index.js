new Vue({
  el: '.app',
  data: {
    blog: '',
    message: '',
    web: ''
  },
  methods: {
    submit: function(){
      var data = {
        url: this.blog,
      }
      if(data.url != ''){
        API.getUrl('geturl','post',data);
      }else{
        alert(this.message = '請輸入網址');
      }
    }
  }
})