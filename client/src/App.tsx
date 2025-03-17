import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Home from "@/pages/Home";
import Jobs from "@/pages/Jobs";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/jobs" component={Jobs} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
