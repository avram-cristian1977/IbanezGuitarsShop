import "./Footer.css"
import { GET_CONTACT } from "../queries/queries";
import { useQuery } from "@apollo/client";

const Footer = () => {

    const { data } = useQuery(GET_CONTACT)

    return <footer>
        {data && data.contact &&
            <div className="contact">
               <div>
               <i className="fas fa-home"></i><span>{data.contact.address}</span>
               </div>
               <div>

                <i className="fas fa-phone"></i><span>{data.contact.mobile}</span>
               </div>

               <div>
                 
                <span><a target="_blank" href={data.contact.facebook}><i className="fab fa-facebook-square"></i></a></span>
                <span><a target="_blank" href={data.contact.linkedIn}><i className="fab fa-linkedin"></i></a></span>
                <span><a target="_blank" href={data.contact.github}><i className="fab fa-github"></i></a></span>
               </div>
                <span><a target="_blank" href={data.contact.website}>{data.contact.website}</a></span>
                
            </div>
        }
    </footer>;
}

export default Footer;