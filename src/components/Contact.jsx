const Contact = () =>{
    return(
        <div className="bg-content flex flex-col" id="Contact"> 
          <h3 className="text-white underline text-4xl text-yellow-500 font-bold flex justify-center py-5 px-5">
            Contact
          </h3>
          <div className="flex flex-col items-center text-white ">
            <div className="m-3">
            <p className="ml-6">If you want to discuss more in detail, please contact me.</p>
            </div>
            
            <p className="py-2"><span className="font-bold">📧Email:</span>ragul.ramesh2409@gmail.com</p>  
            <p className="py-2"><span className="font-bold">📱Mobile:</span> +91 8610079266</p>
          </div>
        </div>
    )
}

export default Contact;