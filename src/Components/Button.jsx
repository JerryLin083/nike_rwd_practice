const Button = ({label, iconURL, backgroundColor, borderColor, textColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full 
      ${backgroundColor? "white" : "bg-coral-red"}  
      ${textColor? "text-slate-gray": "text-white"} 
      ${borderColor? "border-slate-gray" : "border-coral-red"}
      ${fullWidth && "w-full"}`
      }>
        {label}
        {iconURL && <img 
        src={iconURL} 
        alt="iconURL" 
        className="ml-2 rounded-full w-5 h-5"
        />}
    </button>
  )
}

export default Button