'use client';

import { useCallback } from 'react';

export function PrototipeImageButton() {
  const onSelectFile = useCallback(() => {
    const input = document.getElementById('file-input') as HTMLInputElement | null;
    input?.click();
  }, []);
  
  

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('Archivo seleccionado:', file.name);

    }
    e.target.value = ''; 
  }, []);

  
  return (
    <>
      <input
        id="file-input"
        type="file"
        accept="image/*," 
        style={{ display: 'none' }}
        onChange={onFileChange}
      />
      <button
        onClick={onSelectFile}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Subir archivo
      </button>
    </>
  );
}
