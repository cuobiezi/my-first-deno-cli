const { args: [name] } = Deno;
import { ensureDir } from "https://deno.land/std/fs/ensure_dir.ts";

const compoContent: string = `import React from 'react';
import PropTypes from 'prop-types';

${name}.propTypes = {
    
};
function ${name}(props) {
    return (
        <div className="${name.toLowerCase()}">
        </div>
    );
}
export default ${name};
`;


const compoPath: string = "./app/components/" + name + "/";

ensureDir(compoPath)
  .then(() => {
    Deno.writeTextFile(compoPath + "index.js", compoContent);
    console.info("Done!");
});