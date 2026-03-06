
import { Monitor, TrendingUp, Palette } from "lucide-react";
const ServicieCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 my-4">
          <div className="p-9 rounded-3xl h-56 md:h-auto bg-[rgba(30,41,59,0.4)]  ">
            <div className="w-14 h-14 bg-sky-900/40 hover:bg-sky-400 rounded-xl flex items-center justify-center">
              <Monitor className="w-7 h-7 text-sky-400 hover:text-white" />
            </div>

            <h1 className="text-white  text-xl font-semibold">
              Desarrollo Web{" "}
            </h1>
            <p className="text-gray-400 mt-3 text-left">
              Sitios personalizados y responsivos diseñados para la conversión y
              para capturar la esencia única de su marca.
            </p>
          </div>

          <div className=" p-9 h-56 md:h-auto bg-[rgba(30,41,59,0.4)] rounded-2xl">
            <div className="w-14 h-14 bg-sky-900/40  hover:bg-sky-400 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-sky-400 hover:text-white" />
            </div>

          <h1 className="text-white  text-xl font-semibold">
              Marketing Digital{" "}
            </h1>
            <p className="text-gray-400 mt-3 text-left">
              Estrategias de marketing digital efectivas para aumentar su visibilidad y atraer a su audiencia objetivo.
            </p>
          </div>
          <div className=" p-9 h-56 md:h-auto bg-[rgba(30,41,59,0.4)] rounded-2xl">
            <div className="w-14 h-14 bg-sky-900/40  hover:bg-sky-400 rounded-xl flex items-center justify-center">
              <Palette className="w-7 h-7 text-sky-400 hover:text-white" />
            </div>
          <h1 className="text-white  text-xl font-semibold">
              Identidad de Marca
            </h1>
            <p className="text-gray-400 mt-3 text-left">
              Identidades visuales únicas que destacan en el panorama digital competitivo y dejan una impresión duradera..
            </p>
          </div>
        </div>
      </div>
 
  )
}

export default ServicieCard
