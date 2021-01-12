const body = document.body
document.addEventListener('DOMContentLoaded', function(){
    function update() {
        const inputN = document.querySelector("#button-compute").value
        let result = 620610790 + inputN;
        document.querySelector('#compute-result').innerHTML = result
    }
    document.querySelector('input').onkeyup = update
})
