// import { CustomerAdd } from "./components/CustomerAdd";
// import { CustomerView } from "./components/CustomerView";
import { AppQuery } from "./components/Raect Query/AppQuery";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppQuery />
    </QueryClientProvider>
  );
}

export default App;
