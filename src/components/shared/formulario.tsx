import React from "react";
import { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import { enviarEmail } from "../../servicies/ServicieEmail";
import { Send } from "lucide-react";

const Formulario = () => {
  // referencia del formulario
  const formRef = useRef<HTMLFormElement>(null);

  // estado del formulario
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    service: "",
  });

  // función para actualizar inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //  const [loading, setLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  // función para enviar formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.company ||
      !formData.email ||
      !formData.service
    ) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    if (!formRef.current) return;

    try {
      setLoading(true);

      await enviarEmail(formRef.current);

      toast.success("Enviado con éxito");

      setFormData({
        name: "",
        company: "",
        email: "",
        service: "",
      });
    } catch {
      toast.error("Error al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  };

  return (

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="text-sm text-slate-300 block mb-2">
            Nombre completo
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
            className="w-full px-4 py-3 rounded-lg bg-[#0d1a24] border border-[#1e2a35] text-white text-sm outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="text-sm text-slate-300 block mb-2">
            Nombre de la empresa
          </label>

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Nombre de tu empresa"
            className="w-full px-4 py-3 rounded-lg bg-[#0d1a24] border border-[#1e2a35] text-white text-sm outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="text-sm text-slate-300 block mb-2">
            Correo empresarial
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="nombre@empresa.com"
            className="w-full px-4 py-3 rounded-lg bg-[#0d1a24] border border-[#1e2a35] text-white text-sm outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="text-sm text-slate-300 block mb-2">
            Servicio de interés
          </label>

          <select
            name="service"
            className="w-full px-4 py-3 rounded-lg bg-[#0d1a24] border border-[#1e2a35] text-white text-sm outline-none focus:border-sky-500"
            value={formData.service}
            onChange={handleChange}
          >
            <option>Selecciona un servicio</option>
            <option>Desarrollo Web</option>
            <option>Marketing Digital</option>
            <option>Diseño UI / UX</option>
            <option>Identidad de Marca</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 transition text-white font-medium py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Enviando..." : "Enviar consulta"}
          <Send size={18} />
        </button>
        <ToastContainer />
      </form>
    
  );
};

export default Formulario;
