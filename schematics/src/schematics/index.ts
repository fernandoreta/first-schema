import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
interface MyOptions {
  name: string;
  lastName: string;
}
export function schematics(_options: MyOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree.create("index.html", `
    <p>This is just an example to schematics>/p>
    <p>My name is ${_options.name} ${_options.lastName}</p>
    `);
  };
}
