import React from 'react'
import ReactDom from 'react-dom'


let name = 'yamin'
let obj = {
        name : 'sarker',
        email : 'yaminalam27@gmail.com'
    }
const element = <h1>welcome to react learning {name}</h1>

let clock = function()
{
    return <h3>{new Date().toLocaleTimeString()}</h3>
}
function cartoon (name = 'uyamin', show = 'hsagdj') {

    return <div>
        <h1 class="App">Cartoon name is {name} ans show {show}</h1>
        <h2>Hello function</h2>
    </div>
}

setInterval(function () {
    ReactDom.render(
        clock(),
        document.getElementById('root')
    );
}, 1000)
