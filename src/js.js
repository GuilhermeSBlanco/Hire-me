const content = document.querySelector('[data-js="content"]')
const txt1 = 'Olá, meu nome é Guilherme, tenho 26 anos e atualmente estudo Análise e desenvolvimento de sistemas.'
const txt2 = 'Possuo experiência como programador na área de automação industrial.'
const txt3 = 'Atualmente estou direcionando meus estudos para a área de Frontend, com as tecnologias React e Node.'
const txt4 = 'O que você quer saber de mim? [1] Experiências profissionais, [2] Conhecimentos técnicos, [3] Formação, [4] Informações de contato, [exit] Sair'

const workExp = [
  {
    nome: 'Spi Integradora de sistemas',
    periodo: '2019 - 2020',
    atribuicoes: 'Documentação e desenvolvimento de software para controladores lógicos'
  },

  {
    nome: 'LR Telecom',
    periodo: '2015 - 2015',
    atribuicoes: 'Rotina geral de departamento comercial, auditoria de vendas e prospecção de novos clientes'
  },
]

const graduation = [
  {
    course: "Análise e desenvolvimento de sistemas - Unisanta - 2020 - Atualmente",
  },

  {
    course: "Técnico em Automação Industrial - Senai CETEMP - 2018 - 2019",
  }
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

function regularWrite (txt, element, keepUnderline, callback) {
      element.textContent = txt
      element.className = 'line'       
      callback()
}

function insertInput (callback) {  
  const rgx = new RegExp('[a-zA-Z0-9]','g')
  const p = document.createElement('p')
  p.className = 'line active'
  content.appendChild(p)
  document.addEventListener('keyup', function handleKey(e) {
    if (e.keyCode === 8) {
      p.textContent = p.textContent.slice(0, -1)
    }else if (e.keyCode === 13) {
      document.removeEventListener('keyup', handleKey)
      let option = p.textContent;
      p.className = 'line'

      switch (option.toLowerCase()) {
        case '':
        insertInput()
        break;

        case '1': 
          insertNewLine(showExperiences(), 2, 0, () => {
            p.className = 'line'
            insertInput()
          })
          break;

          case '2': 
          insertNewLine(showSkills(), 2, 0, () => {
            p.className = 'line'
            insertInput()
          })
          break;

          case '3':
          insertNewLine(showGraduation(), 2, 0, () => {
            insertInput()
          }) 
          break;

          case '4':
          insertNewLine(showInfo(), 2, 0, () => {
            insertInput()
          }) 
          break;

          case 'exit': 
          insertNewLine('Muito obrigado pela sua atenção!', 2, 0, () => {
          setTimeout(() => {
            window.close()
          }, 2500)
          })
          break;

          default: 
          insertNewLine('Opção inválida', 0, 2, insertInput)
      }

    } else {
      if(e.key.length === 1)
        p.textContent += e.key
    }
  })
}

function insertNewLine (txt, keepUnderline, typeOrRegular, callback = () => {}) {
    const p = document.createElement('p')
    p.className = 'line active'
    content.appendChild(p)
    
    if (typeOrRegular === 1) {
      typeWrite(txt, p, keepUnderline, callback)
    } else {
      regularWrite(txt, p, keepUnderline, callback)
    }
}

function showExperiences () {
  let txt = ''

  workExp.forEach(({nome, periodo, atribuicoes}) => {
    txt += `${nome}, ${periodo}, ${atribuicoes}, `
  })

  return txt.slice(0, -2)
}

function showGraduation () {
  let txt = ''

  graduation.forEach(({course}) => {
    txt += `${course}, `
  })

  return txt.slice(0, -2)
}

function showSkills () {
  let txt = ''

  skills.forEach(({skill, level}) => {
    txt += `${skill}:  ${level} `
  })

  return txt
}

function showInfo () {
  return 'Telefone:(51) 99419-4479 / Email: contato.guilhermeblanco@gmail.com / Github: github.com/guilhermesblanco'
}

insertNewLine (txt1, 0, 1, () => {
  insertNewLine(txt2, 0, 1, () => {
    insertNewLine(txt3, 0, 1, () => {
      insertNewLine(txt4, 0, 1, () => {
        insertInput(() => {})
      })
    })
  })
})