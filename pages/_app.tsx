import type { AppProps, AppContext } from 'next/app';
import { ThemeProvider } from 'next-themes';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '../styles/colors.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
