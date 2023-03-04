const getTranslations = async (lang) => {
    const response = await fetch(`languages/${lang}.json`);
    const data = await response.json();
    return data;
}

const translatePage = async (language) => {
    const localisation = await getTranslations(language);

    document.querySelectorAll('[localization-key]').forEach((element) => {
        const key = element.getAttribute('localization-key');
        const translation = localisation[key];
        element.innerText = translation;
    });
};

const buttons = document.querySelectorAll('.language-switch');
buttons.forEach(btn => {
    btn.addEventListener('click', () => translatePage(btn.getAttribute('data-lang')));
});
