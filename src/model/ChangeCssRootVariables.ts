export function ChangeCssRootVariables(theme: string): void {
  const root = document.querySelector(':root') as HTMLElement;

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