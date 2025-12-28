var posts=["undefined/stallTCP1-3V1后台版图文教程/","undefined/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };