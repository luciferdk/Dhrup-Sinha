import NavbarLayout from "../component/navlayout/navlayout";


export default function Home() {
  return (
    <div className="flex  min-h-screen ">
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
      title: "Home Page",
  description: "This is the home page of the website.",
  keywords: ["home", "welcome", "main"], title: "Home Page",
  description: "This is the home page of the website.",
  keywords: ["home", "welcome", "main"], 
    </div>
  )   
}