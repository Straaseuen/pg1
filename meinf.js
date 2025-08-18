function copyTxt(){
                const text = document.getElementById('men').innerText;
                navigator.clipboard.writeText(text)
                .then(()=>{
                    alert('text has been copied')
                })
            }
