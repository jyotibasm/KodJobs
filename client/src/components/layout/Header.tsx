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
          <span className="text-2xl font-bold text-primary cursor-pointer">KodJobs</span>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link href="/">
            <span className="hover:text-primary cursor-pointer">Home</span>
          </Link>
          <Link href="/jobs">
            <span className="hover:text-primary cursor-pointer">Jobs</span>
          </Link>
          <Link href="/about">
            <span className="hover:text-primary cursor-pointer">About</span>
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