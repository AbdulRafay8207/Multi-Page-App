import type React from "react";

function FooterCard({title,links}:{title: React.ReactNode; links:React.ReactNode}){
    return(
        <div>
        {title}
        {links}
        </div>
    )
}
export default FooterCard