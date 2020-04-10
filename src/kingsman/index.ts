import { Rule, SchematicContext, Tree, url, apply } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
interface MyData {
  name: string
  fileName: string;
  fileExtension: string;
}

export function kingsman(_options: MyData): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const rules: Rule[] = [];
    // use the url function to retrieve the source
    const source = url('./files');
    //use the apply function to apply the rules
    tree;
    return apply(source, rules)(_context);
  };
}
