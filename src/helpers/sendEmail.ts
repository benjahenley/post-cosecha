export const onSubmit = async (data: any) => {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // reset();
      alert("Mensaje enviado con éxito");
    } else {
      alert("Error al enviar el mensaje. Inténtalo de nuevo más tarde.");
    }
  } catch (error) {
    console.error(error);
    alert("Error al enviar el mensaje. Inténtalo de nuevo más tarde.");
  }
};
