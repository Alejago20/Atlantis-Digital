import { ArrowLeft, Send, MessageCircle, Mail, Globe, Linkedin, Instagram, Twitter } from "lucide-react";

const Contacto = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#020b10] via-[#041b24] to-[#020b10] flex items-center justify-center px-6 py-16">

      <div className="w-full max-w-md">

        {/* Botón volver */}
        <button className="text-sky-400 mb-6 flex items-center gap-2 hover:text-sky-300 transition">
          <ArrowLeft size={20} />
        </button>

        {/* Título */}
        <div className="text-center mb-10">
          <p className="text-slate-400 text-sm mb-2">Contáctanos</p>

          <h1 className="text-3xl font-bold text-white mb-3">
            Colabora con Atlantis
          </h1>

          <p className="text-slate-400 text-sm leading-relaxed">
            ¿Listo para hacer crecer tu PYME? Cuéntanos sobre tu proyecto y te
            responderemos en menos de 24 horas.
          </p>
        </div>

        {/* Formulario */}
        <form className="space-y-5">

          <div>
            <label className="text-sm text-slate-300 block mb-2">
              Nombre completo
            </label>

            <input
              type="text"
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
              placeholder="nombre@empresa.com"
              className="w-full px-4 py-3 rounded-lg bg-[#0d1a24] border border-[#1e2a35] text-white text-sm outline-none focus:border-sky-500"
            />
          </div>

          <div>
            <label className="text-sm text-slate-300 block mb-2">
              Servicio de interés
            </label>

            <select
              className="w-full px-4 py-3 rounded-lg bg-[#0d1a24] border border-[#1e2a35] text-white text-sm outline-none focus:border-sky-500"
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
            className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 transition text-white font-medium py-3 rounded-lg"
          >
            Enviar consulta
            <Send size={18} />
          </button>

        </form>

        {/* Separador */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-slate-700"></div>

          <span className="text-xs text-slate-400">
            O CONTÁCTANOS DIRECTAMENTE
          </span>

          <div className="flex-1 h-px bg-slate-700"></div>
        </div>

        {/* WhatsApp */}
        <button className="w-full flex items-center justify-between bg-green-600/10 border border-green-500/30 rounded-lg px-4 py-3 hover:bg-green-600/20 transition">

          <div className="flex items-center gap-3">

            <MessageCircle className="text-green-400" size={22} />

            <div className="text-left">
              <p className="text-white text-sm font-medium">
                Chat por WhatsApp
              </p>

              <p className="text-xs text-slate-400">
                Respuesta en menos de 5 minutos
              </p>
            </div>

          </div>

        </button>

        {/* Otras opciones */}
        <div className="grid grid-cols-2 gap-4 mt-4">

          <button className="bg-[#0d1a24] border border-[#1e2a35] rounded-lg py-4 flex flex-col items-center gap-2 hover:border-sky-500 transition">
            <Mail className="text-sky-400" size={22} />
            <span className="text-sm text-white">Correo</span>
          </button>

          <button className="bg-[#0d1a24] border border-[#1e2a35] rounded-lg py-4 flex flex-col items-center gap-2 hover:border-sky-500 transition">
            <Globe className="text-sky-400" size={22} />
            <span className="text-sm text-white">Portafolio</span>
          </button>

        </div>

        {/* Redes sociales */}
        <div className="flex justify-center gap-6 mt-8 text-slate-400">

          <Linkedin size={20} className="hover:text-white cursor-pointer transition" />
          <Instagram size={20} className="hover:text-white cursor-pointer transition" />
          <Twitter size={20} className="hover:text-white cursor-pointer transition" />

        </div>

      </div>

    </section>
  )
}

export default Contacto