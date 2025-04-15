"use client";

import { useState } from "react";
import type { Editor } from "grapesjs";
import GrapesJsStudio, {
  StudioCommands,
  ToastVariant,
} from "@grapesjs/studio-sdk/react";

import "@grapesjs/studio-sdk/style";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { ExportZipButton } from "@/components/export-zip-button";
import { ExportXmlZipButton } from "@/components/export-json-model-button";
// import { ExportToAngular } from './lib/export-angular';

export default function Home() {
  const [editor, setEditor] = useState<Editor>();

  const onReady = (editor: Editor) => {
    console.log("Editor loaded", editor);
    setEditor(editor);
  };

  const exportToAngular = async () => {
    if (!editor) return;

    const html = editor.getHtml();
    const css = editor.getCss();

    const zip = new JSZip();

    // angular.json
    zip.file(
      "angular.json",
      `
  {
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "new-proyect": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/new-proyect",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": ["zone.js"],
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": ["src/styles.css"],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "new-proyect:build:production"
            },
            "development": {
              "buildTarget": "new-proyect:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n"
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": ["zone.js", "zone.js/testing"],
            "tsConfig": "tsconfig.spec.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": ["src/styles.css"],
            "scripts": []
          }
        }
      }
    }
  }
}
    `
    );

    // package.json
    zip.file(
      "package.json",
      `
{
  "name": "new-proyect",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "^19.2.0",
    "@angular/compiler": "^19.2.0",
    "@angular/core": "^19.2.0",
    "@angular/forms": "^19.2.0",
    "@angular/platform-browser": "^19.2.0",
    "@angular/platform-browser-dynamic": "^19.2.0",
    "@angular/router": "^19.2.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.15.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^19.2.7",
    "@angular/cli": "^19.2.7",
    "@angular/compiler-cli": "^19.2.0",
    "@types/jasmine": "~5.1.0",
    "jasmine-core": "~5.6.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.7.2"
  }
}

    `
    );

    // tsconfig.json
    zip.file(
      "tsconfig.json",
      `
    {
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "moduleResolution": "bundler",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}
    `
    );
    zip.file(
      "tsconfig.app.json",
      `
 {
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": []
  },
  "files": [
    "src/main.ts"
  ],
  "include": [
    "src/**/*.d.ts"
  ]
}
    `
    );

    zip.file(
      "tsconfig.spec.json",
      `
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jasmine"
    ]
  },
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}

    `
    );

    // Archivos esenciales
    zip.file("src/index.html", `<app-root></app-root>`);
    zip.file("src/styles.css", ``);
    zip.file(
      "src/main.ts",
      `
    import { bootstrapApplication } from '@angular/platform-browser';
    import { appConfig } from './app/app.config';
    import { AppComponent } from './app/app.component';

    bootstrapApplication(AppComponent, appConfig)
     .catch((err) => console.error(err));

    `
    );

    // App module y componente
    zip.file(
      "src/app/app.component.ts",
      `
      import { Component } from '@angular/core';
      import { RouterOutlet } from '@angular/router';

      @Component({
        selector: 'app-root',
        imports: [RouterOutlet],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css'
      })
      export class AppComponent {
        title = 'new-proyect';
      }
    `
    );

    zip.file(
      "src/app/app.config.ts",
      `
      import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
      import { provideRouter } from '@angular/router';

      import { routes } from './app.routes';

      export const appConfig: ApplicationConfig = {
        providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
      };
    `
    );

    zip.file(
      "src/app/app.routes.ts",
      `
      import { Routes } from '@angular/router';

      export const routes: Routes = [];
    `
    );

    zip.file("src/app/app.component.html", html || "");
    zip.file("src/app/app.component.css", css || "");

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "new-proyect.zip");
  };

  const showToast = (id: string) =>
    editor?.runCommand(StudioCommands.toastAdd, {
      id,
      header: "Exportación completada",
      content: "Código Angular generado correctamente",
      variant: ToastVariant.Success,
    });

  const getProjetData = () => {
    if (editor) {
      console.log({ projectData: editor?.getProjectData() });
      showToast("log-project-data");
    }
  };

  const getExportData = () => {
    if (editor) {
      console.log({ html: editor?.getHtml(), css: editor?.getCss() });
      showToast("log-html-css");
    }
  };

  const exportJson = () => {
    const project = editor?.getProjectData();
    const blob = new Blob([JSON.stringify(project, null, 2)], {
      type: "application/json",
    });
    saveAs(blob, "grapesjs-project.json");
  };

  return (
    <main className="flex h-screen flex-col justify-between p-5 gap-2">
      <div className="p-1 flex gap-5">
        <div className="font-bold">SDK example Next.js</div>
        <button className="border rounded px-2" onClick={getProjetData}>
          Log Project Data
        </button>
        <button className="border rounded px-2" onClick={getExportData}>
          Log HTML/CSS
        </button>
        <button className="border rounded px-2" onClick={exportToAngular}>
          Exportar Angular
        </button>
        <ExportZipButton editor={editor} />
        <ExportXmlZipButton />
        {/* <button className="border rounded px-2" onClick={()=> ExportToAngular(editor as Editor)}>
          Exportar Todo a Angular
        </button> */}
      </div>
      <div className="flex-1 w-full h-full overflow-hidden">
        <GrapesJsStudio
          onReady={onReady}
          options={{
            licenseKey: "YOUR_LICENSE_KEY",
            project: {
              default: {
                pages: [
                  {
                    name: "Home",
                    component: `<h1 style="padding: 2rem; text-align: center">
                      Hello Studio 👋
                    </h1>`,
                  },
                ],
              },
            },
          }}
        />
      </div>
    </main>
  );
}
