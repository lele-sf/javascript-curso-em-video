var nome = window.prompt('Qual é o seu nome?')
document.write(`Olá <strong>${nome}</strong>. Seu nome tem ${nome.length} letras<br>`)
document.write(`Seu nome em maiúsculas é ${nome.toLocaleUpperCase()}<br>`)
document.write(`Seu nome em minúsculas é ${nome.toLocaleLowerCase()}<br>`)