$(function(){
  console.log('your js is loaded. look at you all official and stuff.')
  listenForClick()
})

function listenForClick(){
  $("button#click-me").on('click', function (event){
    event.preventDefault()
    getPost()
  })
}

function getPost(){
  $.ajax({
    url: 'http://localhost:3000/posts',
    method: 'get',
    dataType: 'json',
  }).done(function (data){
    console.log("your data is: ", data)
    let thepost = new Post(data[0])
    let myPostHTML = thepost.postHTML()
    document.getElementById('our-new-posts').innerHTML += myPostHTML
  })
}

class Post {
  constructor (obj){
    this.id = obj.id
    this.title = obj.title
    this.content = obj.content
    this.comments = obj.comments
  }
}

Post.prototype.postHTML = function () {
  return (`
    <div>
      <h3>${this.title}</h3>
      <p>${this.content}</p>
    </div>
  `)
}