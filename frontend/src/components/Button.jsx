

function Button({ title, buttonText, onClick }) {
  return (
    <div className="button">
      <div className="mt-20 lg:mt-12 ms-8">
      <h2 className="mt-4 text-xl text-black lg:text-4xl ">{title}</h2>
      <button className="text-sm text-black">{buttonText}</button>
    </div>
    
      
    </div>
  );
}

export default Button;