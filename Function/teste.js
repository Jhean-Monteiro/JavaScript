const fs = require('fs');
const content = "const amogus = 'sus'; // ".repeat(800_000) + "\n".repeat(100);

for(let i = 1; i <= 50; i++){
  fs.writeFileSync(`bloat${i}.js`, content + `// arquivo ${i} de 50`);
}
