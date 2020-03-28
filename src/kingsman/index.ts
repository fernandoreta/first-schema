import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
interface MyData {
  name: string
  fileName: string;
  fileExtension: string;
}

export function kingsman(_options: MyData): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree.create(`${_options.fileName}.${_options.fileExtension}`, `Hi Eggsy! my name is ${_options.name}`)
  };
}
