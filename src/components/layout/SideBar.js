import React, {useContext} from 'react';
import NewProyect from '../proyects/NewProyect';
import EndProyects from '../proyects/EndProyects';
import ProyectoContext from '../../context/proyects/proyectoContext';
import { motion } from 'framer-motion';

const SideBar = () => {
    const proyectoContext = useContext(ProyectoContext);
    const { panel, panelproyecto, panelterminados, showPanel, mostrarPanel, mostrarTerminados } = proyectoContext;
   
    return (         
        <div className={panel || panelproyecto || panelterminados ?"dashboard_sidebar active" :"dashboard_sidebar"} >
            <div className="brand_logo">
                <h2>TASK</h2><span>app</span>
            </div>
            <div className="name_container">
                <p className="name">Hola! <span>Lucas</span></p>
            </div>
            <div className="btn_container_dashboard">
                <button 
                    onClick={()=> showPanel()}
                    className="btn btn_crear">Crear Proyecto</button>
                               
                <button 
                    onClick={()=> mostrarPanel()}
                    className="btn btn_crear">Mis proyectos</button>

                <button 
                    onClick={()=>mostrarTerminados()}
                    className="btn btn_crear">Proyectos Terminados</button>           
            </div>
        <NewProyect />        
        <EndProyects />
         <button 
            className="btn btn_exit"
        >Cerrar Sesión</button>
        </div>
     );
}
 
export default SideBar;
