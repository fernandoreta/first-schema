import { Rule, SchematicContext, Tree, url, move, template, apply } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';



// You don't have to export the function as default. You can also have more than one rule factory
// per file.
interface MyOptions {
  name: string;
}

export function schematics(_options: MyOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const rules: Rule[] = [
      template({
        ...strings,
        ..._options
      }),
      move('src/app/components')
    ];
    //tree just for eslint
    tree;
    const source = url("./files");
    return apply(source, rules)(_context);
  };
}
