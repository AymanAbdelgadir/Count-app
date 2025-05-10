const count = document.getElementById('count')
const incr = document.getElementById('incr')
const decr = document.getElementById('decr')
total = 0

incr.onclick = function increment(){
    total++
    count.innerText = total
}

decr.onclick = function decrease(){
    total--
    count.innerText = total
}

count.innerText = total
