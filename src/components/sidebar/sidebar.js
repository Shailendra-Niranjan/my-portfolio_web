import React from "react";
import '../sidebar/sidebar.css';
import logo_pic from '../sidebar/pics/logo_pic.jpg';
import {Link} from 'react-router-dom';

const Sidebar=()=>{

    return(
        <>
            <div className="sidebar_cnt">
                <div className="profile_cnt">
                    <div className="log_cnt">
                        <img className="log"  src={logo_pic}  alt="log"/>
                    </div>
                    <div className="name_cnt">
                        <p className="profile_name">Shailendra Niranjan</p>
                        <p className="name_cnt_info"></p>
                    </div>
                </div>
                {/* btn cnt */}
                
                <div className="sidebar_btn">
                    <button className="sidebar_about_btn">
                        <Link to="/"> About </Link>
                    </button>
                    <button className="sidebar_project_btn">
                        <Link to="/project">   Projects </Link>
                    </button>
                    <button className="sidebar_contact_btn">
                    <Link to="/contact">   Contact </Link>
                    </button>
                    <button className="sidebar_view_btn">
                    <Link to="/view">    View </Link>
                    </button>

                </div>

            </div>
        </>
    );
}

export default Sidebar;