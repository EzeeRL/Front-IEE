const form = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");
const spinner = document.getElementById("spinner");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;

  mensaje.textContent = ""; // Limpiar mensaje anterior
  spinner.style.display = "block"; // Mostrar el spinner

  try {
    const response = await fetch("https://bakend-iie.vercel.app/api/contacto/23", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, email }),
    });

    const data = await response.json();

    if (response.ok) {
  fbq('track', 'Lead'); // ← esto dispara el evento 'Lead' al pixel
  window.location.href = "https://drive.google.com/file/d/1ArExeOf28P5IFHmRzdvlWkdhApYksWhG/view?usp=drive_link";
}
    if (response.ok) {
      window.location.href = "https://drive.google.com/file/d/1ArExeOf28P5IFHmRzdvlWkdhApYksWhG/view?usp=drive_link"; // ← Cambiá esto por tu URL real
    } else {
      mensaje.textContent = "Error: " + (data.error || "No se pudo registrar.");
      mensaje.style.color = "red";
    }
  } catch (error) {
    mensaje.textContent = "Error al enviar el formulario.";
    mensaje.style.color = "red";
    console.error(error);
  } finally {
    spinner.style.display = "none"; // Ocultar spinner al finalizar
  }
});
