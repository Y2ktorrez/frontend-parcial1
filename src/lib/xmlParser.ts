import { parseStringPromise } from 'xml2js';
import { stripPrefix } from 'xml2js/lib/processors';

export interface Clase {
  nombre: string;
  atributos: { nombre: string; tipo: string }[];
}

/**
 * parseModelXml
 * — Soporta XMI de Enterprise Architect y XML simples.
 */
export async function parseModelXml(xml: string): Promise<Clase[]> {
  // 1) Parseamos quitando los prefijos UML: y xmi:
  const result: any = await parseStringPromise(xml, {
    tagNameProcessors: [stripPrefix],
    attrNameProcessors: [stripPrefix],
  });

  // 2) Recorrer todo el árbol para encontrar nodos 'Class'
  function findClasses(node: any): any[] {
    if (!node || typeof node !== 'object') return [];
    let out: any[] = [];
    for (const key of Object.keys(node)) {
      if (key === 'Class') {
        const arr = Array.isArray(node[key]) ? node[key] : [node[key]];
        out.push(...arr);
      } else if (typeof node[key] === 'object') {
        out.push(...findClasses(node[key]));
      }
    }
    return out;
  }

  // 3) Para cada clase, buscar todos los nodos 'Attribute' (o 'attribute')
  function findAttributes(node: any): any[] {
    if (!node || typeof node !== 'object') return [];
    let out: any[] = [];
    for (const key of Object.keys(node)) {
      if (key === 'Attribute' || key === 'attribute') {
        const arr = Array.isArray(node[key]) ? node[key] : [node[key]];
        out.push(...arr);
      } else if (typeof node[key] === 'object') {
        out.push(...findAttributes(node[key]));
      }
    }
    return out;
  }

  // 4) Ejecutar
  const rawClasses = findClasses(result);

  const clases: Clase[] = rawClasses
    // Filtra solo los que tengan nombre
    .filter((c: any) => c.$?.name)
    .map((c: any) => {
      const attrsRaw = findAttributes(c);
      const atributos = attrsRaw.map((a: any) => ({
        nombre: a.$.name,
        tipo: a.$.type ?? 'text',
      }));
      return {
        nombre: c.$.name,
        atributos,
      };
    });

  return clases;
}
