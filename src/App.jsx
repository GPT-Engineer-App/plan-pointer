import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, List, Tag, Filter } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import Tasks from "./pages/Tasks.jsx"; // Import the Tasks page
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Tasks",
    to: "/tasks",
    icon: <List className="h-4 w-4" />,
  },
  {
    title: "Projects",
    to: "/projects",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Labels",
    to: "/labels",
    icon: <Tag className="h-4 w-4" />,
  },
  {
    title: "Filters",
    to: "/filters",
    icon: <Filter className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="tasks" element={<Tasks />} />
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;