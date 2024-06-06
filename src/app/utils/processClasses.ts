export const processClasses = (classes: string, useContainerQuery?: boolean) => {
  if (!useContainerQuery) {
    return classes;
  }

  return classes
    .split(' ')
    .map((className) => {
      if (className.startsWith('xs:') || className.startsWith('sm:') || className.startsWith('md:') || className.startsWith('lg:') || className.startsWith('xl:')) {
        return '@' + className;
      }

      return className;
    })
    .join(' ');
};