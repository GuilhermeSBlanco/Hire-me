const content = document.querySelector('[data-js="content"]')
const txt1 = 'Olá, meu nome é Guilherme, tenho 26 anos e atualmente estudo Análise e desenvolvimento de sistemas.'
const txt2 = 'Possuo experiência como programador na área de automação industrial.'
const txt3 = 'Atualmente estou direcionando meus estudos para a área de Frontend, com as tecnologias React e Node.'
const txt4 = 'O que você quer saber de mim? [1] Experiências profissionais, [2] Conhecimentos técnicos, [3] Formação, [4] Informações de contato, [exit] Sair'

const workExp = [
  {
    nome: 'GVDasa Tecnologia em Software',
    periodo: '2021 - Atualmente',
    atribuicoes: 'Documentação e desenvolvimento de ERP\'s utilizando linguagem Delphi. Testes automatizados e Levantamento de requisitos.'
  },

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
    course: "Análise e desenvolvimento de sistemas",
    institution: 'Unisanta',
    period: '2020 - Atualmente'
  },

  {
    course: "Técnico em Automação Industrial",
    institution: 'Senai - CETEMP',
    period: '2018 - 2019'
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

const info = [
  {
    type: 'Telefone',
    value: '51 99419-4479'
  },
  
  {
    type: 'Email',
    value: 'contato.guilhermeblanco@gmail.com'
  },
  {
    type: 'Github',
    value: 'github.com/guilhermesblanco'
  },
  
  {
    type: 'Linked.in',
    value: 'www.linkedin.com/in/guilherme-blanco-279117164/'
  }

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
  const p = document.createElement('p')
  p.className = 'line active'
  content.appendChild(p)
  p.scrollIntoView()
  document.addEventListener('keyup', function handleKey(e) {
    if (e.keyCode === 8) {
      p.textContent = p.textContent.slice(0, -1)
    }else if (e.keyCode === 13) {
      document.removeEventListener('keyup', handleKey)
      let option = p.textContent;
      p.className = 'line'

      switch (option.toLowerCase ().trim ()) {
        case '':
        insertInput ()
        break;

        case '1': 
          showExperiences ()
          insertInput ()
          break;

          case '2': 
          insertNewLine (showSkills(), 2, 0, () => {
            p.className = 'line'
            insertInput ()
          })
          break;

          case '3':
          showGraduation ()
          insertInput () 
          break;

          case '4':
          showInfo()
          insertInput()
          break;

          case 'cls':
          cls ()
          break;

          case 'exit': 
          insertNewLine('Muito obrigado pela sua atenção!', 2, 0, () => {
          setTimeout ( () => {
            window.close ()
          }, 1000)
          })
          break;

          default: 
          insertNewLine ('Opção inválida', 0, 2, insertInput)
      }

    } else {
      if (e.key.length === 1)
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
  const tb = document.createElement('table')
  tb.className = 'blockProfessional'
  const theader = document.createElement('theader')
  theader.className = 'tbHeader'
  const tbody = document.createElement('tbody')
  tbody.className = 'tbBody'
  const tdName = document.createElement('td')
  const tdPeriod = document.createElement('td')
  const tdAttr = document.createElement('td')
  tdName.textContent = 'Empresa'
  tdPeriod.textContent = 'Periodo'
  tdAttr.textContent = 'Atribuições'
  theader.appendChild(tdName)
  theader.appendChild(tdPeriod)
  theader.appendChild(tdAttr)
  tb.appendChild(theader)

  workExp.forEach(item => {
    const tr = document.createElement('tr')
    tr.className = 'trContent'
    const tdCompany = document.createElement('td')
    const tdPeriodo = document.createElement('td')
    const tdAt = document.createElement('td')
    tdCompany.textContent = item.nome
    tdPeriodo.textContent = item.periodo
    tdAt.textContent = item.atribuicoes
    tr.appendChild(tdCompany)
    tr.appendChild(tdPeriodo)
    tr.appendChild(tdAt)
    tbody.appendChild(tr)
  })

  tb.appendChild(tbody)
  content.appendChild(tb)
}

function showGraduation () {
  const tb = document.createElement('table')
  tb.className = 'blockProfessional'
  const theader = document.createElement('theader')
  theader.className = 'tbHeader'
  const tbody = document.createElement('tbody')
  tbody.className = 'tbBody'
  const tdName = document.createElement('td')
  const tdPeriod = document.createElement('td')
  const tdAttr = document.createElement('td')
  tdName.textContent = 'Curso'
  tdPeriod.textContent = 'Instituição'
  tdAttr.textContent = 'Periodo'
  theader.appendChild(tdName)
  theader.appendChild(tdPeriod)
  theader.appendChild(tdAttr)
  tb.appendChild(theader)

  graduation.forEach(item => {
    const tr = document.createElement('tr')
    tr.className = 'trContent'
    const tdCourse = document.createElement('td')
    const tdInstitution = document.createElement('td')
    const tdPeriod = document.createElement('td')
    tdCourse.textContent = item.course
    tdInstitution.textContent = item.institution
    tdPeriod.textContent = item.period
    tr.appendChild(tdCourse)
    tr.appendChild(tdInstitution)
    tr.appendChild(tdPeriod)
    tbody.appendChild(tr)
  })

  tb.appendChild(tbody)
  content.appendChild(tb)
}


function showSkills () {
  let txt = ''

  skills.forEach(({skill, level}) => {
    txt += `${skill}:  ${level} `
  })

  return txt
}

function cls () {
  content.textContent = ''
  const p1 = document.createElement('p')
  p1.textContent = txt1
  p1.className = 'line'
  const p2 = document.createElement('p')
  p2.textContent = txt2
  p2.className = 'line'
  const p3 = document.createElement('p')
  p3.textContent = txt3
  p3.className = 'line'
  const p4 = document.createElement('p')
  p4.textContent = txt4
  p4.className = 'line'
  content.appendChild(p1) 
  content.appendChild(p2) 
  content.appendChild(p3) 
  content.appendChild(p4) 
  insertInput()
}

function showInfo () {
  const tb = document.createElement('table')
  tb.className = 'infoBlock'
  info.forEach ( ({type, value}) => {
    const tr = document.createElement('tr')
    tr.className = 'trContent'
    const tdType = document.createElement('td')
    const tdValue = document.createElement('td')
    tdType.className = 'tdContent'
    tdValue.className = 'tdContent'
    tdType.textContent = type + ': ';
    tdValue.textContent = value
    tr.appendChild(tdType)
    tr.appendChild(tdValue)
    tb.appendChild(tr)
  })
  
  content.appendChild(tb)
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
