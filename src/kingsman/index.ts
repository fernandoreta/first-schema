import { Rule, SchematicContext, Tree, url, apply } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.


export function kingsman(): Rule {
  return (tree: Tree, _context: SchematicContext) => {
     // todo: use the template() function and provide the strings and _options members
     const rules: Rule[] = [];

     const source = url("./files");
     tree;
     return apply(source, rules)(_context);
  };
}
