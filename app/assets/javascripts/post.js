$(function(){
  console.log('your js has loaded biyatch')
    listenForClick()
})

function listenForClick(){
  $('button#click-me').on('click', function (event){
    event.preventDefault()
    getPost()
  })
}

function getPost(){
  $.ajax({
    url:'http://localhost:3000/posts',
    method: 'get',
    dataType: 'json',
  }).done(function (data){
    console.log("the data is: ", data)
    debugger
    let thepost = new Post(data[0])
    let thePostHTML = thepost.postHTML()
    document.getElementById('our-new-posts').innerHTML += thePostHTML
  })
}

class Post{
  constructor (obj) {
    this.id = obj.id
    this.title = obj.title
    this.content = obj.content
    this.comments = obj.comments
  }
  static newPostForm = function(){
    return (`
      <strong>New post comment form</strong>
      <form>
        <input id="post-title" type='text' name='title'></input><br />
        <input type='text' name='content'></input><br />
        <input type='submit'></input><br />
      </form>
      `
    )
  }  
}

Post.prototype.postHTML = function() {
  return (`
    <div>
      <h3>${this.title}</h3>
      <p>${this.content}</p>
    </div>
    `
  )
}



