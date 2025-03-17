import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth } from "@/lib/auth";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-primary">KodJobs</a>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link href="/">
            <a className="hover:text-primary">Home</a>
          </Link>
          <Link href="/jobs">
            <a className="hover:text-primary">Jobs</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-primary">About</a>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm">Welcome, {user.username}!</span>
              <Button variant="outline" onClick={logout}>Logout</Button>
            </div>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline">Log In</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}