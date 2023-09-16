
let result = {

  "tag": "",
  "free": false,
  "role": false,
  "user": "Akshaykumar",
  "email": "Akshaykumar@cwh.com",
  "score": 0.64,
  "state": "undeliverable",
  "domain": "cwh.com",
  "reason": "invalid_mx",
  "mx_found": false,
  "catch_all": null,
  "disposable": false,
  "smtp_check": false,
  "did_you_mean": "",
  "format_valid": true
}

submitBtn.addEventListener("click", async(e) => {
  e.preventDefault()
  // console.log("clicked")
  resultcont.innerHTML = `<img src="img/loding.svg"></img>`
  let key = "ema_live_hhlELLlel3M2RvBX5gBiuq51EoiCK7ja1HkfYtF4"
  let email = document.getElementById("email").value
 
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
  let res = await fetch(url)
  let result= await res.json()
  let str = ``
  for (key of Object.keys(result)) {
    if(result[key]!=="" && result[key]!==" ")
    str = str + `<div>${key}: ${result[key]}</div>`
  }
  console.log(str)
  resultcont.innerHTML = str
})


