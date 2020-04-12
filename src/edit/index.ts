import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
interface propMenu {
  prop: string
}
export function edit(_options: propMenu): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const content: Buffer | null = tree.read("./src/app/components/default-name.component.html");
    let strContent: string = '';
    if(content) strContent = content.toString();

    const appendIndex = strContent.indexOf('</ul>');
    const content2Append =  `<li><a href="/${_options.prop}">${_options.prop}</a></li> \n`;
    const updatedContent = strContent.slice(0, appendIndex) + content2Append + strContent.slice(appendIndex);

    tree.overwrite("./src/app/components/default-name.component.html", updatedContent);
    return tree;
  };
}
