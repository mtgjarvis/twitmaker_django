document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  let tweets = document.querySelector('.tweets');
  let li = document.createElement('li');
  let deleteButton = docuemnt.querySelectorAll('#delete')


  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    axios.post(
      this.action,
      formData,
      { headers: { "X-RequestedWith": "XMLHttpRequest" } }
      )
      .then(response => {
        let date = new Date()
        data = {
          message: this.message.value,
          date: date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear(),
        }
        tweets.innerHTML = ''
        tweets.appendChild(li)
        li.innerHTML = JSON.stringify(data)
        console.log(date);
    }).catch(function(error) {
      console.log(error);
    })
  });
  deleteButton.forEach(button => {
    buttton.addEventListener('click', function() {
      let b = buttton.parentNode.parentNode
      b.remove()
  })
})});