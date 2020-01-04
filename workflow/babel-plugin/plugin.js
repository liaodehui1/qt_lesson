module.exports = function (babel) {
  const { types } = babel
  return {
    visitor: {
      // Identifier(path) {
      //   path.node.name = 'aaa'
      // },
      ImportDeclaration(path) {
        const specify = path.node.specifiers
        const source = path.node.source

        // import home from ''
        // import * as foo from ''

        if (!types.isImportDefaultSpecifier(specify[0]) &&
          !types.isImportNamespaceSpecifier(specify[0])) {
          const declare = specify.map(spec => {
            // import {foo} from 'a' -> import foo from 'a/foo'
            const transformName = spec.local.name
            const importDefault = types.importDeclaration(
              [types.importDefaultSpecifier(spec.local)],
              types.StringLiteral(`${source.value}/${transformName}`)
            )
            return importDefault
          })
          path.replaceWithMultiple(declare)
        }
      }
    }
  }
}