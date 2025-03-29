import NavbarLayout from "../component/navlayout/navlayout";


export default function Home() {
  return (
    <div className="   ">
      <NavbarLayout>
      <p>This is the main content of the home page.</p>
      <h1>Welcome to the Home Page</h1>
      <HomePage />
      </NavbarLayout>
    </div>
  );
}


export function HomePage () {
  return (
    <div>
     <p>This is the main content of the home page.</p>
     <h1>Welcome to the Home Page</h1>
     <p>This is the main content of the home page.</p>
     <h1>Welcome to the Home Page</h1>
     <p>This is the main content of the home page.</p>
     <h1>Welcome to the Home Page</h1>
     <p>This is the main content of the home page.</p>  
    </div>
  )   
}