export default function ToggleTheme({ }) {
    const toggleDark = () => {
        const theme = localStorage.getItem("color-scheme") === "dark" ? "light" : "dark";
        localStorage.setItem("color-scheme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    };

    return (
        <>
            <button onClick={toggleDark} type="button" class="text-muted dark:text-zinc-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-white dark:focus:ring-neutral-900 rounded-lg text-sm p-2.5 inline-flex items-center" aria-label="Changer entre un thème sombre ou lumineux">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M116 32V16a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0m80 96a68 68 0 1 1-68-68a68.07 68.07 0 0 1 68 68m-24 0a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44M51.51 68.49a12 12 0 1 0 17-17l-12-12a12 12 0 0 0-17 17Zm0 119l-12 12a12 12 0 0 0 17 17l12-12a12 12 0 1 0-17-17M196 72a12 12 0 0 0 8.49-3.51l12-12a12 12 0 0 0-17-17l-12 12A12 12 0 0 0 196 72m8.49 115.51a12 12 0 0 0-17 17l12 12a12 12 0 0 0 17-17ZM44 128a12 12 0 0 0-12-12H16a12 12 0 0 0 0 24h16a12 12 0 0 0 12-12m84 84a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12m112-96h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24" /></svg>
            </button>
        </>
    );
}