import { Rule, SchematicContext, Tree, url, apply, template, move, chain, SchematicsException } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { dasherize } from '@angular-devkit/core/src/utils/strings';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.

interface myOptions {
  componentName: string,
  name: string
}

function addFiles(_options: myOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    if (!_options.name) {
      throw new SchematicsException("Entity name is required");
    }
    const path = `./src/app/components`;

    context.logger.debug(`adding files to ${path} dir`);

    return apply(url("./files"), [
      template({
        ...strings,
        ..._options
      }),
      move(path)
    ])(context);
    tree;
  };
}

export function kingsman(_options: myOptions): Rule {
  _options = {
    ..._options,
    ...{ selector: `app-${dasherize(_options.name)}`, style: "css" }
  };

  return (tree: Tree, _context: SchematicContext) => {
    return chain([addFiles(_options)])(tree, _context);
  };
}
