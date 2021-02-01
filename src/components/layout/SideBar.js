import React, {useContext} from 'react';
import ProyectList from '../proyects/ProyectList';
import NewProyect from '../proyects/NewProyect';
import ProyectoContext from '../../context/proyects/proyectoContext';

const SideBar = () => {
    const proyectoContext = useContext(ProyectoContext);
    const { showPanel } = proyectoContext;
   
    return ( 
        
        <div className="dashboard_sidebar">
            <div className="brand_logo">
                <h2>TASK</h2><span>app</span>
            </div>
            <div className="name_container">
                <p className="name">Hola! <span>Lucas</span></p>
            </div>
            <div className="btn_container_dashboard">
            <button 
                onClick={()=> showPanel()}
                className="btn btn_crear"
            >Crear Proyecto</button>
           
            </div>
         <NewProyect />   
         <ProyectList />
         <button 
            className="btn btn_exit"
        >Cerrar Sesión</button>
        </div>
     );
}
 
export default SideBar;
