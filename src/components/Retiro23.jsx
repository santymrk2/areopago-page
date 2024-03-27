import React from "react";
import {Tabs, Tab, Button, Link} from "@nextui-org/react";


export default function Retiro() {
  const tabItems = [
    "Recuerdos",
    "Alabanzas",
    "Devocionales",
    "Cronograma"
  ];

  return (
    <div className="flex w-full flex-col gap-4">
      <Tabs className="justify-center justify-items-center m-2" size="lg" color="primary" aria-label="Dynamic tabs" radius="lg">
        <Tab title="Recuerdos">
          <section className="flex flex-col justify-center">
            <div className='grid justify-center justify-items-center w-6/12 lg:w-4/12 self-center gap-4 relative m-10 p-5 bg-white bg-opacity-25 backdrop-blur-xl	rounded-lg'>
              <h1 className='text-center font-bold text-3xl md:text-3xl'>Mira las fotos <br/>del retiro</h1>
              <a className='group w-30 h-30 sm:w-36 sm:h-36 bg-white my-3 m-2 p-2 flex flex-col justify-between gap-2 text-center text-2xl select-none transition ease-in-out delay-50 rounded-lg hover:bg-gray-100  focus:z-10 focus:ring-2 focus:ring-areo-lightblue focus:text-areo-lightblue' href="https://drive.google.com/drive/folders/1725gWY7uvfIJR8QTGA036LhCBJx5Xj40?usp=sharing">
                <svg className="w-7 m-1 group-hover:fill-areo-lightblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                  <path d="M44.52 28H30.99L17.71 5h11.221c1.429 0 2.749.762 3.464 2L44.52 28zM44.32 31l-5.766 9.998C37.84 42.237 36.519 43 35.089 43H11.71l6.93-12H44.32zM22.21 18.8L9.15 41.42l-5.766-9.99c-.714-1.238-.714-2.762 0-4L15.29 6.81 22.21 18.8z"/>
                </svg>
                <p className='text-black font-bold text-xl m-1 text-right group-hover:text-areo-lightblue'>Nuestras fotos</p>
              </a>
            </div>

            <div className="grid justify-items-center self-center w-6/12 lg:w-4/12 gap-5 relative m-10 p-8 bg-white bg-opacity-25 backdrop-blur-xl	rounded-lg">
              <h1 className="text-center font-bold text-3xl md:text-3xl">Escucha la musica<br/> del retiro</h1>
              <div className='grid sm:grid-cols-2 gap-5'>
                <Link 
                  className='bg-white hover:bg-[#1DB954] grid grid-rows-2 px-1 justify-evenly gap-2 text-center text-2xl select-none transition ease-in-out delay-50 rounded-lg '
                  href="https://open.spotify.com/playlist/00WOvKLAITZLkilqk4RVtp?si=b81eNaT8QfyIhNu5hGhdqQ">
                  <img className="w-6 m-2" src=""></img>
                  <p className='text-black font-bold text-xl text-center self-center m-1 p-2'>Spotify</p>
                </Link>
                <Link
                  className='bg-white hover:bg-[#FF0000] grid grid-rows-2 gap-2 text-center text-2xl select-none transition ease-in-out delay-50 rounded-lg '
                  href="https://music.youtube.com/playlist?list=PLC313ihg4qMI1lr9-Y9SULYYiVIMwhs0w&si=a_kJSATAhh7TTBQt">
                  <img className="w-6 m-2" src=""></img>
                  <p className='text-black font-bold text-xl text-center self-center m-1 p-2'>YT Music</p>
                </Link>
              </div>
            </div>
          </section>
        </Tab>
{/* 
        <Tab title="Alabanzas">
          <section></section>
        </Tab>
*/}
        <Tab title="Devocionales">
          <section className="flex flex-col justify-center">
            <div className='flex flex-col self-center justify-center align-center gap-8 w-full sm:w-10/12 xl:w-11/12 hover:scale-100 transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-sm sm:text-xl'>
                <h1 className='font-bold my-6 text-3xl text-center sm:text-5xl'>Principios revalorizados</h1>
                
                <div className="flex flex-col  gap-3 bg-white bg-opacity-20 rounded-lg p-8 hover:scale-105 transition duration-300 ease-in-out">
                  <h2 className="text-3xl font-bold text-center">Dia 1</h2>
                  <div className='flex flex-col gap-1'>
                    <p className='text-xl text-center'>{"{ Mat 5.1-12 }"}</p>
                    <div className='flex flex-row self-center'>
                      <p className='text-base text-center'>1. ¿Que cualidades son las que Jesús revaloriza?</p>
                    </div>
                    <div className='flex flex-row self-center'>
                      <p className='text-base text-center'>2. Nuestro entorno, ¿como ve esas cualidades?</p>
                    </div>
                    <div className='flex flex-row self-center'>
                      <p className='text-base text-center'>3. ¿Como afectan estas cualidades a mi vida?</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col  gap-3 bg-white bg-opacity-20 rounded-lg p-8 hover:scale-105 transition duration-300 ease-in-out">
                  <h2 className="text-3xl font-bold text-center">Dia 2</h2>
                    <div className='flex flex-col gap-1'>
                      <p className='text-xl text-center'>{"{ Mat 5.21-22; 27-28; 33-34 }"}</p>
                      <div className='flex flex-row self-center'>
                        <p className='text-base text-center'>1. Estas normas que Jesús establecio, ¿sirven para algo?</p>
                      </div>
                      <div className='flex flex-row self-center'>
                        <p className='text-base text-center'>2. En este momento, ¿algo de esto me pasa a mi?</p>
                      </div>
                      <div className='flex flex-row self-center'>
                        <p className='text-base text-center'>3. ¿Que herramientas nos da Jesús para combatir esta forma de pensar?</p>
                      </div>
                    </div>
                </div>
                <div className="flex flex-col  gap-3 bg-white bg-opacity-20 rounded-lg p-8 hover:scale-105 transition duration-300 ease-in-out">
                    <h2 className="text-3xl font-bold text-center">Dia 3</h2>
                    <div className='flex flex-col gap-1'>
                      <p className='text-xl text-center'>{"{ Mat 5.38-48 }"}</p>
                    </div>
                </div>
            </div>
          </section>
        </Tab>

        <Tab title="Cronograma">
          <section className="grid grid-row justify-items-center justify-center lg:grid-cols-2 lg:self-center gap-8 m-4 text-white">
            <div className="w-full sm:w-10/12 hover:scale-105 transition duration-300 ease-in-out bg-white bg-opacity-20 backdrop-blur-xl p-10 m-5 rounded-lg text-md sm:text-xl">
              <div className=' flex flex-row mb-4 items-center content-center justify-left m-0'>
                <h2 className=" text-3xl font-bold">Viernes</h2>
              </div>
              <p>07:00hs - Salida desde ICEP</p>
              <p>12:00hs - Almuerzo en viaje</p>
              <p>13:00hs - Llegada estimada al predio</p>
              <p>14:30hs - Excursión</p>
              <p>18:00hs - Deportes / Libre</p>
              <p>Tiempo para bañarse</p>
              <p>20:00hs - Encuentro</p>
              <p>21:00hs - Cena</p>
            </div>
            <div className="w-full sm:w-10/12 hover:scale-105 transition duration-300 ease-in-out bg-white bg-opacity-20 backdrop-blur-xl p-10 m-5 rounded-lg text-md sm:text-xl">
              <div className='flex flex-row mb-4 items-center content-center justify-left m-0'>
                <h2 className=" text-3xl font-bold">Sábado</h2>
              </div>
              <p>08:00hs - Desayuno</p>
              <p>08:30hs - Devocional</p>
              <p>10:00hs - Excursión</p>
              <p>13:00hs - Almuerzo en el dique</p>
              <p>18:00hs - Deportes / Libre</p>
              <p>Tiempo para bañarse</p>
              <p>20:00hs - Encuentro</p>
              <p>21:00hs - Cena</p>
            </div>
            <div className="w-full sm:w-10/12 hover:scale-105 transition duration-300 ease-in-out bg-white bg-opacity-20 backdrop-blur-xl p-10 m-5 rounded-lg text-md sm:text-xl">
              <div className='flex flex-row mb-4 items-center content-center justify-left m-0'>
                <h2 className=" text-3xl font-bold">Domingo</h2>
              </div>
              <p>08:00hs - Desayuno</p>
              <p>08:30hs - Devocional</p>
              <p>10:00hs - Excursión</p>
              <p>14:00hs - Almuerzo en el predio</p>
              <p>Deportes / Libre</p>
              <p>17:00hs - Excursión</p>
              <p>Tiempo para bañarse</p>
              <p>21:00hs - Cena</p>
              <p>22:00hs - Encuentro & Fogón</p>
            </div>
            <div className="w-full sm:w-10/12 hover:scale-105 transition duration-300 ease-in-out bg-white bg-opacity-20 backdrop-blur-xl p-10 m-5 rounded-lg text-md sm:text-xl">
              <div className='flex flex-row mb-4 items-center content-center justify-left m-0'>
                <h2 className=" text-3xl font-bold">Lunes</h2>
              </div>
              <p>08:00hs - Desayuno</p>
              <p>08:30hs - Devocional conjunto</p>
              <p>10:00hs - Partida</p>
            </div>
          </section>
        </Tab>

      </Tabs>
    </div>
  );
}
