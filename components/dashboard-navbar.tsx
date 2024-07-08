import { SafeUser } from "@/types";
import React from "react";

interface DashboardNavbarProps {
    currentUser?: SafeUser | null;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({currentUser}) => {
    return ( 
        <div>
            {currentUser ? currentUser?.name : 'No user'}
        </div>
     );
}
 
export default DashboardNavbar;