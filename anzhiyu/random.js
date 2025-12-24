var posts=["2025/12/24/stallTCP1-3V1后台版图文教程/","2025/12/24/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };