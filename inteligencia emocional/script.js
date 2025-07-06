const form = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");
const spinner = document.getElementById("spinner");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;

  mensaje.textContent = ""; // Limpiar mensaje anterior
  spinner.style.display = "block"; // Mostrar el spinner
  const eventId = Date.now().toString(); // ID único
  try {
    const response = await fetch(
      "https://bakend-iie.vercel.app/api/contacto/19",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("contactId", data.contactId);
      fbq("track", "Lead", {}, { eventID: eventId }); // ← esto dispara el evento 'Lead' al pixel
      window.location.href =
        "https://inteligenciaemocionalinstituto.com/vs/vsl.html";
    }
    if (response.ok) {
      window.location.href =
        "https://inteligenciaemocionalinstituto.com/vs/vsl.html";
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
