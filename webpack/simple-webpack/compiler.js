const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const { transformFromAst } = require('@babel/core')
const fs = require('fs')
const PATH = require('path')

let entry = './src/index.js'

const getAst = (path) => {
  const content = fs.readFileSync(path, 'utf-8')
  return parser.parse(content, {
    sourceType: 'module'
  })
}

const getDep = (ast, fileName) => {
  let deps = {}
  traverse(ast, {
    ImportDeclaration(path) {
      const node = path.node
      const from = node.source.value
      // console.log(from) // .hello.js
      // ./hello.js -> ./src/hello.js
      const dir = PATH.dirname(fileName) // ./src
      const depFileName = PATH.join(dir, from)
      deps[from] = depFileName
    }
  })
  return deps
}

function getCode (ast) {
  const obj = transformFromAst(ast,null,{
    presets: ['@babel/preset-env']
  })
  return obj.code
}

function tranfromToObject (modules) {
  let obj = {}
  modules.forEach(item => {
    const key = item.fileName
    obj[key] = {}
    obj[key].dependencies = item.dep
    obj[key].code = item.code
  })
  return obj
}

function run () {
  let modules = []
  const info = build(entry)
  modules.push(info)
  for(let key in info.dep) {
    const depInfo = build(info.dep[key])
    modules.push(depInfo)
  }
  modules = tranfromToObject(modules)
  console.log(modules)
}

function build (fileName) {
  const ast = getAst(fileName)
  const dep = getDep(ast, fileName)
  const code = getCode(ast)
  return {
    fileName,
    ast,
    dep,
    code
  }
}

run()