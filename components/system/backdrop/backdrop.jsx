export default function Backdrop({children,className=""}) {
  return (
    <div className={`absolute z-50 top-0 left-0 w-full h-screen backdrop-blur-sm  bg-black bg-opacity-80  flex justify-center items-center ${className}`}>        
        {children}
    </div>
  )
}
