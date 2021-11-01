import './ScrollUp.css'

const ScrollUp = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    return <div onClick={()=>scrollToTop()} title="scroll up"><i className="fas fa-arrow-circle-up"></i></div>
}
 
export default ScrollUp;