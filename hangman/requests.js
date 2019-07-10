const getPuzzle = (callback) => {

    const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => { // look in app.js for coments about this 
     if(e.target.readyState === 4 && e.target.status === 200){
          const data = JSON.parse(e.target.responseText)  
          callback(undefined,data.puzzle)  
        } else if (e.target.readyState === 4 ){
            callback('And error has been made BREEE', undefined)
     }
})

request.open('GET','http://puzzle.mead.io/puzzle?wordCount=3') // when you send HTTP request it needs some time to get a response

request.send() 

}