const content = document.querySelector('[data-js="content"]')
const txt1 = ' Olá, meu nome é Guilherme, tenho 26 anos e atualmente estudo Análise e desenvolvimento de sistemas.'
const txt2 = ' Possuo experiência como programador na área de automação industrial.'
const txt3 = ' Atualmente estou direcionando meus estudos para a área de Frontend, com as tecnologias React e Node.'
const txt4 = ' O que você quer saber de mim? [1] Experiências profissionais, [2] Conhecimentos técnicos, [3] Informações de contato, [exit] Sair'
var inputId = 0

const workExp = [
  {
    nome: 'Spi Integradora de sistemas',
    periodo: '2019 - 2020',
    atribuicoes: 'Documentação e desenvolvimento de software para controladores lógicos'
  },

  {
    nome: 'LT Telecom',
    periodo: '2015 - 2015',
    atribuicoes: 'Rotina geral de departamento comercial, auditoria de vendas e prspecção de novos clientes'
  },
]

const skills = [
  {
    skill: 'HTML',
    level: '8'
  },
  
  {
    skill: 'CSS',
    level: '6'
  },

  {
    skill: 'Javascript',
    level: '6'
  },

  {
    skill: 'SQL',
    level: '4'
  },

  {
    skill: 'PHP',
    level: '5'
  },

  {
    skill: 'Lógica de programação',
    level: '5'
  },

]


function typeWrite (txt, element, keepUnderline, callback) {
  let i = 0

  setTimeout(() => {
    const itv = setInterval(() => {
      element.textContent += txt[i++]
            
      if(i >= txt.length) {
        clearInterval(itv)
        setTimeout(() => {
          if (!keepUnderline)
            element.className = 'line'
          
            callback()
        },1000)
      }
      }, 20)
  },800)
}

function insertInput (callback = () => {}) {
  
  const p = document.createElement('p')
  p.className = 'line active'
  p.id = Math.floor(Math.random() * 100)
  p.style = 'display: inline;'
  content.appendChild(p)
  var input = document.getElementById(p.id)

  document.addEventListener('keyup', function handleKey(e) {
    if (e.keyCode === 8) {
      input.textContent = input.textContent.slice(0, -1)
    }else if (e.keyCode === 13) {
      document.removeEventListener('keyup', handleKey)
      let option = input.textContent;
      input.className = 'line'

      switch (option) {
        case '1': 
          insertNewLine(showExperiences(), 0, () => {
            input.className = 'line'
            insertInput()
          })
          break;

          case '2': 
          insertNewLine(showSkills(), 0, () => {
            input.className = 'line'
            insertInput()
          })
          break;

          case '3':
          insertNewLine(showInfo(), 0, () => {
            insertInput()
          }) 
          break;

          case 'exit': 
          insertNewLine('Muito obrigado pela sua atenção!', 0, insertInput)
          window.close()
          break;

          default: 
          insertNewLine('Opção inválida', 0, insertInput)
      }

    } else {
      input.textContent += e.key
    }
  })
}

function insertNewLine (txt, keepUnderline, callback = () => {}) {
    const p = document.createElement('p')
    p.className = 'line active'
    content.appendChild(p)
    typeWrite(txt, p, keepUnderline, callback)
}

function showExperiences () {
  let txt = ''

  workExp.forEach(({nome, periodo, atribuicoes}) => {
    txt += `[ ${nome}, ${periodo}, ${atribuicoes} ]`
  })

  return txt
}

function showSkills () {
  let txt = ''

  skills.forEach(({skill, level}) => {
    txt += `${skill}:  ${level}`
  })

  return txt
}

function showInfo () {
  return 'Telefone:(51) 99419-4479 / Email: contato.guilhermeblanco@gmail.com / Github: github.com/guilhermesblanco'
}

insertNewLine (txt1, 0, () => {
  insertNewLine(txt2, 0, () => {
    insertNewLine(txt3, 0, () => {
      insertNewLine(txt4, 0, () => {
        insertInput(() => {})
      })
    })
  })
})



