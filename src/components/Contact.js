const Contact = () => {
    return(
        <div className="flex flex-col gap-4 w-[300px] mx-auto justify-center">
            <h1 className="p-2 w-full text-center">Contact Us</h1>
            <form className="flex w-full flex-col gap-2 items-start">
                <input type="text" className="p-2 border border-slate-500 rounded w-full" placeholder="name"/>
                <input type="text" className="p-2 border border-slate-500 rounded w-full" placeholder="message"/>
                <button className="p-2 border w-full border-slate-500 rounded text-[14px] bg-sky-600 hover:bg-sky-500 text-white transition-all ease-in-out duration-300">Submit</button>
            </form>
        </div>
    )
}

export default Contact;