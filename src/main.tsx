import ReactDOM  from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';



const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')as HTMLDivElement).render(
    <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools/>
  </QueryClientProvider>
  
)
