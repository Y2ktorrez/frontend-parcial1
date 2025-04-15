import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

type GrapesJSPage = {
    id: string;
    name: string;
    component: string;
  };

if (process.argv.length < 3) {
  console.error('📢 Uso: node generate-from-grapes.mjs <ruta/grapesjs-project.json>');
  process.exit(1);
}

const grapesJsonPath = path.resolve(process.cwd(), process.argv[2]);
if (!fs.existsSync(grapesJsonPath)) {
  console.error('❌ No existe el archivo:', grapesJsonPath);
  process.exit(1);
}

const appName = 'grapesjs-angular-app';

try {
  console.log('⚙️  ng new', appName);
  execSync(`npx @angular/cli@19 new ${appName} --routing --style=css --skip-install`, { stdio: 'inherit' });

  const appRoot = path.join(process.cwd(), appName);

  // Copiar JSON
  fs.copyFileSync(grapesJsonPath, path.join(appRoot, 'grapesjs-project.json'));
  console.log('✅ GrapesJS JSON copiado en', appRoot);

  // Crear scripts/import-grapesjs.mjs
  const importScript = `#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const project = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../grapesjs-project.json'), 'utf-8')
);

project.pages.forEach((page) => {
  const nameKebab = page.name.toLowerCase().replace(/\\s+/g, '-');
  console.log('🚀 Generando componente', nameKebab);
  execSync(\`npx ng generate component pages/\${nameKebab} --flat=false --module=app.module.ts\`, {
    cwd: path.resolve(__dirname, '..'),
    stdio: 'inherit'
  });

  fs.writeFileSync(
    path.resolve(__dirname, '..', 'src/app/pages', nameKebab, \`\${nameKebab}.component.html\`),
    page.component,
    'utf-8'
  );
  fs.writeFileSync(
    path.resolve(__dirname, '..', 'src/app/pages', nameKebab, \`\${nameKebab}.component.css\`),
    '',
    'utf-8'
  );
});

console.log('✅ Componentes importados');`;

  const scriptsDir = path.join(appRoot, 'scripts');
  fs.mkdirSync(scriptsDir, { recursive: true });
  fs.writeFileSync(path.join(scriptsDir, 'import-grapesjs.mjs'), importScript, { mode: 0o755 });
  console.log('✅ Script import-grapesjs.mjs creado');

  // Modificar package.json
  const pkgPath = path.join(appRoot, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  pkg.type = 'module';                // para ESM
  pkg.scripts = pkg.scripts || {};
  pkg.scripts['import:grapesjs'] = 'node scripts/import-grapesjs.mjs';
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf-8');
  console.log('✅ Añadido script "import:grapesjs" y "type":"module"');

  // Instalar dependencias
  console.log('📦 npm install');
  execSync('npm install', { cwd: appRoot, stdio: 'inherit' });

  // Ejecutar importación
  console.log('📥 npm run import:grapesjs');
  execSync('npm run import:grapesjs', { cwd: appRoot, stdio: 'inherit' });

  // Crear README.txt
  const project = JSON.parse(fs.readFileSync(path.join(appRoot, 'grapesjs-project.json'), 'utf-8'));
  const readme = `
# Proyecto Angular generado desde GrapesJS

Para ejecutar:

1. cd ${appName}
2. npm start
3. Abre http://localhost:4200

Rutas generadas:
${project.pages.map((p: GrapesJSPage) => '- /' + p.name.toLowerCase().replace(/\s+/g,'-')).join('\n')}



¡Disfruta!
`;
  fs.writeFileSync(path.join(appRoot, 'README.txt'), readme.trim(), 'utf-8');
  console.log('✅ README.txt creado');

  console.log(`🎉 Listo! cd ${appName} && npm start`);
} catch (err) {
  console.error('❌ Error:', err);
  process.exit(1);
}
  
