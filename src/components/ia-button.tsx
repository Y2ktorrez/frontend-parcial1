import { Editor } from "@grapesjs/studio-sdk/dist/typeConfigs/gjsExtend.js";

export function InsertarNuevaPaginaDesdeIA({ editor }: { editor?: Editor }) {
//     <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; background-color: #f4f4f4;">
//     <div style="display: flex; gap: 20px;">
//       <div style="flex: 1; border: 1px solid #ccc; padding: 15px; background-color: #fff;">
//         <h3 style="margin-top: 0; margin-bottom: 10px; font-size: 1.2em;">Datos de factura</h3>
//         <div style="display: flex; flex-direction: column; gap: 10px;">
//           <div style="display: flex; gap: 10px;">
//             <label style="width: 50px;">NRO:</label>
//             <input type="text" style="flex: 1; padding: 8px; border: 1px solid #ddd;" placeholder="Nro." data-gjs-type="input" />
//           </div>
//           <div style="display: flex; gap: 10px;">
//             <label style="width: 70px;">NOMBRE:</label>
//             <input type="text" style="flex: 1; padding: 8px; border: 1px solid #ddd;" placeholder="Nombre" data-gjs-type="input" />
//           </div>
//           <div style="display: flex; gap: 10px;">
//             <label style="width: 50px;">NIT:</label>
//             <input type="text" style="flex: 1; padding: 8px; border: 1px solid #ddd;" placeholder="NIT" data-gjs-type="input" />
//           </div>
//         </div>
//       </div>
//       <div style="flex: 1; border: 1px solid #ccc; padding: 15px; background-color: #fff;">
//         <h3 style="margin-top: 0; margin-bottom: 10px; font-size: 1.2em;">Lista Facturas</h3>
//         <table style="width: 100%; border-collapse: collapse;">
//           <thead>
//             <tr style="background-color: #eee;">
//               <th style="padding: 8px; border: 1px solid #ddd; text-align: left;"><div>NRQ</div></th>
//               <th style="padding: 8px; border: 1px solid #ddd; text-align: left;"><div>NOMBRE</div></th>
//               <th style="padding: 8px; border: 1px solid #ddd; text-align: left;"><div>NIT</div></th>
//               <th style="padding: 8px; border: 1px solid #ddd; text-align: left;"><div>MONTO TOTAL</div></th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>111</div></td>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>Milena Molinedo</div></td>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>12</div></td>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>48.0</div></td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>222</div></td>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>Arnol Mansilla</div></td>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>13</div></td>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>34.0</div></td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>333</div></td>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>Giovanni Choque</div></td>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>14</div></td>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>20.0</div></td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>444</div></td>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>Eduardo Guzman</div></td>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>15</div></td>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>10.0</div></td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>555</div></td>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>OCTAVIO ANTELO</div></td>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>16</div></td>
//               <td style="padding: 8px; border: 1px solid #ddd;"><div>60.0</div></td>
//             </tr>
//           </tbody>
//         </table>
//         <div style="display: flex; justify-content: flex-end; margin-top: 10px; gap: 10px;">
//           <button style="padding: 10px 15px; background-color: #4CAF50; color: white; border: none; cursor: pointer;" data-gjs-type="button"><div>Registrar</div></button>
//           <button style="padding: 10px 15px; background-color: #f44336; color: white; border: none; cursor: pointer;" data-gjs-type="button"><div>Eliminar</div></button>
//         </div>
//       </div>
//     </div>
//     <div style="border: 1px solid #ccc; padding: 15px; background-color: #fff;">
//       <h3 style="margin-top: 0; margin-bottom: 10px; font-size: 1.2em;">Carrito</h3>
//       <div style="display: flex; gap: 10px; margin-bottom: 10px; align-items: center;">
//         <label style="width: 30px;">Nro</label>
//         <input type="text" style="width: 50px; padding: 8px; border: 1px solid #ddd;" placeholder="Nro" data-gjs-type="input" />
//         <label style="width: 70px;">Producto</label>
//         <select style="flex: 1; padding: 8px; border: 1px solid #ddd;" data-gjs-type="select">
//           <option><div>Tarzan</div></option>
//           <option><div>Otro Producto</div></option>
//         </select>
//         <label style="width: 50px;">Precio</label>
//         <input type="text" style="width: 70px; padding: 8px; border: 1px solid #ddd;" placeholder="Precio" data-gjs-type="input" />
//         <label style="width: 70px;">Cantidad</label>
//         <input type="number" style="width: 60px; padding: 8px; border: 1px solid #ddd;" placeholder="Cantidad" data-gjs-type="input" />
//         <button style="padding: 8px 12px; background-color: #008CBA; color: white; border: none; cursor: pointer;" data-gjs-type="button"><div>Agregar</div></button>
//         <button style="padding: 8px 12px; background-color: #f44336; color: white; border: none; cursor: pointer;" data-gjs-type="button"><div>Eliminar</div></button>
//       </div>
//       <table style="width: 100%; border-collapse: collapse;">
//         <thead>
//           <tr style="background-color: #eee;">
//             <th style="padding: 8px; border: 1px solid #ddd; text-align: left;"><div>Nro</div></th>
//             <th style="padding: 8px; border: 1px solid #ddd; text-align: left;"><div>Nombre</div></th>
//             <th style="padding: 8px; border: 1px solid #ddd; text-align: left;"><div>Precio</div></th>
//             <th style="padding: 8px; border: 1px solid #ddd; text-align: left;"><div>Cantidad</div></th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><div></div></td>
//             <td style="padding: 8px; border: 1px solid #ddd;"><div></div></td>
//             <td style="padding: 8px; border: 1px solid #ddd;"><div></div></td>
//             <td style="padding: 8px; border: 1px solid #ddd;"><div></div></td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><div></div></td>
//             <td style="padding: 8px; border: 1px solid #ddd;"><div></div></td>
//             <td style="padding: 8px; border: 1px solid #ddd;"><div></div></td>
//             <td style="padding: 8px; border: 1px solid #ddd;"><div></div></td>
//           </tr>
//           <tr>
//             <td style="padding: 8px; border: 1px solid #ddd;"><div></div></td>
//             <td style="padding: 8px; border: 1px solid #ddd;"><div></div></td>
//             <td style="padding: 8px; border: 1px solid #ddd;"><div></div></td>
//             <td style="padding: 8px; border: 1px solid #ddd;"><div></div></td>
//           </tr>
//         </tbody>
//       </table>
//       <div style="text-align: right; margin-top: 10px;">
//         <label style="font-weight: bold;">TOTAL:</label>
//         <span style="display: inline-block; min-width: 50px; text-align: right;"><div></div></span>
//       </div>
//     </div>
//   </div>
  const htmlGeneradoPorIA = `
    <!-- Just the HTML code inside a <div>, ready to paste in GrapesJS -->
<div style="font-family: Arial, sans-serif; padding: 20px; display: flex; flex-direction: column; gap: 20px; background-color: #f5f5f5;">

  <!-- Sección: Datos de Factura -->
  <div style="border: 1px solid #ccc; padding: 15px;">
    <h3 style="margin-top: 0;">Datos de factura</h3>
    <form style="display: flex; gap: 20px; flex-wrap: wrap;">
      <label style="display: flex; flex-direction: column;">
        <span>NRO:</span>
        <input type="text" style="padding: 4px; width: 120px;">
      </label>
      <label style="display: flex; flex-direction: column;">
        <span>NOMBRE:</span>
        <input type="text" style="padding: 4px; width: 200px;">
      </label>
      <label style="display: flex; flex-direction: column;">
        <span>NIT:</span>
        <input type="text" style="padding: 4px; width: 150px;">
      </label>
    </form>
  </div>

  <!-- Sección: Carrito -->
  <div style="border: 1px solid #ccc; padding: 15px;">
    <h3 style="margin-top: 0;">Carrito</h3>
    <form style="display: flex; gap: 10px; flex-wrap: wrap; align-items: flex-end;">
      <label style="display: flex; flex-direction: column;">
        <span>Nro</span>
        <input type="text" style="padding: 4px; width: 60px;">
      </label>
      <label style="display: flex; flex-direction: column;">
        <span>Producto</span>
        <select style="padding: 4px; width: 120px;">
          <option value="Tarzan">Tarzan</option>
        </select>
      </label>
      <label style="display: flex; flex-direction: column;">
        <span>Precio</span>
        <input type="text" style="padding: 4px; width: 80px;">
      </label>
      <label style="display: flex; flex-direction: column;">
        <span>Cantidad</span>
        <input type="text" style="padding: 4px; width: 80px;">
      </label>
      <button type="button" style="padding: 6px 12px;">Agregar</button>
      <button type="button" style="padding: 6px 12px;">Eliminar</button>
    </form>

    <table style="width: 100%; margin-top: 15px; border-collapse: collapse;">
      <thead>
        <tr style="background-color: #e6e6e6;">
          <th style="border: 1px solid #999; padding: 6px;"><div>Nro</div></th>
          <th style="border: 1px solid #999; padding: 6px;"><div>Nombre</div></th>
          <th style="border: 1px solid #999; padding: 6px;"><div>Precio</div></th>
          <th style="border: 1px solid #999; padding: 6px;"><div>Cantidad</div></th>
        </tr>
      </thead>
      <tbody>
        <!-- Filas dinámicas -->
        <tr>
          <td style="border: 1px solid #ccc; padding: 6px;"><div></div></td>
          <td style="border: 1px solid #ccc; padding: 6px;"><div></div></td>
          <td style="border: 1px solid #ccc; padding: 6px;"><div></div></td>
          <td style="border: 1px solid #ccc; padding: 6px;"><div></div></td>
        </tr>
      </tbody>
    </table>
    <div style="margin-top: 10px; font-weight: bold;">TOTAL: <span></span></div>
  </div>

  <!-- Sección: Lista Facturas -->
  <div style="border: 1px solid #ccc; padding: 15px;">
    <h3 style="margin-top: 0;">Lista Facturas</h3>
    <table style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background-color: #e6e6e6;">
          <th style="border: 1px solid #999; padding: 6px;"><div>NRO</div></th>
          <th style="border: 1px solid #999; padding: 6px;"><div>NOMBRE</div></th>
          <th style="border: 1px solid #999; padding: 6px;"><div>NIT</div></th>
          <th style="border: 1px solid #999; padding: 6px;"><div>MONTO TOTAL</div></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>111</div></td>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>Milena Mollinedo</div></td>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>12</div></td>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>48.0</div></td>
        </tr>
        <tr>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>222</div></td>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>Arnol Mansilla</div></td>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>13</div></td>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>34.0</div></td>
        </tr>
        <tr>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>333</div></td>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>Giovanni Choque</div></td>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>14</div></td>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>20.0</div></td>
        </tr>
        <tr>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>444</div></td>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>Eduardo Guzman</div></td>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>15</div></td>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>10.0</div></td>
        </tr>
        <tr>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>555</div></td>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>OCTAVIO ANTELO</div></td>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>16</div></td>
          <td style="border: 1px solid #ccc; padding: 6px;"><div>60.0</div></td>
        </tr>
      </tbody>
    </table>
    <div style="margin-top: 15px; display: flex; gap: 10px;">
      <button type="button" style="padding: 6px 16px;">Registrar</button>
      <button type="button" style="padding: 6px 16px;">Eliminar</button>
    </div>
  </div>

</div>


  `;

  function addPage() {
    if(!editor) return;
    // 1. Crear nueva página
    const nuevaPagina = editor.Pages.add({
      name: "Vista IA Generada",
    });
  
    // 2. Insertar el HTML generado por IA
    nuevaPagina?.getMainComponent().append(htmlGeneradoPorIA);
  
    // 3. Seleccionar automáticamente esa nueva página
    editor.Pages.select(nuevaPagina || "home");

  }


  return (
    <button type="button" onClick={addPage}>
      Generar desde IA
    </button>
  );
};
