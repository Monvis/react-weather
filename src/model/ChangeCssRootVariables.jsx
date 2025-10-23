export function ChangeCssRootVariables(theme) { // Принимаем theme как аргумент
  const root = document.querySelector(':root');

  const components = [
    'body-background',
    'components-background',
    'card-background',
    'card-box-shadow',
    'text-color'
  ];

  components.forEach((elem) => {
    root.style.setProperty(
      `--${elem}-default`,
      `var(--${elem}-${theme})`
    );
  });
}