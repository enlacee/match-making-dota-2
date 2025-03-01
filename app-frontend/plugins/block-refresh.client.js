/*
export default defineNuxtPlugin(() => {
    if (process.client) {
      const showWarning = () => {
        const existingWarning = document.getElementById('refresh-warning');
        if (!existingWarning) {
          const div = document.createElement('div');
          div.id = 'refresh-warning';
          div.innerText = '⛔ No está permitido refrescar la página.';
          div.style.position = 'fixed';
          div.style.top = '20px';
          div.style.left = '50%';
          div.style.transform = 'translateX(-50%)';
          div.style.background = 'rgba(0, 0, 0, 0.8)';
          div.style.color = '#fff';
          div.style.padding = '10px 20px';
          div.style.borderRadius = '10px';
          div.style.zIndex = '9999';
          div.style.fontSize = '16px';
          div.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
          
          document.body.appendChild(div);
          setTimeout(() => div.remove(), 3000); // Ocultar después de 3 segundos
        }
      };
  
      // Evita refrescar con F5, Ctrl+R o Cmd+R
      window.addEventListener('keydown', (event) => {
        if (
          event.key === 'F5' || 
          (event.ctrlKey && event.key === 'r') || 
          (event.metaKey && event.key === 'r')
        ) {
          event.preventDefault();
          showWarning();
        }
      });
  
      // Bloquea el refresco en móviles (deslizar hacia abajo)
      document.addEventListener('touchmove', (event) => {
        if (window.scrollY === 0) {
          event.preventDefault();
          showWarning();
        }
      }, { passive: false });
  
      // Bloquea el refresco al cerrar o recargar la página
      window.addEventListener('beforeunload', (event) => {
        event.preventDefault();
        event.returnValue = '';
        showWarning();
      });
    }
  });
  */