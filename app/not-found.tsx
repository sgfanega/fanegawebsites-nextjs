import { Metadata } from "next";

export const metadata: Metadata = {
  title: '404 Page Not Found'
}

export default function NotFoundPage() {
  return (
    <main className="not-found-page container d-flex flex-column justify-content-center align-items-center" style={{minHeight: "65dvh"}}>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist. Return to <a href="/" className="text-decoration-none link-accent-secondary">Home Page</a>.</p>
    </main>
  )
}