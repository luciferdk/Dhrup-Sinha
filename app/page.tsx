import NavbarLayout from "../component/navlayout/navlayout";


export default function Home() {
  return (
    <div className="   ">
      <NavbarLayout>
      <p>{`"Hello"`}</p>
      <p>{`"World"`}</p>
      
      <HomePage />
      </NavbarLayout>
    </div>
  );
}


export function HomePage () {
  return (
    <div>
     <p>{`"Hello Home Page"`}</p>

    
    </div>
  )   
}