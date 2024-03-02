import React from 'react';
import '../stylespages/contenidoblog.css';
import { Link } from 'react-router-dom';

// React Router DOM (Window.open);
const handleClick = () => {
    window.open('https://www.hyundaicolombia.co/articulo/ocho-mitos-de-los-carros-electricos/');
};
const handleClick2 = () => {
    window.open('https://www.nissanusa.com/experience-nissan/news-and-events/evolution-from-skyline-to-gt-r.html');
};
const handleClick3 = () => {
    window.open('https://thekoreancarblog.com/2024/02/23/kia-ev3-interior-leaked-new-retro-steering-ev9-styling/');
};
const handleClick4 = () => {
    window.open('https://gmauthority.com/blog/2024/02/here-may-be-why-your-chevy-malibu-displays-a-shift-to-park-message/');
};
  
function ContenidoBlog() {
  return (
    <section className='seccion-principal-blog'>
      <h2 className='titulo-blog-principal'>Todos los articulos</h2>
      <div className='contenedor-articulo-blog'>
        <div className='contenedor-imagen-titulo-y-descripcion-blog'>
            <div className='contenedor-imagen'>
                <img src='Chevrolet-Malibu.jpg' alt='Foto del articulo' className='estilos-imagen-articulo-blog' />
            </div>
            <div className='contenedor-titulo-descripcion'>
                <h1 className='titulo-articulo'>Esta puede ser la razon por la que su Chevrolet Malibu muestra un mensaje de cambio a estacionamiento.</h1>
                <p className='descripcion-fecha-articulo'>26 de Febrero 2024 - Tip y trucos.</p>
                <p className='descripcion-articulo-blog'>¿Quieres crear expectación en torno a tu próximo producto o servicio? No busques más y crea una página de destino. No sólo sirve como anticipo de lo que está por venir, sino que también te permite captar clientes potenciales valiosos antes de tu lanzamiento. Cada vez encontramos más autos sostenibles rodando por la ciudad y la carretera. La preocupación por cuidar el medio ambiente y la modernización de estos vehículos, han hecho de la conducción sostenible una realidad. Sin embargo, y a pesar de que las ventas de automóviles 100% eléctricos han aumentado más de un 240% del 2020 al 2021 y en lo que va del año ha aumentado un 83% comparado con el mismo periodo del 2021, siguen existiendo mitos en torno a ellos. ¿Son lentos? ¿Reaccionan ante el agua? ¿Los modelos son feos? Estas son algunas de las leyendas que circulan por ahí. En este artículo, exploraremos la... <Link to=''><span className='estilo-leer-mas' onClick={handleClick}>(Leer más...)</span></Link></p>
            </div>
        </div>
        <p className='raya-abajo-blog'></p>
      </div>
      <div className='contenedor-articulo-blog'>
        <div className='contenedor-imagen-titulo-y-descripcion-blog'>
            <div className='contenedor-imagen'>
                <img src='Kia Ev3.webp' alt='Foto del articulo' className='estilos-imagen-articulo-blog' />
            </div>
            <div className='contenedor-titulo-descripcion'>
                <h1 className='titulo-articulo'>Novedades en el motor de Chevrolet Onix</h1>
                <p className='descripcion-fecha-articulo'>10 de Enero 2022 - Tip y trucos.</p>
                <p className='descripcion-articulo-blog'>¿Tienes que sacrificar tu cartera? Ya no. Cada vez hay opciones más asequibles en el mercado para la conducción eléctrica.

Además, del ahorro de energía (parte de esa energía se regenera mientras conduces), los vehículos eléctricos tienen un 60% menos de piezas, por lo que hay menos elementos sometidos a desgaste y mantenerlos es más barato. Así, los frenos se desgastan menos gracias a tecnologías como la frenada regenerativa. ¿Quieres crear expectación en torno a tu próximo producto o servicio? No busques más y crea una página de destino. No sólo sirve como anticipo de lo que está por venir, sino que también te permite captar clientes potenciales valiosos antes de tu lanzamiento. En este artículo, exploraremos la... <span className='estilo-leer-mas' onClick={handleClick2}>(Leer más...)</span></p>
            </div>
        </div>
        <p className='raya-abajo-blog'></p>
      </div>
      <div className='contenedor-articulo-blog'>
        <div className='contenedor-imagen-titulo-y-descripcion-blog'>
            <div className='contenedor-imagen'>
                <img src='Nissan-Skyline.webp' alt='Foto del articulo' className='estilos-imagen-articulo-blog' />
            </div>
            <div className='contenedor-titulo-descripcion'>
                <h1 className='titulo-articulo'>Alternador eléctrico mas eficiente en los Hyundai ix35</h1>
                <p className='descripcion-fecha-articulo'>10 de Junio 2023 - Tip y trucos.</p>
                <p className='descripcion-articulo-blog'>Cada vez son más las opciones que encontramos en el mercado para automóviles eléctricos. Y continúa creciendo. Un ejemplo lo vemos en Hyundai, que es la única marca con las 5 tecnologías electrificadas y que cuenta con la oferta de movilidad sostenible más grande del mundo (eléctricos, híbridos y de pila de hidrógeno). No importa como seas. Si lo que te preocupa es el medio ambiente, hay un vehículo ECO para ti. ¿Quieres crear expectación en torno a tu próximo producto o servicio? No busques más y crea una página de destino. No sólo sirve como anticipo de lo que está por venir, sino que también te permite captar clientes potenciales valiosos antes de tu lanzamiento. En este artículo, exploraremos la... <span className='estilo-leer-mas' onClick={handleClick3}>(Leer más...)</span></p>
            </div>
        </div>
        <p className='raya-abajo-blog'></p>
      </div>
      <div className='contenedor-articulo-blog'>
        <div className='contenedor-imagen-titulo-y-descripcion-blog'>
            <div className='contenedor-imagen'>
                <img src='8 mitos de la kona electrica.webp' alt='Foto del articulo' className='estilos-imagen-articulo-blog' />
            </div>
            <div className='contenedor-titulo-descripcion'>
                <h1 className='titulo-articulo'>Sensores infrajos en los modelos Kia Picantos</h1>
                <p className='descripcion-fecha-articulo'>30 de Septiembre 2023 - Tip y trucos.</p>
                <p className='descripcion-articulo-blog'>El Nissan Skyline fue producido originalmente por Prince Motor Company en 1957, y luego por Nissan (convirtiéndose en el 'Nissan Skyline') después de que las dos compañías se fusionaran en 1966. El Skyline estaba disponible como un sedán de cuatro puertas o una camioneta de cinco puertas, y contaba con un motor GA-30 de 1.5L. No fue hasta 1964 que se introdujo el primer GT Skyline de carreras, todavía bajo la bandera de Prince Motors. La introducción del GT Skyline marcó el cambio del Skyline de sedán a auto de carreras. Skyline finalmente se convirtió en un Nissan en 1969, cuando se presentó el primer Skyline GT-R de alto rendimiento en el Salón del Automóvil de Tokio. Todavía era un sedán, pero ahora contaba con un motor de seis cilindros en línea y (impresionante para la época) 160 caballos de fuerza. La primera generación del Nissan Skyline estuvo disponible entre 1969 y 1972. En este artículo, exploraremos la... <span className='estilo-leer-mas' onClick={handleClick4}>(Leer más...)</span></p>
            </div>
        </div>
        <p className='raya-abajo-blog'></p>
      </div>
      <div className='contenedor-articulo-blog'>
        <div className='contenedor-imagen-titulo-y-descripcion-blog'>
            <div className='contenedor-imagen'>
                <img src='Chevrolet captiva.webp' alt='Foto del articulo' className='estilos-imagen-articulo-blog' />
            </div>
            <div className='contenedor-titulo-descripcion'>
                <h1 className='titulo-articulo'>Inyectores pulverizadores en el nuevo Chevrolet Captiva Sport</h1>
                <p className='descripcion-fecha-articulo'>7 de Enero 2024 - Tip y trucos.</p>
                <p className='descripcion-articulo-blog'>Por lo general, el Chevy Malibu solo generará un código de diagnóstico de problemas o DTC si también está sujeto al problema de falla en el arranque. En este caso, el DTC será B000A, "Interruptor de estacionamiento - Posición de la palanca de cambios no plausible". Independientemente de si el DTC está presente, el mensaje "Cambiar a estacionamiento" debe resultar en una inspección del conjunto de la palanca de cambios por parte de los técnicos del concesionario. ¿Quieres crear expectación en torno a tu próximo producto o servicio? No busques más y crea una página de destino. No sólo sirve como anticipo de lo que está por venir, sino que también te permite captar clientes potenciales valiosos antes de tu lanzamiento. En este artículo, exploraremos la... <span className='estilo-leer-mas' onClick={handleClick2}>(Leer más...)</span></p>
            </div>
        </div>
        <p className='raya-abajo-blog'></p>
      </div>
      <div className='contenedor-articulo-blog'>
        <div className='contenedor-imagen-titulo-y-descripcion-blog'>
            <div className='contenedor-imagen'>
                <img src='Nissan-Sentra.jpg' alt='Foto del articulo' className='estilos-imagen-articulo-blog' />
            </div>
            <div className='contenedor-titulo-descripcion'>
                <h1 className='titulo-articulo'>Nuevo motor brindado contra vibraciones en el Nissan Sedan</h1>
                <p className='descripcion-fecha-articulo'>19 de Marzo 2021 - Tip y trucos.</p>
                <p className='descripcion-articulo-blog'>El EV3 se inspira en el diseño de su hermano mayor, el Kia EV9, aunque en una forma más compacta. A pesar del camuflaje, los prototipos parecían casi listos para la producción, luciendo lo que parecen ser ruedas de producción. Este parecido sugiere que Kia no solo está expandiendo su línea de vehículos eléctricos (EV), sino que también garantiza un lenguaje de diseño cohesivo en toda la gama. ¿Quieres crear expectación en torno a tu próximo producto o servicio? No busques más y crea una página de destino. No sólo sirve como anticipo de lo que está por venir, sino que también te permite captar clientes potenciales valiosos antes de tu lanzamiento. En este artículo, exploraremos la... <span className='estilo-leer-mas' onClick={handleClick}>(Leer más...)</span></p>
            </div>
        </div>
        <p className='raya-abajo-blog'></p>
      </div>
    </section>
  )
}

export default ContenidoBlog;
