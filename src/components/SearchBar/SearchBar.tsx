// import {type FormEvent} from 'react';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (formData: FormData) => {
   if (formData.get("query") === "") {
      toast.error('Please enter your search query.');
      return;
    }
     const query = formData.get("query") as string;
    onSubmit(query);
  
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <a className={css.link} 
        href="https://www.themoviedb.org/3/" 
        target="_blank" 
        rel="noopener noreferrer">
          Powered by TMDB
        </a>
        <form className={css.form} action={handleSubmit}>
        <input className={css.input} 
           type="text" name="query" 
           autoComplete="off" 
           placeholder="Search movies..." 
           autoFocus />
          <button className={css.button} 
           type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}